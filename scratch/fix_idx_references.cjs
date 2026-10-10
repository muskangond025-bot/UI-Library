const fs = require('fs');
const path = require('path');

const baseDir = path.join(process.cwd(), 'src', 'components', 'sections', 'global', '06-product-grid');

for (let idx = 1; idx <= 20; idx++) {
  const filePath = path.join(baseDir, `global-product-grid-${idx}`, `GlobalProductGrid${idx}.tsx`);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/DRIBBBLE SHOT #\{idx\}/g, `DRIBBBLE SHOT #${idx}`);
    content = content.replace(/\$\{idx > 5 \? '#' \+ idx : ''\}/g, idx > 5 ? `#${idx}` : '');
    fs.writeFileSync(filePath, content, 'utf8');
  }
}
console.log('Fixed all #{idx} references in Global Product Grid 1 to 20!');
