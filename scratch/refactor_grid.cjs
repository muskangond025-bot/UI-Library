const fs = require('fs');

const content = fs.readFileSync('c:/UI Library/src/components/section-library/SectionLibraryGrid.tsx', 'utf8');

const startIdx = content.indexOf('export function SectionLibraryGrid');

if (startIdx === -1) {
    console.error('Could not find SectionLibraryGrid');
    process.exit(1);
}

let sectionsStartIdx = content.indexOf("const sections = \n    category === 'hero' ? [", startIdx);

if (sectionsStartIdx === -1) {
    sectionsStartIdx = content.indexOf("const sections =", startIdx);
}

let endOfSections = content.indexOf("] : [];", sectionsStartIdx);

if (endOfSections !== -1) {
    endOfSections += "] : [];".length;
} else {
    endOfSections = content.indexOf("] : []", sectionsStartIdx);
    if (endOfSections !== -1) endOfSections += "] : []".length;
}

const sectionsCode = content.slice(sectionsStartIdx, endOfSections);

let functionBody = sectionsCode.replace("const sections = \n    ", "").replace("const sections =\n    ", "").replace("const sections =", "").trim();

const sectionsFunction = `function getSectionsForCategory(category: string) {\n  return ` + functionBody + `;\n}`;

const newGridComponent = `
import { homeCategories, productCategories } from './navigationData';
import { Code, Copy, Check } from 'lucide-react';
import { useState } from 'react';

` + sectionsFunction + `

export function SectionLibraryGrid({ category }: { category: string }) {
  const groups = category === 'home' ? homeCategories : productCategories;

  const padNum = (num: number) => num.toString().padStart(2, '0');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="w-full">
      {groups.map((group, groupIndex) => {
        const sections = getSectionsForCategory(group.mappedId || group.id);
        if (!sections || sections.length === 0) return null;

        return (
          <div key={group.id} id={group.id} className="w-full mb-32 pt-16">
            <div className="px-8 lg:px-12 max-w-[1600px] mx-auto w-full mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 uppercase">
                {padNum(groupIndex + 1)} — {group.label}
              </h2>
              <p className="text-gray-500 mt-2 text-lg">
                Premium reusable {group.label.toLowerCase()} sections for your website.
              </p>
            </div>
            
            <div className="flex flex-col gap-24">
              {sections.map((section: any, index: number) => {
                const num = (index + 1).toString().padStart(2, '0');
                return (
                  <div key={section.id} id={section.id} className="flex flex-col w-full">
                    <div className="px-8 lg:px-12 max-w-[1600px] mx-auto w-full mb-6">
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="flex items-baseline gap-3 mb-2">
                            <span className="text-2xl font-light text-gray-400 font-mono">{num}</span>
                            <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide">{section.title}</h3>
                          </div>
                          <p className="text-gray-500 max-w-3xl">
                            {section.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button 
                            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                            onClick={() => copyToClipboard(JSON.stringify(section.previewComponent.props.data, null, 2))}
                            title="Copy JSON"
                          >
                            <Code size={16} />
                            JSON
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="w-full border-y border-gray-200 bg-white">
                      <div className="w-full relative origin-top">
                        {section.previewComponent}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
`;

const newContent = content.slice(0, startIdx) + newGridComponent;

fs.writeFileSync('c:/UI Library/src/components/section-library/SectionLibraryGrid.tsx', newContent, 'utf8');
console.log('Done!');
