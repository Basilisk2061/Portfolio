'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Copy, CheckCircle } from 'lucide-react';
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
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10" />

            <div className="max-w-4xl mx-auto px-6">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">
                        Let's <span className="text-neutral-400">Collaborate</span>.
                    </h2>
                    <p className="text-neutral-400 text-lg mb-12 text-center max-w-2xl mx-auto">
                        Whether you have a question, a project idea, or just want to discuss the latest in AI — I'm all ears.
                    </p>

                    <div className="space-y-6 max-w-2xl mx-auto">
                        <div className="group flex items-center gap-4 p-4 rounded-xl bg-neutral-800/30 border border-white/5 hover:border-white/20 transition-all">
                            <div className="p-3 rounded-full bg-white/5 text-neutral-400 group-hover:text-white transition-colors">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div className="flex-grow">
                                <p className="text-sm text-neutral-500">Email</p>
                                <p className="text-white font-medium">{email}</p>
                            </div>
                            <button
                                onClick={handleCopy}
                                className="p-2 text-neutral-500 hover:text-white transition-colors relative"
                                title="Copy Email"
                            >
                                {copied ? <CheckCircle className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                            </button>
                        </div>

                        <div className="group flex items-center gap-4 p-4 rounded-xl bg-neutral-800/30 border border-white/5 hover:border-white/20 transition-all">
                            <div className="p-3 rounded-full bg-white/5 text-neutral-400 group-hover:text-white transition-colors">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-neutral-500">Phone</p>
                                <p className="text-white font-medium">{phone}</p>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4 justify-center">
                            <a
                                href={linkedin} target="_blank" rel="noopener noreferrer"
                                className="p-4 rounded-full bg-neutral-800 border border-white/10 hover:bg-white hover:text-black transition-all duration-300 text-neutral-400"
                            >
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a
                                href={github} target="_blank" rel="noopener noreferrer"
                                className="p-4 rounded-full bg-neutral-800 border border-white/10 hover:bg-white hover:text-black transition-all duration-300 text-neutral-400"
                            >
                                <Github className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
