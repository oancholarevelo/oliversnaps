// In a real app, this data would likely come from a CMS or database.

export interface PortfolioImage {
  id: number;
  src: string;
  title: string;
  date: string; 
}

export interface Testimonial {
    name: string;
    quote: string;
    rating: number;
}

export interface Service {
    name: string;
    price: string;
    description: string;
}

export const portfolioImages: PortfolioImage[] = [
  { id: 1, src: "https://placehold.co/600x800/e0e7ff/4338ca?text=Portrait+1", title: "Urban Serenity", date: "2025-07-14" },
  { id: 2, src: "https://placehold.co/800x600/e5e7eb/374151?text=Wedding+1", title: "Golden Hour Vows", date: "2025-07-13" },
  { id: 3, src: "https://placehold.co/600x800/d1fae5/065f46?text=Events+1", title: "Corporate Gala", date: "2025-07-12" },
  { id: 4, src: "https://placehold.co/800x600/fef3c7/92400e?text=Portraits+2", title: "Candid Laughter", date: "2025-07-11" },
  { id: 5, src: "https://placehold.co/600x800/fee2e2/991b1b?text=Weddings+2", title: "First Dance", date: "2025-07-10" },
  { id: 6, src: "https://placehold.co/800x600/f3f4f6/1f2937?text=Product+1", title: "Artisanal Craft", date: "2025-07-09" },
  { id: 7, src: "https://placehold.co/600x800/e0e7ff/4338ca?text=Portraits+3", title: "Studio Elegance", date: "2025-06-20" },
  { id: 8, src: "https://placehold.co/800x600/d1fae5/065f46?text=Events+2", title: "Concert Lights", date: "2025-06-19" },
];

export const testimonials: Testimonial[] = [
  { name: "Sarah & Tom", quote: "The photos are absolutely breathtaking! You captured our wedding day perfectly. We can't stop looking at them.", rating: 5 },
  { name: "Creative Minds Inc.", quote: "Professional, efficient, and delivered outstanding photos for our corporate event. Highly recommended!", rating: 5 },
  { name: "Jessica L.", quote: "An amazing experience from start to finish. Made me feel so comfortable during the portrait session, and the results were stunning.", rating: 5 },
];

export const services: Service[] = [
  { name: "Portrait Session", price: "Starts at ₱8,000", description: "1-2 hour session, 20 edited photos, online gallery." },
  { name: "Wedding Package", price: "Starts at ₱45,000", description: "8 hours coverage, 400+ edited photos, engagement session." },
  { name: "Event Photography", price: "Starts at ₱10,000", description: "Min. 2 hours, 50+ photos per hour, for events." },
  { name: "Product Shots", price: "Request a Quote", description: "Studio or on-location shots for your brand." },
];