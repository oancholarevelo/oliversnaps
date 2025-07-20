'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { portfolioImages } from '@/lib/data';
import { Section, SectionTitle, SectionSubtitle } from '@/components/ui/Section';

// Import the lightbox component and its styles
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function CategoryPage() {
  // State to manage the lightbox: -1 means closed, otherwise it's the image index
  const [index, setIndex] = useState(-1);

  const params = useParams();
  const rawCategory = Array.isArray(params.category) ? params.category[0] : params.category;

  if (!rawCategory) {
    return <p className="text-center">Loading...</p>;
  }

  const category = decodeURIComponent(rawCategory);
  const images = portfolioImages.filter(img => img.category === category);
  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <Section className="bg-white animate-fade-in">
      {/* Back button and title section remains the same */}
      <div className="text-center mb-8">
          <SectionTitle>{categoryTitle}</SectionTitle>
          <SectionSubtitle>A collection of my {category} photography.</SectionSubtitle>
      </div>

      {/* MODIFIED IMAGE GRID */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image, i) => (
          <div
            key={image.id}
            className="overflow-hidden rounded-xl shadow-lg cursor-pointer group"
            onClick={() => setIndex(i)} // Open the lightbox at the clicked image index
          >
            <Image
              src={image.src}
              alt={image.title}
              // By using width/height, we no longer need 'fill' or the aspect-ratio plugin
              width={600}
              height={800}
              className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {/* LIGHTBOX COMPONENT */}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images} // Pass the filtered images as slides
      />
    </Section>
  );
}