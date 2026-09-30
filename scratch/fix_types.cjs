const fs = require('fs');
const path = require('path');

for (let i = 11; i <= 18; i++) {
  const filePath = path.join(__dirname, '..', 'src', 'components', 'sections', 'product', '10-product-care', 'product-care-' + i, 'ProductCare' + i + '.tsx');
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/export default function ProductCare\\d+\\(\\{ data \\}\\) \\{/, 'export default function ProductCare' + i + '({ data }: { data: any }) {');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed ProductCare' + i + '.tsx');
  }
}
