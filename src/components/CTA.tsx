// src/components/CTA.tsx
import React from 'react';
import Link from 'next/link';

export default function CTA() {
  return (
    // This outer container adds the horizontal and bottom margins
    <div className="bg-white px-4 sm:px-6 md:px-8 pb-12 md:pb-16">
      {/* I've reduced the border-radius from 3xl to 2xl */}
      <div className="relative bg-indigo-700 rounded-2xl">
        {/* I've adjusted the max-width and padding to give the text more space */}
        <div className="max-w-3xl mx-auto text-center py-16 px-6 sm:py-20 sm:px-8 lg:px-10">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to tell your story?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Let&apos;s create timeless images that feel truly you. I&apos;m excited to help bring your vision to life.
          </p>
          <Link
            href="/booking"
            className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto transition-all duration-300 transform hover:scale-105"
          >
            Book Your Session
          </Link>
        </div>
      </div>
    </div>
  );
}