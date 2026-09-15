import React, { useState } from 'react';
import { BUSINESS_CONFIG } from '../config/siteConfig';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumb } from '../components/Breadcrumb';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Navigation,
  Send,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface ContactProps {
  onOpenWhatsAppModal: (medicine?: string) => void;
}

export default function Contact({ onOpenWhatsAppModal }: ContactProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Medicine Availability Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) {
      alert('Please fill out all required fields.');
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors">
      <SEOHead
        title="Contact & Store Location"
        description="Contact Danish Ejaz Pharmacy in Aurangabad, Bihar. Phone: 8507879320, address: P9XG+F43 Aurangabad Bihar 824101. Operating hours, interactive Google Map, directions, and direct inquiry form."
        canonicalPath="/contact"
      />

      {/* Page Header */}
      <div className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Contact & Location' }]} />
          <div className="mt-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300 border border-emerald-500/30 mb-3">
              We are Here to Help
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Contact & Store Location
            </h1>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              Visit our pharmacy in Aurangabad, Bihar or get in touch immediately via phone,
              WhatsApp, or through the contact inquiry form.
            </p>
          </div>
        </div>
      </div>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Quick Action Contact Bar with 3 Mandatory Buttons */}
          <div className="mb-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href={`tel:+91${BUSINESS_CONFIG.callNumber}`}
              className="flex items-center justify-center gap-3 rounded-2xl bg-sky-600 p-4 text-white shadow-md hover:bg-sky-500 active:scale-98 transition text-sm font-bold min-h-[52px]"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now (+91 {BUSINESS_CONFIG.whatsappFormatted})</span>
            </a>

            <button
              onClick={onOpenWhatsAppModal}
              className="flex items-center justify-center gap-3 rounded-2xl bg-emerald-600 p-4 text-white shadow-md hover:bg-emerald-500 active:scale-98 transition text-sm font-bold cursor-pointer min-h-[52px]"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp Medicine Order</span>
            </button>

            <a
              href={BUSINESS_CONFIG.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl bg-slate-800 p-4 text-white shadow-md hover:bg-slate-700 active:scale-98 transition text-sm font-bold min-h-[52px]"
            >
              <Navigation className="h-5 w-5 text-emerald-400" />
              <span>Get Directions on Map</span>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Store Information & Working Hours */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl bg-white dark:bg-slate-800 p-7 shadow-sm border border-slate-200 dark:border-slate-700 space-y-5">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Pharmacy Contact Information
                </h3>

                <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Address & Plus Code</p>
                      <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                        {BUSINESS_CONFIG.address.fullAddress} <br />
                        Landmark: {BUSINESS_CONFIG.address.landmark}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Phone & WhatsApp</p>
                      <a
                        href={`tel:+91${BUSINESS_CONFIG.callNumber}`}
                        className="mt-0.5 text-xs text-emerald-600 dark:text-emerald-400 hover:underline block"
                      >
                        +91 {BUSINESS_CONFIG.whatsappFormatted}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Email</p>
                      <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                        {BUSINESS_CONFIG.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2 border-t border-slate-100 dark:border-slate-700">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Working Hours</p>
                      <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                        {BUSINESS_CONFIG.hours.regular}
                      </p>
                      <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                        {BUSINESS_CONFIG.hours.emergency}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map Card */}
              <div className="overflow-hidden rounded-3xl bg-white dark:bg-slate-800 p-4 shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="h-64 w-full rounded-2xl overflow-hidden">
                  <iframe
                    title="Danish Ejaz Pharmacy Aurangabad Map"
                    src={BUSINESS_CONFIG.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="mt-3 flex items-center justify-between px-2 text-xs">
                  <span className="text-slate-500">Aurangabad, Bihar (P9XG+F43)</span>
                  <a
                    href={BUSINESS_CONFIG.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-emerald-600 hover:underline"
                  >
                    Open Full Google Map
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-white dark:bg-slate-800 p-8 sm:p-10 shadow-sm border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Send a Message to the Pharmacist
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                  Have a question about a rare medication, bulk order, or dosage advice? Submit your query below.
                </p>

                {submitted ? (
                  <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 p-6 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
                    <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
                    <h4 className="text-lg font-bold text-emerald-900 dark:text-emerald-200">
                      Message Received!
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300">
                      Thank you, {name}. Our team at Danish Ejaz Pharmacy will contact you at {phone} shortly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setPhone('');
                        setMessage('');
                      }}
                      className="mt-3 inline-block rounded-xl bg-emerald-600 px-5 py-2 text-xs font-semibold text-white hover:bg-emerald-700"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Anand Kumar"
                          className="w-full rounded-xl border border-slate-300 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-hidden dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Mobile Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 9876543210"
                          className="w-full rounded-xl border border-slate-300 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-hidden dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="anand@example.com"
                          className="w-full rounded-xl border border-slate-300 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-hidden dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Subject / Inquiry Type
                        </label>
                        <select
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className="w-full rounded-xl border border-slate-300 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-hidden dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                        >
                          <option value="Medicine Availability Inquiry">Medicine Availability</option>
                          <option value="Home Delivery Request">Home Delivery Request</option>
                          <option value="Health Device Inquiry (BP/Oximeter)">Health Device Inquiry</option>
                          <option value="Doctor Prescription Dispensing">Doctor Prescription</option>
                          <option value="General Question">General Question</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Message Details <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Please write your inquiry or medicine requirement here..."
                        className="w-full rounded-xl border border-slate-300 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-hidden dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-emerald-600/25 hover:bg-emerald-700 active:scale-98 transition cursor-pointer min-h-[44px]"
                    >
                      <Send className="h-4 w-4" />
                      <span>Submit Inquiry</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
