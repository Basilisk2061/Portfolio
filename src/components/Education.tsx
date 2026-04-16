'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap, Award, BadgeCheck } from 'lucide-react';
import { portfolioData } from '@/data';

export default function Education() {
    const { education, achievements } = portfolioData;

    const timelineItems = education.map((edu) => ({
        title: edu.degree,
        subtitle: edu.institution,
        date: edu.year,
        description: edu.description,
        icon: GraduationCap,
    }));

    return (
        <section id="education" className="py-24 bg-neutral-900/40 relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

            <div className="max-w-6xl mx-auto px-6">
                {/* Journey Timeline */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white flex items-center gap-3">
                            <span className="bg-white w-2 h-12 rounded-full" />
                            Journey
                        </h2>
                    </motion.div>

                    <div className="relative border-l-2 border-neutral-800 ml-3 space-y-12">
                        {timelineItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-8"
                            >
                                <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neutral-900 border-2 border-white" />

                                <h3 className="text-xl font-bold text-white mb-1">
                                    {item.title}
                                </h3>
                                <div className="flex items-center gap-2 text-sm text-neutral-400 mb-2 font-medium">
                                    <item.icon className="w-4 h-4" />
                                    {item.subtitle}
                                </div>
                                <div className="text-xs text-neutral-500 mb-3 bg-neutral-800/50 px-2 py-1 inline-block rounded border border-white/5">
                                    <Calendar className="w-3 h-3 inline mr-1" />
                                    {item.date}
                                </div>
                                <p className="text-neutral-400 leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Achievements Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-10 text-white flex items-center gap-3">
                        <Award className="text-white w-8 h-8" />
                        Achievements
                    </h2>

                    {/* Featured Hackathon Wins - Horizontal */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {achievements.featured.map((item, index) => {
                            const isGold = index === 0;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`group overflow-hidden rounded-2xl bg-neutral-800/20 transition-all ${
                                        isGold
                                            ? 'border border-amber-500/40 shadow-[0_0_20px_rgba(245,158,11,0.08)] hover:border-amber-400/60 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]'
                                            : 'border border-white/5 hover:border-white/20'
                                    }`}
                                >
                                    <div className="aspect-video w-full overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className={`text-base font-bold ${isGold ? 'text-amber-200' : 'text-white'}`}>
                                                {item.title}
                                            </h3>
                                            <span className="text-xs text-neutral-500 font-medium shrink-0 ml-2">{item.date}</span>
                                        </div>
                                        <p className="text-neutral-400 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Certifications & Other */}
                    <h4 className="text-neutral-400 text-sm font-bold uppercase tracking-wider mb-4">Certifications & More</h4>
                    <div className="grid md:grid-cols-3 gap-3">
                        {achievements.others.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 + 0.3 }}
                                className="p-3 rounded-lg bg-neutral-800/30 border border-white/5 flex items-start gap-3"
                            >
                                <BadgeCheck className="w-4 h-4 text-neutral-500 mt-0.5 shrink-0" />
                                <p className="text-neutral-300 text-sm leading-snug">{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
