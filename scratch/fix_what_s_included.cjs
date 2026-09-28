const fs = require('fs');
const path = 'c:/UI Library/src/components/section-library/SectionLibraryGrid.tsx';
let content = fs.readFileSync(path, 'utf8');

// Fix WhatSIncluded
content = content.replace(/what-sincluded/g, 'what-s-included');
content = content.replace(/What-sincluded/g, 'what-s-included');

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed what-s-included typos');
