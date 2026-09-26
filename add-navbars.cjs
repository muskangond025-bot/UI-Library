const fs = require('fs');
const path = require('path');

const variants = ['glass', 'minimal', 'split', 'floating'];

function injectNavbar(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('import { Navbar }')) {
    return; // Already injected
  }

  // Find the import block end
  const importLines = content.split('\n');
  let lastImportIdx = -1;
  for (let i = 0; i < importLines.length; i++) {
    if (importLines[i].trim().startsWith('import ')) {
      lastImportIdx = i;
    }
  }

  // Inject import
  if (lastImportIdx !== -1) {
    importLines.splice(lastImportIdx + 1, 0, `import { Navbar } from '../../shared/Navbar';`);
  }
  content = importLines.join('\n');

  // Pick random variant
  const variant = variants[Math.floor(Math.random() * variants.length)];

  // Inject component
  // Find first return (
  // <section
  // We can just regex replace <section to <section><Navbar variant="..." />
  // but some might have classes on <section>.
  // Better regex: /(<section[^>]*>)/i
  content = content.replace(/(<section[^>]*>)/i, `$1\n      <Navbar variant="${variant}" />`);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Injected ${variant} navbar into ${path.basename(filePath)}`);
}

function processDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDir(fullPath);
    } else if (entry.name.endsWith('.tsx') && (entry.name.startsWith('Banner') || entry.name.startsWith('HeroCarousel'))) {
      injectNavbar(fullPath);
    }
  }
}

const bannerDir = path.join(__dirname, 'src', 'components', 'Banner');
const heroCarouselDir = path.join(__dirname, 'src', 'components', 'HeroCarousel');

processDir(bannerDir);
processDir(heroCarouselDir);

console.log('Done!');
