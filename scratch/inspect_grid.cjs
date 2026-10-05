const fs = require('fs');
const path = require('path');

const gridPath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
const content = fs.readFileSync(gridPath, 'utf-8');

const lines = content.split('\n');
console.log('Total lines in SectionLibraryGrid.tsx:', lines.length);

lines.forEach((line, i) => {
  if (line.includes('account-reviews-ratings') || line.includes('AccountReviewsRatings') || line.includes('account-loyalty-rewards')) {
    console.log(`Line ${i + 1}: ${line.slice(0, 100)}`);
  }
});
