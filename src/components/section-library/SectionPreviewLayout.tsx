"use client";
import React from 'react';
import { ArrowLeft, Monitor, Smartphone, Tablet } from 'lucide-react';
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
import heroCarousel1Data from '../HeroCarousel/hero-carousel-1/hero-carousel-1.json';
import heroCarousel2Data from '../HeroCarousel/hero-carousel-2/hero-carousel-2.json';
import heroCarousel3Data from '../HeroCarousel/hero-carousel-3/hero-carousel-3.json';
import heroCarousel4Data from '../HeroCarousel/hero-carousel-4/hero-carousel-4.json';
import heroCarousel5Data from '../HeroCarousel/hero-carousel-5/hero-carousel-5.json';
import heroCarousel6Data from '../HeroCarousel/hero-carousel-6/hero-carousel-6.json';
import heroCarousel7Data from '../HeroCarousel/hero-carousel-7/hero-carousel-7.json';
import heroCarousel8Data from '../HeroCarousel/hero-carousel-8/hero-carousel-8.json';
import heroCarousel9Data from '../HeroCarousel/hero-carousel-9/hero-carousel-9.json';
import heroCarousel10Data from '../HeroCarousel/hero-carousel-10/hero-carousel-10.json';
import heroCarousel11Data from '../HeroCarousel/hero-carousel-11/hero-carousel-11.json';
import heroCarousel12Data from '../HeroCarousel/hero-carousel-12/hero-carousel-12.json';
import heroCarousel13Data from '../HeroCarousel/hero-carousel-13/hero-carousel-13.json';
import heroCarousel14Data from '../HeroCarousel/hero-carousel-14/hero-carousel-14.json';
import heroCarousel15Data from '../HeroCarousel/hero-carousel-15/hero-carousel-15.json';
import heroCarousel16Data from '../HeroCarousel/hero-carousel-16/hero-carousel-16.json';
import heroCarousel17Data from '../HeroCarousel/hero-carousel-17/hero-carousel-17.json';
import heroCarousel18Data from '../HeroCarousel/hero-carousel-18/hero-carousel-18.json';
import heroCarousel19Data from '../HeroCarousel/hero-carousel-19/hero-carousel-19.json';
import heroCarousel20Data from '../HeroCarousel/hero-carousel-20/hero-carousel-20.json';
import promotionalBanner1Data from '../PromotionalBanner/promotional-banner-1/promotional-banner-1.json';
import promotionalBanner2Data from '../PromotionalBanner/promotional-banner-2/promotional-banner-2.json';
import promotionalBanner3Data from '../PromotionalBanner/promotional-banner-3/promotional-banner-3.json';
import promotionalBanner4Data from '../PromotionalBanner/promotional-banner-4/promotional-banner-4.json';
import promotionalBanner5Data from '../PromotionalBanner/promotional-banner-5/promotional-banner-5.json';
import promotionalBanner6Data from '../PromotionalBanner/promotional-banner-6/promotional-banner-6.json';
import promotionalBanner7Data from '../PromotionalBanner/promotional-banner-7/promotional-banner-7.json';
import promotionalBanner8Data from '../PromotionalBanner/promotional-banner-8/promotional-banner-8.json';
import promotionalBanner10Data from '../PromotionalBanner/promotional-banner-10/promotional-banner-10.json';
import promotionalBanner11Data from '../PromotionalBanner/promotional-banner-11/promotional-banner-11.json';
import promotionalBanner12Data from '../PromotionalBanner/promotional-banner-12/promotional-banner-12.json';
import promotionalBanner13Data from '../PromotionalBanner/promotional-banner-13/promotional-banner-13.json';
import promotionalBanner14Data from '../PromotionalBanner/promotional-banner-14/promotional-banner-14.json';
import promotionalBanner16Data from '../PromotionalBanner/promotional-banner-16/promotional-banner-16.json';
import promotionalBanner17Data from '../PromotionalBanner/promotional-banner-17/promotional-banner-17.json';
import promotionalBanner18Data from '../PromotionalBanner/promotional-banner-18/promotional-banner-18.json';
import promotionalBanner19Data from '../PromotionalBanner/promotional-banner-19/promotional-banner-19.json';
import promotionalBanner20Data from '../PromotionalBanner/promotional-banner-20/promotional-banner-20.json';
import featuredCategory1Data from '../FeaturedCategory/featured-category-1/featured-category-1.json';
import featuredCategory2Data from '../FeaturedCategory/featured-category-2/featured-category-2.json';
import featuredCategory3Data from '../FeaturedCategory/featured-category-3/featured-category-3.json';
import featuredCategory4Data from '../FeaturedCategory/featured-category-4/featured-category-4.json';
import featuredCategory5Data from '../FeaturedCategory/featured-category-5/featured-category-5.json';
import featuredCategory6Data from '../FeaturedCategory/featured-category-6/featured-category-6.json';
import featuredCategory7Data from '../FeaturedCategory/featured-category-7/featured-category-7.json';
import featuredCategory8Data from '../FeaturedCategory/featured-category-8/featured-category-8.json';
import featuredCategory9Data from '../FeaturedCategory/featured-category-9/featured-category-9.json';
import featuredCategory10Data from '../FeaturedCategory/featured-category-10/featured-category-10.json';
import featuredCategory11Data from '../FeaturedCategory/featured-category-11/featured-category-11.json';
import featuredCategory12Data from '../FeaturedCategory/featured-category-12/featured-category-12.json';
import featuredCategory13Data from '../FeaturedCategory/featured-category-13/featured-category-13.json';
import featuredCategory14Data from '../FeaturedCategory/featured-category-14/featured-category-14.json';
import featuredCategory15Data from '../FeaturedCategory/featured-category-15/featured-category-15.json';
import featuredCategory16Data from '../FeaturedCategory/featured-category-16/featured-category-16.json';
import featuredCategory17Data from '../FeaturedCategory/featured-category-17/featured-category-17.json';
import featuredCategory18Data from '../FeaturedCategory/featured-category-18/featured-category-18.json';
import featuredCategory19Data from '../FeaturedCategory/featured-category-19/featured-category-19.json';
import featuredCategory20Data from '../FeaturedCategory/featured-category-20/featured-category-20.json';
import categoryGrid1Data from '../CategoryGrid/category-grid-1/category-grid-1.json';
import categoryGrid2Data from '../CategoryGrid/category-grid-2/category-grid-2.json';
import categoryGrid3Data from '../CategoryGrid/category-grid-3/category-grid-3.json';
import categoryGrid4Data from '../CategoryGrid/category-grid-4/category-grid-4.json';
import categoryGrid5Data from '../CategoryGrid/category-grid-5/category-grid-5.json';
import categoryGrid6Data from '../CategoryGrid/category-grid-6/category-grid-6.json';
import categoryGrid7Data from '../CategoryGrid/category-grid-7/category-grid-7.json';
import categoryGrid8Data from '../CategoryGrid/category-grid-8/category-grid-8.json';
import categoryGrid9Data from '../CategoryGrid/category-grid-9/category-grid-9.json';
import categoryGrid10Data from '../CategoryGrid/category-grid-10/category-grid-10.json';
import categoryGrid11Data from '../CategoryGrid/category-grid-11/category-grid-11.json';
import categoryGrid12Data from '../CategoryGrid/category-grid-12/category-grid-12.json';
import categoryGrid13Data from '../CategoryGrid/category-grid-13/category-grid-13.json';
import categoryGrid14Data from '../CategoryGrid/category-grid-14/category-grid-14.json';
import categoryGrid15Data from '../CategoryGrid/category-grid-15/category-grid-15.json';
import categoryGrid16Data from '../CategoryGrid/category-grid-16/category-grid-16.json';
import categoryGrid17Data from '../CategoryGrid/category-grid-17/category-grid-17.json';
import categoryGrid18Data from '../CategoryGrid/category-grid-18/category-grid-18.json';
import categoryGrid19Data from '../CategoryGrid/category-grid-19/category-grid-19.json';
import categoryGrid20Data from '../CategoryGrid/category-grid-20/category-grid-20.json';
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
import { HeroCarousel1 } from '../HeroCarousel/hero-carousel-1/HeroCarousel1';
import { HeroCarousel2 } from '../HeroCarousel/hero-carousel-2/HeroCarousel2';
import { HeroCarousel3 } from '../HeroCarousel/hero-carousel-3/HeroCarousel3';
import { HeroCarousel4 } from '../HeroCarousel/hero-carousel-4/HeroCarousel4';
import { HeroCarousel5 } from '../HeroCarousel/hero-carousel-5/HeroCarousel5';
import { HeroCarousel6 } from '../HeroCarousel/hero-carousel-6/HeroCarousel6';
import { HeroCarousel7 } from '../HeroCarousel/hero-carousel-7/HeroCarousel7';
import { HeroCarousel8 } from '../HeroCarousel/hero-carousel-8/HeroCarousel8';
import { HeroCarousel9 } from '../HeroCarousel/hero-carousel-9/HeroCarousel9';
import { HeroCarousel10 } from '../HeroCarousel/hero-carousel-10/HeroCarousel10';
import { HeroCarousel11 } from '../HeroCarousel/hero-carousel-11/HeroCarousel11';
import { HeroCarousel12 } from '../HeroCarousel/hero-carousel-12/HeroCarousel12';
import { HeroCarousel13 } from '../HeroCarousel/hero-carousel-13/HeroCarousel13';
import { HeroCarousel14 } from '../HeroCarousel/hero-carousel-14/HeroCarousel14';
import { HeroCarousel15 } from '../HeroCarousel/hero-carousel-15/HeroCarousel15';
import { HeroCarousel16 } from '../HeroCarousel/hero-carousel-16/HeroCarousel16';
import { HeroCarousel17 } from '../HeroCarousel/hero-carousel-17/HeroCarousel17';
import { HeroCarousel18 } from '../HeroCarousel/hero-carousel-18/HeroCarousel18';
import { HeroCarousel19 } from '../HeroCarousel/hero-carousel-19/HeroCarousel19';
import { HeroCarousel20 } from '../HeroCarousel/hero-carousel-20/HeroCarousel20';
import { PromotionalBanner1 } from '../PromotionalBanner/promotional-banner-1/PromotionalBanner1';
import { PromotionalBanner2 } from '../PromotionalBanner/promotional-banner-2/PromotionalBanner2';
import { PromotionalBanner3 } from '../PromotionalBanner/promotional-banner-3/PromotionalBanner3';
import { PromotionalBanner4 } from '../PromotionalBanner/promotional-banner-4/PromotionalBanner4';
import { PromotionalBanner5 } from '../PromotionalBanner/promotional-banner-5/PromotionalBanner5';
import { PromotionalBanner6 } from '../PromotionalBanner/promotional-banner-6/PromotionalBanner6';
import { PromotionalBanner7 } from '../PromotionalBanner/promotional-banner-7/PromotionalBanner7';
import { PromotionalBanner8 } from '../PromotionalBanner/promotional-banner-8/PromotionalBanner8';
import { PromotionalBanner10 } from '../PromotionalBanner/promotional-banner-10/PromotionalBanner10';
import { PromotionalBanner11 } from '../PromotionalBanner/promotional-banner-11/PromotionalBanner11';
import { PromotionalBanner12 } from '../PromotionalBanner/promotional-banner-12/PromotionalBanner12';
import { PromotionalBanner13 } from '../PromotionalBanner/promotional-banner-13/PromotionalBanner13';
import { PromotionalBanner14 } from '../PromotionalBanner/promotional-banner-14/PromotionalBanner14';
import { PromotionalBanner16 } from '../PromotionalBanner/promotional-banner-16/PromotionalBanner16';
import { PromotionalBanner17 } from '../PromotionalBanner/promotional-banner-17/PromotionalBanner17';
import { PromotionalBanner18 } from '../PromotionalBanner/promotional-banner-18/PromotionalBanner18';
import { PromotionalBanner19 } from '../PromotionalBanner/promotional-banner-19/PromotionalBanner19';
import { PromotionalBanner20 } from '../PromotionalBanner/promotional-banner-20/PromotionalBanner20';
import { FeaturedCategory1 } from '../FeaturedCategory/featured-category-1/FeaturedCategory1';
import { FeaturedCategory2 } from '../FeaturedCategory/featured-category-2/FeaturedCategory2';
import { FeaturedCategory3 } from '../FeaturedCategory/featured-category-3/FeaturedCategory3';
import { FeaturedCategory4 } from '../FeaturedCategory/featured-category-4/FeaturedCategory4';
import { FeaturedCategory5 } from '../FeaturedCategory/featured-category-5/FeaturedCategory5';
import { FeaturedCategory6 } from '../FeaturedCategory/featured-category-6/FeaturedCategory6';
import { FeaturedCategory7 } from '../FeaturedCategory/featured-category-7/FeaturedCategory7';
import { FeaturedCategory8 } from '../FeaturedCategory/featured-category-8/FeaturedCategory8';
import { FeaturedCategory9 } from '../FeaturedCategory/featured-category-9/FeaturedCategory9';
import { FeaturedCategory10 } from '../FeaturedCategory/featured-category-10/FeaturedCategory10';
import { FeaturedCategory11 } from '../FeaturedCategory/featured-category-11/FeaturedCategory11';
import { FeaturedCategory12 } from '../FeaturedCategory/featured-category-12/FeaturedCategory12';
import { FeaturedCategory13 } from '../FeaturedCategory/featured-category-13/FeaturedCategory13';
import { FeaturedCategory14 } from '../FeaturedCategory/featured-category-14/FeaturedCategory14';
import { FeaturedCategory15 } from '../FeaturedCategory/featured-category-15/FeaturedCategory15';
import { FeaturedCategory16 } from '../FeaturedCategory/featured-category-16/FeaturedCategory16';
import { FeaturedCategory17 } from '../FeaturedCategory/featured-category-17/FeaturedCategory17';
import { FeaturedCategory18 } from '../FeaturedCategory/featured-category-18/FeaturedCategory18';
import { FeaturedCategory19 } from '../FeaturedCategory/featured-category-19/FeaturedCategory19';
import { FeaturedCategory20 } from '../FeaturedCategory/featured-category-20/FeaturedCategory20';
import { CategoryGrid1 } from '../CategoryGrid/category-grid-1/CategoryGrid1';
import { CategoryGrid2 } from '../CategoryGrid/category-grid-2/CategoryGrid2';
import { CategoryGrid3 } from '../CategoryGrid/category-grid-3/CategoryGrid3';
import { CategoryGrid4 } from '../CategoryGrid/category-grid-4/CategoryGrid4';
import { CategoryGrid5 } from '../CategoryGrid/category-grid-5/CategoryGrid5';
import { CategoryGrid6 } from '../CategoryGrid/category-grid-6/CategoryGrid6';
import { CategoryGrid7 } from '../CategoryGrid/category-grid-7/CategoryGrid7';
import { CategoryGrid8 } from '../CategoryGrid/category-grid-8/CategoryGrid8';
import { CategoryGrid9 } from '../CategoryGrid/category-grid-9/CategoryGrid9';
import { CategoryGrid10 } from '../CategoryGrid/category-grid-10/CategoryGrid10';
import { CategoryGrid11 } from '../CategoryGrid/category-grid-11/CategoryGrid11';
import { CategoryGrid12 } from '../CategoryGrid/category-grid-12/CategoryGrid12';
import { CategoryGrid13 } from '../CategoryGrid/category-grid-13/CategoryGrid13';
import { CategoryGrid14 } from '../CategoryGrid/category-grid-14/CategoryGrid14';
import { CategoryGrid15 } from '../CategoryGrid/category-grid-15/CategoryGrid15';
import { CategoryGrid16 } from '../CategoryGrid/category-grid-16/CategoryGrid16';
import { CategoryGrid17 } from '../CategoryGrid/category-grid-17/CategoryGrid17';
import { CategoryGrid18 } from '../CategoryGrid/category-grid-18/CategoryGrid18';
import { CategoryGrid19 } from '../CategoryGrid/category-grid-19/CategoryGrid19';
import { CategoryGrid20 } from '../CategoryGrid/category-grid-20/CategoryGrid20';

