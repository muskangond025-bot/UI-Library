const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, '../src/components/sections/account/01-overview');
const files = fs.readdirSync(dir);

for (const file of files) {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    content = content.replace(/Muskan Gond/g, 'Alex Morgan');
    content = content.replace(/MUSKAN GOND/g, 'ALEX MORGAN');
    content = content.replace(/Muskan/g, 'Alex');
    content = content.replace(/MUSKAN/g, 'ALEX');
    content = content.replace(/muskan@example\.com/g, 'alex.morgan@example.com');

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${file}`);
  }
}
