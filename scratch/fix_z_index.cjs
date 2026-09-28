const fs = require('fs');

const navbarPath = 'c:/UI Library/src/components/section-library/SectionLibraryNavbar.tsx';
let navbarContent = fs.readFileSync(navbarPath, 'utf8');

navbarContent = navbarContent.replace('sticky top-0 z-50 w-full', 'relative z-[9999] w-full');
navbarContent = navbarContent.replace(/z-50/g, 'z-[10000]');

fs.writeFileSync(navbarPath, navbarContent, 'utf8');

const shellPath = 'c:/UI Library/src/components/section-library/SectionLibraryShell.tsx';
let shellContent = fs.readFileSync(shellPath, 'utf8');

shellContent = shellContent.replace('relative"', 'relative z-0"');

fs.writeFileSync(shellPath, shellContent, 'utf8');
console.log('Fixed z-index stacking contexts');
