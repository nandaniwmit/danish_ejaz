import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/pharmacyData';
import { GalleryItem } from '../types';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import { BUSINESS_CONFIG } from '../config/siteConfig';
import {
  X,
  ZoomIn,
  Filter,
  Image as ImageIcon,
  MapPin,
  MessageCircle
} from 'lucide-react';

interface GalleryProps {
  onOpenWhatsAppModal: (medicine?: string) => void;
}

export default function Gallery({ onOpenWhatsAppModal }: GalleryProps) {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'store' | 'shelves' | 'products' | 'equipment'>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const filterOptions: { label: string; value: 'all' | 'store' | 'shelves' | 'products' | 'equipment' }[] = [
    { label: 'All Photos', value: 'all' },
    { label: 'Store & Front View', value: 'store' },
    { label: 'Medicine Shelves', value: 'shelves' },
    { label: 'Healthcare Products', value: 'products' },
    { label: 'Medical Equipment', value: 'equipment' },
  ];

  const filteredItems = selectedFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedFilter);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors">
      <SEOHead
        title="Store Gallery & Facilities"
        description="Explore the gallery of Danish Ejaz Pharmacy in Aurangabad, Bihar. Highlighting organized pharmaceutical racks, cold storage units, diagnostic equipment displays, and our retail front."
        canonicalPath="/gallery"
      />

      {/* Page Header */}
      <div className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Pharmacy Gallery' }]} />
          <div className="mt-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300 border border-emerald-500/30 mb-3">
              Visual Tour & Shelves
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Store Gallery & Facility Overview
            </h1>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              Take a closer look at our clean dispensing counters, organized medicine bays, cold-storage
              safeguards, and verified diagnostic medical equipment in Aurangabad, Bihar.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setSelectedFilter(opt.value)}
                  className={`rounded-xl px-4 py-2 text-xs font-semibold transition cursor-pointer min-h-[38px] ${
                    selectedFilter === opt.value
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <div className="text-xs text-slate-500 dark:text-slate-400">
              Showing <strong>{filteredItems.length}</strong> photo{filteredItems.length === 1 ? '' : 's'}
            </div>
          </div>

          {/* Photo Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200/80 dark:bg-slate-800 dark:border-slate-700 transition hover:shadow-xl hover:-translate-y-1"
              >
                <div className="aspect-4/3 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Overlay hover prompt */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-1">
                    <ZoomIn className="h-4 w-4" />
                    <span>Click to Zoom</span>
                  </div>
                  <h3 className="font-bold text-sm leading-snug">{item.title}</h3>
                </div>

                {/* Bottom caption */}
                <div className="p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Store Location Notice */}
          <div className="mt-14 rounded-2xl bg-white dark:bg-slate-800 p-6 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                  Visit Our Aurangabad Store in Person
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {BUSINESS_CONFIG.address.fullAddress} • Near Bus Stand Area
                </p>
              </div>
            </div>
            <a
              href={BUSINESS_CONFIG.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-700 transition"
            >
              <span>Get Driving Directions</span>
            </a>
          </div>
        </div>
      </section>

      {/* POPUP LIGHTBOX ZOOM MODAL */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl border border-slate-800">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-10 rounded-full bg-black/60 p-2 text-white hover:bg-black/80 transition"
              aria-label="Close Lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Lightbox Large Image */}
            <div className="max-h-[65vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeModalItem.imageUrl}
                alt={activeModalItem.title}
                className="max-h-[65vh] w-full object-contain"
              />
            </div>

            {/* Modal Caption & Actions */}
            <div className="p-6 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="inline-block rounded-md bg-emerald-950 px-2 py-0.5 text-[10px] font-bold text-emerald-400 mb-1 uppercase">
                  {activeModalItem.category}
                </span>
                <h3 className="text-lg font-bold">{activeModalItem.title}</h3>
                <p className="text-xs text-slate-400 mt-1 max-w-xl">
                  {activeModalItem.caption}
                </p>
              </div>

              <button
                onClick={() => {
                  setActiveModalItem(null);
                  onOpenWhatsAppModal(activeModalItem.title);
                }}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-emerald-500 transition shrink-0"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Inquire on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
