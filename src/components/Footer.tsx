'use client';

import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-8 bg-neutral-950/50 text-center text-sm text-neutral-500 border-t border-white/5">
            <div className="flex items-center justify-center gap-2 mb-2">
                <span>© {new Date().getFullYear()} Arya Dahal.</span>
                <span className="hidden sm:inline">All rights reserved.</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 opacity-75 hover:opacity-100 transition-opacity">
                Built with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse-slow" /> using Next.js & Tailwind CSS.
            </div>
        </footer>
    );
}
