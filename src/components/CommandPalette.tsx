'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, ArrowRight, Github, Linkedin, FileText, Home, User, Code2, FolderKanban, Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { portfolioData } from '@/data';

interface Action {
    id: string;
    label: string;
    icon: React.ElementType;
    shortcut?: string[];
    perform: () => void;
}

export default function CommandPalette() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const router = useRouter();

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setIsOpen((open) => !open);
            }
        };
        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    const actions: Action[] = [
        { id: 'home', label: 'Go to Home', icon: Home, perform: () => router.push('#home') },
        { id: 'about', label: 'Go to About', icon: User, perform: () => router.push('#about') },
        { id: 'skills', label: 'Go to Skills', icon: Code2, perform: () => router.push('#skills') },
        { id: 'projects', label: 'Go to Projects', icon: FolderKanban, perform: () => router.push('#projects') },
        { id: 'contact', label: 'Go to Contact', icon: Mail, perform: () => router.push('#contact') },
        { id: 'github', label: 'Visit GitHub', icon: Github, perform: () => window.open(portfolioData.personalInfo.github, '_blank') },
        { id: 'linkedin', label: 'Visit LinkedIn', icon: Linkedin, perform: () => window.open(portfolioData.personalInfo.linkedin, '_blank') },
        { id: 'resume', label: 'View Resume', icon: FileText, perform: () => window.open(portfolioData.personalInfo.resumeUrl, '_blank') },
    ];

    const filteredActions = actions.filter((action) =>
        action.label.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="relative w-full max-w-lg bg-neutral-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                    >
                        <div className="flex items-center px-4 py-3 border-b border-white/5 gap-3">
                            <Search className="w-5 h-5 text-neutral-500" />
                            <input
                                autoFocus
                                type="text"
                                placeholder="Type a command or search..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="flex-grow bg-transparent text-white placeholder-neutral-500 focus:outline-none text-base"
                            />
                            <span className="text-xs text-neutral-600 border border-white/5 rounded px-1.5 py-0.5 shadow-sm">
                                ESC
                            </span>
                        </div>

                        <div className="py-2 max-h-[300px] overflow-y-auto custom-scrollbar">
                            {filteredActions.length === 0 ? (
                                <div className="px-4 py-8 text-center text-neutral-500">
                                    No results found.
                                </div>
                            ) : (
                                filteredActions.map((action) => (
                                    <button
                                        key={action.id}
                                        onClick={() => {
                                            action.perform();
                                            setIsOpen(false);
                                        }}
                                        className="w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-white/5 transition-colors group"
                                    >
                                        <action.icon className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
                                        <span className="flex-grow text-neutral-300 group-hover:text-white">
                                            {action.label}
                                        </span>
                                        <ArrowRight className="w-4 h-4 text-neutral-600 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                    </button>
                                ))
                            )}
                        </div>

                        <div className="px-4 py-2 bg-neutral-950/50 border-t border-white/5 text-xs text-neutral-600 text-right">
                            <span className="opacity-75">ProTip: Use arrows to navigate (coming soon)</span>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
