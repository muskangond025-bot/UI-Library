const fs = require('fs');
const path = require('path');

const baseDir = 'c:/UI Library/src/components/sections/offers/06-limited-time-offers';

const metadata = {
  'offers-limited-time-01': {
    heading: '01. Split-Screen Flash Deal Showcase',
    description: 'Design: Split-screen flash sale banner | Animation: Flip countdown & smooth product scale'
  },
  'offers-limited-time-02': {
    heading: '02. Cyber Midnight Dark Sale',
    description: 'Design: Dark obsidian neon backdrop | Animation: Pulsing ambient glow & continuous ticker'
  },
  'offers-limited-time-03': {
    heading: '03. Minimalist Editorial Offer',
    description: 'Design: Editorial magazine typography | Animation: Subtle crossfade drift & floating badge hover'
  },
  'offers-limited-time-04': {
    heading: '04. 3D Mobile Product Carousel',
    description: 'Design: Mobile-first deal card carousel | Animation: 3D rotational perspective & 3s auto-play'
  },
  'offers-limited-time-05': {
    heading: '05. Zero-Gravity Studio Luxury Showcase',
    description: 'Design: Ultra-clean luxury showcase | Animation: Backlight radial glow & soft contact shadow floating'
  },
  'offers-limited-time-06': {
    heading: '06. Warm Editorial Fashion Showcase',
    description: 'Design: Bright warm editorial lookbook | Animation: ReactBits GlareHover & Polaroid frame tilt'
  },
  'offers-limited-time-07': {
    heading: '07. High-Contrast Black Friday Banner',
    description: 'Design: High-impact dark promo banner | Animation: ReactBits GlareHover & infinite marquee ticker tape'
  },
  'offers-limited-time-08': {
    heading: '08. Interactive Tear Ticket Stub',
    description: 'Design: Vintage perforated ticket voucher | Animation: ReactBits 3D tilt & drag-to-tear physics stub removal'
  },
  'offers-limited-time-09': {
    heading: '09. Gold Foil Scratch Card Mystery Offer',
    description: 'Design: Premium gold foil card | Animation: ReactBits canvas scratch-to-reveal & spark confetti'
  },
  'offers-limited-time-10': {
    heading: '10. Gamified Casino Neon Deal Wheel',
    description: 'Design: Obsidian casino neon wheel | Animation: Deceleration wheel spin physics & winner confetti modal'
  },
  'offers-limited-time-11': {
    heading: '11. Cyber Jackpot Slot Machine Deal',
    description: 'Design: Retro arcade slot machine UI | Animation: 3-reel rolling ticker & spring lever pull interaction'
  },
  'offers-limited-time-12': {
    heading: '12. Split-Screen Midnight Flash Countdown',
    description: 'Design: Split-screen flash drop grid | Animation: Mechanical flip clock counter & live stock progress fill'
  },
  'offers-limited-time-13': {
    heading: '13. Horizontal BOGO Bundle Builder',
    description: 'Design: Side-by-side promotional bundle cards | Animation: Plus-connector magnetic snap & live savings calculation'
  },
  'offers-limited-time-14': {
    heading: '14. Tiered Spend Savings Unlocks',
    description: 'Design: Progress milestone reward timeline | Animation: Interactive spend simulator slider & unlock pulses'
  },
  'offers-limited-time-15': {
    heading: '15. 3D Parallax Card Grid Showcase',
    description: 'Design: Glossy glassmorphic 3-card grid | Animation: ReactBits cursor-tracking 3D tilt & glare reflection'
  },
  'offers-limited-time-16': {
    heading: '16. Magazine Editorial Lookbook Offer',
    description: 'Design: High-fashion lookbook photo spread | Animation: Shop-the-look hotspot pulsing dots & detail popover'
  },
  'offers-limited-time-17': {
    heading: '17. Neon Cyberpunk Limited Drop',
    description: 'Design: Cyberpunk neon dark grid layout | Animation: Glitch text title & protocol decryption unlock'
  },
  'offers-limited-time-18': {
    heading: '18. Unbox 3D Mystery Gift Box',
    description: 'Design: 3D isometric gift box on luxury pedestal | Animation: Floating box bob & ribbon untie lid-open reveal'
  },
  'offers-limited-time-19': {
    heading: '19. VIP Secret Pass Golden Ticket',
    description: 'Design: Metallic gold foil VIP member pass | Animation: Shimmering gold light sweep & passcode unlock'
  },
  'offers-limited-time-20': {
    heading: '20. Floating Glassmorphism Hero Offer Banner',
    description: 'Design: Frosted glass hero card | Animation: Dynamic ambient gradient mesh & liquid float bob'
  }
};

let count = 0;
for (const [folder, data] of Object.entries(metadata)) {
  const jsonPath = path.join(baseDir, folder, `${folder}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Updated ${folder}.json`);
  count++;
}
console.log(`Successfully updated ${count} json files.`);
