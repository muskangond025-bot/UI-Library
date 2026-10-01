const fs = require('fs');

const gridPath = 'c:/UI Library/src/components/section-library/SectionLibraryGrid.tsx';
let content = fs.readFileSync(gridPath, 'utf8');

const targetStart = "category === 'review-summary' ? [";
const targetEnd = "] :";

const startIndex = content.indexOf(targetStart);
const endIndex = content.indexOf(targetEnd, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  let newArray = `category === 'review-summary' ? [\n`;
  for (let i = 1; i <= 20; i++) {
    newArray += `        {\n`;
    newArray += `          id: 'review-summary-${i}',\n`;
    newArray += `          title: reviewSummary${i}Data.title || "Review Summary ${i}",\n`;
    newArray += `          description: reviewSummary${i}Data.description || "Statistical review summary.",\n`;
    newArray += `          previewComponent: <ReviewSummary${i} data={reviewSummary${i}Data as any} />\n`;
    newArray += `        }${i < 20 ? ',' : ''}\n`;
  }
  
  content = content.substring(0, startIndex) + newArray + '      ' + content.substring(endIndex);
  fs.writeFileSync(gridPath, content, 'utf8');
  console.log('Successfully updated SectionLibraryGrid.tsx for review-summary!');
} else {
  console.error('Target array not found!');
}
