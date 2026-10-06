const fs = require('fs');
const path = require('path');

const dirs = [
  path.join(__dirname, '..', 'src', 'components', 'sections', 'account', '01-overview'),
  path.join(__dirname, '..', 'src', 'components', 'sections', 'account', '03-address-book'),
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

  files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Check React imports needed
    const reactHooks = [];
    if (content.includes('useState(') || content.includes('useState<')) reactHooks.push('useState');
    if (content.includes('useEffect(') || content.includes('useEffect<')) reactHooks.push('useEffect');
    if (content.includes('useRef(') || content.includes('useRef<')) reactHooks.push('useRef');

    let reactImport = reactHooks.length > 0
      ? `import React, { ${reactHooks.join(', ')} } from 'react';`
      : `import React from 'react';`;

    // Replace existing React import line
    content = content.replace(/import React,?\s*\{?[^}]*\}?\s*from\s*['"]react['"];?/, reactImport);

    // Check Framer Motion imports needed
    const fmMotion = content.includes('motion.') || content.includes('<motion');
    const fmAP = content.includes('<AnimatePresence');
    const fmMV = content.includes('useMotionValue(');
    const fmSp = content.includes('useSpring(');
    const fmTr = content.includes('useTransform(');

    const fmItems = [];
    if (fmMotion) fmItems.push('motion');
    if (fmAP) fmItems.push('AnimatePresence');
    if (fmMV) fmItems.push('useMotionValue');
    if (fmSp) fmItems.push('useSpring');
    if (fmTr) fmItems.push('useTransform');

    if (fmItems.length > 0) {
      const fmImport = `import { ${fmItems.join(', ')} } from 'framer-motion';`;
      content = content.replace(/import\s*\{[^}]*\}\s*from\s*['"]framer-motion['"];?/, fmImport);
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Verified imports for ${file}`);
  });
});
