'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Laptop, Database } from 'lucide-react';
import { portfolioData } from '@/data';

const icons = [UserCheck, Laptop, Database];

export default function About() {
    const { summary, quickFacts } = portfolioData.about;

    return (
        <section id="about" className="py-16 md:py-28 relative">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-5 gap-8 md:gap-16 items-start">
                    {/* Text Side — takes 3 columns */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="md:col-span-3"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-8 h-px bg-neutral-600" />
                            <span className="text-xs text-neutral-500 font-semibold uppercase tracking-widest">About</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white leading-snug">
                            Building software with <span className="text-neutral-500">intention</span>.
                        </h2>

                        <p className="text-neutral-400 text-base leading-[1.8] mb-8">
                            {summary}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {['Python', 'Flutter', 'FastAPI', 'AI/ML'].map((tech) => (
                                <span key={tech} className="px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs font-medium text-neutral-400">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Cards Side — takes 2 columns */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="md:col-span-2 space-y-4"
                    >
                        {quickFacts.map((fact, index) => {
                            const Icon = icons[index % icons.length];
                            return (
                                <div
                                    key={index}
                                    className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800/60 hover:border-neutral-700 transition-colors group"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <Icon className="w-4 h-4 text-neutral-500 group-hover:text-neutral-300 transition-colors" />
                                        <h3 className="text-sm font-semibold text-neutral-300 uppercase tracking-wide">{fact.label}</h3>
                                    </div>
                                    <p className="text-sm text-neutral-500 pl-7">{fact.value}</p>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
