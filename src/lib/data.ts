// In a real app, this data would likely come from a CMS or database.

export interface PortfolioImage {
  id: number;
  src: string;
  title: string;
  date: string;
  category: 'portrait' | 'landscape';
}

export interface Testimonial {
    name: string;
    quote: string;
    rating: number;
    avatar: string; // This line fixes the error
}

export interface Service {
    name: string;
    price: string;
    description: string;
}

export const serviceAreas = [
    {
        name: 'Rodriguez (Montalban)',
        description: 'My home base, perfect for scenic pre-nups and outdoor shoots.'
    },
    {
        name: 'San Mateo',
        description: 'Covering events and portraits in this vibrant neighboring town.'
    },
    {
        name: 'Antipolo City',
        description: 'Available for church weddings, events, and sessions in the city highlands.'
    },
    {
        name: 'Marikina City',
        description: 'Capturing moments in the lively city, from parks to urban settings.'
    },
    {
        name: 'Cainta',
        description: 'Capturing memories in the bustling heart of this nearby municipality.'
    },
    {
        name: 'Taytay',
        description: 'Offering photography services for families and businesses in the area.'
    },
];

const landscapes = Array.from({ length: 84 }, (_, i) => ({
  id: i + 1,
  src: `/images/landscapes/landscape_${i + 1}.webp`, // Corrected path
  title: `Landscape ${i + 1}`,
  date: new Date().toISOString(),
  category: 'landscape' as const,
}));

const portraits = Array.from({ length: 84 }, (_, i) => ({
  id: i + 85,
  src: `/images/portraits/portrait_${i + 1}.webp`, // Corrected path
  title: `Portrait ${i + 1}`,
  date: new Date().toISOString(),
  category: 'portrait' as const,
}));


export const portfolioImages: PortfolioImage[] = [
  ...landscapes,
  ...portraits
];

export const testimonials: Testimonial[] = [
  { name: "Sarah & Tom", quote: "The photos are absolutely breathtaking! You captured our wedding day perfectly. We can't stop looking at them.", rating: 5, avatar: "https://placehold.co/100x100/e0e7ff/4338ca?text=S&T" },
  { name: "Creative Minds Inc.", quote: "Professional, efficient, and delivered outstanding photos for our corporate event. Highly recommended!", rating: 5, avatar: "https://placehold.co/100x100/d1fae5/065f46?text=CM" },
  { name: "Jessica L.", quote: "An amazing experience from start to finish. Made me feel so comfortable during the portrait session, and the results were stunning.", rating: 5, avatar: "https://placehold.co/100x100/fef3c7/92400e?text=JL" },
];