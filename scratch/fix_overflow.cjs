const fs = require('fs');

const path = 'c:/UI Library/src/components/section-library/SectionLibraryGrid.tsx';
let content = fs.readFileSync(path, 'utf8');

// The wrapper is currently: `<div className="w-full border-y border-gray-200 bg-white">`
// We'll change it to `<div className="w-full border-y border-gray-200 bg-white overflow-x-hidden max-w-[100vw]">`
// to ensure no horizontal overflow ever occurs.
content = content.replace(/className="w-full border-y border-gray-200 bg-white"/g, 'className="w-full border-y border-gray-200 bg-white overflow-x-hidden max-w-[100vw]"');

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed wrapper overflow');
