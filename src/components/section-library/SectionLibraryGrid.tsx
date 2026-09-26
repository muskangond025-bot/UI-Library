import React from 'react';
import { SectionLibraryCard } from './SectionLibraryCard';
import { Banner1 } from '../Banner/banner-1/Banner1';
import { Banner2 } from '../Banner/banner-2/Banner2';
import { Banner3 } from '../Banner/banner-3/Banner3';
import { Banner4 } from '../Banner/banner-4/Banner4';
import { Banner5 } from '../Banner/banner-5/Banner5';
import { Banner6 } from '../Banner/banner-6/Banner6';
import { Banner7 } from '../Banner/banner-7/Banner7';
import { Banner8 } from '../Banner/banner-8/Banner8';
import { Banner9 } from '../Banner/banner-9/Banner9';
import { Banner10 } from '../Banner/banner-10/Banner10';
import { Banner11 } from '../Banner/banner-11/Banner11';
import { Banner12 } from '../Banner/banner-12/Banner12';
import { Banner13 } from '../Banner/banner-13/Banner13';
import { Banner14 } from '../Banner/banner-14/Banner14';
import banner1Data from '../Banner/banner-1/banner-1.json';
import banner2Data from '../Banner/banner-2/banner-2.json';
import banner3Data from '../Banner/banner-3/banner-3.json';
import banner4Data from '../Banner/banner-4/banner-4.json';
import banner5Data from '../Banner/banner-5/banner-5.json';
import banner6Data from '../Banner/banner-6/banner-6.json';
import banner7Data from '../Banner/banner-7/banner-7.json';
import banner8Data from '../Banner/banner-8/banner-8.json';
import banner9Data from '../Banner/banner-9/banner-9.json';
import banner10Data from '../Banner/banner-10/banner-10.json';
import banner11Data from '../Banner/banner-11/banner-11.json';
import banner12Data from '../Banner/banner-12/banner-12.json';
import banner13Data from '../Banner/banner-13/banner-13.json';
import banner14Data from '../Banner/banner-14/banner-14.json';

interface GridProps {
  category: string;
  onSelectSection: (sectionId: string) => void;
}

export function SectionLibraryGrid({ category, onSelectSection }: GridProps) {
  // Configured the first 10 actual components (skipping 10)
  const baseHeroSections = [
    { 
      id: 'banner-1', 
      title: 'Cinematic Editorial', 
      description: 'Premium fashion editorial with massive typography and parallax',
      previewComponent: <Banner1 section={banner1Data as any} />
    },
    { 
      id: 'banner-2', 
      title: 'Split Editorial', 
      description: 'Interactive cinematic split screen for dual categories',
      previewComponent: <Banner2 section={banner2Data as any} />
    },
    { 
      id: 'banner-3', 
      title: 'Architectural Frame', 
      description: 'Gallery-style minimal frame reveal with exclusion text',
      previewComponent: <Banner3 section={banner3Data as any} />
    },
    { 
      id: 'banner-4', 
      title: 'Light Sweep Product Editorial', 
      description: 'High-end ecommerce layout with cinematic light sweep',
      previewComponent: <Banner4 section={banner4Data as any} />
    },
    { 
      id: 'banner-5', 
      title: 'Editorial Magazine Cover', 
      description: 'Premium print magazine layout with strict grids',
      previewComponent: <Banner5 section={banner5Data as any} />
    },
    { 
      id: 'banner-6', 
      title: 'Kinetic Typography Editorial', 
      description: 'Motion-driven asymmetrical layout with endless marquee',
      previewComponent: <Banner6 section={banner6Data as any} />
    },
    { 
      id: 'banner-7', 
      title: 'Editorial Orbit', 
      description: 'Sophisticated luxury campaign with minimal orbital rings',
      previewComponent: <Banner7 section={banner7Data as any} />
    },
    { 
      id: 'banner-8', 
      title: 'Cinematic Layered Gallery', 
      description: 'Photographic layers assembled into an editorial collage',
      previewComponent: <Banner8 section={banner8Data as any} />
    },
    { 
      id: 'banner-9', 
      title: 'Kinetic Curtain / Stage', 
      description: 'Cinematic sliding stage panels with continuous camera pan',
      previewComponent: <Banner9 section={banner9Data as any} />
    },
    { 
      id: 'banner-10', 
      title: 'Interactive 3D Editorial', 
      description: 'Physical campaign object with pointer tilt and 3D flip details',
      previewComponent: <Banner10 section={banner10Data as any} />
    },
    { 
      id: 'banner-11', 
      title: 'Interactive Magnetic Canvas', 
      description: 'Uiverse-inspired micro-interactions with cursor-reactive spotlights',
      previewComponent: <Banner11 section={banner11Data as any} />
    },
    { 
      id: 'banner-12', 
      title: 'Premium Animated Hero', 
      description: 'Cinematic entry with glassmorphism and Framer Motion animations',
      previewComponent: <Banner12 section={banner12Data as any} />
    },
    { 
      id: 'banner-13', 
      title: 'Liquid Magnetic Distortion', 
      description: 'Organic liquid magnetic displacement mapping and studio light',
      previewComponent: <Banner13 section={banner13Data as any} />
    },
    { 
      id: 'banner-14', 
      title: 'Experimental Kinetic Layered', 
      description: 'Awwwards/Behance style with custom cursor, mix-blend modes, and overlapping parallax.',
      previewComponent: <Banner14 section={banner14Data as any} />
    },
  ];

  // Generate placeholders for banner-15 through banner-20
  const placeholderHeroSections = Array.from({ length: 6 }).map((_, i) => ({
    id: `banner-${i + 15}`,
    title: `Banner ${i + 15}`,
    description: `Design placeholder for Banner ${i + 15}`,
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
