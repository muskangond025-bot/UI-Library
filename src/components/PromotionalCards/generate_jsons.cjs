const fs = require('fs');
const path = require('path');

const themes = [
  { id: 6, bg: "#000000", text: "#FFFFFF", title: "Neon Glow" },
  { id: 7, bg: "#FFFFFF", text: "#000000", title: "Minimal Elegance" },
  { id: 8, bg: "#0F172A", text: "#FFFFFF", title: "Gradient Mesh" },
  { id: 9, bg: "#1E1E1E", text: "#00FF41", title: "Isometric Grid" },
  { id: 10, bg: "#09090B", text: "#FAFAFA", title: "Spotlight Hover" },
  { id: 11, bg: "#E5E5E5", text: "#171717", title: "Split Content" },
  { id: 12, bg: "#3B82F6", text: "#FFFFFF", title: "Expanding Accordion" },
  { id: 13, bg: "#FBBF24", text: "#000000", title: "Cyber Tech" },
  { id: 14, bg: "#064E3B", text: "#D4AF37", title: "Luxury Accent" },
  { id: 15, bg: "#FFFFFF", text: "#000000", title: "Neo Brutalism" },
  { id: 16, bg: "#4C1D95", text: "#FFFFFF", title: "Liquid Morph" },
  { id: 17, bg: "#111827", text: "#E5E7EB", title: "Rotating Badge" },
  { id: 18, bg: "#F3F4F6", text: "#111827", title: "Layered Stack" },
  { id: 19, bg: "#000000", text: "#FF0055", title: "Game HUD" },
  { id: 20, bg: "#000000", text: "#FFFFFF", title: "The Masterpiece" },
];

for(let i=6; i<=20; i++) {
  const dir = path.join('c:\\UI Library\\src\\components\\PromotionalCards', `promo-card-${i}`);
  fs.mkdirSync(dir, { recursive: true });
  
  const theme = themes.find(t => t.id === i);
  
  const data = {
    id: `promo-card-${i}`,
    name: `PromoCard${i}`,
    type: 'promotional-card',
    content: {
      badge: 'Special Offer',
      title: theme.title,
      description: `Experience the power of our exclusive ${theme.title.toLowerCase()} design. Tailored for premium experiences.`,
      cta: { text: 'Discover', url: '#' }
    },
    style: { backgroundColor: theme.bg, textColor: theme.text }
  };
  
  fs.writeFileSync(path.join(dir, `promo-card-${i}.json`), JSON.stringify(data, null, 2));
}
