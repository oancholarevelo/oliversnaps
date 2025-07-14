'use client';

import React, { useState } from 'react';
import { portfolioImages } from '@/lib/data';
import { Section, SectionTitle, SectionSubtitle } from '@/components/ui/Section';

export default function PortfolioPage() {
    const [filter, setFilter] = useState('All');
    const categories = ['All', ...Array.from(new Set(portfolioImages.map(img => img.category)))];
    const filteredImages = filter === 'All' ? portfolioImages : portfolioImages.filter(img => img.category === filter);

    return (
        <Section className="bg-white animate-fade-in">
            <SectionTitle>Portfolio</SectionTitle>
            <SectionSubtitle>A collection of moments and stories I've captured.</SectionSubtitle>
            
            <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mt-8">
                {categories.map(cat => (
                    <button 
                        key={cat} 
                        onClick={() => setFilter(cat)}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${filter === cat ? 'bg-indigo-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
                {filteredImages.map(image => (
                    <div key={image.id} className="group relative overflow-hidden rounded-2xl shadow-lg aspect-w-3 aspect-h-4">
                        <img src={image.src} alt={image.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 transition-all duration-300 opacity-0 group-hover:opacity-100">
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                                <p className="text-gray-200 text-sm">{image.category}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
