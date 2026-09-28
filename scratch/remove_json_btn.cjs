const fs = require('fs');

const path = 'c:/UI Library/src/components/section-library/SectionLibraryGrid.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace copyToClipboard
content = content.replace(/  const copyToClipboard = \([\s\S]*?};\n/, '');

// Replace the Get JSON safely logic
content = content.replace(/\/\/ Get JSON safely[\s\S]*?}\n\n/g, '');

// Remove the button
const buttonPattern = /<div className="flex items-center gap-2">\s*<button[\s\S]*?<\/button>\s*<\/div>/g;
content = content.replace(buttonPattern, '');

fs.writeFileSync(path, content, 'utf8');
console.log('Removed JSON button');
