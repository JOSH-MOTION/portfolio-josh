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
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.044-.53-.044-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.52-1.29.37-.775.37-1.39.255-1.562-.114-.172-.24-.287-.53-.287z M16 .005C7.17.005 0 7.18 0 16.005c0 4.367 1.723 8.332 4.557 11.254L0 32l4.812-4.72c2.81 1.62 6.033 2.52 9.422 2.52 8.83 0 16-7.174 16-15.995S24.83.005 16 .005zm0 29.5c-3.3 0-6.428-1.2-8.8-3.32l-.6-.37-6.52 6.4.1-1.38c-2.422-2.7-3.8-6.1-3.8-9.665C.5 8.81.9 1 16 1c7.73 0 14 6.27 14 14s-6.27 14.5-14 14.5z"/>
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
