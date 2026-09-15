import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';
import { WifiOff } from 'lucide-react';

// Lazy load the 6 pages as requested in Step 6
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Login'));

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

// Offline connectivity banner for PWA compliance
function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-2 bg-amber-600 px-4 py-2 text-xs font-semibold text-white shadow-md">
      <WifiOff className="h-4 w-4 shrink-0" />
      <span>Offline Mode — Danish Ejaz Pharmacy app is serving cached catalog data.</span>
    </div>
  );
}

// Page loading fallback
function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-600 border-t-transparent"></div>
        <p className="text-xs font-semibold text-slate-500">Loading Danish Ejaz Pharmacy...</p>
      </div>
    </div>
  );
}

export default function App() {
  const [whatsAppModalOpen, setWhatsAppModalOpen] = useState(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState('');

  const handleOpenWhatsApp = (medicine?: string) => {
    setPrefilledMedicine(medicine || '');
    setWhatsAppModalOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <OfflineIndicator />
      <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 antialiased selection:bg-emerald-500 selection:text-white">
        {/* Sticky Header Navigation */}
        <Navbar onOpenWhatsAppModal={handleOpenWhatsApp} />

        {/* Main Content Area */}
        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home onOpenWhatsAppModal={handleOpenWhatsApp} />} />
              <Route path="/about" element={<About onOpenWhatsAppModal={handleOpenWhatsApp} />} />
              <Route path="/services" element={<Services onOpenWhatsAppModal={handleOpenWhatsApp} />} />
              <Route path="/gallery" element={<Gallery onOpenWhatsAppModal={handleOpenWhatsApp} />} />
              <Route path="/contact" element={<Contact onOpenWhatsAppModal={handleOpenWhatsApp} />} />
              <Route path="/login" element={<Login />} />
              {/* Fallback to Home */}
              <Route path="*" element={<Home onOpenWhatsAppModal={handleOpenWhatsApp} />} />
            </Routes>
          </Suspense>
        </main>

        {/* Global Footer with Mandatory WMIT Tracking & Popup Trigger */}
        <Footer />

        {/* Global Floating Actions: WhatsApp, Call, Back to Top */}
        <FloatingActions onOpenWhatsAppModal={() => handleOpenWhatsApp()} />

        {/* Global WhatsApp Order Form Modal */}
        <WhatsAppOrderModal
          isOpen={whatsAppModalOpen}
          onClose={() => setWhatsAppModalOpen(false)}
          prefilledMedicine={prefilledMedicine}
        />
      </div>
    </BrowserRouter>
  );
}
