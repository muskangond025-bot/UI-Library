const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, '../src/components/sections');

function walk(dir, isProduct) {
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      walk(fullPath, isProduct || file === 'product');
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');

      // Determine correct relative path to 'src/components/shared'
      // Normal sections: 3 levels up: ../../../shared
      // Product sections: 4 levels up: ../../../../shared
      const replacement = isProduct ? '../../../../shared' : '../../../shared';

      // Replace existing ../../shared or ../../../shared etc.
      // Some might have already been modified, so let's match any number of ../ that go to shared
      // e.g. from '../../shared/Navbar'
      let newContent = content.replace(/from\s+['"](?:\.\.\/)+shared\//g, `from '${replacement}/`);

      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
      }
    }
  });
}

if (fs.existsSync(sectionsDir)) {
  walk(sectionsDir, false);
}
