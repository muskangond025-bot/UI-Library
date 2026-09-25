import React from 'react';
import { SectionLibraryCard } from './SectionLibraryCard';
import { HeroBanner } from '../sections/HeroBanner';
import { mockHeroBanner, mockHeroBanner2 } from '../../data/mock-sections/hero-banner';

interface GridProps {
  category: string;
  onSelectSection: (sectionId: string) => void;
}

export function SectionLibraryGrid({ category, onSelectSection }: GridProps) {
  const sections = [
    { 
      id: 'hero-banner-1', 
      title: 'Standard Hero', 
      description: 'Centered text with background image',
      previewComponent: <HeroBanner section={mockHeroBanner as any} />
    },
    { 
      id: 'hero-banner-2', 
      title: 'Left-Aligned Hero', 
      description: 'Left-aligned text with light theme and overlay',
      previewComponent: <HeroBanner section={mockHeroBanner2 as any} />
    },
    { id: 'hero-banner-3', title: 'Video Hero', description: 'Background video with overlay text' },
  ];

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
