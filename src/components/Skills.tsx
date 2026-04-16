'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '@/context/PortfolioContext';
import { portfolioData } from '@/data';

export default function Skills() {
    const { setActiveFilter, scrollToProjects } = usePortfolio();
    const { skills } = portfolioData;

    const categories = Object.keys(skills) as Array<keyof typeof skills>;

    const handleSkillClick = (skill: string) => {
        setActiveFilter(skill);
        scrollToProjects();
    };

    return (
        <section id="skills" className="py-28 border-t border-neutral-900 relative">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-8 h-px bg-neutral-600" />
                        <span className="text-xs text-neutral-500 font-semibold uppercase tracking-widest">Skills</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        Technical Arsenal
                    </h2>
                    <p className="text-neutral-500 text-sm">
                        Click a skill to filter related projects.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.07 }}
                            className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800/60 hover:border-neutral-700 transition-colors"
                        >
                            <h3 className="text-sm font-bold mb-5 text-neutral-300 uppercase tracking-wider flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-neutral-500" />
                                {category}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {skills[category].map((skill) => (
                                    <button
                                        key={skill}
                                        onClick={() => handleSkillClick(skill)}
                                        className="px-3 py-1.5 text-xs rounded-md bg-neutral-800/80 border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white transition-all"
                                    >
                                        {skill}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
