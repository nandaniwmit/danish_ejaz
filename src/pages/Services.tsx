import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/pharmacyData';
import { BUSINESS_CONFIG } from '../config/siteConfig';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import MedicineStockChecker from '../components/MedicineStockChecker';
import {
  FileText,
  ShieldCheck,
  HeartPulse,
  Activity,
  Baby,
  Zap,
  Stethoscope,
  Truck,
  Sparkles,
  Phone,
  MessageCircle,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface ServicesProps {
  onOpenWhatsAppModal: (medicine?: string) => void;
}

export default function Services({ onOpenWhatsAppModal }: ServicesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Prescription Medicines',
    'OTC Medicines',
    'Medicine Categories',
    'Health Devices',
    'Medical Equipment',
    'Supplements',
    'Baby Care',
    'Personal Care',
    'Home Care'
  ];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText': return <FileText className="h-6 w-6" />;
      case 'ShieldCheck': return <ShieldCheck className="h-6 w-6" />;
      case 'HeartPulse': return <HeartPulse className="h-6 w-6" />;
      case 'Activity': return <Activity className="h-6 w-6" />;
      case 'Baby': return <Baby className="h-6 w-6" />;
      case 'Zap': return <Zap className="h-6 w-6" />;
      case 'Stethoscope': return <Stethoscope className="h-6 w-6" />;
      case 'Truck': return <Truck className="h-6 w-6" />;
      case 'Sparkles':
      default: return <Sparkles className="h-6 w-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors">
      <SEOHead
        title="Healthcare Services & Medicine Stock"
        description="Comprehensive healthcare services by Danish Ejaz Pharmacy in Aurangabad, Bihar. Prescription dispensing, OTC medicines, health diagnostic devices, baby care, surgical aids, and live inventory checker."
        canonicalPath="/services"
      />

      {/* Page Header */}
      <div className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Services & Stock' }]} />
          <div className="mt-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300 border border-emerald-500/30 mb-3">
              Specialized Care Departments
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Pharmacy Services & Live Stock Checker
            </h1>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              Explore our category-wise healthcare offerings and check real-time medicine availability
              in our Aurangabad inventory before heading out.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Medicine Stock Checker Anchor */}
      <section className="py-12 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MedicineStockChecker onOrderMedicine={(med) => onOpenWhatsAppModal(med)} />
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Departmental Offerings
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                Complete Healthcare Services
              </h2>
            </div>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2 pb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all cursor-pointer min-h-[38px] ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Complete Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="flex flex-col justify-between rounded-2xl bg-white p-7 shadow-sm border border-slate-200/90 dark:bg-slate-900 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                      {service.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Benefits checklist */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                      Key Highlights:
                    </p>
                    {service.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-400">
                    {service.timing}
                  </span>
                  <button
                    onClick={() => onOpenWhatsAppModal(service.title)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3.5 py-2 text-xs font-bold text-white shadow-xs hover:bg-emerald-700 transition cursor-pointer min-h-[38px]"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    <span>Inquire / Order</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Assistance Banner */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Looking for a Special Injection, Inhaler or Vaccine?
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Speak directly with pharmacist Danish Ejaz to verify distributor allocation or cold-storage availability.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:+91${BUSINESS_CONFIG.callNumber}`}
              className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-sm font-bold text-white hover:bg-sky-500 transition min-h-[44px]"
            >
              <Phone className="h-4 w-4" />
              <span>Call +91 {BUSINESS_CONFIG.whatsappFormatted}</span>
            </a>
            <button
              onClick={() => onOpenWhatsAppModal()}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition cursor-pointer min-h-[44px]"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Request</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