interface PreviewProps {
  sectionId: string;
  onBack: () => void;
}

export function SectionPreviewLayout({ sectionId, onBack }: PreviewProps) {
  const [viewport, setViewport] = React.useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  
  const isIframeMode = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('iframeMode') === 'true';

  // Derive mock data based on the new ID structure (banner-1, banner-2...)
  const sectionData = 
    sectionId === 'category-grid-20' ? categoryGrid20Data :
    sectionId === 'category-grid-19' ? categoryGrid19Data :
    sectionId === 'category-grid-18' ? categoryGrid18Data :
    sectionId === 'category-grid-17' ? categoryGrid17Data :
    sectionId === 'category-grid-16' ? categoryGrid16Data :
    sectionId === 'category-grid-15' ? categoryGrid15Data :
    sectionId === 'category-grid-14' ? categoryGrid14Data :
    sectionId === 'category-grid-13' ? categoryGrid13Data :
    sectionId === 'category-grid-12' ? categoryGrid12Data :
    sectionId === 'category-grid-11' ? categoryGrid11Data :
    sectionId === 'category-grid-10' ? categoryGrid10Data :
    sectionId === 'category-grid-9' ? categoryGrid9Data :
    sectionId === 'category-grid-8' ? categoryGrid8Data :
    sectionId === 'category-grid-7' ? categoryGrid7Data :
    sectionId === 'category-grid-6' ? categoryGrid6Data :
    sectionId === 'category-grid-5' ? categoryGrid5Data :
    sectionId === 'category-grid-4' ? categoryGrid4Data :
    sectionId === 'category-grid-3' ? categoryGrid3Data :
    sectionId === 'category-grid-2' ? categoryGrid2Data :
    sectionId === 'category-grid-1' ? categoryGrid1Data :
    sectionId === 'featured-category-20' ? featuredCategory20Data :
    sectionId === 'featured-category-19' ? featuredCategory19Data :
    sectionId === 'featured-category-18' ? featuredCategory18Data :
    sectionId === 'featured-category-17' ? featuredCategory17Data :
    sectionId === 'featured-category-16' ? featuredCategory16Data :
    sectionId === 'featured-category-15' ? featuredCategory15Data :
    sectionId === 'featured-category-14' ? featuredCategory14Data :
    sectionId === 'featured-category-13' ? featuredCategory13Data :
    sectionId === 'featured-category-12' ? featuredCategory12Data :
    sectionId === 'featured-category-11' ? featuredCategory11Data :
    sectionId === 'featured-category-10' ? featuredCategory10Data :
    sectionId === 'featured-category-9' ? featuredCategory9Data :
    sectionId === 'featured-category-8' ? featuredCategory8Data :
    sectionId === 'featured-category-7' ? featuredCategory7Data :
    sectionId === 'featured-category-6' ? featuredCategory6Data :
    sectionId === 'featured-category-5' ? featuredCategory5Data :
    sectionId === 'featured-category-4' ? featuredCategory4Data :
    sectionId === 'featured-category-3' ? featuredCategory3Data :
    sectionId === 'featured-category-2' ? featuredCategory2Data :
    sectionId === 'featured-category-1' ? featuredCategory1Data :
    sectionId === 'promotional-banner-20' ? promotionalBanner20Data :
    sectionId === 'promotional-banner-19' ? promotionalBanner19Data :
    sectionId === 'promotional-banner-18' ? promotionalBanner18Data :
    sectionId === 'promotional-banner-17' ? promotionalBanner17Data :
    sectionId === 'promotional-banner-16' ? promotionalBanner16Data :
    sectionId === 'promotional-banner-14' ? promotionalBanner14Data :
    sectionId === 'promotional-banner-13' ? promotionalBanner13Data :
    sectionId === 'promotional-banner-12' ? promotionalBanner12Data :
    sectionId === 'promotional-banner-11' ? promotionalBanner11Data :
    sectionId === 'promotional-banner-10' ? promotionalBanner10Data :
    sectionId === 'promotional-banner-8' ? promotionalBanner8Data :
    sectionId === 'promotional-banner-7' ? promotionalBanner7Data :
    sectionId === 'promotional-banner-6' ? promotionalBanner6Data :
    sectionId === 'promotional-banner-5' ? promotionalBanner5Data :
    sectionId === 'promotional-banner-4' ? promotionalBanner4Data :
    sectionId === 'promotional-banner-3' ? promotionalBanner3Data :
    sectionId === 'promotional-banner-2' ? promotionalBanner2Data :
    sectionId === 'promotional-banner-1' ? promotionalBanner1Data :
    sectionId === 'hero-carousel-20' ? heroCarousel20Data :
    sectionId === 'hero-carousel-19' ? heroCarousel19Data :
    sectionId === 'hero-carousel-18' ? heroCarousel18Data :
    sectionId === 'hero-carousel-17' ? heroCarousel17Data :
    sectionId === 'hero-carousel-16' ? heroCarousel16Data :
    sectionId === 'hero-carousel-15' ? heroCarousel15Data :
    sectionId === 'hero-carousel-14' ? heroCarousel14Data :
    sectionId === 'hero-carousel-13' ? heroCarousel13Data :
    sectionId === 'hero-carousel-12' ? heroCarousel12Data :
    sectionId === 'hero-carousel-11' ? heroCarousel11Data :
    sectionId === 'hero-carousel-10' ? heroCarousel10Data :
    sectionId === 'hero-carousel-9' ? heroCarousel9Data :
    sectionId === 'hero-carousel-8' ? heroCarousel8Data :
    sectionId === 'hero-carousel-7' ? heroCarousel7Data :
    sectionId === 'hero-carousel-6' ? heroCarousel6Data :
    sectionId === 'hero-carousel-5' ? heroCarousel5Data :
    sectionId === 'hero-carousel-4' ? heroCarousel4Data :
    sectionId === 'hero-carousel-3' ? heroCarousel3Data :
    sectionId === 'hero-carousel-2' ? heroCarousel2Data :
    sectionId === 'hero-carousel-1' ? heroCarousel1Data :
    sectionId === 'banner-20' ? banner20Data : 
    sectionId === 'banner-19' ? banner19Data : 
    sectionId === 'banner-18' ? banner18Data : 
    sectionId === 'banner-17' ? banner17Data : 
    sectionId === 'banner-16' ? banner16Data : 
    sectionId === 'banner-15' ? banner15Data : 
    sectionId === 'banner-14' ? banner14Data : 
    sectionId === 'banner-13' ? banner13Data : 
    sectionId === 'banner-12' ? banner12Data : 
    sectionId === 'banner-11' ? banner11Data :
    sectionId === 'banner-10' ? banner10Data : 
    sectionId === 'banner-9' ? banner9Data : 
    sectionId === 'banner-8' ? banner8Data : 
    sectionId === 'banner-7' ? banner7Data : 
    sectionId === 'banner-6' ? banner6Data : 
    sectionId === 'banner-5' ? banner5Data : 
    sectionId === 'banner-4' ? banner4Data : 
    sectionId === 'banner-3' ? banner3Data : 
    sectionId === 'banner-2' ? banner2Data : 
    sectionId === 'banner-1' ? banner1Data : 
    { id: sectionId, type: 'hero-banner', settings: { title: `Coming Soon: ${sectionId}` }, styles: {} }; 

  const renderComponent = () => (
    <>
      {/* Render actual component */}
      {sectionId === 'category-grid-20' ? (
        <CategoryGrid20 section={sectionData as any} />
      ) : sectionId === 'category-grid-19' ? (
              <CategoryGrid19 section={sectionData as any} />
            ) : sectionId === 'category-grid-18' ? (
              <CategoryGrid18 section={sectionData as any} />
            ) : sectionId === 'category-grid-17' ? (
              <CategoryGrid17 section={sectionData as any} />
            ) : sectionId === 'category-grid-16' ? (
              <CategoryGrid16 section={sectionData as any} />
            ) : sectionId === 'category-grid-15' ? (
              <CategoryGrid15 section={sectionData as any} />
            ) : sectionId === 'category-grid-14' ? (
              <CategoryGrid14 section={sectionData as any} />
            ) : sectionId === 'category-grid-13' ? (
              <CategoryGrid13 section={sectionData as any} />
            ) : sectionId === 'category-grid-12' ? (
              <CategoryGrid12 section={sectionData as any} />
            ) : sectionId === 'category-grid-11' ? (
              <CategoryGrid11 section={sectionData as any} />
            ) : sectionId === 'category-grid-10' ? (
              <CategoryGrid10 section={sectionData as any} />
            ) : sectionId === 'category-grid-9' ? (
              <CategoryGrid9 section={sectionData as any} />
            ) : sectionId === 'category-grid-8' ? (
              <CategoryGrid8 section={sectionData as any} />
            ) : sectionId === 'category-grid-7' ? (
              <CategoryGrid7 section={sectionData as any} />
            ) : sectionId === 'category-grid-6' ? (
              <CategoryGrid6 section={sectionData as any} />
            ) : sectionId === 'category-grid-5' ? (
              <CategoryGrid5 section={sectionData as any} />
            ) : sectionId === 'category-grid-4' ? (
              <CategoryGrid4 section={sectionData as any} />
            ) : sectionId === 'category-grid-3' ? (
              <CategoryGrid3 section={sectionData as any} />
            ) : sectionId === 'category-grid-2' ? (
              <CategoryGrid2 section={sectionData as any} />
            ) : sectionId === 'category-grid-1' ? (
              <CategoryGrid1 section={sectionData as any} />
            ) : sectionId === 'featured-category-20' ? (
              <FeaturedCategory20 section={sectionData as any} />
            ) : sectionId === 'featured-category-19' ? (
              <FeaturedCategory19 section={sectionData as any} />
            ) : sectionId === 'featured-category-18' ? (
              <FeaturedCategory18 section={sectionData as any} />
            ) : sectionId === 'featured-category-17' ? (
              <FeaturedCategory17 section={sectionData as any} />
            ) : sectionId === 'featured-category-16' ? (
              <FeaturedCategory16 section={sectionData as any} />
            ) : sectionId === 'featured-category-15' ? (
              <FeaturedCategory15 section={sectionData as any} />
            ) : sectionId === 'featured-category-14' ? (
              <FeaturedCategory14 section={sectionData as any} />
            ) : sectionId === 'featured-category-13' ? (
              <FeaturedCategory13 section={sectionData as any} />
            ) : sectionId === 'featured-category-12' ? (
              <FeaturedCategory12 section={sectionData as any} />
            ) : sectionId === 'featured-category-11' ? (
              <FeaturedCategory11 section={sectionData as any} />
            ) : sectionId === 'featured-category-10' ? (
              <FeaturedCategory10 section={sectionData as any} />
            ) : sectionId === 'featured-category-9' ? (
              <FeaturedCategory9 section={sectionData as any} />
            ) : sectionId === 'featured-category-8' ? (
              <FeaturedCategory8 section={sectionData as any} />
            ) : sectionId === 'featured-category-7' ? (
              <FeaturedCategory7 section={sectionData as any} />
            ) : sectionId === 'featured-category-6' ? (
              <FeaturedCategory6 section={sectionData as any} />
            ) : sectionId === 'featured-category-5' ? (
              <FeaturedCategory5 section={sectionData as any} />
            ) : sectionId === 'featured-category-4' ? (
              <FeaturedCategory4 section={sectionData as any} />
            ) : sectionId === 'featured-category-3' ? (
              <FeaturedCategory3 section={sectionData as any} />
            ) : sectionId === 'featured-category-2' ? (
              <FeaturedCategory2 section={sectionData as any} />
            ) : sectionId === 'featured-category-1' ? (
              <FeaturedCategory1 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-20' ? (
              <PromotionalBanner20 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-19' ? (
              <PromotionalBanner19 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-18' ? (
              <PromotionalBanner18 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-17' ? (
              <PromotionalBanner17 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-16' ? (
              <PromotionalBanner16 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-14' ? (
              <PromotionalBanner14 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-13' ? (
              <PromotionalBanner13 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-12' ? (
              <PromotionalBanner12 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-11' ? (
              <PromotionalBanner11 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-10' ? (
              <PromotionalBanner10 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-8' ? (
              <PromotionalBanner8 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-7' ? (
              <PromotionalBanner7 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-6' ? (
              <PromotionalBanner6 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-5' ? (
              <PromotionalBanner5 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-4' ? (
              <PromotionalBanner4 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-3' ? (
              <PromotionalBanner3 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-2' ? (
              <PromotionalBanner2 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-1' ? (
              <PromotionalBanner1 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-20' ? (
              <HeroCarousel20 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-19' ? (
              <HeroCarousel19 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-18' ? (
              <HeroCarousel18 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-17' ? (
              <HeroCarousel17 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-16' ? (
              <HeroCarousel16 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-15' ? (
              <HeroCarousel15 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-14' ? (
              <HeroCarousel14 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-13' ? (
              <HeroCarousel13 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-12' ? (
              <HeroCarousel12 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-11' ? (
              <HeroCarousel11 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-10' ? (
              <HeroCarousel10 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-9' ? (
              <HeroCarousel9 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-8' ? (
              <HeroCarousel8 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-7' ? (
              <HeroCarousel7 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-6' ? (
              <HeroCarousel6 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-5' ? (
              <HeroCarousel5 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-4' ? (
              <HeroCarousel4 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-3' ? (
              <HeroCarousel3 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-2' ? (
              <HeroCarousel2 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-1' ? (
              <HeroCarousel1 section={sectionData as any} />
            ) : sectionId === 'banner-20' ? (
              <Banner20 section={sectionData as any} />
            ) : sectionId === 'banner-19' ? (
              <Banner19 section={sectionData as any} />
            ) : sectionId === 'banner-18' ? (
              <Banner18 section={sectionData as any} />
            ) : sectionId === 'banner-17' ? (
              <Banner17 section={sectionData as any} />
            ) : sectionId === 'banner-16' ? (
              <Banner16 section={sectionData as any} />
            ) : sectionId === 'banner-15' ? (
              <Banner15 section={sectionData as any} />
            ) : sectionId === 'banner-14' ? (
              <Banner14 section={sectionData as any} />
            ) : sectionId === 'banner-13' ? (
              <Banner13 section={sectionData as any} />
            ) : sectionId === 'banner-12' ? (
              <Banner12 section={sectionData as any} />
            ) : sectionId === 'banner-11' ? (
              <Banner11 section={sectionData as any} />
            ) : sectionId === 'banner-10' ? (
              <Banner10 section={sectionData as any} />
            ) : sectionId === 'banner-9' ? (
              <Banner9 section={sectionData as any} />
            ) : sectionId === 'banner-8' ? (
              <Banner8 section={sectionData as any} />
            ) : sectionId === 'banner-7' ? (
              <Banner7 section={sectionData as any} />
            ) : sectionId === 'banner-6' ? (
              <Banner6 section={sectionData as any} />
            ) : sectionId === 'banner-5' ? (
              <Banner5 section={sectionData as any} />
            ) : sectionId === 'banner-4' ? (
              <Banner4 section={sectionData as any} />
            ) : sectionId === 'banner-3' ? (
              <Banner3 section={sectionData as any} />
            ) : sectionId === 'banner-2' ? (
              <Banner2 section={sectionData as any} />
            ) : sectionId === 'banner-1' ? (
              <Banner1 section={sectionData as any} />
      ) : (
        <div className="flex items-center justify-center flex-1 h-full min-h-[400px]">
          <p className="text-sm font-medium text-gray-500">Preview not built out for {sectionId} yet.</p>
        </div>
      )}
    </>
  );

  if (isIframeMode) {
    return (
      <div className="w-full bg-white min-h-screen">
        {renderComponent()}
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-gray-100">
      <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 z-10 shrink-0">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            <ArrowLeft size={16} />
            Back to Library
          </button>
          <div className="h-4 w-px bg-gray-300 mx-2" />
          <h2 className="text-sm font-semibold text-gray-900">{sectionId}</h2>
        </div>

        <div className="flex items-center bg-gray-100 rounded-lg p-1 border border-gray-200">
          <button onClick={() => setViewport('desktop')} className={`p-1.5 rounded-md transition-colors ${viewport === 'desktop' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}>
            <Monitor size={16} />
          </button>
          <button onClick={() => setViewport('tablet')} className={`p-1.5 rounded-md transition-colors ${viewport === 'tablet' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}>
            <Tablet size={16} />
          </button>
          <button onClick={() => setViewport('mobile')} className={`p-1.5 rounded-md transition-colors ${viewport === 'mobile' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}>
            <Smartphone size={16} />
          </button>
        </div>

        <div className="w-[100px]"></div>
      </header>

      <div className="flex-1 flex overflow-hidden relative">
        <div className={`flex-1 overflow-auto flex justify-center items-start p-8 transition-all duration-300`}>
          {viewport === 'desktop' ? (
            <div 
              className="bg-white shadow-xl border border-gray-200 transition-all duration-300 flex flex-col text-gray-900 rounded-lg w-full max-w-full overflow-y-auto"
              style={{ minHeight: '400px' }}
            >
              {renderComponent()}
            </div>
          ) : (
            <iframe 
              src={`/?section=${sectionId}&iframeMode=true`}
              className="bg-white shadow-xl border border-gray-200 transition-all duration-300 rounded-lg"
              style={{
                width: viewport === 'tablet' ? '768px' : '375px',
                height: '100%',
                minHeight: '800px'
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
