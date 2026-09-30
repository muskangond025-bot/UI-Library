const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const updates = [
  { id: 11, title: 'SPINNER ENTRANCE CARD', desc: 'A clean entrance animation with a springy load spinner that rotates on hover.' },
  { id: 12, title: 'SCROLL-LINKED PROGRESS', desc: 'A claim progress tracker that links the final step completion animation directly to your scroll position.' },
  { id: 13, title: 'STACKED CARDS HOVER', desc: 'A visually stacked deck of coverage cards that fan out and expand upwards gracefully when hovered.' },
  { id: 14, title: 'CURSOR FOLLOW 3D TILT', desc: 'A highly interactive card that tilts in 3D space tracking the mouse, accompanied by a glowing cursor follower.' },
  { id: 15, title: 'PULSING NOISE BACKGROUND', desc: 'An editorial design with a grainy background and a pulsing, infinite-looping 10-year guarantee badge.' },
  { id: 16, title: 'SWIPE TO DELETE SIMULATION', desc: 'A micro-interaction replicating a swipe-to-delete gesture, leading to an animated success confirmation state.' },
  { id: 17, title: '3D PERSPECTIVE FLIP', desc: 'An elegant premium coverage card that enters with a 3D flip and preserves 3D transforms for hovering depth.' },
  { id: 18, title: 'RIPPLE DOWNLOAD BUTTON', desc: 'An infinite pulsing ripple background surrounding a download button that bounces playfully on tap.' },
  { id: 19, title: 'COPY TO CLIPBOARD FEEDBACK', desc: 'A support PIN feature that reveals a floating "Copied!" notification with an animated countdown expiry bar.' },
  { id: 20, title: 'SCROLL DRAW SVG', desc: 'A certified protection seal where the SVG path for the checkmark is physically drawn onto the screen as you scroll.' }
];

updates.forEach((update) => {
  const regex = new RegExp(
    `(id:\\s*'warranty-information-${update.id}',\\s*title:\\s*)'[^']+'(,\\s*description:\\s*)'[^']+'`,
    'g'
  );
  content = content.replace(regex, `$1'${update.title}'$2'${update.desc}'`);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Warranty 11-20 metadata updated successfully.');
