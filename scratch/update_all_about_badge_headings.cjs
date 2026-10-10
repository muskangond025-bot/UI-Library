const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src/components/sections/about');
const gridFile = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');

const mapping = [
  {
    catId: 'about-certifications',
    folder: '09-about-certifications',
    prefix: 'certifications',
    compPrefix: 'AboutCertifications',
    label: 'ABOUT CERTIFICATIONS',
    items: [
      { id: 1, design: 'FROSTED GLASSMORPHISM', anim: 'AMBIENT ORBS & HOVER ELEVATION' },
      { id: 2, design: 'DARK OBSIDIAN GLASS', anim: 'CRYPTOGRAPHIC SHIELD & NEON GLOW' },
      { id: 3, design: 'CLASSIC DIPLOMA FRAME', anim: 'GOLD RIBBON SEAL PRESS' },
      { id: 4, design: 'HOLO CHROMA FOIL', anim: 'CHROMATIC RAINBOW BORDER ROTATION' },
      { id: 5, design: '3D CLAYMORPHISM', anim: 'LIGHT CLAY MESH & TACTILE PRESS' },
      { id: 6, design: 'DARK CLAYMORPHISM', anim: 'DARK CLAY MESH & NEON SHADOW' },
      { id: 7, design: 'BRIGHT NEO-MINIMALISM', anim: 'LIGHT CYAN MESH & AUTHORITY TAG' },
      { id: 8, design: 'CYBER CLAYMORPHISM', anim: 'PURPLE CLAY MESH & METADATA POP' },
      { id: 9, design: 'BRIGHT EMERALD CLAY', anim: 'MINT CLAY MESH & VERIFIED BADGE' },
      { id: 10, design: 'NEO-MINIMALIST CLAY', anim: 'PINK CLAY MESH & DRAWER TRIGGER' },
      { id: 11, design: 'BENTO BOX GRID', anim: 'STAGGERED MODULAR TILE FADE-UP' },
      { id: 12, design: 'PARALLAX STACKED GLASS', anim: 'MULTI-PLANE SCROLL ELEVATION' },
      { id: 13, design: 'METALLIC PLATINUM', anim: 'LIQUID METAL SHEEN & SHINE' },
      { id: 14, design: 'MONOCHROME HAIRLINE', anim: 'ARCHITECTURAL LINEAR GRID SCALE' },
      { id: 15, design: 'VERIFICATION DRAWER MODAL', anim: 'SLIDE-OUT AUDIT DRAWER REVEAL' },
      { id: 16, design: 'FROSTED BIO-GLASS', anim: 'ORGANIC LEAF PARTICLE FLOATING' },
      { id: 17, design: 'COSMIC STARFIELD', anim: 'TWINKLING NEBULA STAR PARTICLES' },
      { id: 18, design: 'TIMELINE CREDENTIALS', anim: 'MILESTONE DATE MARKER SCROLL' },
      { id: 19, design: 'SYNTHWAVE NEON GRID', anim: 'PERSPECTIVE GRID SCROLL & SCANLINE' },
      { id: 20, design: 'ULTRA LUXURY DIAMOND', anim: 'FACETED DIAMOND SPARKLE FLARE' }
    ]
  },
  {
    catId: 'about-team-showcase',
    folder: '08-about-team-showcase',
    prefix: 'team',
    compPrefix: 'AboutTeamShowcase',
    label: 'ABOUT TEAM SHOWCASE',
    items: [
      { id: 1, design: 'FROSTED GLASSMORPHISM', anim: 'FLOATING AMBIENT ORBS & CARD LIFT' },
      { id: 2, design: 'DARK OBSIDIAN GLASS', anim: 'NEON CYBER PULSE & HOVER SWEEP' },
      { id: 3, design: 'SOFT NEUMORPHISM', anim: 'DUAL-SHADOW DEPTH & TACTILE PUSH' },
      { id: 4, design: 'HOLO CHROMA FOIL', anim: 'CHROMATIC SHIMMER BORDER ROTATION' },
      { id: 5, design: '3D CLAYMORPHISM', anim: 'SOFT SQUISHY 3D TILT TRACKING' },
      { id: 6, design: 'NEO-BRUTALISM', anim: 'HARD STARK OFFSET SHADOW POP' },
      { id: 7, design: 'METALLIC CHROMIUM', anim: 'LIQUID METAL SHEEN & REFLECTION' },
      { id: 8, design: 'CYBERPUNK HUD', anim: 'SCANLINE RADAR SWEEP & DATA HUD' },
      { id: 9, design: 'VELVET MATTE', anim: 'SATIN DIFFUSE AURA FADE-IN' },
      { id: 10, design: 'LIQUID AURORA', anim: 'MORPHING SVG AURORA WAVE FLOW' },
      { id: 11, design: 'PRISM LIGHT GLASS', anim: 'PRISM COLOR SPLITTING & BEAM TILT' },
      { id: 12, design: 'FLOATING PARALLAX STACK', anim: 'MULTI-PLANE SCROLL ELEVATION' },
      { id: 13, design: 'SKEUOMORPHIC BEVEL', anim: 'GLOSSY BEVEL SHINE & PROFILE FLIP' },
      { id: 14, design: 'MONOCHROME HAIRLINE', anim: 'ARCHITECTURAL LINEAR GRID SCALE' },
      { id: 15, design: 'BENTO BOX GLASS', anim: 'STAGGERED MODULAR TILE FADE-UP' },
      { id: 16, design: 'FROSTED BIO-GLASS', anim: 'ORGANIC LEAF PARTICLE FLOATING' },
      { id: 17, design: 'COSMIC STARFIELD', anim: 'TWINKLING NEBULA STAR PARTICLES' },
      { id: 18, design: 'BIO MODAL REVEAL', anim: 'SLIDE-OUT MEMBER BIO DRAWER' },
      { id: 19, design: 'SYNTHWAVE NEON GRID', anim: 'PERSPECTIVE GRID SCROLL & SCANLINE' },
      { id: 20, design: 'ULTRA LUXURY DIAMOND', anim: 'FACETED DIAMOND SPARKLE FLARE' }
    ]
  },
  {
    catId: 'about-brand-values',
    folder: '07-about-brand-values',
    prefix: 'values',
    compPrefix: 'AboutBrandValues',
    label: 'ABOUT BRAND VALUES',
    items: [
      { id: 1, design: 'FROSTED GLASSMORPHISM', anim: 'AMBIENT GLOW ORBS & ICON ROTATION' },
      { id: 2, design: 'DARK OBSIDIAN GLASS', anim: 'CYBER NEON PULSE & LASER BORDER' },
      { id: 3, design: 'SOFT NEUMORPHISM', anim: 'DUAL-SHADOW DEPTH & TACTILE PRESS' },
      { id: 4, design: 'HOLO CHROMA FOIL', anim: 'CHROMATIC SHIMMER BORDER ROTATION' },
      { id: 5, design: '3D CLAYMORPHISM', anim: 'SOFT 3D SQUISHY REACTION & MOUSE TILT' },
      { id: 6, design: 'NEO-BRUTALISM', anim: 'HARD STARK OFFSET SHADOW POP' },
      { id: 7, design: 'METALLIC CHROMIUM', anim: 'LIQUID METAL SHEEN & SHINE' },
      { id: 8, design: 'CYBERPUNK HUD', anim: 'SCANLINE RADAR SWEEP & METRIC PING' },
      { id: 9, design: 'VELVET MATTE', anim: 'SATIN DIFFUSE AURA FADE-IN' },
      { id: 10, design: 'LIQUID AURORA', anim: 'MORPHING SVG AURORA WAVE FLOW' },
      { id: 11, design: 'PRISM LIGHT GLASS', anim: 'PRISM COLOR SPLITTING & BEAM TILT' },
      { id: 12, design: 'FLOATING PARALLAX STACK', anim: 'MULTI-PLANE SCROLL ELEVATION' },
      { id: 13, design: 'SKEUOMORPHIC BEVEL', anim: 'GLOSSY BEVEL SHINE & VALUE SEAL' },
      { id: 14, design: 'MONOCHROME HAIRLINE', anim: 'ARCHITECTURAL LINEAR GRID SCALE' },
      { id: 15, design: 'BENTO BOX GLASS', anim: 'STAGGERED MODULAR TILE FADE-UP' },
      { id: 16, design: 'FROSTED BIO-GLASS', anim: 'ORGANIC LEAF PARTICLE FLOATING' },
      { id: 17, design: 'COSMIC STARFIELD', anim: 'TWINKLING NEBULA STAR PARTICLES' },
      { id: 18, design: 'VALUES DRAWER MODAL', anim: 'SLIDE-OUT VALUE MANIFESTO DRAWER' },
      { id: 19, design: 'SYNTHWAVE NEON GRID', anim: 'PERSPECTIVE GRID SCROLL & SCANLINE' },
      { id: 20, design: 'ULTRA LUXURY DIAMOND', anim: 'FACETED DIAMOND SPARKLE FLARE' }
    ]
  },
  {
    catId: 'about-company-timeline',
    folder: '06-about-company-timeline',
    prefix: 'timeline',
    compPrefix: 'AboutCompanyTimeline',
    label: 'ABOUT COMPANY TIMELINE',
    items: [
      { id: 1, design: 'FROSTED GLASSMORPHISM', anim: 'AMBIENT ORBS & TIMELINE GLOW' },
      { id: 2, design: 'DARK OBSIDIAN GLASS', anim: 'NEON LASER MILESTONE PULSE' },
      { id: 3, design: 'SOFT NEUMORPHISM', anim: 'DUAL-SHADOW DEPTH & TACTILE STEP' },
      { id: 4, design: 'HOLO CHROMA FOIL', anim: 'CHROMATIC SHIMMER BORDER ROTATION' },
      { id: 5, design: '3D CLAYMORPHISM', anim: 'SOFT 3D SQUISHY MILESTONE TILT' },
      { id: 6, design: 'NEO-BRUTALISM', anim: 'HARD STARK OFFSET SHADOW POP' },
      { id: 7, design: 'METALLIC CHROMIUM', anim: 'LIQUID METAL SHEEN & SHINE' },
      { id: 8, design: 'CYBERPUNK HUD', anim: 'SCANLINE RADAR SWEEP & YEAR HUD' },
      { id: 9, design: 'VELVET MATTE', anim: 'SATIN DIFFUSE AURA FADE-IN' },
      { id: 10, design: 'LIQUID AURORA', anim: 'MORPHING SVG AURORA WAVE FLOW' },
      { id: 11, design: 'PRISM LIGHT GLASS', anim: 'PRISM COLOR SPLITTING & BEAM TILT' },
      { id: 12, design: 'FLOATING PARALLAX STACK', anim: 'MULTI-PLANE SCROLL ELEVATION' },
      { id: 13, design: 'SKEUOMORPHIC BEVEL', anim: 'GLOSSY BEVEL SHINE & YEAR SEAL' },
      { id: 14, design: 'MONOCHROME HAIRLINE', anim: 'ARCHITECTURAL LINEAR GRID SCALE' },
      { id: 15, design: 'BENTO BOX GLASS', anim: 'STAGGERED MODULAR TILE FADE-UP' },
      { id: 16, design: 'FROSTED BIO-GLASS', anim: 'ORGANIC LEAF PARTICLE FLOATING' },
      { id: 17, design: 'COSMIC STARFIELD', anim: 'TWINKLING NEBULA STAR PARTICLES' },
      { id: 18, design: 'TIMELINE DRAWER MODAL', anim: 'SLIDE-OUT MILESTONE DETAIL DRAWER' },
      { id: 19, design: 'SYNTHWAVE NEON GRID', anim: 'PERSPECTIVE GRID SCROLL & SCANLINE' },
      { id: 20, design: 'ULTRA LUXURY DIAMOND', anim: 'FACETED DIAMOND SPARKLE FLARE' }
    ]
  }
];

