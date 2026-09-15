import React from 'react';
import { X, Share, PlusSquare, ArrowDown } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/siteConfig';

interface IOSInstallGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IOSInstallGuide: React.FC<IOSInstallGuideProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 p-4 backdrop-blur-xs transition-opacity">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-900 dark:border dark:border-slate-800 animate-in fade-in zoom-in-95">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white font-bold shadow-md shadow-emerald-500/20">
              DE
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">Install on iPhone / iPad</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{BUSINESS_CONFIG.name}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5 space-y-4 text-sm text-slate-600 dark:text-slate-300">
          <div className="flex items-start gap-3 rounded-xl bg-emerald-50/70 p-3.5 dark:bg-emerald-950/30 dark:border dark:border-emerald-900/40">
            <div className="mt-0.5 rounded-lg bg-emerald-600 p-1.5 text-white">
              <Share className="h-4 w-4" />
            </div>
            <div>
              <p className="font-medium text-slate-900 dark:text-white">Step 1: Tap Share</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                In the bottom toolbar of Safari on iPhone (or top right on iPad), tap the <strong>Share</strong> button.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl bg-emerald-50/70 p-3.5 dark:bg-emerald-950/30 dark:border dark:border-emerald-900/40">
            <div className="mt-0.5 rounded-lg bg-emerald-600 p-1.5 text-white">
              <PlusSquare className="h-4 w-4" />
            </div>
            <div>
              <p className="font-medium text-slate-900 dark:text-white">Step 2: Add to Home Screen</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Scroll down in the menu and tap <strong>Add to Home Screen</strong>.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl bg-emerald-50/70 p-3.5 dark:bg-emerald-950/30 dark:border dark:border-emerald-900/40">
            <div className="mt-0.5 rounded-lg bg-emerald-600 p-1.5 text-white">
              <ArrowDown className="h-4 w-4" />
            </div>
            <div>
              <p className="font-medium text-slate-900 dark:text-white">Step 3: Tap Add</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Confirm by tapping <strong>Add</strong> in the top-right corner. The pharmacy icon will appear on your home screen!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={onClose}
            className="w-full rounded-xl bg-emerald-600 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-600/25 hover:bg-emerald-700 transition"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
