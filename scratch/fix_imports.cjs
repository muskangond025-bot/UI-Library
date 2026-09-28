const fs = require('fs');

const path = 'c:/UI Library/src/components/section-library/SectionLibraryGrid.tsx';
let content = fs.readFileSync(path, 'utf8');

// The injected imports
const importBlock = `
import { homeCategories, productCategories } from './navigationData';
import { Code, Copy, Check } from 'lucide-react';
import { useState } from 'react';
`;

// Remove the importBlock from where it currently is
content = content.replace(importBlock, '');

// Prepend to the file
content = importBlock.trim() + '\n' + content;

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed imports!');
