const fs = require('fs');

const path = 'c:/UI Library/src/components/section-library/SectionLibraryGrid.tsx';
let content = fs.readFileSync(path, 'utf8');

if (!content.includes('import { homeCategories, productCategories } from')) {
    content = content.replace("import React from 'react';", `import React from 'react';\nimport { homeCategories, productCategories } from './navigationData';\nimport { Code } from 'lucide-react';\n`);
}

// 1. Convert `const sections = ...` to `const getSectionsForCategory = (category: string) => { return ...`
content = content.replace(/const sections = category === 'hero'/, "const getSectionsForCategory = (category: string) => {\n    return category === 'hero'");

// 2. Find the last `] : [];` before the main `return (` statement.
// The main return statement is right after the sections declaration.
// Let's use regex to find `] : [];` followed by `return (` 
// The regex finds `] : [];` optionally followed by whitespace, then `return (`
const returnRegex = /\] : \[\];\s*return \(/;
const match = content.match(returnRegex);

if (!match) {
    console.error("Could not find the return statement!");
    process.exit(1);
}

const matchIndex = match.index;
const endOfArrayMatch = content.indexOf("] : [];", matchIndex - 5);

// The code up to the end of `] : [];`
let preReturnCode = content.substring(0, endOfArrayMatch + "] : [];".length);

// Append the closing brace for `getSectionsForCategory`
preReturnCode += "\n  };\n\n";

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
console.log('Successfully refactored!');
