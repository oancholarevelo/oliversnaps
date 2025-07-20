'use client';

import React, { useState } from 'react';
import { portfolioImages } from '@/lib/data';
import { Section, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import Image from 'next/image';
import { WeeklyGalleryModal } from '@/components/WeeklyGalleryModal'; // Import the new component
import { PortfolioImage } from '@/lib/data';

// Helper function to group images by week
const groupImagesByWeek = (images: PortfolioImage[]) => {
    const groups: { [key: string]: PortfolioImage[] } = {};

    // Sort images by date descending to process them chronologically
    const sortedImages = [...images].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    sortedImages.forEach(image => {
        const date = new Date(image.date);
        const year = date.getFullYear();
        // Get the week number (0-51)
        const firstDayOfYear = new Date(year, 0, 1);
        const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
        const weekNumber = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
        
        const key = `${year}-W${weekNumber}`;
        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(image);
    });

    return Object.entries(groups);
};


export default function PortfolioPage() {
    const [selectedWeek, setSelectedWeek] = useState<PortfolioImage[] | null>(null);

    const weeklyGalleries = groupImagesByWeek(portfolioImages);

    return (
        <>
            <Section className="bg-white animate-fade-in">
                <SectionTitle>My Portfolio</SectionTitle>
                <SectionSubtitle>A collection of my work, week by week. Click on any week to see the full set.</SectionSubtitle>
                
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {weeklyGalleries.map(([weekKey, images]) => (
                        <div 
                            key={weekKey} 
                            className="group relative overflow-hidden rounded-2xl shadow-lg aspect-w-3 aspect-h-4 cursor-pointer"
                            onClick={() => setSelectedWeek(images)}
                        >
                            <Image 
                              src={images[0].src} // Use the first image as the cover
                              alt={`Cover for ${weekKey}`}
                              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                              width={600}
                              height={800}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                                <h3 className="text-white text-xl font-semibold">{images[0].title} & more...</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {selectedWeek && (
                <WeeklyGalleryModal images={selectedWeek} onClose={() => setSelectedWeek(null)} />
            )}
        </>
    );
};