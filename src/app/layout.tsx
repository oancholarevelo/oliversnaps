import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'leaflet/dist/leaflet.css';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConditionalCTA from '@/components/ConditionalCTA'; // Import the new conditional component

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter' 
});

export const metadata: Metadata = {
  title: 'OliverSnaps | Photographer in Rodriguez (Montalban), Rizal',
  description: 'Professional photographer in Rodriguez (Montalban), Rizal, specializing in weddings, portraits, and events. Capturing your story with beautiful, timeless photos.',
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
        <ConditionalCTA /> {/* Use the conditional component here */}
        <Footer />
      </body>
    </html>
  );
}