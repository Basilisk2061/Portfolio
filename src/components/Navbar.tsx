'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Code2, Users, FolderKanban, Mail } from 'lucide-react';

const navItems = [
    { name: 'About', href: '#about', icon: Users },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Projects', href: '#projects', icon: FolderKanban },
    { name: 'Experience', href: '#education', icon: Terminal },
    { name: 'Contact', href: '#contact', icon: Mail },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-slate-950/80 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'}`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link href="#" className="font-bold text-xl tracking-tighter flex items-center gap-2 group">
                    <Terminal className="w-6 h-6 text-white group-hover:text-neutral-300 transition-colors" />
                    <span className="text-white group-hover:text-neutral-300 transition-colors">Arya.dev</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-neutral-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 relative group"
                        >
                            <span>{item.name}</span>
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                        </Link>
                    ))}
                    <a
                        href="/Arya_Dahal_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-neutral-200 transition-colors"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2 text-neutral-400 hover:text-white"
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 backdrop-blur-lg border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center gap-3 text-lg text-neutral-400 hover:text-white transition-colors"
                                >
                                    <item.icon className="w-5 h-5" />
                                    {item.name}
                                </Link>
                            ))}
                            <a
                                href="/Arya_Dahal_Resume.pdf"
                                download="Arya_Dahal_Resume.pdf"
                                className="mt-4 w-full py-3 bg-white text-black rounded-lg text-center font-bold"
                            >
                                Download Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </motion.nav>
    );
}
