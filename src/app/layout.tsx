import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'leaflet/dist/leaflet.css';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConditionalCTA from '@/components/ConditionalCTA';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter' 
});

// --- UPDATED METADATA OBJECT ---
export const metadata: Metadata = {
  // Your existing title and description
  title: 'OliverSnaps | Photographer in Rodriguez (Montalban), Rizal',
  description: 'Professional photographer in Rodriguez (Montalban), Rizal, specializing in weddings, portraits, and events. Capturing your story with beautiful, timeless photos.',
  
  // New Open Graph and Twitter metadata
  openGraph: {
    title: 'OliverSnaps | Photographer in Rodriguez (Montalban), Rizal',
    description: 'Capturing your story with beautiful, timeless photos.',
    // IMPORTANT: Replace with your actual website domain
    url: 'https://www.oliversnaps.vercel.app', 
    siteName: 'OliverSnaps',
    images: [
      {
        // This is the recommended image for sharing
        url: 'https://www.oliversnaps.vercel.app/logo.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OliverSnaps | Photographer in Rodriguez (Montalban), Rizal',
    description: 'Capturing your story with beautiful, timeless photos.',
    images: ['https://www.oliversnaps.vercel.app/logo.webp'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-white text-gray-800 antialiased`}>
        <Header />
        <main>{children}</main>
        <ConditionalCTA />
        <Footer />
      </body>
    </html>
  );
}