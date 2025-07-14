import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // 1. Import Inter
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// 2. Setup the Inter font
const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter' 
});

export const metadata: Metadata = {
  title: 'OliverSnaps - Creative Photography',
  description: 'Capturing life\'s moments, one frame at a time.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 3. Apply the new font variable */}
      <body className={`${inter.variable} font-sans bg-white text-gray-800 antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}