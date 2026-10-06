const fs = require('fs');
const path = require('path');

const overviewDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'account', '01-overview');

const metadata = [
  {
    num: "01",
    title: "01 — Editorial Account Dashboard — Masked Typography Motion",
    heading: "01 — Editorial Account Dashboard — Masked Typography Motion",
    description: "Editorial account overview using asymmetric profile modules with masked typography clip transitions and generous editorial whitespace."
  },
  {
    num: "02",
    title: "02 — Profile Hero + Account Modules — Directional Staggered Entrance",
    heading: "02 — Profile Hero + Account Modules — Directional Staggered Entrance",
    description: "Oversized profile hero banner with structured solid account module cards entering through multi-directional slide physics."
  },
  {
    num: "03",
    title: "03 — Account Timeline — SVG Progressive Path Drawing",
    heading: "03 — Account Timeline — SVG Progressive Path Drawing",
    description: "Chronological account activity displayed as a connected vertical timeline with animated SVG path drawing and interactive event nodes."
  },
  {
    num: "04",
    title: "04 — Bento Account Overview — Asymmetric Tile Lift Physics",
    heading: "04 — Bento Account Overview — Asymmetric Tile Lift Physics",
    description: "Asymmetric grid layout featuring profile, orders, rewards, and wishlist tiles that react independently with 3D elevation on hover."
  },
  {
    num: "05",
    title: "05 — Profile-First Minimal — Dynamic Border Drawing",
    heading: "05 — Profile-First Minimal — Dynamic Border Drawing",
    description: "Ultra-clean profile focus with subtle data chips and animated SVG accent border lines drawing progressively around modules."
  },
  {
    num: "06",
    title: "06 — Account Command Center — Tactical Surround Highlight",
    heading: "06 — Account Command Center — Tactical Surround Highlight",
    description: "Control-room dashboard language with live status pills, telemetry metrics, and surrounding navigation highlight triggers on hover."
  },
  {
    num: "07",
    title: "07 — Stacked Account Cards — Layered Fan-Out Interaction",
    heading: "07 — Stacked Account Cards — Layered Fan-Out Interaction",
    description: "Interactive card stack that separates and rotates module cards outward on cursor hover to reveal deep account stats."
  },
  {
    num: "08",
    title: "08 — Asymmetric Magazine Account — Sliding Label Reveal",
    heading: "08 — Asymmetric Magazine Account — Sliding Label Reveal",
    description: "High-fashion magazine layout with oversized numbers, multi-column editorial stats, and sliding section taglines."
  },
  {
    num: "09",
    title: "09 — Data-Ledger Account — Counter Tick & Monospace Rows",
    heading: "09 — Data-Ledger Account — Counter Tick & Monospace Rows",
    description: "Finance-grade ledger design with tabular data rows, expandable line items, and animated counter numbers."
  },
  {
    num: "10",
    title: "10 — Interactive Profile Object — Cursor Magnetic Parallax",
    heading: "10 — Interactive Profile Object — Cursor Magnetic Parallax",
    description: "Centralized profile badge with interactive magnetic cursor tracking and orbital quick-action nodes."
  },
  {
    num: "11",
    title: "11 — Horizontal Account Journey — Step Slide Navigation",
    heading: "11 — Horizontal Account Journey — Step Slide Navigation",
    description: "Horizontal multi-stage account journey slider with step indicator track and fluid panel sliding physics."
  },
  {
    num: "12",
    title: "12 — 3D Account Module — Interactive Gyrocard Perspective",
    heading: "12 — 3D Account Module — Interactive Gyrocard Perspective",
    description: "Interactive VIP digital membership card with realistic 3D cursor tilt and metallic specular glare, framed by crisp solid stats."
  },
  {
    num: "13",
    title: "13 — Circular Account Navigation — Radial Orbit Transition",
    heading: "13 — Circular Account Navigation — Radial Orbit Transition",
    description: "Central profile avatar hub encircled by rotating radial module triggers with active segment highlight transitions."
  },
  {
    num: "14",
    title: "14 — Split-Screen Account — Dual-Panel Slide Interaction",
    heading: "14 — Split-Screen Account — Dual-Panel Slide Interaction",
    description: "Dual-column layout with pinned profile identity on the left and tabbed interactive account panels sliding in on the right."
  },
  {
    num: "15",
    title: "15 — Account Activity Feed — Stream Node Connection",
    heading: "15 — Account Activity Feed — Stream Node Connection",
    description: "Real-time activity log featuring pulse nodes, categorized filter tags, and progressive stream node connecting animations."
  },
  {
    num: "16",
    title: "16 — Minimal Grid System — Swiss Architectural Hover",
    heading: "16 — Minimal Grid System — Swiss Architectural Hover",
    description: "Stark Swiss grid layout with crisp 1px borders, index numbering (01-04), and individual cell hover highlight reactions."
  },
  {
    num: "17",
    title: "17 — Floating Account Modules — Parallax Float Depth",
    heading: "17 — Floating Account Modules — Parallax Float Depth",
    description: "Anchored central identity surrounded by gently levitating solid stat modules using subtle sine-wave float physics."
  },
  {
    num: "18",
    title: "18 — Glassmorphism — Limited Frosted Spotlight Motion",
    heading: "18 — Glassmorphism — Limited Frosted Spotlight Motion",
    description: "One of three allowed glassmorphism variants featuring multi-layered frosted glass panels with dynamic ambient backlight spotlight."
  },
  {
    num: "19",
    title: "19 — Account Story / Progress — Animated Radial Progress Meters",
    heading: "19 — Account Story / Progress — Animated Radial Progress Meters",
    description: "Gamified account progression overview with interactive completion rings, milestone badges, and animated meter fills."
  },
  {
    num: "20",
    title: "20 — Award-Level Account Overview — Luxury Dynamic Micro-Interactions",
    heading: "20 — Award-Level Account Overview — Luxury Dynamic Micro-Interactions",
    description: "FWA-grade showcase combining luxury typography, spotlight cursor highlights, interactive SVG metrics, and fluid state transitions."
  }
];

metadata.forEach((item) => {
  const filePath = path.join(overviewDir, `account-overview-${item.num}.json`);
  const data = {
    id: `account-overview-${item.num}`,
    title: item.title,
    category: "account-overview",
    description: item.description,
    heading: item.heading
  };
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Updated ${filePath}`);
});
