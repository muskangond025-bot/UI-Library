import React from 'react';

interface CardProps {
  title: string;
  description: string;
  previewComponent?: React.ReactNode;
  onClick: () => void;
}

export function SectionLibraryCard({ title, description, previewComponent, onClick }: CardProps) {
  return (
    <button 
      onClick={onClick}
      className="group text-left border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 flex flex-col h-full"
    >
      <div className="aspect-video w-full bg-gray-100 flex items-center justify-center border-b border-gray-200 group-hover:bg-gray-50 transition-colors relative overflow-hidden">
        {previewComponent ? (
          <div 
            className="absolute top-0 left-0 origin-top-left pointer-events-none" 
            style={{ width: '400%', height: '400%', transform: 'scale(0.25)' }}
          >
            {previewComponent}
          </div>
        ) : (
          <span className="text-sm text-gray-400 font-medium tracking-wide uppercase">Preview Thumbnail</span>
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">{description}</p>
      </div>
    </button>
  );
}
