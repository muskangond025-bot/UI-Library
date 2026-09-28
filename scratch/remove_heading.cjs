const fs = require('fs');

const path = 'c:/UI Library/src/components/section-library/SectionLibraryGrid.tsx';
let content = fs.readFileSync(path, 'utf8');

// Remove the heading block
const headingRegex = /<div className="px-8 lg:px-12 max-w-\[1600px\] mx-auto w-full mb-12">[\s\S]*?<\/div>/;
content = content.replace(headingRegex, '');

// Remove padding top from the group wrapper and reduce margin bottom to remove the gap
content = content.replace(/className="w-full mb-32 pt-16"/g, 'className="w-full mb-12"');

fs.writeFileSync(path, content, 'utf8');
console.log('Removed heading and gap');
