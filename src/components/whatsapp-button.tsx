"use client";

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const WhatsAppButton = () => {
    const phoneNumber = "+233242403450";
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
            <Image src="/images/social.png" alt="WhatsApp" width={32} height={32} />
        </Link>
    );
}

export default WhatsAppButton;
