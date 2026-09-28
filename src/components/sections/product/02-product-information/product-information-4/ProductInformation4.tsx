import React, { useState } from 'react';

export default function ProductInformation4({ data }: { data: any }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">{data.title}</h2>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/3 space-y-2">
            {data.tabs.map((tab: any, idx: number) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`w-full text-left px-6 py-5 rounded-xl transition-all duration-300 ${
                  activeTab === idx ? 'bg-black text-white shadow-lg scale-105' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                <h3 className="text-lg font-bold mb-2">{tab.name}</h3>
                <div className={`overflow-hidden transition-all duration-300 ${activeTab === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className={`text-sm ${activeTab === idx ? 'text-gray-300' : 'text-gray-500'}`}>{tab.content}</p>
                </div>
              </button>
            ))}
          </div>
          <div className="w-full lg:w-2/3 h-[500px] rounded-2xl overflow-hidden relative shadow-2xl">
            {data.tabs.map((tab: any, idx: number) => (
              <img
                key={idx}
                src={tab.image}
                alt={tab.name}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${activeTab === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}