// src/components/Header.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Camera, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
];

const NavLink = ({ href, children }: { href: string; children: React.ReactNode; }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
        isActive
          ? 'text-indigo-600'
          : 'text-gray-500 hover:text-indigo-600'
      }`}
    >
      {children}
    </Link>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-40 w-full border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Header Layout */}
        <div className="hidden md:grid md:grid-cols-3 md:items-center md:h-20">
          {/* Left: Logo */}
          <div className="justify-self-start">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
              <Camera className="h-8 w-8 text-indigo-600 group-hover:animate-pulse" />
              <span className="text-2xl font-bold text-gray-900 tracking-tight">OliverSnaps</span>
            </Link>
          </div>

          {/* Center: Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-x-2 lg:gap-x-4">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>{link.name}</NavLink>
            ))}
          </nav>

          {/* Right: CTA Button */}
          <div className="justify-self-end">
            <Link href="/booking" className="inline-block px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors text-sm">
              Book Now
            </Link>
          </div>
        </div>

        {/* Mobile Header Layout */}
        <div className="md:hidden flex items-center justify-between h-20">
           <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
            <Camera className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-900 tracking-tight">OliverSnaps</span>
          </Link>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-xl text-gray-500 hover:text-indigo-600 hover:bg-gray-100">
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {[...navLinks, {name: 'Booking', href: '/booking'}].map((link) => (
               <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-3 rounded-lg text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-indigo-600"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}