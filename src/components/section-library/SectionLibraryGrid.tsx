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
import { Banner15 } from '../Banner/banner-15/Banner15';
import { Banner16 } from '../Banner/banner-16/Banner16';
import { Banner17 } from '../Banner/banner-17/Banner17';
import { Banner18 } from '../Banner/banner-18/Banner18';
import { Banner19 } from '../Banner/banner-19/Banner19';
import { Banner20 } from '../Banner/banner-20/Banner20';
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
import banner15Data from '../Banner/banner-15/banner-15.json';
import banner16Data from '../Banner/banner-16/banner-16.json';
import banner17Data from '../Banner/banner-17/banner-17.json';
import banner18Data from '../Banner/banner-18/banner-18.json';
import banner19Data from '../Banner/banner-19/banner-19.json';
import banner20Data from '../Banner/banner-20/banner-20.json';
import { HeroCarousel1 } from '../HeroCarousel/hero-carousel-1/HeroCarousel1';
import heroCarousel1Data from '../HeroCarousel/hero-carousel-1/hero-carousel-1.json';
import { HeroCarousel2 } from '../HeroCarousel/hero-carousel-2/HeroCarousel2';
import heroCarousel2Data from '../HeroCarousel/hero-carousel-2/hero-carousel-2.json';
import { HeroCarousel3 } from '../HeroCarousel/hero-carousel-3/HeroCarousel3';
import heroCarousel3Data from '../HeroCarousel/hero-carousel-3/hero-carousel-3.json';
import { HeroCarousel4 } from '../HeroCarousel/hero-carousel-4/HeroCarousel4';
import heroCarousel4Data from '../HeroCarousel/hero-carousel-4/hero-carousel-4.json';
import { HeroCarousel5 } from '../HeroCarousel/hero-carousel-5/HeroCarousel5';
import heroCarousel5Data from '../HeroCarousel/hero-carousel-5/hero-carousel-5.json';

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
    { 
      id: 'banner-15', 
      title: 'Immersive 3D Motion', 
      description: 'Based on PDF specs: 3D interactive tilt, SVG noise grain, magnetic cursor, and staggered kinetic text.',
      previewComponent: <Banner15 section={banner15Data as any} />
    },
    { 
      id: 'banner-16', 
      title: 'Experimental Sliced Image', 
      description: 'Image mask slicing, interactive cursor trails, SVG path drawing, and high-end digital glitch aesthetic.',
      previewComponent: <Banner16 section={banner16Data as any} />
    },
    { 
      id: 'banner-17', 
      title: 'Multi-Layer Parallax Float', 
      description: 'Interactive cursor-driven floating images, slanted infinite kinetic typography, and central glassmorphism block.',
      previewComponent: <Banner17 section={banner17Data as any} />
    },
    { 
      id: 'banner-18', 
      title: 'Interactive Spotlight Reveal', 
      description: 'Advanced Awwwards mask-reveal technique where the cursor acts as an X-Ray flashlight to reveal vibrant layers beneath.',
      previewComponent: <Banner18 section={banner18Data as any} />
    },
    { 
      id: 'banner-19', 
      title: 'Horizontal Accordion Gallery', 
      description: 'Untraditional interactive layout with 4 dynamic flexing columns. Features container expansion, layout animations, and text rotation on hover.',
      previewComponent: <Banner19 section={banner19Data as any} />
    },
    { 
      id: 'banner-20', 
      title: 'Orbital Image Gallery', 
      description: 'Futuristic rotating ring of 6 images with a brutalist text-scramble entrance animation in the center glassmorphism lockup.',
      previewComponent: <Banner20 section={banner20Data as any} />
    },
  ];

  // Generate placeholders for banner-21 through banner-20 (Empty)
  const placeholderHeroSections: any[] = [];

  const baseCarouselSections = [
    {
      id: 'hero-carousel-1',
      title: 'Cinematic Coverflow Carousel',
      description: 'Awwwards-style premium 3D coverflow with blur filters, keyboard navigation, and dynamic typography.',
      previewComponent: <HeroCarousel1 section={heroCarousel1Data as any} />
    },
    {
      id: 'hero-carousel-2',
      title: 'Stacked Deck Swipe Slider',
      description: 'Modern split-layout carousel where images animate like a deck of cards falling away. Supports drag gestures.',
      previewComponent: <HeroCarousel2 section={heroCarousel2Data as any} />
    },
    {
      id: 'hero-carousel-3',
      title: 'Cinematic Thumbnail Reveal',
      description: 'Based on PDF specifications: Word-by-word text reveal, scale/press-in interactions, and visual progress bar animations.',
      previewComponent: <HeroCarousel3 section={heroCarousel3Data as any} />
    },
    {
      id: 'hero-carousel-4',
      title: 'Magnetic Parallax Slider',
      description: 'Based on PDF specifications: Magnetic cursor scaling, Circular progress indicator, Text swap/slide, and Swipe interactions.',
      previewComponent: <HeroCarousel4 section={heroCarousel4Data as any} />
    },
    {
      id: 'hero-carousel-5',
      title: 'Cinematic Percentage Loader',
      description: 'Based on PDF specifications: Massive Percentage Counter, Line-by-line text reveal, 3D Y-axis flip rotation, and ambient motion layers.',
      previewComponent: <HeroCarousel5 section={heroCarousel5Data as any} />
    }
  ];

  const placeholderCarouselSections = Array.from({ length: 15 }).map((_, i) => ({
    id: `hero-carousel-${i + 6}`,
    title: `Hero Carousel ${i + 6}`,
    description: `Design placeholder for Hero Carousel ${i + 6}`,
    previewComponent: undefined
  }));

  const sections = category === 'hero' 
    ? [...baseHeroSections, ...placeholderHeroSections] 
    : category === 'hero-carousel'
    ? [...baseCarouselSections, ...placeholderCarouselSections]
    : [];

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
