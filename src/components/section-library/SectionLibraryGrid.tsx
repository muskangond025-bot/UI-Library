import React from 'react';
import { SectionLibraryCard } from './SectionLibraryCard';
import { Banner1 } from '../Banner/banner-1/Banner1';
import { Banner2 } from '../Banner/banner-2/Banner2';
import { Banner3 } from '../Banner/banner-3/Banner3';
import { mockHeroBanner2, mockHeroBanner3 } from '../../data/mock-sections/hero-banner';
import banner1Data from '../Banner/banner-1/banner-1.json';

interface GridProps {
  category: string;
  onSelectSection: (sectionId: string) => void;
}

export function SectionLibraryGrid({ category, onSelectSection }: GridProps) {
  // Configured the first 3 actual components
  const baseHeroSections = [
    { 
      id: 'banner-1', 
      title: 'Cinematic Editorial', 
      description: 'Premium fashion editorial with massive typography and parallax',
      previewComponent: <Banner1 section={banner1Data as any} />
    },
    { 
      id: 'banner-2', 
      title: 'Left-Aligned Hero', 
      description: 'Left-aligned text with light theme and overlay',
      previewComponent: <Banner2 section={mockHeroBanner2 as any} />
    },
    { 
      id: 'banner-3', 
      title: 'Awwwards / Motion Hero', 
      description: 'Ultra-premium tech layout with giant typography',
      previewComponent: <Banner3 section={mockHeroBanner3 as any} />
    },
  ];

  // Generate placeholders for banner-4 through banner-20
  const placeholderHeroSections = Array.from({ length: 17 }).map((_, i) => ({
    id: `banner-${i + 4}`,
    title: `Banner ${i + 4}`,
    description: `Design placeholder for Banner ${i + 4}`,
    previewComponent: undefined
  }));

  const sections = category === 'hero' 
    ? [...baseHeroSections, ...placeholderHeroSections] 
    : [];

  if (category === 'hero-carousel') {
    return (
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Hero Carousel</h2>
        <p className="text-gray-500 mb-8">This category will be populated later as requested.</p>
      </div>
    );
  }

  return (
    <div className="p-8 lg:p-12 max-w-7xl mx-auto w-full">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 capitalize">{category} Sections</h2>
        <p className="text-gray-500 mt-2 text-lg">Browse and preview reusable sections for the {category} category.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map(section => (
          <SectionLibraryCard 
            key={section.id}
            title={section.title}
            description={section.description}
            previewComponent={section.previewComponent}
            onClick={() => onSelectSection(section.id)}
          />
        ))}
      </div>
    </div>
  );
}
