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

  // Replace heights in root tag
  content = content.replace('min-h-[640px] sm:min-h-[720px] lg:min-h-[780px]', targetHeight);
  content = content.replace('min-h-[900px]', targetHeight);
  content = content.replace('min-h-[920px]', targetHeight);
  content = content.replace('min-h-[750px] py-20', `${targetHeight} py-8 sm:py-10`);
  content = content.replace('min-h-[700px] py-20', `${targetHeight} py-8 sm:py-10`);
  content = content.replace('w-full py-20 px-4 sm:px-6 lg:px-8', `w-full ${targetHeight} py-8 sm:py-10 px-4 sm:px-6 lg:px-8`);

  // Balance common internal large spacings so designs fit nicely without vertical cut
  content = content.replace('space-y-16', 'space-y-6 sm:space-y-8');
  content = content.replace('space-y-14', 'space-y-6 sm:space-y-8');
  content = content.replace('space-y-12', 'space-y-5 sm:space-y-6');
  content = content.replace('space-y-10', 'space-y-4 sm:space-y-6');
  content = content.replace('space-y-8', 'space-y-4 sm:space-y-5');

  // Large paddings in inner cards
  content = content.replace('p-10 sm:p-20', 'p-6 sm:p-10');
  content = content.replace('p-10 sm:p-16', 'p-6 sm:p-10');
  content = content.replace('p-12 sm:p-16', 'p-6 sm:p-10');

  // Massive headers
  content = content.replace('text-[13vw]', 'text-[8.5vw]');
  content = content.replace('text-6xl sm:text-7xl md:text-8xl', 'text-4xl sm:text-6xl md:text-7xl');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated about-hero-${num} (${files[0]})`);
}

console.log('All 20 About Hero components updated successfully!');
