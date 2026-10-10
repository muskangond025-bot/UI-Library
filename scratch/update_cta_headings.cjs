const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/about/11-about-cta-banner');

const items = [
  { id: 1, num: '01', design: 'FROSTED GLASSMORPHISM', anim: 'FLOATING AMBIENT ORBS & GLOW' },
  { id: 2, num: '02', design: 'DARK OBSIDIAN GLASS', anim: 'NEON LASER SWEEP & PULSE' },
  { id: 3, num: '03', design: 'SOFT NEUMORPHISM', anim: 'DUAL-SHADOW DEPTH & TACTILE PRESS' },
  { id: 4, num: '04', design: 'HOLO CHROMA FOIL', anim: 'CHROMATIC RAINBOW BORDER ROTATION' },
  { id: 5, num: '05', design: '3D CLAYMORPHISM', anim: 'SOFT SQUISHY REACTION & 3D TILT' },
  { id: 6, num: '06', design: 'NEO-BRUTALISM', anim: 'HARD STARK OFFSET SHADOW POP' },
  { id: 7, num: '07', design: 'METALLIC CHROMIUM', anim: 'LIQUID METAL SHEEN & SHINE' },
  { id: 8, num: '08', design: 'CYBERPUNK HUD GLASS', anim: 'SCANLINE RADAR SWEEP & LATENCY PULSE' },
  { id: 9, num: '09', design: 'VELVET MATTE GLASS', anim: 'SATIN DIFFUSE AURA FADE-IN' },
  { id: 10, num: '10', design: 'LIQUID AURORA MORPHISM', anim: 'MORPHING SVG AURORA WAVE FLOW' },
  { id: 11, num: '11', design: 'PRISM LIGHT GLASS', anim: 'PRISM COLOR SPLITTING & BEAM TILT' },
  { id: 12, num: '12', design: 'FLOATING PARALLAX STACK', anim: 'MULTI-PLANE SCROLL ELEVATION' },
  { id: 13, num: '13', design: 'SKEUOMORPHIC BEVEL', anim: 'GLOSSY BEVEL SHINE & SEAL PRESS' },
  { id: 14, num: '14', design: 'MONOCHROME HAIRLINE', anim: 'ARCHITECTURAL LINEAR GRID SCALE' },
  { id: 15, num: '15', design: 'BENTO BOX GLASS', anim: 'STAGGERED MODULAR TILE FADE-UP' },
  { id: 16, num: '16', design: 'FROSTED BIO-GLASS', anim: 'ORGANIC LEAF PARTICLE FLOATING' },
  { id: 17, num: '17', design: 'COSMIC STARFIELD', anim: 'TWINKLING NEBULA STAR PARTICLES' },
  { id: 18, num: '18', design: 'DRAWER MODAL', anim: 'SLIDE-OUT CONSULTATION DRAWER REVEAL' },
  { id: 19, num: '19', design: 'SYNTHWAVE NEON GRID', anim: 'PERSPECTIVE GRID SCROLL & SCANLINE' },
  { id: 20, num: '20', design: 'ULTRA LUXURY DIAMOND', anim: 'FACETED DIAMOND SPARKLE FLARE' }
];

for (const it of items) {
  const compName = `AboutCtaBanner${it.id}`;
  const dirPath = path.join(baseDir, `cta-banner-${it.num}`);
  const filePath = path.join(dirPath, `${compName}.tsx`);

  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace top pill badge text to explicitly state design and animation
    const newBadgeText = `${it.design} #${it.num} • ANIMATION: ${it.anim}`;
    content = content.replace(
      /GLASSMORPHISM CTA #01|OBSIDIAN GLASS CTA #02|NEUMORPHISM CTA #03|HOLO CHROMA #04|CLAYMORPHISM 3D #05|NEO-BRUTALISM #06|METALLIC CHROMIUM #07|CYBERPUNK HUD #08|VELVET MATTE #09|LIQUID AURORA #10|PRISM LIGHT #11|PARALLAX STACKED #12|SKEUOMORPHIC BEVEL #13|HAIRLINE GRID #14|BENTO BOX GRID #15|BIO-GLASS #16|COSMIC STARFIELD #17|DRAWER MODAL #18|SYNTHWAVE GRID #19|ULTRA DIAMOND #20/g,
      newBadgeText
    );

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated badge heading in ${compName}`);
  }
}

console.log('Finished updating badge headings for AboutCtaBanner 1 through 20.');
