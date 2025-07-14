import React from 'react';
import { Section } from '@/components/ui/Section';

export default function AboutPage() {
  return (
    <Section className="bg-white animate-fade-in">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="order-2 md:order-1 text-lg text-gray-700">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">About Me</h1>
          <p className="mt-6">Hello! I'm Alex Doe, a passionate photographer based in the vibrant city of Taguig. My journey with photography started over a decade ago, and it has been an incredible adventure of seeing the world through a different lens.</p>
          <p className="mt-4">I believe that a great photograph is more than just a picture; it's a story, a captured emotion, a frozen moment in time. My style is a blend of documentary and fine art, focusing on authentic moments and beautiful light.</p>
          <p className="mt-4">Let's connect and create something beautiful together!</p>
        </div>
        <div className="order-1 md:order-2">
          <img src="https://placehold.co/600x700/e0e7ff/4338ca?text=Your+Photo" alt="Photographer" className="rounded-2xl shadow-2xl w-full" />
        </div>
      </div>
    </Section>
  );
}
