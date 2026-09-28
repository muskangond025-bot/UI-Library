const fs = require('fs');
let c = fs.readFileSync('src/components/section-library/SectionLibraryGrid.tsx', 'utf8');
c = c.replace(/title: 'What's Included (\d+)',/g, 'title: "What\'s Included $1",');
c = c.replace(/description: 'Placeholder content for What's Included (\d+)',/g, 'description: "Placeholder content for What\'s Included $1",');
fs.writeFileSync('src/components/section-library/SectionLibraryGrid.tsx', c);
console.log('Fixed quotes');
