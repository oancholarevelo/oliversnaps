'use client';

import React from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { PortfolioImage } from '@/lib/data';

interface WeeklyGalleryModalProps {
  images: PortfolioImage[];
  onClose: () => void;
}

export const WeeklyGalleryModal = ({ images, onClose }: WeeklyGalleryModalProps) => {
  // Handle Escape key press to close the modal
  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose} // Close modal on background click
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
      >
        <X size={32} />
      </button>

      <div 
        className="w-full max-w-6xl max-h-full overflow-y-auto p-4"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the content
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image) => (
            <div key={image.id} className="relative aspect-w-3 aspect-h-4 rounded-lg overflow-hidden">
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};