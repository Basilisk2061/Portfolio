'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, GraduationCap, Award, BadgeCheck } from 'lucide-react';
import { portfolioData } from '@/data';

export default function Education() {
    const { education, leadership, achievements } = portfolioData;

    const timelineItems = [
        ...education.map((edu) => ({
            type: 'education',
            title: edu.degree,
            subtitle: edu.institution,
            date: edu.year,
            description: edu.description,
            icon: GraduationCap,
        })),
        ...leadership.map((lead) => ({
            type: 'leadership',
            title: lead.role,
            subtitle: lead.organization,
            date: '2022 - Present', // Assuming relevant date
            description: lead.description,
            icon: Briefcase,
        })),
    ].sort((a, b) => (a.date > b.date ? -1 : 1)); // Sort by date descending (simple string sort might not be perfect, but works for years)

    return (
        <section id="education" className="py-24 bg-neutral-900/40 relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                {/* Timeline Column */}
                <div>
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

                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neutral-200 transition-colors">
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

                {/* Achievements Column */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="sticky top-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white flex items-center gap-3">
                            <Award className="text-white w-8 h-8" />
                            Achievements
                        </h2>

                        <div className="grid gap-4">
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-4 rounded-xl bg-neutral-800/30 border border-white/5 hover:bg-neutral-800/50 hover:border-white/20 transition-all group flex items-start gap-4"
                                >
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                        <BadgeCheck className="w-5 h-5 text-white" />
                                    </div>
                                    <p className="text-neutral-300 font-medium pt-1">
                                        {achievement}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
