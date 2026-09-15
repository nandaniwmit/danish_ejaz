import React, { useState } from 'react';
import { X, Upload, Phone, Send, CheckCircle, AlertCircle, Clock, FileText } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/siteConfig';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  prefilledMedicine = ''
}) => {
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [medicineName, setMedicineName] = useState(prefilledMedicine);
  const [hasPrescription, setHasPrescription] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState('Earliest Delivery (within 45 mins)');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Update prefilled medicine if changed
  React.useEffect(() => {
    if (prefilledMedicine) {
      setMedicineName(prefilledMedicine);
    }
  }, [prefilledMedicine]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
      setHasPrescription(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName.trim() || !phone.trim() || (!medicineName.trim() && !fileName)) {
      alert('Please provide your name, phone number, and medicine name or prescription.');
      return;
    }

    const messageLines = [
      `*Hello ${BUSINESS_CONFIG.name}*`,
      `*New Medicine Order Request*`,
      `---------------------------------`,
      `*Customer Name:* ${customerName.trim()}`,
      `*Phone:* ${phone.trim()}`,
      email.trim() ? `*Email:* ${email.trim()}` : null,
      `*Medicine Required:* ${medicineName.trim() || 'Attached in prescription'}`,
      `*Prescription Attached:* ${hasPrescription ? 'YES (Will send photo in chat)' : 'NO (OTC / Regular Refill)'}`,
      `*Delivery Address:* ${address.trim() || 'Store Pickup / Local Aurangabad'}`,
      `*Preferred Delivery Time:* ${preferredTime}`,
      notes.trim() ? `*Notes / Instructions:* ${notes.trim()}` : null,
      `---------------------------------`,
      `_Sent from Danish Ejaz Pharmacy Website_`
    ].filter(Boolean).join('\n');

    const encodedText = encodeURIComponent(messageLines);
    const whatsappUrl = `https://wa.me/91${BUSINESS_CONFIG.whatsappNumber}?text=${encodedText}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      onClose();
      setSubmitted(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-900 dark:border dark:border-slate-800 animate-in fade-in zoom-in-95">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-white font-bold shadow-md shadow-emerald-500/20">
              <span className="text-xl">💬</span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">WhatsApp Medicine Order</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Direct to Pharmacist: +91 {BUSINESS_CONFIG.whatsappNumber}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Notice */}
        <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50/80 p-3 text-xs text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border dark:border-emerald-900/40">
          <Clock className="h-4 w-4 shrink-0 text-emerald-600" />
          <span>Average response time: <strong>under 5 minutes</strong> during pharmacy hours (8:00 AM – 10:30 PM).</span>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Your Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="e.g. Ramesh Sharma"
                className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-hidden dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Mobile Number (WhatsApp) <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 9876543210"
                className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-hidden dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-hidden dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Preferred Delivery Time
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-hidden dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              >
                <option value="Earliest Delivery (within 45 mins)">Earliest Delivery (within 45 mins)</option>
                <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
                <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                <option value="Self Store Pickup">I will pick up at counter</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Delivery Address in Aurangabad, Bihar
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="e.g. Near Ramesh Chowk / MG Road, Aurangabad"
              className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-hidden dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Medicine Name & Quantity Required
            </label>
            <textarea
              rows={2}
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
              placeholder="e.g. Dolo 650 (2 strips), Augmentin 625 (1 strip), Omron BP Monitor"
              className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-hidden dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>

          {/* Prescription Upload Area */}
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50/70 p-3.5 text-center dark:border-slate-700 dark:bg-slate-800/40">
            <input
              type="file"
              id="prescription-file-upload"
              accept="image/*,.pdf"
              onChange={handleFileChange}
              className="hidden"
            />
            <label
              htmlFor="prescription-file-upload"
              className="cursor-pointer flex flex-col items-center justify-center gap-1.5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
                <Upload className="h-4 w-4" />
              </div>
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                {fileName ? `Attached: ${fileName}` : 'Upload Doctor Prescription (Optional photo/PDF)'}
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                You can also attach the photo directly inside WhatsApp chat
              </span>
            </label>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Additional Notes / Instructions
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Call before delivery, need urgent fever medicine"
              className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-hidden dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={submitted}
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-600/25 hover:bg-emerald-700 active:scale-98 transition disabled:opacity-70 cursor-pointer min-h-[44px]"
            >
              <Send className="h-4 w-4" />
              <span>{submitted ? 'Opening WhatsApp...' : 'Send via WhatsApp'}</span>
            </button>

            <a
              href={`tel:+91${BUSINESS_CONFIG.callNumber}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-xs hover:bg-slate-50 active:scale-98 transition dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 min-h-[44px]"
            >
              <Phone className="h-4 w-4 text-emerald-600" />
              <span>Call Now</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
