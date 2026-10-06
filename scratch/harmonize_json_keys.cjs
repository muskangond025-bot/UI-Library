const fs = require('fs');
const path = require('path');

const accountDir = 'c:/UI Library/src/components/sections/account';

function syncJsonFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      syncJsonFiles(fullPath);
    } else if (file.endsWith('.json')) {
      try {
        const content = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
        let modified = false;
        if (content.heading && !content.title) {
          content.title = content.heading;
          modified = true;
        }
        if (content.title && !content.heading) {
          content.heading = content.title;
          modified = true;
        }
        if (modified) {
          fs.writeFileSync(fullPath, JSON.stringify(content, null, 2), 'utf8');
        }
      } catch (err) {
        // ignore parse errors
      }
    }
  }
}

syncJsonFiles(accountDir);
console.log('Successfully synced title/heading properties across all account section JSON files.');
