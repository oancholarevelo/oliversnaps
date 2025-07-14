// In a real app, this data would likely come from a CMS or database.

export interface PortfolioImage {
  id: number;
  src: string;
  category: string;
  title: string;
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
  { id: 1, src: "https://placehold.co/600x800/e0e7ff/4338ca?text=Portrait+1", category: "Portraits", title: "Urban Serenity" },
  { id: 2, src: "https://placehold.co/800x600/e5e7eb/374151?text=Wedding+1", category: "Weddings", title: "Golden Hour Vows" },
  { id: 3, src: "https://placehold.co/600x800/d1fae5/065f46?text=Events+1", category: "Events", title: "Corporate Gala" },
  { id: 4, src: "https://placehold.co/800x600/fef3c7/92400e?text=Portraits+2", category: "Portraits", title: "Candid Laughter" },
  { id: 5, src: "https://placehold.co/600x800/fee2e2/991b1b?text=Weddings+2", category: "Weddings", title: "First Dance" },
  { id: 6, src: "https://placehold.co/800x600/f3f4f6/1f2937?text=Product+1", category: "Product", title: "Artisanal Craft" },
  { id: 7, src: "https://placehold.co/600x800/e0e7ff/4338ca?text=Portraits+3", category: "Portraits", title: "Studio Elegance" },
  { id: 8, src: "https://placehold.co/800x600/d1fae5/065f46?text=Events+2", category: "Events", title: "Concert Lights" },
];

export const testimonials: Testimonial[] = [
  { name: "Sarah & Tom", quote: "The photos are absolutely breathtaking! You captured our wedding day perfectly. We can't stop looking at them.", rating: 5 },
  { name: "Creative Minds Inc.", quote: "Professional, efficient, and delivered outstanding photos for our corporate event. Highly recommended!", rating: 5 },
  { name: "Jessica L.", quote: "An amazing experience from start to finish. Made me feel so comfortable during the portrait session, and the results were stunning.", rating: 5 },
];

export const services: Service[] = [
  { name: "Portrait Session", price: "Starting at $350", description: "1-2 hour session, 20 edited photos, online gallery." },
  { name: "Wedding Package", price: "Starting at $2,500", description: "8 hours coverage, 400+ edited photos, engagement session." },
  { name: "Event Photography", price: "Starting at $500", description: "Min. 2 hours, 50+ photos per hour, for events." },
  { name: "Product Shots", price: "Request a Quote", description: "Studio or on-location shots for your brand." },
];
