import React from 'react';
import Link from 'next/link';
import { MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 md:py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
          {/* Column 1: Brand Info (Full width on mobile) */}
          <div className="mb-10 md:mb-0 space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">OliverSnaps</h3>
            <p className="text-gray-600">Timeless stories, captured with artistry.</p>
            <div className="flex items-center text-gray-600">
               <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
               <span>Rodriguez, Rizal, Philippines</span>
            </div>
          </div>
          
          {/* Wrapper for Links and Connect, spans 2 columns on desktop */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-8">
              {/* Column 2: Quick Links */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
                <ul className="mt-4 space-y-2">
                  <li><Link href="/about" className="text-gray-600 hover:text-indigo-600 transition-colors">About Me</Link></li>
                  <li><Link href="/portfolio" className="text-gray-600 hover:text-indigo-600 transition-colors">Portfolio</Link></li>
                  <li><Link href="/booking" className="text-gray-600 hover:text-indigo-600 transition-colors">Book Now</Link></li>
                </ul>
              </div>
              {/* Column 3: Social Connect */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Connect</h3>
                <ul className="mt-4 space-y-2">
                    <li>
                        <a href="https://www.instagram.com/olidgaf_" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                            <Instagram className="h-5 w-5 mr-2" />
                            Instagram
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/oliverevelo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                            <Facebook className="h-5 w-5 mr-2" />
                            Facebook
                        </a>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-6 text-sm text-gray-500 md:mt-12 md:pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} OliverSnaps. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}