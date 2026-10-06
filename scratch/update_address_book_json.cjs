const fs = require('fs');
const path = require('path');

const addressDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'account', '03-address-book');

const metadata = [
  {
    num: "01",
    title: "01 — Editorial Address Portfolio — Masked Headline Motion",
    heading: "01 — Editorial Address Portfolio — Masked Headline Motion",
    description: "High-fashion editorial layout featuring asymmetric saved location columns, clip-path headline transitions, and generous whitespace."
  },
  {
    num: "02",
    title: "02 — Neumorphic Soft Embossed Address Cards — Tactile Press Physics",
    heading: "02 — Neumorphic Soft Embossed Address Cards — Tactile Press Physics",
    description: "Soft tactile neumorphic design system with extruded card surfaces, dual inner/outer inset shadows, and smooth press micro-interactions."
  },
  {
    num: "03",
    title: "03 — Neo-Brutalist Address Blocks — High-Contrast Offset Shadows",
    heading: "03 — Neo-Brutalist Address Blocks — High-Contrast Offset Shadows",
    description: "Stark Neo-Brutalist location blocks featuring 4px solid borders, vibrant accent tags, and hard 3D shadow box offsets on hover."
  },
  {
    num: "04",
    title: "04 — Bento Address Grid — Asymmetric Tile Lift Physics",
    heading: "04 — Bento Address Grid — Asymmetric Tile Lift Physics",
    description: "Asymmetric bento grid layout organizing primary residence, studio, and add-address tiles with independent 3D elevation on hover."
  },
  {
    num: "05",
    title: "05 — Location-First Map Overview — Dynamic Coordinate Drawing",
    heading: "05 — Location-First Map Overview — Dynamic Coordinate Drawing",
    description: "Geographic coordinate card layout with interactive map pin indicators, postal code tags, and SVG perimeter line animations."
  },
  {
    num: "06",
    title: "06 — Tactical Command Center Addresses — Surround Crosshair Highlight",
    heading: "06 — Tactical Command Center Addresses — Surround Crosshair Highlight",
    description: "Control-room telemetry aesthetic with status LEDs, delivery gate passkey metrics, and surrounding outline highlights on hover."
  },
  {
    num: "07",
    title: "07 — Stacked Address Deck — Layered Fan-Out Interaction",
    heading: "07 — Stacked Address Deck — Layered Fan-Out Interaction",
    description: "Physical card deck stack that fans out on cursor hover and allows clicking any address to bring it to the active front view."
  },
  {
    num: "08",
    title: "08 — Asymmetric Magazine Spread — Sliding Label Reveal",
    heading: "08 — Asymmetric Magazine Spread — Sliding Label Reveal",
    description: "Editorial magazine layout with oversized numeral indices, multi-column address specs, and horizontal sliding section labels."
  },
  {
    num: "09",
    title: "09 — Data-Ledger Address Directory — Monospace Row Audit",
    heading: "09 — Data-Ledger Address Directory — Monospace Row Audit",
    description: "Finance-grade ledger directory with tabular address rows, copy postal code triggers, and animated counter numbers."
  },
  {
    num: "10",
    title: "10 — Interactive Address Object — Cursor Magnetic Parallax",
    heading: "10 — Interactive Address Object — Cursor Magnetic Parallax",
    description: "Centralized location pass badge with mouse-tracking magnetic parallax tilt and surrounding orbital action nodes."
  },
  {
    num: "11",
    title: "11 — Horizontal Stepper Location Journey — Panel Slide Navigation",
    heading: "11 — Horizontal Stepper Location Journey — Panel Slide Navigation",
    description: "Horizontal location journey slider with step progress indicators and fluid panel sliding physics across saved destinations."
  },
  {
    num: "12",
    title: "12 — 3D Perspective VIP Location Badge — Interactive Gyrocard",
    heading: "12 — 3D Perspective VIP Location Badge — Interactive Gyrocard",
    description: "Interactive 3D digital location card with metallic glare sheen and cursor perspective tilt, framed by solid location stats."
  },
  {
    num: "13",
    title: "13 — Radial Orbit Address Hub — Circular Active Arc Transition",
    heading: "13 — Radial Orbit Address Hub — Circular Active Arc Transition",
    description: "Central profile hub encircled by orbiting radial location triggers with active segment highlight transitions."
  },
  {
    num: "14",
    title: "14 — Split-Screen Address Manager — Dual-Panel Slide Interaction",
    heading: "14 — Split-Screen Address Manager — Dual-Panel Slide Interaction",
    description: "Dual-column layout with pinned primary address summary on the left and tabbed interactive location panels sliding on the right."
  },
  {
    num: "15",
    title: "15 — Delivery Instruction Stream — Real-Time Node Connection",
    heading: "15 — Delivery Instruction Stream — Real-Time Node Connection",
    description: "Stream-based address log featuring gate code notes, courier instructions, and progressive connecting line animations."
  },
  {
    num: "16",
    title: "16 — Swiss Architectural Grid — Index Corner Hover Physics",
    heading: "16 — Swiss Architectural Grid — Index Corner Hover Physics",
    description: "Stark Swiss grid layout with crisp 1px borders, index numbering (01-04), and individual cell hover target reactions."
  },
  {
    num: "17",
    title: "17 — Floating Parallax Location Modules — Levitating Depth",
    heading: "17 — Floating Parallax Location Modules — Levitating Depth",
    description: "Anchored main identity surrounded by levitating address modules using subtle sine-wave float physics."
  },
  {
    num: "18",
    title: "18 — Glassmorphism — Limited Frosted Spotlight Motion",
    heading: "18 — Glassmorphism — Limited Frosted Spotlight Motion",
    description: "One of limited glassmorphism variants featuring multi-layer frosted glass panels with dynamic ambient spotlight cursor tracking."
  },
  {
    num: "19",
    title: "19 — Address Verification & Story — Radial Progress Meter Fills",
    heading: "19 — Address Verification & Story — Radial Progress Meter Fills",
    description: "Gamified address verification overview with interactive postal match rings, courier authorization, and animated meter fills."
  },
  {
    num: "20",
    title: "20 — Award-Level Luxury Address Showcase — Dynamic Telemetry Micro-Interactions",
    heading: "20 — Award-Level Luxury Address Showcase — Dynamic Telemetry Micro-Interactions",
    description: "FWA-grade showcase combining luxury typography, spotlight cursor highlights, interactive SVG distance telemetry, and fluid transitions."
  }
];

metadata.forEach((item) => {
  const filePath = path.join(addressDir, `account-address-book-${item.num}.json`);
  const data = {
    id: `account-address-book-${item.num}`,
    title: item.title,
    category: "account-address-book",
    description: item.description,
    heading: item.heading
  };
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Updated ${filePath}`);
});
