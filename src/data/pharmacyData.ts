import { ServiceItem, GalleryItem, FAQItem, ReviewItem, HealthTip } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'prescription-dispensing',
    title: 'Prescription Dispensing & Verification',
    category: 'Prescription Medicines',
    description: 'Accurate dispensing of doctor-prescribed medications by qualified pharmacists with dosage explanation, drug interaction verification, and usage schedule guidance.',
    iconName: 'FileText',
    benefits: ['100% Genuine Branded & Generic Drugs', 'Doctor Dosage Instructions Checked', 'Batch & Expiry Verified on Every Strip'],
    timing: 'Available Daily 8:00 AM - 10:30 PM'
  },
  {
    id: 'otc-essential-medicines',
    title: 'OTC Medicines & First-Aid Supplies',
    category: 'OTC Medicines',
    description: 'Complete stock of over-the-counter essentials for fever, acidity, headaches, pain relief, allergic sneezes, burns, cuts, and dressing materials.',
    iconName: 'ShieldCheck',
    benefits: ['Top Indian & Global Pharma Brands', 'Instant Counter Pick-up', 'Emergency First-Aid Bandages & Antiseptics'],
    timing: 'Immediate Counter Service'
  },
  {
    id: 'chronic-disease-management',
    title: 'Diabetes, Cardiac & BP Care',
    category: 'Medicine Categories',
    description: 'Continuous month-on-month supply of chronic maintenance drugs for hypertension, cholesterol, diabetes, thyroid disorders, and respiratory asthma.',
    iconName: 'HeartPulse',
    benefits: ['Monthly Auto-Refill on WhatsApp', 'Temperature Controlled Storage', 'Special Chronic Care Discounts'],
    timing: 'Priority Monthly Dispensing'
  },
  {
    id: 'health-monitoring-devices',
    title: 'Health Devices & Diagnostic Equipment',
    category: 'Health Devices',
    description: 'Certified digital blood pressure monitors, glucometers with active test strips, fingertip pulse oximeters, infrared thermometers, and weight scales.',
    iconName: 'Activity',
    benefits: ['Manufacturer Warranty Cards', 'Free Demonstration in Store', 'Omron, Dr. Morepen, Accu-Chek Models'],
    timing: 'With Free Demo Guidance'
  },
  {
    id: 'baby-mother-care',
    title: 'Baby Care & Maternal Health',
    category: 'Baby Care',
    description: 'Pediatric care essentials, infant milk formulations, hypoallergenic baby lotions, tear-free shampoos, diaper rash creams, and maternal nutrition supplements.',
    iconName: 'Baby',
    benefits: ['Dermatologist Approved Lines', 'Himalaya, Pampers, Sebamed, Farex', 'Gentle & Fresh Stock Guaranteed'],
    timing: 'Complete Range Available'
  },
  {
    id: 'nutritional-supplements',
    title: 'Dietary Supplements & Immunity Boosters',
    category: 'Supplements',
    description: 'High-potency Multivitamins, Calcium + D3, Omega-3 fish oils, protein powders, Chyawanprash, and herbal immunity formulations.',
    iconName: 'Zap',
    benefits: ['FSSAI Approved Formulations', 'Sports & Geriatric Nutrition', 'Targeted Deficiency Supplements'],
    timing: 'Daily Wellness Consultation'
  },
  {
    id: 'surgical-home-care',
    title: 'Surgical Equipment & Home Care Aids',
    category: 'Medical Equipment',
    description: 'Wheelchairs, walking sticks, cervical collars, orthopedic knee braces, nebulizers, urine bags, surgical gloves, and IV kits for home patient care.',
    iconName: 'Stethoscope',
    benefits: ['Hospital Grade Quality', 'Ergonomic Mobility Assists', 'Home Patient Nursing Supplies'],
    timing: 'Ready Stock for Emergency Need'
  },
  {
    id: 'whatsapp-doorstep-delivery',
    title: 'WhatsApp Rapid Home Delivery',
    category: 'Home Care',
    description: 'Just snap a clear photo of your doctor’s prescription and send it to 8507879320. Our pharmacy team confirms, packs, and delivers to your home in Aurangabad.',
    iconName: 'Truck',
    benefits: ['Order in 30 Seconds via Chat', 'Delivery within 45 Minutes locally', 'Cash on Delivery / UPI Accepted'],
    timing: 'Orders Dispatched 8 AM - 9:30 PM'
  },
  {
    id: 'personal-hygiene-care',
    title: 'Personal Care & Derma Wellness',
    category: 'Personal Care',
    description: 'Therapeutic skincare, medicated acne washes, sunscreens, hair-fall solutions, oral dental care, and feminine hygiene supplies.',
    iconName: 'Sparkles',
    benefits: ['Clinically Recommended Formulations', 'Gentle on Sensitive Skin', 'Authentic Sealed Packaging'],
    timing: 'Full Department Range'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Main Counter & Prescription Dispensing',
    category: 'store',
    imageUrl: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=900&q=80',
    caption: 'Modern, well-lit pharmacy dispensing desk equipped with computerized billing and cold storage units.'
  },
  {
    id: 'gal-2',
    title: 'Organized Medicine Shelves',
    category: 'shelves',
    imageUrl: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=900&q=80',
    caption: 'Systematically cataloged pharmaceutical racks arranged alphabetically for quick and zero-error retrieval.'
  },
  {
    id: 'gal-3',
    title: 'Digital Diagnostic Devices Section',
    category: 'equipment',
    imageUrl: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=900&q=80',
    caption: 'Branded Omron BP monitors, Accu-Chek glucometers, nebulizers, and digital thermometers.'
  },
  {
    id: 'gal-4',
    title: 'Healthcare Products & Supplements Display',
    category: 'products',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80',
    caption: 'Comprehensive collection of daily wellness, pediatric formulations, and specialized health vitamins.'
  },
  {
    id: 'gal-5',
    title: 'Cold Storage & Temperature Sensitive Units',
    category: 'equipment',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=80',
    caption: '2°C - 8°C dedicated refrigeration system ensuring vaccine and insulin bio-potency.'
  },
  {
    id: 'gal-6',
    title: 'Baby Care & Maternal Nutrition Section',
    category: 'products',
    imageUrl: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=900&q=80',
    caption: 'Himalaya, Sebamed, Pampers, and trusted infant food formulations in pristine store aisles.'
  },
  {
    id: 'gal-7',
    title: 'Surgical & Orthopedic Support Aids',
    category: 'equipment',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80',
    caption: 'Knee braces, cervical collars, nebulizer masks, and surgical recovery essentials.'
  },
  {
    id: 'gal-8',
    title: 'Store Front View & Convenient Access',
    category: 'store',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=900&q=80',
    caption: 'Located prominently near Bus Stand area, Aurangabad, Bihar with convenient curbside parking.'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Rajesh Kumar Singh',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Best medical store in Aurangabad! Needed emergency insulin and BP tablets in the evening; Danish ji was extremely helpful and delivered to our home within 30 minutes. 100% genuine medicines.',
    verified: true,
    source: 'Google Verified Review'
  },
  {
    id: 'rev-2',
    author: 'Dr. Neha Verma',
    rating: 5,
    date: '1 month ago',
    comment: 'Very reliable pharmacy. They keep all prescribed antibiotics and pediatric medicines in proper stock with latest batch numbers. The WhatsApp prescription ordering is super seamless.',
    verified: true,
    source: 'Local Resident Review'
  },
  {
    id: 'rev-3',
    author: 'Mohammad Tariq',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Fair prices and very polite behavior. Bought an Omron BP machine and the pharmacist explained how to measure correctly at home. Highly recommended to everyone in Aurangabad.',
    verified: true,
    source: 'Google Verified Review'
  },
  {
    id: 'rev-4',
    author: 'Amitabh Mishra',
    rating: 5,
    date: '2 months ago',
    comment: 'Always get genuine medicines with printed bill. Located near the bus stand so very easy to locate. They also have an online stock checker which saves a lot of time!',
    verified: true,
    source: 'Google Verified Review'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: 'How do I place an order for medicines on WhatsApp?',
    answer: 'Simply click the "WhatsApp Order" button on the website or message us at 8507879320. Take a clear picture of your doctor’s prescription or type your medicine list. Our pharmacist will verify the prescription, check stock, send you the final bill, and dispatch your order.'
  },
  {
    question: 'Are all medicines at Danish Ejaz Pharmacy 100% genuine?',
    answer: 'Yes, absolutely. We source all allopathic medicines, healthcare devices, and supplements directly from authorized pharmaceutical distributors (Cipla, Sun Pharma, Abbott, Torrent, Alkem, etc.) with valid batch numbers, GST invoices, and strict cold-chain compliance.'
  },
  {
    question: 'Do you provide home delivery in Aurangabad, Bihar?',
    answer: 'Yes, we provide rapid doorstep medicine delivery across Aurangabad town (including Bus Stand area, MG Road, Ramesh Chowk, Dani Bigha, Overbridge area, and neighboring localities). Most local orders are delivered within 45 minutes.'
  },
  {
    question: 'Can I check medicine availability before visiting the shop?',
    answer: 'Yes! Use our exclusive "Medicine Stock Checker" on this website. Search by medicine or brand name to see real-time availability (Available, Limited Stock, or Out of Stock) and pricing.'
  },
  {
    question: 'Is a prescription mandatory for all medicines?',
    answer: 'A valid doctor’s prescription is mandatory for Schedule H, H1, and X drugs (such as antibiotics, hypertension medicines, psychiatric drugs, and injectables) as per Drugs and Cosmetics Act regulations. General OTC products, first-aid supplies, vitamins, and healthcare devices do not require a prescription.'
  },
  {
    question: 'What are the pharmacy operating hours?',
    answer: 'We are open 7 days a week from 8:00 AM to 10:30 PM. For critical late-night emergency medicine requirements, our helpline at 8507879320 is reachable on call.'
  }
];

