'use client';

import React from 'react';

export default function Footer() {
    return (
        <footer className="py-6 border-t border-neutral-900 text-center">
            <p className="text-xs text-neutral-600">
                © {new Date().getFullYear()} Arya Dahal
            </p>
        </footer>
    );
}
