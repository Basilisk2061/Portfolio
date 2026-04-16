'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap, BadgeCheck, ExternalLink } from 'lucide-react';
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
        <section id="education" className="py-16 md:py-28 border-t border-neutral-900 relative">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                {/* Journey Timeline */}
                <div className="mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-8 h-px bg-neutral-600" />
                            <span className="text-xs text-neutral-500 font-semibold uppercase tracking-widest">Experience</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Journey
                        </h2>
                    </motion.div>

                    <div className="relative border-l border-neutral-800 ml-2 space-y-10">
                        {timelineItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -15 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-8"
                            >
                                <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-800 border-2 border-neutral-500" />

                                <h3 className="text-lg font-semibold text-white mb-1">
                                    {item.title}
                                </h3>
                                <div className="flex items-center gap-2 text-sm text-neutral-500 mb-2">
                                    <item.icon className="w-3.5 h-3.5" />
                                    {item.subtitle}
                                </div>
                                <span className="text-xs text-neutral-600 font-medium">
                                    {item.date}
                                </span>
                                <p className="text-neutral-400 leading-relaxed text-sm mt-2">
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
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-8 h-px bg-neutral-600" />
                        <span className="text-xs text-neutral-500 font-semibold uppercase tracking-widest">Recognition</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">
                        Achievements
                    </h2>

                    {/* Featured Hackathon Wins - Horizontal */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-12">
                        {achievements.featured.map((item, index) => {
                            const isGold = index === 0;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`group overflow-hidden rounded-xl bg-neutral-900/60 transition-all ${
                                        isGold
                                            ? 'border border-amber-600/30 hover:border-amber-500/50'
                                            : 'border border-neutral-800/60 hover:border-neutral-700'
                                    }`}
                                >
                                    <div className="aspect-video w-full overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <div className="flex justify-between items-start mb-1.5">
                                            <h3 className={`text-sm font-semibold ${isGold ? 'text-amber-200' : 'text-white'}`}>
                                                {item.title}
                                            </h3>
                                            <span className="text-[10px] text-neutral-600 font-medium shrink-0 ml-2">{item.date}</span>
                                        </div>
                                        <p className="text-neutral-500 text-xs leading-relaxed mb-3">
                                            {item.description}
                                        </p>
                                        {item.link && (
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="relative z-10 inline-flex items-center gap-1 text-[11px] font-medium text-neutral-500 hover:text-white transition-colors cursor-pointer"
                                            >
                                                LinkedIn <ExternalLink className="w-3 h-3" />
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Certifications & Other */}
                    <h4 className="text-neutral-600 text-xs font-semibold uppercase tracking-widest mb-4">Certifications & More</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                        {achievements.others.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 + 0.2 }}
                                className="p-3 rounded-lg bg-neutral-900/40 border border-neutral-800/40 flex items-start gap-3"
                            >
                                <BadgeCheck className="w-3.5 h-3.5 text-neutral-600 mt-0.5 shrink-0" />
                                <p className="text-neutral-400 text-sm leading-snug">{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
