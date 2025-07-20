// src/app/about/page.tsx

import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';

export default function AboutPage() {
  return (
    <Section className="animate-fade-in bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image Composition (Moved to be first in code) */}
          <div
            // The order classes swap the layout on desktop.
            // On mobile: image is first. On desktop: image is second.
            className="order-1 md:order-2 relative w-full 
                       aspect-video md:aspect-auto md:h-[550px]" // Use aspect-video on mobile, fixed height on desktop
          >
            {/* Main Image (Portrait of you) */}
            <Image
              // Consider changing this to a portrait of yourself!
              src="/oliver_revelo.webp"
              alt="Oliver Revelo, a photographer in Rodriguez, Rizal"
              className="relative z-10 object-cover w-full h-full rounded-2xl shadow-2xl"
              width={500}
              height={600}
              priority
            />
          </div>

          {/* Text Content (Moved to be second in code) */}
          <div className="order-2 md:order-1 text-gray-700">
            <p className="font-semibold text-indigo-600 uppercase tracking-wider">
              Meet The Photographer
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mt-2">
              A Little About Me
            </h1>
            <p className="mt-6 text-lg">
              Hello! I&apos;m Oliver Revelo, a passionate photographer based in the scenic town of Rodriguez (Montalban), Rizal. My journey started with a simple goal: to preserve stories, one frame at a time.
            </p>

            <blockquote className="mt-6 pl-4 border-l-4 border-indigo-200 text-lg italic text-gray-800 bg-indigo-50/50 p-4 rounded-r-lg">
              My approach is to blend into the background, capturing the genuine, unposed moments – the quiet tear, the burst of laughter, the serene confidence.
            </blockquote>

            <p className="mt-6 text-lg">
              I combine this documentary style with an eye for artistic composition and light to create images that are both timeless and deeply personal. Let&apos;s connect and create something beautiful together!
            </p>
          </div>

        </div>
      </div>
    </Section>
  );
}