import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_CONFIG } from '../config/siteConfig';
import { MapPin, Phone, Clock, Mail, ShieldAlert, Heart, ExternalLink } from 'lucide-react';

export default function Footer() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');

  // Mandatory Global Tracking Effect (Step 11)
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://crm.webmakerit.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid'));
    }
    if (!cid) return;
    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);
    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);
    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };
    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => {});
    };
    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: 'page_change'
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(() => {});
      }
    };
    sendInitPayload();
    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: any;
    let isIdle = false;
    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };
    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(evt => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer
    // ====================================
    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };
    window.addEventListener('popstate', handleLocationChange);
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach(evt => document.removeEventListener(evt, resetIdleTimer));
      clearTimeout(idleTimer);
    };
  }, []);

  const openLegalModal = (title: string, content: string) => {
    setModalTitle(title);
    setModalContent(content);
    setShowPrivacyModal(true);
  };

  return (
    <footer className="relative bg-slate-900 text-slate-300 pt-14 pb-8 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-slate-800">
          {/* Column 1: Business Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-white font-extrabold text-xl shadow-lg shadow-emerald-600/30">
                DE
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white block leading-tight">
                  {BUSINESS_CONFIG.name}
                </span>
                <span className="text-xs text-emerald-400 font-medium">
                  {BUSINESS_CONFIG.category}
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {BUSINESS_CONFIG.description}
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Licensed Retail & Wholesale Chemist</span>
              </div>
              <p>Government Drug License Compliance & Verified Batches</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-base font-semibold text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  About Our Pharmacy
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  All Healthcare Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Pharmacy Gallery & Shelves
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Contact & Directions
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Patient & Staff Login
                </Link>
              </li>
              <li>
                <a
                  href="#medicine-stock-checker"
                  onClick={() => {
                    if (window.location.pathname !== '/services') {
                      window.location.href = '/services#medicine-stock-checker';
                    }
                  }}
                  className="text-emerald-400 font-medium hover:underline inline-flex items-center gap-1"
                >
                  <span>Check Live Medicine Stock</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Working Hours & Support */}
          <div className="space-y-3">
            <h4 className="text-base font-semibold text-white tracking-wide">Operating Hours</h4>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Daily Counter Hours</p>
                  <p className="text-xs text-slate-400">{BUSINESS_CONFIG.hours.regular}</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <ShieldAlert className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Emergency Medicines</p>
                  <p className="text-xs text-slate-400">{BUSINESS_CONFIG.hours.emergency}</p>
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-slate-800/80 p-3 text-xs border border-slate-700/60">
                <p className="font-semibold text-emerald-300">Fast WhatsApp Orders</p>
                <p className="text-slate-400 mt-0.5">
                  Send your prescription to <strong>+91 {BUSINESS_CONFIG.whatsappNumber}</strong> for quick 45-min delivery in Aurangabad.
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Google Map */}
          <div className="space-y-3">
            <h4 className="text-base font-semibold text-white tracking-wide">Store Location</h4>
            <div className="space-y-2.5 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-slate-300">
                  {BUSINESS_CONFIG.address.fullAddress} <br />
                  <span className="text-slate-400">({BUSINESS_CONFIG.address.landmark})</span>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                <a href={`tel:+91${BUSINESS_CONFIG.callNumber}`} className="text-xs hover:text-white transition">
                  +91 {BUSINESS_CONFIG.whatsappFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-emerald-400 shrink-0" />
                <span className="text-xs">{BUSINESS_CONFIG.email}</span>
              </div>

              {/* Embedded Google Map Preview */}
              <div className="mt-3 overflow-hidden rounded-xl border border-slate-700 shadow-md">
                <iframe
                  title="Danish Ejaz Pharmacy Location"
                  src={BUSINESS_CONFIG.mapEmbedUrl}
                  width="100%"
                  height="110"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <a
                href={BUSINESS_CONFIG.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:underline"
              >
                <span>Open in Google Maps / Get Directions</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal & Policy Links */}
        <div className="py-5 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-400 border-b border-slate-800/80">
          <button
            onClick={() =>
              openLegalModal(
                'Privacy Policy',
                'Danish Ejaz Pharmacy respects your confidentiality. Patient prescription details, phone numbers, and delivery addresses are utilized solely to verify and fulfill your medicine orders. We do not sell or trade medical data to any third-party marketing brokers.'
              )
            }
            className="hover:text-emerald-400 transition-colors cursor-pointer"
          >
            Privacy Policy
          </button>
          <span className="text-slate-700">•</span>
          <button
            onClick={() =>
              openLegalModal(
                'Terms of Service',
                'All medicines are dispensed in strict adherence to the Drugs and Cosmetics Act of India. Prescription drugs (Schedule H / H1) will only be supplied upon presentation of a valid registered medical practitioner prescription. We reserve the right to decline dispensing in cases of counterfeit or unauthorized orders.'
              )
            }
            className="hover:text-emerald-400 transition-colors cursor-pointer"
          >
            Terms & Conditions
          </button>
          <span className="text-slate-700">•</span>
          <button
            onClick={() =>
              openLegalModal(
                'Medical Disclaimer',
                'The information provided on this website, including health articles and inventory details, is for educational and informational purposes only. It is not intended to substitute professional medical diagnosis, advice, or treatment. Always consult your doctor before starting any new medication.'
              )
            }
            className="hover:text-emerald-400 transition-colors cursor-pointer"
          >
            Medical Disclaimer
          </button>
        </div>

        {/* Bottom Copyright & Mandatory WMIT integration (Step 12) */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-3 text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS_CONFIG.name}. All rights reserved.
          </p>

          {/* MANDATORY EXACT WMIT POPUP TRIGGER — DO NOT MODIFY OR OMIT */}
          <div className="my-1 md:my-0">
            <a href="#" className="wmit-popup-trigger text-slate-400 hover:text-emerald-400 transition font-medium">
              Developed by WMIT
            </a>
          </div>

          <p className="text-slate-500">
            Genuine Medicines • Aurangabad, Bihar 824101
          </p>
        </div>
      </div>

      {/* Modal for Privacy, Terms, and Disclaimer */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-xs">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 text-slate-900 shadow-2xl dark:bg-slate-900 dark:text-white dark:border dark:border-slate-800">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              {modalTitle}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {modalContent}
            </p>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="rounded-xl bg-emerald-600 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
