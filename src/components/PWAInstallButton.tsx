import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { IOSInstallGuide } from './IOSInstallGuide';
import { Download, CheckCircle2 } from 'lucide-react';

interface PWAInstallButtonProps {
  className?: string;
  variant?: 'nav' | 'hero' | 'floating';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  className = '',
  variant = 'nav'
}) => {
  const { isInstallable, isInstalled, isStandalone, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [justInstalled, setJustInstalled] = useState(false);

  // If already running in standalone mode or just installed
  if (isStandalone || isInstalled) {
    if (variant === 'nav') return null;
    return (
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-medium dark:bg-emerald-950/40 dark:text-emerald-300">
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
        <span>App Installed</span>
      </div>
    );
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      const success = await install();
      if (success) {
        setJustInstalled(true);
      }
    } else if (isIOS) {
      setShowIOSGuide(true);
    } else {
      // General browser instructions fallback
      alert('To install this pharmacy app:\n1. Open your browser menu (three dots)\n2. Select "Add to Home screen" or "Install App".');
    }
  };

  return (
    <>
      <button
        id="pwa-install-button"
        onClick={handleInstallClick}
        aria-label="Add Danish Ejaz Pharmacy App to Home Screen"
        className={`inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 cursor-pointer select-none min-h-[44px] ${
          variant === 'nav'
            ? 'px-3.5 py-2 text-xs md:text-sm rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-sm hover:from-emerald-700 hover:to-teal-700 active:scale-95'
            : 'px-5 py-2.5 text-sm rounded-xl bg-white text-emerald-700 border border-emerald-200 shadow-sm hover:bg-emerald-50 dark:bg-slate-800 dark:border-slate-700 dark:text-emerald-400'
        } ${className}`}
      >
        <span className="text-base leading-none">📲</span>
        <span className="font-semibold tracking-tight">Add to Home</span>
      </button>

      <IOSInstallGuide isOpen={showIOSGuide} onClose={() => setShowIOSGuide(false)} />
    </>
  );
};
