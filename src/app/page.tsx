'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { portfolioImages, services, testimonials } from '@/lib/data';
import { Section, SectionTitle, SectionSubtitle } from '@/components/ui/Section';

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="w-full p-4 sm:p-6 md:p-8 bg-white" style={{ height: 'calc(100vh - 5rem)' }}>
        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center text-center text-white">
          {/* Background Image */}
          <img 
            src="https://placehold.co/1600x900/4338ca/ffffff?text=OliverSnaps+Portfolio" 
            alt="Hero Background" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Text Content */}
          <div className="relative z-10 p-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Capturing Moments, Creating Memories</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">Professional photography for weddings, portraits, and events.</p>
            <Link href="/booking" className="mt-8 inline-block px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-500 transition-all transform hover:scale-105 active:scale-100">
              Book a Session
            </Link>
          </div>
        </div>
      </section>

      {/* Mini Portfolio */}
      <Section className="bg-gray-50">
        <SectionTitle>My Work</SectionTitle>
        <SectionSubtitle>A glimpse into the stories I've had the honor to tell.</SectionSubtitle>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {portfolioImages.slice(0, 6).map(image => (
            <div key={image.id} className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img src={image.src} alt={image.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-lg font-semibold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/portfolio" className="px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gray-800 hover:bg-gray-700">View Full Portfolio</Link>
        </div>
      </Section>

      {/* Services Section */}
      <Section className="bg-white">
        <SectionTitle>Services & Pricing</SectionTitle>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map(service => (
            <div key={service.name} className="bg-white p-8 rounded-2xl shadow-md text-center flex flex-col border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
              <p className="mt-2 text-3xl font-bold text-indigo-600">{service.price}</p>
              <p className="mt-4 text-gray-600 flex-grow">{service.description}</p>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Testimonials Section */}
      <Section className="bg-gray-50">
        <SectionTitle>What My Clients Say</SectionTitle>
        <div className="max-w-3xl mx-auto relative mt-8">
           <div className="overflow-hidden relative h-48 flex items-center justify-center">
              {testimonials.map((testimonial, index) => (
                  <div key={index} className={`absolute w-full transition-opacity duration-500 ease-in-out text-center ${index === currentTestimonial ? 'opacity-100' : 'opacity-0'}`}>
                      <p className="text-xl italic text-gray-700">"{testimonial.quote}"</p>
                      <p className="mt-4 font-semibold text-gray-900">- {testimonial.name}</p>
                      <div className="flex justify-center mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
                      </div>
                  </div>
              ))}
           </div>
           <button onClick={prevTestimonial} className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 p-2 rounded-full bg-white/60 hover:bg-white transition-colors shadow-md">
              <ChevronLeft className="h-6 w-6 text-gray-600" />
           </button>
           <button onClick={nextTestimonial} className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 sm:translate-x-12 p-2 rounded-full bg-white/60 hover:bg-white transition-colors shadow-md">
              <ChevronRight className="h-6 w-6 text-gray-600" />
           </button>
        </div>
      </Section>
    </div>
  );
}
