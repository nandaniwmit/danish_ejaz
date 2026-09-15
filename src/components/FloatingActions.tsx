import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/siteConfig';

interface FloatingActionsProps {
  onOpenWhatsAppModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenWhatsAppModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to Top"
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/90 text-white shadow-lg hover:bg-slate-800 active:scale-95 transition-all dark:bg-slate-700 dark:hover:bg-slate-600"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      {/* Direct Call Button */}
      <a
        href={`tel:+91${BUSINESS_CONFIG.callNumber}`}
        aria-label="Call Danish Ejaz Pharmacy"
        className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-600 text-white shadow-lg shadow-sky-600/30 hover:bg-sky-700 hover:scale-105 active:scale-95 transition-all group"
        title="Call +91 85078 79320"
      >
        <Phone className="h-5 w-5" />
      </a>

      {/* Floating WhatsApp Button */}
      <button
        onClick={onOpenWhatsAppModal}
        aria-label="Order Medicines on WhatsApp"
        className="pointer-events-auto flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white font-bold shadow-xl shadow-emerald-700/30 hover:bg-[#20bd5a] hover:scale-105 active:scale-95 transition-all group cursor-pointer"
        title="WhatsApp Medicine Order"
      >
        <MessageCircle className="h-6 w-6 fill-white text-[#25D366]" />
        <span className="hidden sm:inline text-sm font-semibold tracking-wide">
          Order on WhatsApp
        </span>
      </button>
    </div>
  );
};