export const HEALTH_TIPS_DATA: HealthTip[] = [
  {
    id: 'tip-1',
    title: 'Why Completing Your Full Antibiotic Course is Vital',
    date: 'September 2026',
    category: 'Medicine Safety',
    summary: 'Stopping antibiotics early because you feel better can create bacterial resistance and relapse.',
    content: 'Even when symptoms vanish after 2 or 3 days, surviving bacteria can rebound stronger if the doctor’s recommended 5 or 7 day course is truncated. Always complete your full antibiotic dosage unless explicitly advised by your doctor.',
    readTime: '3 min read'
  },
  {
    id: 'tip-2',
    title: 'How to Store Insulin and Temperature-Sensitive Drugs at Home',
    date: 'August 2026',
    category: 'Storage Guide',
    summary: 'Protecting the potency of insulin vials, eye drops, and probiotic formulations.',
    content: 'Unopened insulin vials must be stored in the refrigerator between 2°C to 8°C. Never freeze insulin! Once in active use, insulin pens can typically be kept at normal room temperature (below 25°C) away from direct sunlight.',
    readTime: '4 min read'
  },
  {
    id: 'tip-3',
    title: 'Monitoring Blood Pressure Accurately with Digital Monitrors',
    date: 'August 2026',
    category: 'Diagnostic Care',
    summary: 'Simple steps to avoid false high readings when testing at home.',
    content: 'Rest quietly for 5 minutes before reading. Sit with your back supported and feet flat on the floor. Place the cuff directly on bare skin at heart level. Avoid caffeine, exercise, or smoking 30 minutes prior to measurement.',
    readTime: '3 min read'
  }
];

export const TIMELINE_DATA = [
  {
    year: '2014',
    title: 'Foundations & Ethical Care',
    description: 'Danish Ejaz established the pharmacy in Aurangabad, Bihar with a founding promise of 100% genuine medicines and compassionate community healthcare.'
  },
  {
    year: '2018',
    title: 'Expanded Cold Chain Infrastructure',
    description: 'Upgraded specialized pharmaceutical refrigeration to maintain precision temperature storage for insulin, vaccines, and pediatric serums.'
  },
  {
    year: '2021',
    title: 'Emergency Rapid WhatsApp Service',
    description: 'Pioneered zero-contact WhatsApp prescription dispensing and home delivery in Aurangabad during critical medical supply shortages.'
  },
  {
    year: '2024',
    title: 'Digital Diagnostic Device Center',
    description: 'Introduced an extensive section for certified clinical diagnostic instruments including Omron BP units, glucometers, nebulizers, and surgical aids.'
  },
  {
    year: '2026',
    title: 'Smart Stock Checker & PWA Launch',
    description: 'Launched the instant Medicine Stock Checker and installable mobile web app to give every resident immediate visibility into inventory before leaving home.'
  }
];
