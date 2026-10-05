const fs = require('fs');
const path = require('path');

const gridPath = path.resolve(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
const importsTextPath = path.resolve(__dirname, 'order_imports.txt');
const entriesTextPath = path.resolve(__dirname, 'order_entries.txt');

const importsText = fs.readFileSync(importsTextPath, 'utf-8');
const entriesText = fs.readFileSync(entriesTextPath, 'utf-8');

let gridContent = fs.readFileSync(gridPath, 'utf-8');

// Insert imports right at top of file
gridContent = importsText + '\n' + gridContent;

// Insert grid entries inside sections array before the closing array `];`
const closingIndex = gridContent.lastIndexOf('];');
if (closingIndex !== -1) {
  gridContent = gridContent.slice(0, closingIndex) + ',\n' + entriesText + '\n];\n' + gridContent.slice(closingIndex + 2);
}

fs.writeFileSync(gridPath, gridContent, 'utf-8');
console.log('Successfully injected 120 ORDER section entries into SectionLibraryGrid.tsx!');
