'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, Copy, CheckCircle } from 'lucide-react';
import { portfolioData } from '@/data';

export default function Contact() {
    const { email, phone, linkedin, github } = portfolioData.personalInfo;
    const [copied, setCopied] = useState(false);
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');

        // Construct mailto link
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

        // Open mail client
        window.location.href = mailtoLink;

        setTimeout(() => {
            setFormStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setFormStatus('idle'), 3000);
        }, 1000);
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                        Let's <span className="text-neutral-400">Collaborate</span>.
                    </h2>
                    <p className="text-neutral-400 text-lg mb-12">
                        Whether you have a question, a project idea, or just want to discuss the latest in AI — I'm all ears.
                    </p>

                    <div className="space-y-6">
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

                        <div className="flex gap-4 pt-4">
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

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-neutral-900/50 border border-white/5 backdrop-blur-md shadow-2xl">
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2">Name</label>
                            <input
                                type="text" id="name" required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-neutral-800 border-neutral-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all placeholder:text-neutral-600"
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2">Email</label>
                            <input
                                type="email" id="email" required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-neutral-800 border-neutral-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all placeholder:text-neutral-600"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="mb-8">
                            <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-2">Message</label>
                            <textarea
                                id="message" rows={4} required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full bg-neutral-800 border-neutral-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all resize-none placeholder:text-neutral-600"
                                placeholder="I'd love to discuss..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={formStatus === 'submitting' || formStatus === 'success'}
                            className={`w-full py-4 rounded-lg font-bold text-black transition-all flex items-center justify-center gap-2 ${formStatus === 'success'
                                ? 'bg-green-500 text-white hover:bg-green-600'
                                : 'bg-white hover:bg-neutral-200'
                                }`}
                        >
                            {formStatus === 'submitting' ? (
                                <span className="animate-pulse">Opening Mail App...</span>
                            ) : formStatus === 'success' ? (
                                <>Sent! <CheckCircle className="w-5 h-5" /></>
                            ) : (
                                <>Send Message <Send className="w-5 h-5" /></>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
