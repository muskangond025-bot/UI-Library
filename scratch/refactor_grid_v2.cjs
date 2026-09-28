const fs = require('fs');

const path = 'c:/UI Library/src/components/section-library/SectionLibraryGrid.tsx';
let content = fs.readFileSync(path, 'utf8');

// Add imports to the top, right after `import React from 'react';`
if (!content.includes('import { homeCategories, productCategories } from')) {
    content = content.replace("import React from 'react';", `import React from 'react';\nimport { homeCategories, productCategories } from './navigationData';\nimport { Code, Copy, Check } from 'lucide-react';\nimport { useState } from 'react';\n`);
}

// Replace `const sections = category === 'hero'` with `const getSectionsForCategory = (category: string) => {\n return category === 'hero'`
// We need to be careful with exact spacing.
content = content.replace("const sections = category === 'hero'", "const getSectionsForCategory = (category: string) => {\n    return category === 'hero'");

// Find the end of that ternary and close the function body
// The end is `] : [];`
const returnStart = content.lastIndexOf("  return (\n    <div className=\"p-8 lg:p-12 max-w-7xl mx-auto w-full\">");

// Before the returnStart, there is `] : [];`
// Replace the LAST `] : [];` before returnStart with `] : []; };`
let preReturnCode = content.substring(0, returnStart);
preReturnCode = preReturnCode.replace(/\] : \[\];\s*$/, "] : [];\n  };\n\n");

const postReturnCode = content.substring(returnStart);

// Now we want to replace the entire `return (` block.
// We can just find the end of the file or the end of the component.
// The component is the last thing in the file, so we can just replace everything from `return (` to the end of the file.
// Wait, is there anything after the component? Probably not.
// Let's replace the `return (` block.

const newReturnBlock = `  const groups = category === 'home' ? homeCategories : productCategories;

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
                
                // Get JSON safely
                let jsonText = "{}";
                if (section.previewComponent && section.previewComponent.props) {
                    jsonText = JSON.stringify(section.previewComponent.props.data || section.previewComponent.props.section || {}, null, 2);
                }

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
                            onClick={() => copyToClipboard(jsonText)}
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

content = preReturnCode + newReturnBlock;

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed SectionLibraryGrid.tsx safely!');
