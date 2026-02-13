'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import { portfolioData } from '@/data';

export default function Hero() {
    const { title, subtitle, name } = portfolioData.personalInfo;

    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/20 to-neutral-950 z-[1]" />
            <ParticleBackground />

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight"
                >
                    <span className="text-white block mb-4">{name}</span>
                    <span className="text-neutral-400 block text-2xl md:text-4xl font-normal tracking-tight">
                        {title}
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
                >
                    {subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <a
                        href="/Arya_Dahal_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-8 py-4 bg-white text-black rounded-full font-medium transition-all hover:bg-neutral-200 flex items-center gap-2"
                    >
                        View Resume
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a
                        href="/Arya_Dahal_Resume.pdf"
                        download="Arya_Dahal_Resume.pdf"
                        className="px-8 py-4 bg-transparent border border-white/20 rounded-full font-medium text-white hover:bg-white/5 transition-all flex items-center gap-2"
                    >
                        Download Resume
                        <Download className="w-4 h-4" />
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 5, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-500"
            >
                <div className="w-[1px] h-8 bg-neutral-700 mx-auto" />
            </motion.div>
        </section>
    );
}
