
import React from 'react';
import { WhatsAppIcon, WHATSAPP_LINK } from '../constants';

interface WhatsAppButtonProps {
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ className = "" }) => {
  const handleClick = () => {
    // Facebook Pixel Event
    if ((window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }

    // Google Analytics Event
    if ((window as any).gtag) {
      (window as any).gtag('event', 'join_channel_click', {
        event_category: 'engagement',
        event_label: 'WhatsApp Join Button',
        value: 1
      });
    }
  };

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`inline-flex items-center justify-center bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 hover:bg-green-700 hover:shadow-xl animate-zoom-pulse dynamic-whatsapp-link ${className}`}
    >
      <WhatsAppIcon />
      WhatsApp ગ્રુપમાં જોડાઓ
    </a>
  );
};

export default WhatsAppButton;
