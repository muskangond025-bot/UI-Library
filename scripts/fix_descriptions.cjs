const fs = require('fs');
const path = require('path');

const gridFile = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridFile, 'utf8');

content = content.replace(/id: '([^']+)',\s*title: '([^']+)',\s*description: 'Placeholder content for ',\s*previewComponent: <([^ ]+) data=\{([^ ]+) as any\} \/>/g, 
  "id: '$1',\n          title: '$2',\n          description: $4?.description || 'Placeholder content for $2',\n          previewComponent: <$3 data={$4 as any} />"
);

fs.writeFileSync(gridFile, content);
console.log('Successfully updated SectionLibraryGrid.tsx descriptions');
