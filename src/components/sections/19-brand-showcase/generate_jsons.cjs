const fs = require('fs');
const path = require('path');

const themes = [
  { id: 11, title: "Brand Showcase 11", bg: "#f8fafc", text: "#0f172a" },
  { id: 12, title: "Brand Showcase 12", bg: "#000000", text: "#ffffff" },
  { id: 13, title: "Brand Showcase 13", bg: "#ffffff", text: "#000000" },
  { id: 14, title: "Brand Showcase 14", bg: "#1e293b", text: "#f1f5f9" },
  { id: 15, title: "Brand Showcase 15", bg: "#ecfdf5", text: "#065f46" },
  { id: 16, title: "Brand Showcase 16", bg: "#0f172a", text: "#cbd5e1" },
  { id: 17, title: "Brand Showcase 17", bg: "#ffffff", text: "#171717" },
  { id: 18, title: "Brand Showcase 18", bg: "#111827", text: "#ffffff" },
  { id: 19, title: "Brand Showcase 19", bg: "#fafafa", text: "#18181b" },
  { id: 20, title: "Brand Showcase 20", bg: "#000000", text: "#ffffff" },
];

const basePath = 'c:\\UI Library\\src\\components\\BrandShowcase';
if (!fs.existsSync(basePath)) fs.mkdirSync(basePath, { recursive: true });

for (let i = 11; i <= 20; i++) {
  const dir = path.join(basePath, `brand-showcase-${i}`);
  fs.mkdirSync(dir, { recursive: true });
  
  const theme = themes.find(t => t.id === i);
  
  const data = {
    id: `brand-showcase-${i}`,
    name: `BrandShowcase${i}`,
    type: 'brand-showcase',
    content: {
      heading: `Trusted by innovative teams worldwide`,
      description: "Join thousands of companies using our platform to scale their operations.",
      brands: [
        { name: "Acme Corp", industry: "Technology" },
        { name: "GlobalNet", industry: "Communications" },
        { name: "Innova", industry: "Healthcare" },
        { name: "Nexus", industry: "Finance" },
        { name: "OmniTech", industry: "Software" },
        { name: "Vertex", industry: "Retail" },
        { name: "Zenith", industry: "Energy" },
        { name: "Aegis", industry: "Security" }
      ]
    },
    style: { backgroundColor: theme.bg, textColor: theme.text }
  };
  
  fs.writeFileSync(path.join(dir, `brand-showcase-${i}.json`), JSON.stringify(data, null, 2));
}
