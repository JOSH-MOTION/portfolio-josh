"use client";

import Link from 'next/link';
import React from 'react';

// SVG Icon for WhatsApp
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 2a14 14 0 100 28 14 14 0 000-28zm7.65 20.3c-.63-.32-3.7-1.82-4.28-2.04-.58-.22-1-.22-1.42.22-.42.43-1.62 2.04-1.98 2.46-.37.43-.74.48-1.37.16-2.5-1.3-4.9-2.9-6.9-5.5-.32-.42-.65-1.2-.23-1.63.43-.43.88-.7 1.1-1 .22-.3.3-.5.44-.82.14-.32.07-.58-.07-.82-.14-.24-1.42-3.44-1.94-4.73s-1.04-1.1-1.42-1.12c-.37-.02-.8-.02-1.22-.02-.42 0-1.1.15-1.68.73-.58.58-2.25 2.2-2.25 5.4 0 3.2 2.3 6.26 2.6 6.7 0.3 0.44 4.5 7.2 11.1 9.75 1.6.63 2.9.98 3.8.78 1.4-.3 3.7-2.34 4.2-4.63.52-2.3.52-4.26.38-4.63-.14-.37-.5-.58-1.03-.82z"
      />
    </svg>
);

const WhatsAppButton = () => {
    // TODO: Replace with your actual phone number in international format (e.g., 1234567890)
    const phoneNumber = "YOUR_PHONE_NUMBER_HERE";
    const message = "Hello! I saw your portfolio and I'd like to connect.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <Link 
            href={whatsappUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
            aria-label="Contact me on WhatsApp"
        >
            <WhatsAppIcon className="h-8 w-8" />
        </Link>
    );
}

export default WhatsAppButton;
