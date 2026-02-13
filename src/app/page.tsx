'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CommandPalette from '@/components/CommandPalette';
import { PortfolioProvider } from '@/context/PortfolioContext';

export default function Home() {
  return (
    <PortfolioProvider>
      <main className="relative min-h-screen bg-neutral-950 text-white selection:bg-neutral-700/50">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
        <CommandPalette />
      </main>
    </PortfolioProvider>
  );
}
