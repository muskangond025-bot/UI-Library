const fs = require('fs');

const path = 'c:/UI Library/src/components/section-library/SectionLibraryGrid.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  /interface GridProps \{\s*category: string;\s*onSelectSection: \(sectionId: string\) => void;\s*\}/,
  'interface GridProps {\n  category: string;\n  onSelectSection?: (sectionId: string) => void;\n}'
);

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed GridProps type');
