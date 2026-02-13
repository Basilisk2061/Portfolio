'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Laptop, Database, Globe } from 'lucide-react';
import { portfolioData } from '@/data';

const icons = [UserCheck, Laptop, Database, Globe];

export default function About() {
    const { summary, quickFacts } = portfolioData.about;

    return (
        <section id="about" className="py-24 bg-neutral-900/50 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-2 mb-6 text-neutral-400 font-semibold tracking-wide uppercase text-sm">
                        <span className="w-8 h-px bg-neutral-400" />
                        About Me
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                        Building Logic with <span className="text-neutral-400">Precision</span>.
                    </h2>

                    <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                        {summary}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        {['Python', 'Flutter', 'React', 'AI/ML'].map((tech) => (
                            <span key={tech} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors cursor-default text-neutral-300">
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Cards Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid sm:grid-cols-2 gap-4"
                >
                    {quickFacts.map((fact, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <div
                                key={index}
                                className="p-6 rounded-2xl bg-neutral-800/50 border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1 group"
                            >
                                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                                    <Icon className="w-6 h-6 text-neutral-400 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{fact.label}</h3>
                                <p className="text-sm text-neutral-400">{fact.value}</p>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
