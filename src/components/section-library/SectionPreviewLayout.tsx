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

interface PreviewProps {
  sectionId: string;
  onBack: () => void;
}

export function SectionPreviewLayout({ sectionId, onBack }: PreviewProps) {
  const [viewport, setViewport] = React.useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  // Derive mock data based on the new ID structure (banner-1, banner-2...)
  const sectionData = 
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
            {sectionId === 'banner-14' ? (
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
          </div>
        </div>
      </div>
    </div>
  );
}
