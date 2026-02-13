'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Code2, Layers, Briefcase, ChevronRight, FilterX } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';
import { portfolioData } from '@/data';
import ProjectModal from './ProjectModal';

// Type inference
type Project = typeof portfolioData.projects[0];

export default function Projects() {
    const { activeFilter, setActiveFilter } = usePortfolio();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Extract all unique tags
    const allTags = Array.from(new Set(portfolioData.projects.flatMap(p => p.tags)));

    const filteredProjects = portfolioData.projects.filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = activeFilter ? project.tags.some(tag => tag === activeFilter) : true;
        return matchesSearch && matchesFilter;
    });

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
        <section id="projects" className="py-24 bg-neutral-950 relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-900 to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                        Selected Works
                    </h2>

                    <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                        {/* Search Bar */}
                        <div className="relative w-full md:w-96 group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-white transition-colors w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search projects..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all placeholder:text-neutral-600"
                            />
                        </div>

                        {/* Filter Chips */}
                        <div className="flex flex-wrap gap-2 items-center justify-end w-full">
                            <button
                                onClick={() => setActiveFilter(null)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${!activeFilter
                                    ? 'bg-white text-black'
                                    : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                All
                            </button>
                            {allTags.slice(0, 5).map(tag => ( // Show top 5 tags or logic to show relevant ones
                                <button
                                    key={tag}
                                    onClick={() => setActiveFilter(activeFilter === tag ? null : tag)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${activeFilter === tag
                                        ? 'bg-white text-black border-transparent'
                                        : 'bg-transparent border-white/10 text-neutral-400 hover:border-white/20 hover:text-white'
                                        }`}
                                >
                                    {tag}
                                </button>
                            ))}
                            {activeFilter && !allTags.slice(0, 5).includes(activeFilter) && (
                                <button
                                    onClick={() => setActiveFilter(null)}
                                    className="px-4 py-2 rounded-full text-sm font-medium transition-all border bg-white text-black border-transparent"
                                >
                                    {activeFilter}
                                </button>
                            )}
                            {activeFilter && (
                                <button
                                    onClick={() => setActiveFilter(null)}
                                    className="p-2 text-neutral-500 hover:text-white transition-colors"
                                    title="Clear Filter"
                                >
                                    <FilterX className="w-5 h-5" />
                                </button>
                            )}
                        </div>
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => handleProjectClick(project)}
                                className="group relative bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full flex flex-col"
                            >
                                {/* Image Placeholder */}
                                <div className="h-48 bg-neutral-800 relative overflow-hidden group-hover:bg-neutral-800 transition-colors">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Code2 className="w-12 h-12 text-neutral-700 group-hover:text-white transition-all duration-500 group-hover:scale-110" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-neutral-900 to-transparent opacity-50" />

                                    {/* Floating Tags */}
                                    <div className="absolute bottom-4 left-4 flex gap-2">
                                        {project.tags.slice(0, 2).map((tag, i) => (
                                            <span key={i} className="text-xs font-semibold px-2 py-1 rounded-md bg-black/50 text-neutral-300 backdrop-blur-sm border border-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                        {project.tags.length > 2 && (
                                            <span className="text-xs font-semibold px-2 py-1 rounded-md bg-black/50 text-neutral-300 backdrop-blur-sm border border-white/5">
                                                +{project.tags.length - 2}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors flex items-center gap-2">
                                        {project.title}
                                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-neutral-400" />
                                    </h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-xs font-medium text-neutral-500">
                                        <span className="flex items-center gap-1.5">
                                            <Layers className="w-3.5 h-3.5" />
                                            {project.tags[0]}
                                        </span>
                                        <span className="group-hover:text-white transition-colors">View Details →</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 text-neutral-500">
                        <p className="text-xl">No projects found for the current filter.</p>
                        <button
                            onClick={() => { setActiveFilter(null); setSearchQuery(''); }}
                            className="mt-4 text-white hover:underline"
                        >
                            Clear filters
                        </button>
                    </div>
                )}
            </div>

            <ProjectModal
                project={selectedProject} // Removed 'as any'
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
}