let gridContent = fs.readFileSync(gridFile, 'utf8');

for (const group of mapping) {
  const groupDir = path.join(srcDir, group.folder);

  for (const it of group.items) {
    const num = String(it.id).padStart(2, '0');
    const compName = `${group.compPrefix}${it.id}`;
    const compDir = path.join(groupDir, `${group.prefix}-${num}`);
    const filePath = path.join(compDir, `${compName}.tsx`);

    // 1. Update Component File Badge Text if file exists
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      const newBadgeText = `${it.design} #${num} • ANIMATION: ${it.anim}`;

      // Replace generic badges like CERTIFICATION #01, FROSTED GLASSMORPHISM #01, ABOUT TEAM SHOWCASE — VARIANT 01, etc.
      content = content.replace(
        /CERTIFICATION\s+#\d+|FROSTED GLASSMORPHISM #\d+|OBSIDIAN GLASS #\d+|SOFT NEUMORPHISM #\d+|HOLO CHROMA #\d+|3D CLAYMORPHISM #\d+|NEO-BRUTALISM #\d+|METALLIC CHROMIUM #\d+|CYBERPUNK HUD #\d+|VELVET MATTE #\d+|LIQUID AURORA #\d+|PRISM LIGHT #\d+|PARALLAX STACKED #\d+|SKEUOMORPHIC BEVEL #\d+|HAIRLINE GRID #\d+|BENTO BOX GRID #\d+|BIO-GLASS #\d+|COSMIC STARFIELD #\d+|DRAWER MODAL #\d+|SYNTHWAVE GRID #\d+|ULTRA DIAMOND #\d+|ABOUT TEAM SHOWCASE — VARIANT \d+|ABOUT BRAND VALUES — VARIANT \d+|ABOUT COMPANY TIMELINE — VARIANT \d+/g,
        newBadgeText
      );

      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated badge heading in ${group.folder}/${compName}`);
    }

    // 2. Update SectionLibraryGrid.tsx titles & descriptions
    const oldTitleRegex = new RegExp(`title: '${group.label} — VARIANT ${num}', description: '[^']+'`, 'g');
    const newGridStr = `title: '${it.design} (ANIMATION: ${it.anim})', description: 'Design: ${it.design} • Animation: ${it.anim}'`;
    gridContent = gridContent.replace(oldTitleRegex, newGridStr);
  }
}

fs.writeFileSync(gridFile, gridContent, 'utf8');
console.log('Successfully updated SectionLibraryGrid.tsx titles for Certifications, Team Showcase, Brand Values, and Company Timeline.');
