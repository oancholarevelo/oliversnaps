'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation'; // Import the useParams hook
import { portfolioImages } from '@/lib/data';
import { Section, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import { ArrowLeft } from 'lucide-react';

export default function CategoryPage() {
  const params = useParams(); // Use the hook to get params
  const category = Array.isArray(params.category) ? params.category[0] : params.category;

  if (!category) {
    // You can add a loading state or return null while params are not available
    return <p>Loading...</p>;
  }

  // Filter images based on the category from the URL
  const images = portfolioImages.filter(img => img.category === category);
  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <Section className="bg-white animate-fade-in">
      <div className="relative mb-8 text-center">
        <Link href="/portfolio" className="absolute left-0 top-1/2 -translate-y-1/2 inline-flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Portfolio
        </Link>
        <SectionTitle>{categoryTitle}</SectionTitle>
        <SectionSubtitle>A collection of my {category} photography.</SectionSubtitle>
      </div>

      {images.length > 0 ? (
        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map(image => (
            <div key={image.id} className="group relative aspect-w-3 aspect-h-4 overflow-hidden rounded-xl shadow-lg">
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-12">No images found in this category.</p>
      )}
    </Section>
  );
}