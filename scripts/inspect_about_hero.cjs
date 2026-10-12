const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'components', 'sections', 'about', '01-about-hero');
const targetHeight = 'h-[520px] sm:h-[580px] lg:h-[620px] min-h-[460px] max-h-[680px]';

for (let i = 1; i <= 20; i++) {
  const num = String(i).padStart(2, '0');
  const folder = path.join(dir, `about-hero-${num}`);
  if (!fs.existsSync(folder)) continue;
  
  const files = fs.readdirSync(folder).filter(f => f.endsWith('.tsx'));
  if (!files.length) continue;

  const filePath = path.join(folder, files[0]);
  let content = fs.readFileSync(filePath, 'utf8');

  // Print current root classes
  const match = content.match(/<(section|div)[^>]*className="([^"]*)"/);
  if (match) {
    console.log(`about-hero-${num} (${files[0]}): ${match[0].slice(0, 120)}`);
  }
}
