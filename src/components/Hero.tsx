'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import { portfolioData } from '@/data';

export default function Hero() {
    const { title, subtitle, name } = portfolioData.personalInfo;

    return (
        <section id="home" className="relative h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/20 to-neutral-950 z-[1]" />
            <ParticleBackground />

            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
                {/* Text Side */}
                <div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl md:text-6xl font-bold tracking-tight mb-5 leading-[1.1]"
                    >
                        <span className="text-white">{name}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.25 }}
                        className="text-lg text-neutral-400 mb-2 font-medium"
                    >
                        {title}
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.35 }}
                        className="text-sm text-neutral-500 max-w-md mb-10 leading-relaxed"
                    >
                        {subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-wrap gap-3"
                    >
                        <a
                            href="/Arya_Dahal_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group px-6 py-2.5 bg-white text-black rounded-full text-sm font-semibold transition-all hover:bg-neutral-200 flex items-center gap-2"
                        >
                            View Resume
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </a>

                        <a
                            href="/Arya_Dahal_Resume.pdf"
                            download="Arya_Dahal_Resume.pdf"
                            className="px-6 py-2.5 border border-white/15 rounded-full text-sm font-medium text-neutral-300 hover:text-white hover:border-white/30 transition-all flex items-center gap-2"
                        >
                            Download
                            <Download className="w-3.5 h-3.5" />
                        </a>
                    </motion.div>
                </div>

                {/* Avatar Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.3 }}
                    className="hidden md:flex justify-center items-center"
                >
                    <div className="relative w-72 h-72 lg:w-80 lg:h-80">
                        {/* Subtle ring behind the avatar */}
                        <div className="absolute inset-0 rounded-full border border-neutral-800/50" />
                        <div className="absolute -inset-3 rounded-full border border-neutral-800/20" />
                        {/* Avatar image */}
                        <img
                            src="/avatar.png"
                            alt="Arya Dahal"
                            className="w-full h-full object-cover rounded-full"
                        />
                        {/* Subtle bottom fade so the image blends into the dark background */}
                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-neutral-950 to-transparent rounded-b-full" />
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 4, 0] }}
                transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-px h-8 bg-neutral-700" />
            </motion.div>
        </section>
    );
}
