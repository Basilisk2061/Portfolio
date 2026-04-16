'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Copy, CheckCircle, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '@/data';

export default function Contact() {
    const { email, phone, linkedin, github } = portfolioData.personalInfo;
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-16 md:py-28 border-t border-neutral-900 relative">
            <div className="max-w-2xl mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-3 mb-8">
                        <span className="w-8 h-px bg-neutral-600" />
                        <span className="text-xs text-neutral-500 font-semibold uppercase tracking-widest">Contact</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Let's work together.
                    </h2>
                    <p className="text-neutral-500 text-base mb-10 leading-relaxed">
                        Have a project idea or just want to connect? I'd love to hear from you.
                    </p>

                    <div className="space-y-3 mb-8">
                        {/* Email */}
                        <div className="group flex items-center gap-4 p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/60 hover:border-neutral-700 transition-colors">
                            <Mail className="w-5 h-5 text-neutral-500 group-hover:text-neutral-300 transition-colors shrink-0" />
                            <div className="flex-grow min-w-0">
                                <p className="text-xs text-neutral-600 mb-0.5">Email</p>
                                <p className="text-sm text-white font-medium truncate">{email}</p>
                            </div>
                            <button
                                onClick={handleCopy}
                                className="p-1.5 text-neutral-600 hover:text-white transition-colors"
                                title="Copy Email"
                            >
                                {copied ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                            </button>
                        </div>

                        {/* Phone */}
                        <div className="group flex items-center gap-4 p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/60 hover:border-neutral-700 transition-colors">
                            <Phone className="w-5 h-5 text-neutral-500 group-hover:text-neutral-300 transition-colors shrink-0" />
                            <div>
                                <p className="text-xs text-neutral-600 mb-0.5">Phone</p>
                                <p className="text-sm text-white font-medium">{phone}</p>
                            </div>
                        </div>
                    </div>

                    {/* Send Message */}
                    <a
                        href={`mailto:${email}?subject=Hello%20Arya`}
                        className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors mb-10"
                    >
                        Send a Message
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>

                    {/* Social Links */}
                    <div className="flex gap-3 pt-6 border-t border-neutral-800/60">
                        <a
                            href={linkedin} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-colors text-neutral-400 hover:text-white text-sm"
                        >
                            <Linkedin className="w-4 h-4" />
                            LinkedIn
                        </a>
                        <a
                            href={github} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-colors text-neutral-400 hover:text-white text-sm"
                        >
                            <Github className="w-4 h-4" />
                            GitHub
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
