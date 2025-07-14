import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ children, className = '' }: SectionProps) => (
  <section className={`py-16 sm:py-24 ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
);

export const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl">
    {children}
  </h2>
);

export const SectionSubtitle = ({ children }: { children: React.ReactNode }) => (
    <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-gray-600">
        {children}
    </p>
);
