const fs = require('fs');
const path = require('path');

const gridPath = path.resolve(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridPath, 'utf-8');

// Replace all instances of ` data={order... as any}` in previewComponent attributes for order components
const updatedContent = content.replace(/(previewComponent:\s*<Order[A-Za-z0-9]+)\s+data=\{[^}]+\}/g, '$1');

fs.writeFileSync(gridPath, updatedContent, 'utf-8');
console.log('Cleaned up unnecessary data props on Order components in SectionLibraryGrid.tsx!');
