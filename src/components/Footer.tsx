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
        </footer>
    );
}
