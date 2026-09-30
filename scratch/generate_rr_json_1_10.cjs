const fs = require('fs');
const path = require('path');

const jsons = Array.from({ length: 10 }).map((_, i) => ({
  name: `return-refund-information-\${i + 1}`,
  content: {
    "title": "Return & Refund Information",
    "description": "Clear presentation of return policies, refund processes, and related information."
  }
}));

jsons.forEach(comp => {
  const filePath = path.join(__dirname, '..', 'src', 'components', 'sections', 'product', '13-return-refund-information', comp.name, comp.name + '.json');
  
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filePath, JSON.stringify(comp.content, null, 2), 'utf-8');
  console.log('Updated ' + comp.name + '.json');
});
