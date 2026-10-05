const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, '../src/components/sections/account/01-overview');
const files = fs.readdirSync(dir);

for (const file of files) {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Replace inline easing array [0.xx, y, z, w] or similar in transition object literals
    content = content.replace(/ease:\s*\[[\d\.\s,]+\]/g, "ease: 'easeInOut'");
    content = content.replace(/ease:\s*'easeInOut'/g, "ease: 'easeInOut'");
    
    // Replace type: 'spring' inside object literals if causing Variants typing issue
    content = content.replace(/type:\s*'spring'/g, "type: 'spring' as const");

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Cleaned Framer Motion transition easing in ${file}`);
  }
}
