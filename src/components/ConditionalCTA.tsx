'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import CTA from './CTA';

export default function ConditionalCTA() {
  const pathname = usePathname();
  
  // If the user is on the booking page, don't render the CTA.
  if (pathname === '/booking') {
    return null;
  }
  
  // Otherwise, render the CTA.
  return <CTA />;
}