'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Monitor, Server, Tag } from 'lucide-react';

interface Project {
    id: string;
    title: string;
    impact: string;
    tags: string[];
    description: string;
    repoUrl?: string;
    modalContent: {
        problem: string;
        solution: string;
        features: string[];
        technical: string;
        learned: string;
    };
}

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-neutral-900 border border-white/10 rounded-2xl shadow-2xl shadow-black/50 custom-scrollbar"
                    >
                        {/* Header Image Placeholder or Gradient */}
                        <div className="h-48 bg-neutral-900 relative overflow-hidden border-b border-white/5">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_40%)]" />
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white/70 hover:text-white transition-colors backdrop-blur-sm"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="absolute bottom-6 left-6 md:left-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h2>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium text-neutral-200 border border-white/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="p-6 md:p-8 space-y-8">
                            {/* Problem & Solution */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h3 className="flex items-center gap-2 text-xl font-semibold text-white">
                                        <Monitor className="text-neutral-400" /> The Problem
                                    </h3>
                                    <p className="text-neutral-400 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                                        {project.modalContent.problem}
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="flex items-center gap-2 text-xl font-semibold text-white">
                                        <Server className="text-neutral-400" /> The Solution
                                    </h3>
                                    <p className="text-neutral-400 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                                        {project.modalContent.solution}
                                    </p>
                                </div>
                            </div>

                            {/* Key Features */}
                            <div>
                                <h3 className="flex items-center gap-2 text-xl font-semibold text-white mb-4">
                                    <Tag className="text-neutral-400" /> Key Features
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {project.modalContent.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3 p-3 bg-neutral-800/30 rounded-lg border border-white/5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                                            <span className="text-neutral-300">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Technical Details */}
                            <div className="space-y-4 border-t border-white/10 pt-6">
                                <h3 className="text-xl font-semibold text-white">Technical Highlights</h3>
                                <p className="text-neutral-400 leading-relaxed">
                                    {project.modalContent.technical}
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4 pt-4">
                                <button
                                    onClick={() => window.open(project.repoUrl || '#', '_blank')}
                                    className="w-full py-3 bg-neutral-100 text-neutral-900 font-bold rounded-xl hover:bg-white transition-colors border border-white/10 flex items-center justify-center gap-2"
                                >
                                    <Github className="w-5 h-5" /> View Source Code
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
