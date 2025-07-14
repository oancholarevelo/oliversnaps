'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { ChevronLeft, ChevronRight, Star, MapPin } from 'lucide-react';
import { portfolioImages, services, testimonials, serviceAreas } from '@/lib/data'; 
import { Section, SectionTitle, SectionSubtitle } from '@/components/ui/Section';

// Dynamically import the map component with SSR disabled
const InteractiveMap = dynamic(() => import('@/components/InteractiveMap').then(mod => mod.InteractiveMap), {
  ssr: false,
  loading: () => <div className="bg-gray-200 w-full h-full animate-pulse" /> 
});


export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 7000); // Autoplay every 7 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="w-full p-4 sm:p-6 md:p-8 bg-white" style={{ height: 'calc(100vh - 5rem)' }}>
        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center text-center text-white">
          <Image
            src="https://placehold.co/1600x900/4338ca/ffffff?text=Your+Best+Shot"
            alt="A stunning wedding photograph taken in Rizal by OliverSnaps"
            className="absolute inset-0 w-full h-full object-cover"
            fill
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 p-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Your Story, in Focus.</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">Wedding, Portrait, and Event Photography in Rodriguez (Montalban), Rizal and beyond.</p>
            <Link href="/booking" className="mt-8 inline-block px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-500 transition-all transform hover:scale-105 active:scale-100">
              Book Your Session
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
              <Image
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                width={600}
                height={800}
              />
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
          <div className="bg-white p-8 rounded-2xl shadow-md text-center flex flex-col border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900">Portrait Session</h3>
            <p className="mt-2 text-3xl font-bold text-indigo-600">Starts at ₱8,000</p>
            <p className="mt-4 text-gray-600 flex-grow">A 1-2 hour session perfect for individuals, couples, or families. Includes 20 professionally edited, high-resolution photos delivered in a private online gallery.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md text-center flex flex-col border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900">Wedding Package</h3>
            <p className="mt-2 text-3xl font-bold text-indigo-600">Starts at ₱45,000</p>
            <p className="mt-4 text-gray-600 flex-grow">Full-day coverage to capture every moment of your special day. Includes 8 hours of photography, over 400 edited images, and a complimentary prenup session.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md text-center flex flex-col border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900">Event Photography</h3>
            <p className="mt-2 text-3xl font-bold text-indigo-600">Starts at ₱10,000</p>
            <p className="mt-4 text-gray-600 flex-grow">Professional coverage for corporate functions, debuts, birthdays, and other special occasions. Includes a minimum of 2 hours and 50+ high-quality photos per hour.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md text-center flex flex-col border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900">Product & Brand</h3>
            <p className="mt-2 text-3xl font-bold text-indigo-600">Request a Quote</p>
            <p className="mt-4 text-gray-600 flex-grow">Elevate your brand with stunning product photography. I offer both studio and on-location shoots tailored to your brand's unique aesthetic.</p>
          </div>
        </div>
      </Section>

      {/* Service Areas Section */}
      <Section className="bg-gray-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-80 md:h-full rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <InteractiveMap />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center md:text-left">
              Servicing Rizal and Beyond
            </h2>
            <p className="mt-4 max-w-2xl mx-auto md:mx-0 text-lg text-gray-600 text-center md:text-left">
              I am based in Rodriguez (Montalban), Rizal, and available for photography sessions throughout the Rizal province and nearby areas.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {serviceAreas && serviceAreas.map((area) => (
                <div 
                  key={area.name} 
                  className="bg-white p-4 rounded-xl shadow-md flex items-start space-x-4 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-indigo-500" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">{area.name}</h5>
                    <p className="text-sm text-gray-600">{area.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      
      {/* Enhanced Testimonials Carousel Section */}
      <Section className="bg-white">
        <SectionTitle>What My Clients Say</SectionTitle>
        <SectionSubtitle>Real stories from happy clients.</SectionSubtitle>
        <div className="relative mt-12 max-w-2xl mx-auto">
          <div className="overflow-hidden">
            <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className="bg-gray-50 p-8 rounded-2xl shadow-sm flex flex-col items-center text-center h-full">
                      <Image
                        src={testimonial.avatar}
                        alt={`Avatar of ${testimonial.name}`}
                        width={80}
                        height={80}
                        className="rounded-full ring-4 ring-white"
                      />
                      <p className="mt-6 text-lg italic text-gray-700 flex-grow">"{testimonial.quote}"</p>
                      <div className="mt-6">
                          <p className="font-semibold text-gray-900">{testimonial.name}</p>
                          <div className="flex justify-center mt-2">
                              {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
                          </div>
                      </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button 
              onClick={prevTestimonial} 
              className="absolute top-1/2 -left-3 md:-left-12 -translate-y-1/2 p-2 rounded-full bg-white/60 hover:bg-white transition-colors shadow-md z-10"
              aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button 
              onClick={nextTestimonial} 
              className="absolute top-1/2 -right-3 md:-right-12 -translate-y-1/2 p-2 rounded-full bg-white/60 hover:bg-white transition-colors shadow-md z-10"
              aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex space-x-2">
            {testimonials.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-2 w-2 rounded-full transition-colors ${currentTestimonial === index ? 'bg-indigo-600' : 'bg-gray-300 hover:bg-gray-400'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}