const fs = require('fs');
const content = fs.readFileSync('c:/UI Library/src/components/section-library/SectionLibraryGrid.tsx', 'utf8');
const lines = content.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('OffersLimitedTime18') || line.includes('offersLimitedTime18Data')) {
    console.log(`Line ${idx + 1}: ${line}`);
  }
});
