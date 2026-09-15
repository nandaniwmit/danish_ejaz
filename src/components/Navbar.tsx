import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BUSINESS_CONFIG } from '../config/siteConfig';
import { PWAInstallButton } from './PWAInstallButton';
import { useDarkMode } from '../hooks/useDarkMode';
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  Sun,
  Moon,
  MapPin,
  Clock,
  Pill,
  User,
  Search
} from 'lucide-react';

interface NavbarProps {
  onOpenWhatsAppModal: (medicine?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWhatsAppModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleDarkMode } = useDarkMode();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Notification / Contact Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-semibold text-white">{BUSINESS_CONFIG.hours.isOpenNowText}</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
              <MapPin className="h-3.5 w-3.5 text-emerald-400" />
              <span>P9XG+F43, Near Bus Stand, Aurangabad, Bihar 824101</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:+91${BUSINESS_CONFIG.callNumber}`}
              className="flex items-center gap-1 font-medium text-slate-200 hover:text-emerald-400 transition"
            >
              <Phone className="h-3.5 w-3.5 text-emerald-400" />
              <span>+91 {BUSINESS_CONFIG.whatsappFormatted}</span>
            </a>

            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => onOpenWhatsAppModal()}
                className="text-emerald-400 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>WhatsApp Order</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`w-full transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md border-b border-slate-200/80 dark:border-slate-800'
            : 'bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-18 items-center justify-between gap-3">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0 group">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-700 to-teal-500 text-white font-black text-xl shadow-md shadow-emerald-600/30 group-hover:scale-105 transition-transform">
                DE
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                  Danish Ejaz <span className="text-emerald-600 dark:text-emerald-400">Pharmacy</span>
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-wide">
                  Genuine Medicines • Aurangabad, Bihar
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                        : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:text-emerald-400 dark:hover:bg-slate-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <Link
                to="/login"
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                  location.pathname === '/login'
                    ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                    : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:text-emerald-400 dark:hover:bg-slate-800'
                }`}
              >
                <User className="h-4 w-4" />
                <span>Login</span>
              </Link>
            </div>

            {/* Right Action Controls: PWA Install, Dark Mode, WhatsApp CTA */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Mandatory PWA "📲 Add to Home" button */}
              <PWAInstallButton variant="nav" />

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition cursor-pointer"
                aria-label="Toggle Dark Theme"
                title="Toggle Dark Theme"
              >
                {isDark ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-slate-700" />}
              </button>

              {/* WhatsApp Order Fast Trigger */}
              <button
                onClick={() => onOpenWhatsAppModal()}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-emerald-600/25 hover:bg-emerald-700 active:scale-95 transition cursor-pointer"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Order</span>
              </button>
            </div>

            {/* Mobile Actions: Dark Mode & Hamburger Menu */}
            <div className="flex items-center gap-2 lg:hidden">
              <PWAInstallButton variant="nav" className="text-xs px-2.5 py-1.5 min-h-[38px]" />

              <button
                onClick={toggleDarkMode}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300"
                aria-label="Toggle Dark Mode"
              >
                {isDark ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 dark:border-slate-700 dark:text-white"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 dark:border-slate-800 dark:bg-slate-900 shadow-xl">
            <div className="space-y-1 pb-3">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                        : 'text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <Link
                to="/login"
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
                  location.pathname === '/login'
                    ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                    : 'text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                <User className="h-4 w-4" />
                <span>Patient / Staff Login</span>
              </Link>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-3 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsAppModal();
                }}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-bold text-white shadow-md shadow-emerald-600/20"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Order on WhatsApp (8507879320)</span>
              </button>

              <a
                href={`tel:+91${BUSINESS_CONFIG.callNumber}`}
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-slate-300 py-3 text-sm font-bold text-slate-800 dark:border-slate-700 dark:text-white"
              >
                <Phone className="h-4 w-4 text-emerald-600" />
                <span>Direct Call (+91 {BUSINESS_CONFIG.whatsappFormatted})</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
