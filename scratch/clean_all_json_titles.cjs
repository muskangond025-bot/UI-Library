const fs = require('fs');
const path = require('path');

const productDir = path.join(__dirname, '../src/components/sections/product');

function cleanJsonTitles(dir) {
  if (!fs.existsSync(dir)) return;
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      cleanJsonTitles(fullPath);
    } else if (item.endsWith('.json')) {
      try {
        const content = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
        if (content.title) {
          content.title = content.title.replace(/^\d+[\.\s-]*/, '');
          fs.writeFileSync(fullPath, JSON.stringify(content, null, 2), 'utf8');
        }
      } catch (e) {}
    }
  }
}

cleanJsonTitles(productDir);
console.log('All JSON titles cleaned successfully!');
