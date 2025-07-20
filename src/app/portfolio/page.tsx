'use client';

import React from 'react';
import Link from 'next/link';
import { portfolioImages } from '@/lib/data';
import { Section, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import Image from 'next/image';
import { PortfolioImage } from '@/lib/data';

// Helper function to group images by category and get a cover image
const getCategoryGalleries = (images: PortfolioImage[]) => {
    const categories: { [key: string]: PortfolioImage[] } = {};

    images.forEach(image => {
        if (!categories[image.category]) {
            categories[image.category] = [];
        }
        categories[image.category].push(image);
    });

    return Object.entries(categories).map(([category, images]) => ({
        name: category,
        coverImage: images[0], // Use the first image as the cover
        count: images.length,
    }));
};


export default function PortfolioPage() {
    const categoryGalleries = getCategoryGalleries(portfolioImages);

    return (
        <Section className="bg-white animate-fade-in">
            <SectionTitle>My Portfolio</SectionTitle>
            <SectionSubtitle>A collection of my work. Click on a category to see the full set.</SectionSubtitle>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {categoryGalleries.map((gallery) => (
                    <Link
                        href={`/portfolio/${gallery.name}`}
                        key={gallery.name}
                        className="group relative block overflow-hidden rounded-2xl shadow-lg aspect-w-3 aspect-h-4"
                    >
                        <Image
                          src={gallery.coverImage.src}
                          alt={`Cover for ${gallery.name}`}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                          width={600}
                          height={800}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                            <div>
                                <h3 className="text-white text-2xl font-semibold capitalize">{gallery.name}</h3>
                                <p className="text-white/80 text-sm">{gallery.count} Photos</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </Section>
    );
};