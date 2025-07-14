import React from 'react';
import Link from 'next/link';
import { MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">OliverSnaps</h3>
            <p className="text-gray-400">Timeless stories, captured with artistry.</p>
            <div className="flex items-center text-gray-400">
               <MapPin className="h-5 w-5 mr-2" />
               <span>Rodriguez, Rizal, Philippines</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Me</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/booking" className="text-gray-400 hover:text-white transition-colors">Book Now</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Connect</h3>
            <p className="mt-4 text-gray-400">Follow my work on social media.</p>
             <div className="flex mt-4 space-x-4">
                <a href="https://www.instagram.com/olidgaf_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://www.facebook.com/oliverevelo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                {/* Add other social links here */}
             </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} OliverSnaps. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}