import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';

export default function AboutPage() {
  return (
    // Further reduced vertical padding to make the section more compact
    <section className="animate-fade-in py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-2 md:order-1 text-lg text-gray-700">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">My Story</h1>
            <p className="mt-6">
              Hello! I'm Oliver Revelo, a passionate photographer with a love for capturing life's authentic moments. For me, it all started with a hand-me-down film camera and a trip through the beautiful landscapes of Rizal. I discovered that I wasn't just taking pictures; I was preserving stories, one frame at a time.
            </p>
            <p className="mt-4">
              My approach is to blend into the background, capturing the genuine, unposed moments – the quiet tear during the vows, the burst of laughter between friends, the serene confidence in a portrait. I combine this documentary style with an eye for artistic composition and light to create images that are both timeless and deeply personal.
            </p>
            <p className="mt-4">
              Based in the scenic town of Rodriguez, Rizal, I'm constantly inspired by the natural beauty and vibrant communities around me. Let's connect and create something beautiful together!
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image 
              src="https://placehold.co/600x700/e0e7ff/4338ca?text=Oliver's+Photo" 
              alt="A photo of the photographer, Oliver Revelo" 
              className="rounded-2xl shadow-2xl"
              width={520}
              height={520}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}