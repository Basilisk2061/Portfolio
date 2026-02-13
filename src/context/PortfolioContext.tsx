'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PortfolioContextType {
    activeFilter: string | null;
    setActiveFilter: (filter: string | null) => void;
    scrollToProjects: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider = ({ children }: { children: ReactNode }) => {
    const [activeFilter, setActiveFilter] = useState<string | null>(null);

    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <PortfolioContext.Provider value={{ activeFilter, setActiveFilter, scrollToProjects }}>
            {children}
        </PortfolioContext.Provider>
    );
};

export const usePortfolio = () => {
    const context = useContext(PortfolioContext);
    if (context === undefined) {
        throw new Error('usePortfolio must be used within a PortfolioProvider');
    }
    return context;
};
