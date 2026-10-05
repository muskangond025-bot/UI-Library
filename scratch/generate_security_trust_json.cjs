const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'checkout', '10-security-trust');

const variants = [
  {
    num: 1,
    id: "checkout-security-trust-1",
    componentName: "CheckoutSecurityTrust1",
    title: "Encrypted Shield Badge — Pulse & Radar Ripple",
    description: "Central animated glowing shield badge with pulsating radar ripples and 256-bit SSL encryption indicator."
  },
  {
    num: 2,
    id: "checkout-security-trust-2",
    componentName: "CheckoutSecurityTrust2",
    title: "4-Point Trust Grid — Staggered Tile Reveal",
    description: "Four-card security grid covering encryption, buyer protection, money-back guarantee, and fraud monitoring with staggered tile reveal."
  },
  {
    num: 3,
    id: "checkout-security-trust-3",
    componentName: "CheckoutSecurityTrust3",
    title: "Minimal Trust Banner — Sliding Security Ticker",
    description: "Single-line sleek trust ticker bar with sliding security badges and live verification pulse indicator."
  },
  {
    num: 4,
    id: "checkout-security-trust-4",
    componentName: "CheckoutSecurityTrust4",
    title: "Split Security Guarantee — Opposite Side Slide",
    description: "Two-column split layout featuring a dark indigo SSL certificate card on left and 3-point guarantee list on right."
  },
  {
    num: 5,
    id: "checkout-security-trust-5",
    componentName: "CheckoutSecurityTrust5",
    title: "Interactive Security Accordion — Layout Height Transition",
    description: "Collapsible trust drawer expanding into SSL encryption specs, PCI Level 1 Compliance, and Fraud Guard protection."
  },
  {
    num: 6,
    id: "checkout-security-trust-6",
    componentName: "CheckoutSecurityTrust6",
    title: "Trust Timeline Flow — SVG Connecting Line Draw",
    description: "Visual 3-step security flow connected by a progressive SVG drawing line."
  },
  {
    num: 7,
    id: "checkout-security-trust-7",
    componentName: "CheckoutSecurityTrust7",
    title: "Horizontal Badge Carousel — Snap Selection Motion",
    description: "Horizontal carousel of official trust seals with smooth snap focus selection and scale animations."
  },
  {
    num: 8,
    id: "checkout-security-trust-8",
    componentName: "CheckoutSecurityTrust8",
    title: "Premium Dark Vault — Glow Ring Pulse",
    description: "Luxury dark vault layout with glowing green security status orb and metallic emerald badges."
  },
  {
    num: 9,
    id: "checkout-security-trust-9",
    componentName: "CheckoutSecurityTrust9",
    title: "3D Security Certificate — Perspective Rotation Tilt",
    description: "Interactive 3D security certificate card with perspective rotation tilt and floating SSL seal."
  },
  {
    num: 10,
    id: "checkout-security-trust-10",
    componentName: "CheckoutSecurityTrust10",
    title: "Live Fraud Monitor — Animated Status Wave",
    description: "Live security monitor preview showing live heartbeat wave, active firewall status, and instant tokenized payment protection."
  },
  {
    num: 11,
    id: "checkout-security-trust-11",
    componentName: "CheckoutSecurityTrust11",
    title: "Progress Safety Meter — SVG Ring Fill",
    description: "Circular SVG security score ring animating from 0% to 100% protection rating with verified safety checks."
  },
  {
    num: 12,
    id: "checkout-security-trust-12",
    componentName: "CheckoutSecurityTrust12",
    title: "Stacked Security Badges — Layer Unstack Motion",
    description: "Layered security cards (PCI DSS, SSL 256-Bit, 3D Secure) that fan out smoothly upon user interaction."
  },
  {
    num: 13,
    id: "checkout-security-trust-13",
    componentName: "CheckoutSecurityTrust13",
    title: "Receipt Security Stamp — Rubber Stamp Drop Reveal",
    description: "Digital receipt security layout featuring a prominent '100% SECURE CHECKOUT' rubber stamp drop reveal."
  },
  {
    num: 14,
    id: "checkout-security-trust-14",
    componentName: "CheckoutSecurityTrust14",
    title: "Floating Security Banner — Elevated Depth Rise",
    description: "Floating glassmorphic security bar rising smoothly over the checkout backdrop with subtle depth transition."
  },
  {
    num: 15,
    id: "checkout-security-trust-15",
    componentName: "CheckoutSecurityTrust15",
    title: "Icon-Led Security Selector — Icon Morph Response",
    description: "Category-based trust selector with custom animated icons for encryption, money-back, fraud guard, and privacy."
  },
  {
    num: 16,
    id: "checkout-security-trust-16",
    componentName: "CheckoutSecurityTrust16",
    title: "Security Seal Matrix — Sequential Grid Flash",
    description: "Grid matrix of official payment and security logos with sequential hover glow and flash effects."
  },
  {
    num: 17,
    id: "checkout-security-trust-17",
    componentName: "CheckoutSecurityTrust17",
    title: "Buyer Protection Guarantee — Animated SVG Checkmark",
    description: "Buyer protection highlight card featuring animated SVG checkmark path draw and full refund terms."
  },
  {
    num: 18,
    id: "checkout-security-trust-18",
    componentName: "CheckoutSecurityTrust18",
    title: "Biometric Passkey Security — Touch ID Pulse",
    description: "Modern biometric passkey verification aesthetic with pulsing green aura and tokenized authentication status."
  },
  {
    num: 19,
    id: "checkout-security-trust-19",
    componentName: "CheckoutSecurityTrust19",
    title: "Editorial Security Section — Dual Speed Motion",
    description: "High-fashion editorial layout featuring oversized typography 'SAFE & SECURE PURCHASING' and dual-speed motion entrance."
  },
  {
    num: 20,
    id: "checkout-security-trust-20",
    componentName: "CheckoutSecurityTrust20",
    title: "Award-Style Security Masterpiece — Glassmorphic Ambient Glow",
    description: "Ultimate trust & security suite combining dark glassmorphism, background ambient glow, 3D card tilt, and live security monitor."
  }
];

// Write JSON files
variants.forEach(v => {
  const folder = path.join(baseDir, `checkout-security-trust-${v.num}`);
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }
  const jsonPath = path.join(folder, `checkout-security-trust-${v.num}.json`);
  const jsonContent = JSON.stringify({
    id: `checkout-security-trust-${v.num < 10 ? '0' + v.num : v.num}`,
    title: v.title,
    description: v.description,
    category: "checkout",
    subsection: "checkout-security-trust",
    variant: v.num,
    section: {
      settings: {
        title: v.title,
        description: v.description
      }
    }
  }, null, 2);
  fs.writeFileSync(jsonPath, jsonContent, 'utf-8');
});

console.log("JSON metadata files written for all 20 security trust variants!");
