const fs = require('fs');

const path = 'c:/UI Library/src/components/section-library/SectionLibraryShell.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace('className="flex-1 overflow-auto relative"', 'className="flex-1 overflow-y-auto overflow-x-hidden relative"');

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed shell overflow');
