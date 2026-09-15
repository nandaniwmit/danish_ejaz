import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_CONFIG } from '../config/siteConfig';
import { SERVICES_DATA, REVIEWS_DATA, FAQS_DATA, HEALTH_TIPS_DATA } from '../data/pharmacyData';
import medicineStock from '../data/medicineStock.json';
import { SEOHead } from '../components/SEOHead';
import {
  Phone,
  MessageCircle,
  MapPin,
  ShieldCheck,
  Award,
  Truck,
  Clock,
  ArrowRight,
  Star,
  CheckCircle2,
  HeartPulse,
  Sparkles,
  Send,
  Pill,
  Search,
  ExternalLink
} from 'lucide-react';

interface HomeProps {
  onOpenWhatsAppModal: (medicine?: string) => void;
}

export default function Home({ onOpenWhatsAppModal }: HomeProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [quickSearch, setQuickSearch] = useState('');

  const featuredServices = SERVICES_DATA.slice(0, 6);
  const featuredReviews = REVIEWS_DATA.slice(0, 3);
  const featuredFaqs = FAQS_DATA.slice(0, 4);
  const featuredProducts = medicineStock.slice(0, 4);
  const featuredTips = HEALTH_TIPS_DATA.slice(0, 2);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Home"
        description="Danish Ejaz Pharmacy in Aurangabad, Bihar. Your trusted medical store providing genuine medicines, healthcare devices, surgical supplies, and rapid WhatsApp home delivery."
        canonicalPath="/"
      />

      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-900 text-white py-16 sm:py-24 lg:py-28">
        {/* Background Overlay Healthcare Image */}
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80"
            alt="Pharmacy Healthcare Background"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 bg-radial from-emerald-900/40 via-transparent to-transparent"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-1.5 text-xs font-semibold text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>100% Genuine Certified Medicines • Aurangabad, Bihar</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                Your Trusted Medical Store for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                  Genuine Medicines
                </span>{' '}
                & Healthcare Needs
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care
                and daily medical essentials at affordable prices.
              </p>

              {/* Three Mandatory Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
                <a
                  href={`tel:+91${BUSINESS_CONFIG.callNumber}`}
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-sky-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-600/30 hover:bg-sky-500 active:scale-95 transition min-h-[44px]"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call Now</span>
                </a>

                <button
                  onClick={() => onOpenWhatsAppModal()}
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 hover:bg-emerald-500 active:scale-95 transition cursor-pointer min-h-[44px]"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp Order</span>
                </button>

                <a
                  href={BUSINESS_CONFIG.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-700 bg-slate-800/80 px-6 py-3.5 text-sm font-bold text-slate-200 shadow-md hover:bg-slate-700 active:scale-95 transition min-h-[44px]"
                >
                  <MapPin className="h-4 w-4 text-emerald-400" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Quick Search Shortcut */}
              <div className="pt-4 max-w-lg mx-auto lg:mx-0">
                <div className="relative">
                  <input
                    type="text"
                    value={quickSearch}
                    onChange={(e) => setQuickSearch(e.target.value)}
                    placeholder="Search medicine availability (e.g. Dolo 650, BP Monitor)..."
                    className="w-full rounded-xl border border-slate-700 bg-slate-800/90 pl-11 pr-24 py-3 text-sm text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-hidden shadow-inner"
                  />
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Link
                    to="/services#medicine-stock-checker"
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-500"
                  >
                    Check Stock
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Card Feature */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-700/80 bg-slate-800/80 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">Direct Pharmacist Support</h3>
                    <p className="text-xs text-slate-400">Aurangabad, Bihar (P9XG+F43)</p>
                  </div>
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3.5 rounded-2xl bg-slate-900/60 p-4 border border-slate-700/60">
                    <Truck className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">45-Minute Doorstep Delivery</h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Free local dispatch across Aurangabad for urgent prescriptions and chronic care.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 rounded-2xl bg-slate-900/60 p-4 border border-slate-700/60">
                    <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Zero Counterfeit Guarantee</h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Direct procurement from authorized pharmaceutical companies with computer invoices.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 rounded-2xl bg-slate-900/60 p-4 border border-slate-700/60">
                    <Clock className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Open Daily: 8:00 AM – 10:30 PM</h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        On-call emergency medicine line active round-the-clock for critical situations.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenWhatsAppModal()}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 py-3 text-sm font-bold text-white hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-600/30 transition cursor-pointer"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Send Prescription on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SHORT ABOUT PREVIEW */}
      <section className="py-16 bg-white dark:bg-slate-900 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="aspect-4/3 rounded-3xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=900&q=80"
                  alt="Danish Ejaz Pharmacy Counter"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-emerald-600 p-5 text-white shadow-xl hidden sm:block">
                <p className="text-3xl font-black">10+</p>
                <p className="text-xs font-medium uppercase tracking-wider">Years of Trust in Bihar</p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                <Sparkles className="h-4 w-4" />
                <span>About Danish Ejaz Pharmacy</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Rooted in Compassion, Dedicated to Your Community's Health
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Founded by Danish Ejaz in Aurangabad, Bihar, our medical store stands on a strict standard:
                never compromise on medicine authenticity. From essential pediatric syrups to critical cardiac
                and diabetes maintenance therapies, we ensure every dose is safe, potent, and handled with care.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="rounded-xl bg-slate-50 dark:bg-slate-800 p-3.5 border border-slate-100 dark:border-slate-700">
                  <p className="text-lg font-bold text-slate-900 dark:text-white">3,500+</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Stocked Medicines</p>
                </div>
                <div className="rounded-xl bg-slate-50 dark:bg-slate-800 p-3.5 border border-slate-100 dark:border-slate-700">
                  <p className="text-lg font-bold text-slate-900 dark:text-white">100%</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Cold Chain Potency</p>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 transition"
                >
                  <span>View Full About Story</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES (MAX 6) */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950/60 transition-colors border-y border-slate-200/60 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Comprehensive Healthcare
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Featured Pharmacy Services
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Complete healthcare solutions with qualified pharmacist verification and dedicated doorstep fulfillment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="group flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 dark:bg-slate-900 dark:border-slate-800 hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors dark:bg-emerald-950/70 dark:text-emerald-300">
                    <HeartPulse className="h-6 w-6" />
                  </div>
                  <span className="inline-block text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    {service.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">{service.timing}</span>
                  <button
                    onClick={() => onOpenWhatsAppModal(service.title)}
                    className="text-xs font-bold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white transition"
            >
              <span>Explore All Healthcare Services & Live Stock</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-16 bg-white dark:bg-slate-900 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              The Danish Ejaz Difference
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Why Aurangabad Families Rely on Us
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              A decade of clinical integrity, fair pricing, and rapid local delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-6 border border-slate-100 dark:border-slate-800 space-y-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-white">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">100% Genuine Stock</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Direct procurement from licensed pharmaceutical manufacturers with verified batch numbers and GST receipts.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-6 border border-slate-100 dark:border-slate-800 space-y-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-white">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Cold-Chain Potency</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                2°C – 8°C temperature control for sensitive insulins, pediatric vaccines, and biological serums.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-6 border border-slate-100 dark:border-slate-800 space-y-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-white">
                <Truck className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Rapid 45-Min Delivery</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                WhatsApp your prescription and receive door-to-door delivery across Aurangabad town with payment on delivery.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-6 border border-slate-100 dark:border-slate-800 space-y-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-white">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Pharmacist Guidance</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Personalized dosage counseling, generic cost-saving alternatives, and medication schedule clarifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PRODUCTS (PREVIEW) */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950/60 transition-colors border-y border-slate-200/60 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Popular Healthcare Essentials
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Featured Products & Devices
              </h2>
            </div>
            <Link
              to="/services#medicine-stock-checker"
              className="text-xs font-bold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 inline-flex items-center gap-1.5"
            >
              <span>Search Full 3,500+ Inventory</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((prod) => (
              <div
                key={prod.id}
                className="flex flex-col justify-between rounded-2xl bg-white p-5 shadow-sm border border-slate-200 dark:bg-slate-900 dark:border-slate-800 hover:shadow-md transition"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-emerald-600 font-semibold dark:text-emerald-400">
                      {prod.category}
                    </span>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
                      {prod.status}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{prod.brand}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-2">
                    {prod.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block">MRP Price</span>
                    <span className="text-base font-extrabold text-slate-900 dark:text-white">
                      ₹{prod.mrp.toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={() => onOpenWhatsAppModal(`${prod.name} (${prod.brand})`)}
                    className="inline-flex items-center gap-1 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700 transition cursor-pointer"
                  >
                    <span>Order</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CUSTOMER REVIEWS PREVIEW */}
      <section className="py-16 bg-white dark:bg-slate-900 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Local Experiences
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              What Aurangabad Residents Say
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Honest feedback from patients, caregivers, and families we serve every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredReviews.map((rev) => (
              <div
                key={rev.id}
                className="flex flex-col justify-between rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-6 border border-slate-200/70 dark:border-slate-800 space-y-4"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-2">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200/60 dark:border-slate-700 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white block">{rev.author}</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">{rev.source}</span>
                  </div>
                  <span className="text-[11px] text-emerald-600 font-semibold">Verified</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/about"
              className="text-xs font-bold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 inline-flex items-center gap-1"
            >
              <span>Learn More About Our Store Credentials & Values</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FAQ PREVIEW */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950/60 transition-colors border-y border-slate-200/60 dark:border-slate-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Clear answers regarding medicine ordering, prescriptions, and local delivery.
            </p>
          </div>

          <div className="space-y-4">
            {featuredFaqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-5 shadow-xs border border-slate-200 dark:bg-slate-900 dark:border-slate-800"
              >
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-emerald-700 transition"
            >
              <span>Have Another Question? Contact Us Directly</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. LATEST HEALTH TIPS PREVIEW */}
      <section className="py-16 bg-white dark:bg-slate-900 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Pharmacist Insights
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Latest Health & Medication Tips
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredTips.map((tip) => (
              <div
                key={tip.id}
                className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-6 border border-slate-200/80 dark:border-slate-800 space-y-3"
              >
                <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  <span>{tip.category}</span>
                  <span>•</span>
                  <span>{tip.date}</span>
                  <span>•</span>
                  <span>{tip.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{tip.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {tip.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA BANNER */}
      <section className="py-14 bg-gradient-to-r from-emerald-700 to-teal-700 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
            Need Medicines Urgently in Aurangabad?
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-emerald-100">
            WhatsApp your doctor's prescription right now to <strong>+91 {BUSINESS_CONFIG.whatsappNumber}</strong>.
            Our pharmacist will prepare your order immediately.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenWhatsAppModal()}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-emerald-800 shadow-xl hover:bg-emerald-50 active:scale-95 transition cursor-pointer min-h-[44px]"
            >
              <MessageCircle className="h-5 w-5 text-emerald-600" />
              <span>Order via WhatsApp</span>
            </button>
            <a
              href={`tel:+91${BUSINESS_CONFIG.callNumber}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-emerald-800/40 px-6 py-3.5 text-sm font-bold text-white shadow-xl hover:bg-emerald-800/60 active:scale-95 transition min-h-[44px]"
            >
              <Phone className="h-5 w-5" />
              <span>Call Counter: +91 {BUSINESS_CONFIG.whatsappFormatted}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 10. NEWSLETTER */}
      <section className="py-12 bg-slate-900 text-slate-200 border-t border-slate-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1 text-xs text-emerald-400">
            <Pill className="h-3.5 w-3.5" />
            <span>Health & Stock Alerts</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Receive Medicine Stock & Seasonal Care Updates
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            Stay informed on seasonal viral preventive tips, newly stocked wellness devices, and emergency hours.
          </p>

          {newsletterSubscribed ? (
            <div className="inline-flex items-center gap-2 rounded-xl bg-emerald-950/80 px-4 py-2.5 text-sm font-semibold text-emerald-300 border border-emerald-800">
              <CheckCircle2 className="h-4 w-4" />
              <span>Thank you! You're subscribed to health updates.</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full sm:flex-1 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-white focus:border-emerald-500 focus:outline-hidden"
              />
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500 transition cursor-pointer min-h-[44px]"
              >
                <Send className="h-4 w-4" />
                <span>Subscribe</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
