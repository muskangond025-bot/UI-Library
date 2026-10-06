const fs = require('fs');
const path = require('path');

const addressDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'account', '03-address-book');

for (let i = 1; i <= 20; i++) {
  const num = String(i).padStart(2, '0');
  const filePath = path.join(addressDir, `account-address-book-${num}.tsx`);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  // Match import { ... } from 'lucide-react';
  const importMatch = content.match(/import\s+\{([^}]+)\}\s+from\s+['"]lucide-react['"];/);
  if (importMatch) {
    const rawImports = importMatch[1].split(',').map(s => s.trim()).filter(Boolean);
    const bodyContent = content.replace(importMatch[0], '');

    const usedImports = rawImports.filter(impName => {
      const regex = new RegExp(`\\b${impName}\\b`);
      return regex.test(bodyContent);
    });

    if (usedImports.length > 0) {
      const newImportStatement = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
      content = content.replace(importMatch[0], newImportStatement);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Cleaned imports in account-address-book-${num}.tsx: ${usedImports.join(', ')}`);
    } else {
      content = content.replace(importMatch[0], '');
      fs.writeFileSync(filePath, content, 'utf8');
    }
  }

  // Remove unused React imports like useState, AnimatePresence
  content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('useState') && !content.includes('useState(')) {
    content = content.replace(/,?\s*useState\s*,?/, '');
  }
  if (content.includes('AnimatePresence') && !content.includes('<AnimatePresence')) {
    content = content.replace(/,?\s*AnimatePresence\s*,?/, '');
  }
  fs.writeFileSync(filePath, content, 'utf8');
}
