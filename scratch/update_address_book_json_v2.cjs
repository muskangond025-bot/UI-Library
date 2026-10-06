const fs = require('fs');
const path = require('path');

const addressDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'account', '03-address-book');

const metadata = [
  {
    num: "01",
    title: "01 — Postal Envelope Portfolio — Airmail Stamp Aesthetics",
    heading: "01 — Postal Envelope Portfolio — Airmail Stamp Aesthetics",
    description: "Airmail envelope inspired layout featuring official postal stamp badging, barcode accents, and asymmetric address columns."
  },
  {
    num: "02",
    title: "02 — Neumorphic Soft Embossed Address Cards — Tactile Press Physics",
    heading: "02 — Neumorphic Soft Embossed Address Cards — Tactile Press Physics",
    description: "Soft tactile neumorphic design system with extruded card surfaces, embossed location pills, and smooth inset press micro-interactions."
  },
  {
    num: "03",
    title: "03 — Neo-Brutalist Shipping Label Blocks — Industrial Barcode Badges",
    heading: "03 — Neo-Brutalist Shipping Label Blocks — Industrial Barcode Badges",
    description: "Stark Neo-Brutalist shipping labels with 4px solid black borders, warning stripes, barcode badges, and 3D offset shadow boxes."
  },
  {
    num: "04",
    title: "04 — Bento Location Matrix — Asymmetric Tile Elevation",
    heading: "04 — Bento Location Matrix — Asymmetric Tile Elevation",
    description: "Asymmetric bento grid layout organizing primary residence, GPS map coordinates, gate passkeys, and quick-add address form tiles."
  },
  {
    num: "05",
    title: "05 — Interactive Satellite Map Viewport — Dynamic Coordinate Pins",
    heading: "05 — Interactive Satellite Map Viewport — Dynamic Coordinate Pins",
    description: "Map-first dashboard featuring interactive vector coordinate pins, GPS lat/long tags, and SVG perimeter line drawing."
  },
  {
    num: "06",
    title: "06 — Tactical Courier Passkey Control Room — Gate Code Telemetry",
    heading: "06 — Tactical Courier Passkey Control Room — Gate Code Telemetry",
    description: "Logistics control room interface with gate access keypad codes, 2FA courier authorization switches, and crosshairs on hover."
  },
  {
    num: "07",
    title: "07 — Physical Rolodex Address Deck — Interactive Card Flip",
    heading: "07 — Physical Rolodex Address Deck — Interactive Card Flip",
    description: "Modernized physical Rolodex address binder featuring category index tabs and interactive fan-out card stack physics."
  },
  {
    num: "08",
    title: "08 — High-Fashion Shipping Manifest Magazine — Barcode Layout",
    heading: "08 — High-Fashion Shipping Manifest Magazine — Barcode Layout",
    description: "High-fashion shipping manifest layout with oversized index callouts, manifest numbers, and horizontal sliding section taglines."
  },
  {
    num: "09",
    title: "09 — Data-Ledger Address Directory — Tabular Audit Rows",
    heading: "09 — Data-Ledger Address Directory — Tabular Audit Rows",
    description: "Finance-grade tabular address directory with monospaced data columns, quick copy-zip triggers, and animated counter metrics."
  },
  {
    num: "10",
    title: "10 — Magnetic Digital Access Pass — Cursor 3D Parallax Tilt",
    heading: "10 — Magnetic Digital Access Pass — Cursor 3D Parallax Tilt",
    description: "Digital RFID-style location access pass card with holographic seal, mouse-tracking 3D cursor tilt, and orbital action nodes."
  },
  {
    num: "11",
    title: "11 — Horizontal Stepper Routing Journey — Destination Slide",
    heading: "11 — Horizontal Stepper Routing Journey — Destination Slide",
    description: "Horizontal location journey slider with courier dispatch step indicators and fluid panel sliding physics across saved destinations."
  },
  {
    num: "12",
    title: "12 — 3D Metallic VIP Shipping Card — Perspective Gyrocard",
    heading: "12 — 3D Metallic VIP Shipping Card — Perspective Gyrocard",
    description: "Interactive 3D digital VIP shipping card with metallic specular glare and cursor perspective tilt, framed by solid location stats."
  },
  {
    num: "13",
    title: "13 — Radial Location Hub — Orbital Map Node Ring",
    heading: "13 — Radial Location Hub — Orbital Map Node Ring",
    description: "Central avatar hub encircled by orbiting location pins with active circular arc segment highlights and crossfade address details."
  },
  {
    num: "14",
    title: "14 — Dual-Panel Split-Screen Manager — Slide Tab Interaction",
    heading: "14 — Dual-Panel Split-Screen Manager — Slide Tab Interaction",
    description: "Dual-column layout with pinned primary shipping address on the left and tabbed interactive location panels sliding on the right."
  },
  {
    num: "15",
    title: "15 — Live Delivery Instruction Stream — Courier Node Connection",
    heading: "15 — Live Delivery Instruction Stream — Courier Node Connection",
    description: "Stream-based courier instruction log featuring doorman notes, gate passcode badges, and progressive connecting line animations."
  },
  {
    num: "16",
    title: "16 — Swiss Architectural Grid Directory — Index Corner Hover",
    heading: "16 — Swiss Architectural Grid Directory — Index Corner Hover",
    description: "Stark Swiss grid layout with crisp 1px borders, index numbering (01-04), and individual cell hover target reactions."
  },
  {
    num: "17",
    title: "17 — Floating Parallax Shipping Cards — Levitating Depth",
    heading: "17 — Floating Parallax Shipping Cards — Levitating Depth",
    description: "Anchored primary address card surrounded by levitating secondary location cards using subtle sine-wave float physics."
  },
  {
    num: "18",
    title: "18 — Glassmorphism — Limited Frosted Spotlight Motion",
    heading: "18 — Glassmorphism — Limited Frosted Spotlight Motion",
    description: "One of limited glassmorphism variants featuring multi-layer frosted glass address cards with dynamic cursor spotlight tracking."
  },
  {
    num: "19",
    title: "19 — Address Verification & Story — Radial Progress Meter Fills",
    heading: "19 — Address Verification & Story — Radial Progress Meter Fills",
    description: "Gamified address verification overview with interactive postal match rings, gate passkey status, and animated meter fills."
  },
  {
    num: "20",
    title: "20 — Award-Level Luxury Address Showcase — Dynamic Telemetry Micro-Interactions",
    heading: "20 — Award-Level Luxury Address Showcase — Dynamic Telemetry Micro-Interactions",
    description: "FWA-grade showcase combining luxury typography, spotlight cursor highlights, interactive SVG distance telemetry, and fluid state transitions."
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
