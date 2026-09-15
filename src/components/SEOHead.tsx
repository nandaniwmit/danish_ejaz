import React, { useEffect } from 'react';
import { BUSINESS_CONFIG } from '../config/siteConfig';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  schemaType?: 'LocalBusiness' | 'FAQPage' | 'MedicalBusiness';
  faqData?: { question: string; answer: string }[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath = '',
  schemaType = 'LocalBusiness',
  faqData
}) => {
  useEffect(() => {
    // Set document title
    document.title = `${title} | ${BUSINESS_CONFIG.name}`;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Update OG Title & Description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', `${title} | ${BUSINESS_CONFIG.name}`);
    }

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }

    // Inject / Update JSON-LD Script
    const scriptId = 'danish-ejaz-jsonld';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'Pharmacy',
      name: BUSINESS_CONFIG.name,
      description: BUSINESS_CONFIG.description,
      image: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=900&q=80',
      telephone: `+91${BUSINESS_CONFIG.callNumber}`,
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS_CONFIG.address.street,
        addressLocality: BUSINESS_CONFIG.address.city,
        addressRegion: BUSINESS_CONFIG.address.state,
        postalCode: BUSINESS_CONFIG.address.pincode,
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '24.7539',
        longitude: '84.3742'
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
          ],
          opens: '08:00',
          closes: '22:30'
        }
      ],
      currenciesAccepted: 'INR',
      paymentAccepted: 'Cash, UPI, PhonePe, Google Pay, Cards',
      hasMap: BUSINESS_CONFIG.mapUrl
    };

    let fullSchema: any = localBusinessSchema;

    if (schemaType === 'FAQPage' && faqData && faqData.length > 0) {
      fullSchema = {
        '@context': 'https://schema.org',
        '@graph': [
          localBusinessSchema,
          {
            '@type': 'FAQPage',
            mainEntity: faqData.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
              }
            }))
          }
        ]
      };
    }

    scriptTag.text = JSON.stringify(fullSchema);
  }, [title, description, canonicalPath, schemaType, faqData]);

  return null;
};
