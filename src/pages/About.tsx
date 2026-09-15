import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_CONFIG } from '../config/siteConfig';
import { TIMELINE_DATA } from '../data/pharmacyData';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import {
  ShieldCheck,
  Heart,
  Eye,
  Target,
  Award,
  Users,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Phone
} from 'lucide-react';

interface AboutProps {
  onOpenWhatsAppModal: (medicine?: string) => void;
}

export default function About({ onOpenWhatsAppModal }: AboutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      <SEOHead
        title="About Us"
        description="Learn about Danish Ejaz Pharmacy in Aurangabad, Bihar. Our founding story, ethical mission, temperature-controlled storage, qualified pharmacist counseling, and history since 2014."
        canonicalPath="/about"
      />

      {/* Page Header */}
      <div className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'About Us' }]} />
          <div className="mt-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300 border border-emerald-500/30 mb-3">
              Serving Aurangabad Since 2014
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              About Danish Ejaz Pharmacy
            </h1>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              Dedicated to dispensing 100% genuine medicines, preserving cold-chain integrity, and providing
              compassionate, trusted healthcare guidance to families across Aurangabad, Bihar.
            </p>
          </div>
        </div>
      </div>

      {/* 1. BUSINESS STORY & STORE OVERVIEW */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Our Heritage & Roots
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                A Pharmacy Built on Patient Trust & Scientific Precision
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Danish Ejaz Pharmacy was established with a singular objective: ensuring that every patient in
                Aurangabad, Bihar receives authentic, unadulterated pharmaceutical formulations stored at the
                exact temperatures mandated by international pharmacopeia standards.
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Too often, patients in tier-2 and tier-3 towns encounter counterfeit medicines or compromised
                potency due to improper storage. Under the leadership of Danish Ejaz, our dispensary bridges
                this gap by maintaining digital temperature tracking, direct sourcing from verified distributors,
                and computerized billing with lot and expiry details on every purchase.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-4 border border-slate-100 dark:border-slate-700">
                  <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400">100%</p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 font-medium">Genuine Meds</p>
                </div>
                <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-4 border border-slate-100 dark:border-slate-700">
                  <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400">3,500+</p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 font-medium">In-Stock SKUs</p>
                </div>
                <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-4 border border-slate-100 dark:border-slate-700 col-span-2 sm:col-span-1">
                  <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400">15,000+</p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 font-medium">Happy Patients</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1000&q=80"
                  alt="Danish Ejaz Pharmacy Store Interior"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 p-4 border border-emerald-200/60 dark:border-emerald-900/60 text-xs text-emerald-800 dark:text-emerald-300">
                <strong>Store Location:</strong> P9XG+F43, Near Old Bus Stand, Aurangabad, Bihar 824101. Equipped with computer inventory management & backup refrigeration.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OWNER MESSAGE */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950/60 border-y border-slate-200/60 dark:border-slate-800">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-xl border border-slate-200 dark:border-slate-800 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white font-extrabold text-2xl shadow-lg shadow-emerald-600/30">
                DE
              </div>
              <div className="space-y-3 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 rounded-md bg-emerald-100 dark:bg-emerald-950/60 px-2.5 py-0.5 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                  <Sparkles className="h-3 w-3" />
                  <span>Founder & Pharmacist In-Charge</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  A Message from Danish Ejaz
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 italic leading-relaxed">
                  "In healthcare, there is zero margin for error. When a mother rushes in for fever drops for her infant,
                  or an elderly gentleman requires his daily cardiac tablets, they are not just buying a product — they
                  are placing their well-being in our hands. Every medicine on our shelves is inspected, stored properly,
                  and handed over with clear guidance. We are proud to serve Aurangabad with unwavering ethics."
                </p>
                <div className="pt-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                  — Danish Ejaz, Danish Ejaz Pharmacy (Aurangabad, Bihar)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION, VISION & VALUES */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Mission, Vision & Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-8 border border-slate-200/70 dark:border-slate-800 space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To deliver authentic, affordable, and timely healthcare supplies to every home in Aurangabad,
                ensuring zero stockouts for life-saving maintenance drugs.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-8 border border-slate-200/70 dark:border-slate-800 space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To set the benchmark for community pharmacy practice in Bihar by integrating digital inventory
                transparency, rapid home delivery, and empathetic patient education.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-8 border border-slate-200/70 dark:border-slate-800 space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Core Values</h3>
              <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Uncompromising Authenticity</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Transparent, Fair Pricing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Patient Safety First</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Compassionate Community Service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BUSINESS TIMELINE & ACHIEVEMENTS */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950/60 border-y border-slate-200/60 dark:border-slate-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Our Journey
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Milestones Along the Way
            </h2>
          </div>

          <div className="relative border-l-2 border-emerald-500/40 ml-4 sm:ml-8 space-y-8">
            {TIMELINE_DATA.map((milestone, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-8 group">
                <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-emerald-600 border-4 border-white dark:border-slate-900 shadow-md"></div>
                <div className="rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                  <span className="inline-block rounded-md bg-emerald-100 dark:bg-emerald-950/60 px-2.5 py-0.5 text-xs font-bold text-emerald-800 dark:text-emerald-300 mb-1">
                    {milestone.year}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {milestone.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA ACTION */}
      <section className="py-14 bg-emerald-800 text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Experience Reliable Healthcare Service in Aurangabad
          </h2>
          <p className="text-emerald-100 max-w-xl mx-auto text-sm">
            Visit our counter near the Bus Stand or send your prescription via WhatsApp for fast doorstep dispatch.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenWhatsAppModal}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-emerald-900 shadow-lg hover:bg-emerald-50 cursor-pointer min-h-[44px]"
            >
              <MessageCircle className="h-4 w-4 text-emerald-600" />
              <span>WhatsApp Prescription</span>
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-emerald-900/50 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-900 transition min-h-[44px]"
            >
              <span>Store Location & Map</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
