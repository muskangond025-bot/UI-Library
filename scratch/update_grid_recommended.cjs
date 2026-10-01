const fs = require('fs');

const gridPath = 'c:/UI Library/src/components/section-library/SectionLibraryGrid.tsx';
let content = fs.readFileSync(gridPath, 'utf8');

const targetStart = "category === 'recommended-products' ? [";
const targetEnd = "] :";

const startIndex = content.indexOf(targetStart);
const endIndex = content.indexOf(targetEnd, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  let newArray = `category === 'recommended-products' ? [\n`;
  for (let i = 1; i <= 20; i++) {
    newArray += `        {\n`;
    newArray += `          id: 'recommended-products-${i}',\n`;
    newArray += `          title: recommendedProducts${i}Data.title || "Recommended Products ${i}",\n`;
    newArray += `          description: recommendedProducts${i}Data.description || "Personalized product recommendations.",\n`;
    newArray += `          previewComponent: <RecommendedProducts${i} data={recommendedProducts${i}Data as any} />\n`;
    newArray += `        }${i < 20 ? ',' : ''}\n`;
  }
  
  content = content.substring(0, startIndex) + newArray + '      ' + content.substring(endIndex);
  fs.writeFileSync(gridPath, content, 'utf8');
  console.log('Successfully updated SectionLibraryGrid.tsx for recommended-products!');
} else {
  console.error('Target array not found!');
}
