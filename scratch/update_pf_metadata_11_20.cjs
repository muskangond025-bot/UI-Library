const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const updates = [
  { id: 11, title: 'HOVER RIPPLE GRID', desc: 'A minimalist 3x3 grid of feature boxes. Hovering over a box triggers a sleek blue ripple explosion that originates from the center of the card.' },
  { id: 12, title: 'VERTICAL TIMELINE ACCORDION', desc: 'An interactive vertical timeline. Clicking a step expands it downward to reveal its description while seamlessly crossfading a beautiful image on the right.' },
  { id: 13, title: '3D INTERACTIVE FLIP CARDS', desc: 'A grid of premium cards. Hovering smoothly rotates them 180 degrees in true 3D space to reveal secondary feature details on the back.' },
  { id: 14, title: 'GLASSMORPHIC PARALLAX LAYERS', desc: 'Multiple glassmorphic panes floating at different depths. As you scroll, they move at different speeds, creating a stunning Z-index parallax depth effect.' },
  { id: 15, title: 'STICKY NUMBER COUNTUP', desc: 'Massive typographic numbers stick to the left side of the screen while feature descriptions and images scroll vertically past them on the right.' },
  { id: 16, title: 'RADIAL PROGRESS FEATURES', desc: 'A sleek layout featuring large circular SVG progress bars that fluidly animate to their respective percentages as you scroll down to them.' },
  { id: 17, title: 'MARQUEE FEATURE SHOWCASE', desc: 'A continuous, infinite CSS marquee of high-res images. Hovering over an image pauses the track and reveals a slick glassmorphic text overlay.' },
  { id: 18, title: 'CURSOR FOLLOWER REVEAL', desc: 'A list of massive text features. A custom image cursor smoothly follows your mouse, changing its image based on which text feature you hover over.' },
  { id: 19, title: 'OS SPOTLIGHT SELECTOR', desc: 'A layout inspired by OS interfaces. Clicking a glowing pill at the top triggers a cinematic blur crossfade to reveal the selected feature text.' },
  { id: 20, title: 'CINEMATIC TEXT REVEAL', desc: 'The ultimate ending section. Features are revealed via cinematic blur-in and massive scale-up animations, reminiscent of a movie trailer.' }
];

updates.forEach((update) => {
  const regex = new RegExp(
    `(id:\\s*'product-features-${update.id}',\\s*title:\\s*)'[^']+'(,\\s*description:\\s*)'[^']+'`,
    'g'
  );
  content = content.replace(regex, `$1'${update.title}'$2'${update.desc}'`);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Product Features 11-20 metadata updated successfully.');
