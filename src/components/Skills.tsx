'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '@/context/PortfolioContext'; // Use shared context
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
        <section id="skills" className="py-24 bg-neutral-900/40 relative">
            <div className="absolute inset-0 bg-dotted-pattern opacity-[0.03]" />
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                        Technical Arsenal
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        My stack for building scalable, high-performance applications.
                        <br />
                        <span className="text-sm text-neutral-500 mt-2 block">
                            (Click a skill to filter projects)
                        </span>
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-neutral-800/20 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-white/20 transition-colors group"
                        >
                            <h3 className="text-xl font-bold capitalize mb-6 text-white group-hover:text-neutral-200 transition-colors flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                                {category}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {skills[category].map((skill) => (
                                    <button
                                        key={skill}
                                        onClick={() => handleSkillClick(skill)}
                                        className="px-3 py-1.5 text-sm rounded-md bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 text-neutral-300 hover:text-white transition-all duration-300"
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
