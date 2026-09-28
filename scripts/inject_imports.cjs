const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, '../src/components/sections');
let imports = "import React from 'react';\nimport { SectionLibraryCard } from './SectionLibraryCard';\n";

function toCamelCase(str) {
  return str.replace(/-([a-z0-9])/g, g => g[1].toUpperCase());
}

function toPascalCase(str) {
  const camel = toCamelCase(str);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

function getImportStatement(filePath, componentName, importPath) {
  const content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('export default function ' + componentName) || content.includes('export default ' + componentName) || content.includes('export default function(')) {
    return `import ${componentName} from '${importPath}';\n`;
  } else if (content.includes('export function ' + componentName) || content.includes('export const ' + componentName)) {
    return `import { ${componentName} } from '${importPath}';\n`;
  }
  // Fallback to default
  return `import ${componentName} from '${importPath}';\n`;
}

const list = fs.readdirSync(sectionsDir);
for (const folder of list) {
  const folderPath = path.join(sectionsDir, folder);
  if (!fs.statSync(folderPath).isDirectory() || folder === 'product') continue;

  const subDirs = fs.readdirSync(folderPath);
  for (const subDir of subDirs) {
    const match = subDir.match(/^(.*?)-(\d+)$/);
    if (!match) continue;
    
    const componentName = toPascalCase(subDir);
    const dataName = toCamelCase(subDir) + 'Data';
    const filePath = path.join(folderPath, subDir, componentName + '.tsx');
    if (!fs.existsSync(filePath)) continue;
    
    imports += getImportStatement(filePath, componentName, `../sections/${folder}/${subDir}/${componentName}`);
    imports += `import ${dataName} from '../sections/${folder}/${subDir}/${subDir}.json';\n`;
  }
}

const productDir = path.join(sectionsDir, 'product');
const productList = fs.readdirSync(productDir);
for (const folder of productList) {
  const folderPath = path.join(productDir, folder);
  if (!fs.statSync(folderPath).isDirectory()) continue;
  
  const subDirs = fs.readdirSync(folderPath);
  for (const subDir of subDirs) {
    const match = subDir.match(/^(.*?)-(\d+)$/);
    if (!match) continue;
    
    const componentName = toPascalCase(subDir);
    const dataName = toCamelCase(subDir) + 'Data';
    const filePath = path.join(folderPath, subDir, componentName + '.tsx');
    if (!fs.existsSync(filePath)) continue;

    imports += getImportStatement(filePath, componentName, `../sections/product/${folder}/${subDir}/${componentName}`);
    imports += `import ${dataName} from '../sections/product/${folder}/${subDir}/${subDir}.json';\n`;
  }
}

const gridFile = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridFile, 'utf8');

const exportIndex = content.indexOf('export function SectionLibraryGrid');
if (exportIndex > -1) {
  content = imports + '\n' + content.slice(exportIndex);
  fs.writeFileSync(gridFile, content);
  console.log('Successfully injected all imports!');
} else {
  console.log('Could not find export statement');
}
