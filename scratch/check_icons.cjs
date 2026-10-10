const fs = require('fs');
const path = require('path');
const lucide = require('lucide-react');

const availableIcons = new Set(Object.keys(lucide));
console.log('Total available icons in lucide-react:', availableIcons.size);

function getFiles(dir, files = []) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, files);
    } else if (/\.(tsx|jsx|js|ts)$/.test(filePath)) {
      files.push(filePath);
    }
  }
  return files;
}

const allFiles = getFiles(path.join(__dirname, '../src'));
const missingMap = {};

for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const importMatches = content.matchAll(/import\s*\{([^}]+)\}\s*from\s*['"]lucide-react['"]/g);
  for (const match of importMatches) {
    const imports = match[1].split(',').map(s => s.trim()).filter(Boolean);
    for (const item of imports) {
      // ignore alias imports like "Check as CheckIcon"
      const name = item.split(/\s+as\s+/)[0].trim();
      if (!availableIcons.has(name) && name !== 'default') {
        if (!missingMap[name]) missingMap[name] = [];
        missingMap[name].push(path.relative(path.join(__dirname, '..'), file));
      }
    }
  }
}

console.log('Missing Icons and their files:', JSON.stringify(missingMap, null, 2));
