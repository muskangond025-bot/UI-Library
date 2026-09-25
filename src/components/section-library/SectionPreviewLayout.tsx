"use client";
import React from 'react';
import { ArrowLeft, Monitor, Smartphone, Tablet } from 'lucide-react';
import { mockHeroBanner2, mockHeroBanner3 } from '../../data/mock-sections/hero-banner';
import banner1Data from '../Banner/banner-1/banner-1.json';
import { Banner1 } from '../Banner/banner-1/Banner1';
import { Banner2 } from '../Banner/banner-2/Banner2';
import { Banner3 } from '../Banner/banner-3/Banner3';

interface PreviewProps {
  sectionId: string;
  onBack: () => void;
}

export function SectionPreviewLayout({ sectionId, onBack }: PreviewProps) {
  const [viewport, setViewport] = React.useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  // Derive mock data based on the new ID structure (banner-1, banner-2...)
  const sectionData = 
    sectionId === 'banner-3' ? mockHeroBanner3 : 
    sectionId === 'banner-2' ? mockHeroBanner2 : 
    sectionId === 'banner-1' ? banner1Data : 
    { id: sectionId, type: 'hero-banner', settings: { title: `Coming Soon: ${sectionId}` }, styles: {} }; 

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
          <div 
            className="bg-white shadow-xl border border-gray-200 transition-all duration-300 overflow-y-auto flex flex-col text-gray-900 rounded-lg"
            style={{
              width: viewport === 'desktop' ? '100%' : viewport === 'tablet' ? '768px' : '375px',
              maxWidth: '100%',
              minHeight: '400px'
            }}
          >
            {/* Render actual component */}
            {sectionId === 'banner-3' ? (
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
          </div>
        </div>
      </div>
    </div>
  );
}
