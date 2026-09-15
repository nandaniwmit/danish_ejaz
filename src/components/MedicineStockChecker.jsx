import React, { useState, useMemo } from 'react';
import medicineData from '../data/medicineStock.json';
import { Search, CheckCircle2, AlertTriangle, XCircle, ShoppingBag, Filter, RefreshCw, Pill } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/siteConfig';

export default function MedicineStockChecker({ onOrderMedicine }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set(medicineData.map((item) => item.category));
    return ['All', ...Array.from(set)];
  }, []);

  // Filter inventory
  const filteredMedicines = useMemo(() => {
    return medicineData.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.genericName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;

      const matchesStatus =
        selectedStatus === 'All' || item.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchTerm, selectedCategory, selectedStatus]);

  // Inventory stats summary
  const stats = useMemo(() => {
    return {
      total: medicineData.length,
      available: medicineData.filter((i) => i.status === 'Available').length,
      limited: medicineData.filter((i) => i.status === 'Limited Stock').length,
      out: medicineData.filter((i) => i.status === 'Out of Stock').length,
    };
  }, []);

  const handleOrder = (medicine) => {
    if (onOrderMedicine) {
      onOrderMedicine(`${medicine.name} (${medicine.brand}) - MRP ₹${medicine.mrp}`);
    } else {
      const text = encodeURIComponent(
        `Hello Danish Ejaz Pharmacy, I want to check availability and order: ${medicine.name} (${medicine.brand}) - MRP ₹${medicine.mrp}`
      );
      window.open(`https://wa.me/91${BUSINESS_CONFIG.whatsappNumber}?text=${text}`, '_blank');
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            Available
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
            <AlertTriangle className="h-3.5 w-3.5 text-amber-600" />
            Limited Stock
          </span>
        );
      case 'Out of Stock':
      default:
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
            <XCircle className="h-3.5 w-3.5 text-rose-600" />
            Out of Stock
          </span>
        );
    }
  };

  return (
    <div id="medicine-stock-checker" className="w-full rounded-2xl border border-slate-200 bg-white p-5 md:p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900 transition">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-100 pb-6 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-100/70 px-3 py-1 text-xs font-bold text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300 mb-2">
            <Pill className="h-3.5 w-3.5" />
            <span>LIVE PHARMACY INVENTORY</span>
          </div>
          <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">
            Medicine Stock & Availability Checker
          </h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Search genuine medicines, health equipment, and check real-time stock at our Aurangabad store before visiting.
          </p>
        </div>

        {/* Quick stat chips */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
          <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
            Total Catalog: <strong>{stats.total}</strong>
          </span>
          <span className="rounded-lg bg-emerald-50 px-3 py-1.5 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
            In Stock: <strong>{stats.available}</strong>
          </span>
          <span className="rounded-lg bg-amber-50 px-3 py-1.5 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300">
            Low Stock: <strong>{stats.limited}</strong>
          </span>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-12">
        {/* Search input */}
        <div className="relative md:col-span-6">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search medicine name, generic salt (e.g. Paracetamol), or brand (Cipla, Sun Pharma)..."
            className="w-full rounded-xl border border-slate-300 bg-slate-50/50 pl-10 pr-4 py-2.5 text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-hidden dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category filter */}
        <div className="md:col-span-3">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3 py-2.5 text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-hidden dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                Category: {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Status filter */}
        <div className="md:col-span-3">
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3 py-2.5 text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-hidden dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          >
            <option value="All">All Statuses</option>
            <option value="Available">Available Only</option>
            <option value="Limited Stock">Limited Stock Only</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>
      </div>

      {/* Results Table / Grid */}
      <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
        <table className="w-full text-left text-sm text-slate-600 dark:text-slate-300">
          <thead className="bg-slate-100/80 text-xs uppercase text-slate-700 dark:bg-slate-800 dark:text-slate-300 font-bold tracking-wider">
            <tr>
              <th className="px-4 py-3.5">Medicine & Generic Details</th>
              <th className="px-4 py-3.5">Brand / Manufacturer</th>
              <th className="px-4 py-3.5">MRP (₹)</th>
              <th className="px-4 py-3.5">Qty</th>
              <th className="px-4 py-3.5">Expiry</th>
              <th className="px-4 py-3.5">Availability</th>
              <th className="px-4 py-3.5 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            {filteredMedicines.length > 0 ? (
              filteredMedicines.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <td className="px-4 py-3.5">
                    <div className="font-semibold text-slate-900 dark:text-white">
                      {item.name}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {item.genericName}
                    </div>
                    <div className="mt-1 flex items-center gap-1.5 text-[11px]">
                      <span className="rounded-xs bg-slate-100 px-1.5 py-0.5 font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                        {item.dosageForm}
                      </span>
                      {item.prescriptionRequired && (
                        <span className="rounded-xs bg-rose-50 px-1.5 py-0.5 font-medium text-rose-600 dark:bg-rose-950/40 dark:text-rose-300">
                          Rx Required
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3.5 font-medium text-slate-700 dark:text-slate-300">
                    {item.brand}
                  </td>
                  <td className="px-4 py-3.5 font-bold text-slate-900 dark:text-white whitespace-nowrap">
                    ₹{item.mrp.toFixed(2)}
                  </td>
                  <td className="px-4 py-3.5 text-slate-700 dark:text-slate-300 whitespace-nowrap">
                    {item.availableQuantity > 0 ? `${item.availableQuantity} in stock` : '0'}
                  </td>
                  <td className="px-4 py-3.5 text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">
                    {item.expiry}
                  </td>
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    {getStatusBadge(item.status)}
                  </td>
                  <td className="px-4 py-3.5 text-right whitespace-nowrap">
                    <button
                      onClick={() => handleOrder(item)}
                      disabled={item.status === 'Out of Stock'}
                      className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold shadow-xs transition cursor-pointer min-h-[38px] ${
                        item.status === 'Out of Stock'
                          ? 'bg-slate-100 text-slate-400 cursor-not-allowed dark:bg-slate-800 dark:text-slate-600'
                          : 'bg-emerald-600 text-white hover:bg-emerald-700 active:scale-95 shadow-emerald-600/20'
                      }`}
                    >
                      <ShoppingBag className="h-3.5 w-3.5" />
                      <span>{item.status === 'Out of Stock' ? 'Notify' : 'Order'}</span>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="px-4 py-10 text-center text-slate-500 dark:text-slate-400">
                  <p className="font-semibold text-base text-slate-700 dark:text-slate-200">
                    No matching medicines found for "{searchTerm}".
                  </p>
                  <p className="mt-1 text-xs">
                    Need a medicine not listed? Send your prescription directly on WhatsApp to check offline warehouse stock.
                  </p>
                  <button
                    onClick={() => {
                      const text = encodeURIComponent(
                        `Hello Danish Ejaz Pharmacy, I am searching for "${searchTerm}". Can you please check if it is in stock?`
                      );
                      window.open(`https://wa.me/91${BUSINESS_CONFIG.whatsappNumber}?text=${text}`, '_blank');
                    }}
                    className="mt-3 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700"
                  >
                    Inquire on WhatsApp (+91 {BUSINESS_CONFIG.whatsappNumber})
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer note */}
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2">
        <span>* Prices and stock levels are synchronized with Danish Ejaz Pharmacy dispensary inventory.</span>
        <span className="text-emerald-700 dark:text-emerald-400 font-medium">
          Schedule H/H1 medicines strictly dispensed on doctor prescription.
        </span>
      </div>
    </div>
  );
}

export { MedicineStockChecker };
