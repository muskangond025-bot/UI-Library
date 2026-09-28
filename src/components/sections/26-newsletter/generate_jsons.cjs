const fs = require('fs');
const path = require('path');

const themes = [
  { id: 11, title: "Newsletter 11", bg: "#f8fafc", text: "#0f172a" },
  { id: 12, title: "Newsletter 12", bg: "#020617", text: "#f8fafc" },
  { id: 13, title: "Newsletter 13", bg: "#ffffff", text: "#18181b" },
  { id: 14, title: "Newsletter 14", bg: "#1e1b4b", text: "#e0e7ff" },
  { id: 15, title: "Newsletter 15", bg: "#fafaf9", text: "#292524" },
  { id: 16, title: "Newsletter 16", bg: "#000000", text: "#ffffff" },
  { id: 17, title: "Newsletter 17", bg: "#ffffff", text: "#000000" },
  { id: 18, title: "Newsletter 18", bg: "#0f172a", text: "#e2e8f0" },
  { id: 19, title: "Newsletter 19", bg: "#ffffff", text: "#000000" },
  { id: 20, title: "Newsletter 20", bg: "#09090b", text: "#fafafa" },
];

const basePath = 'c:\\UI Library\\src\\components\\Newsletter';
if (!fs.existsSync(basePath)) fs.mkdirSync(basePath, { recursive: true });

for (let i = 11; i <= 20; i++) {
  const dir = path.join(basePath, `newsletter-${i}`);
  fs.mkdirSync(dir, { recursive: true });
  
  const theme = themes.find(t => t.id === i);
  
  const data = {
    id: `newsletter-${i}`,
    name: `Newsletter${i}`,
    type: 'newsletter',
    content: {
      heading: `Join our community`,
      description: "Get our weekly newsletter delivered directly to your inbox. No spam, just the good stuff.",
      placeholder: "Your email address",
      buttonText: "Join Now",
      disclaimer: "By subscribing, you agree to our Terms of Service and Privacy Policy.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000&auto=format&fit=crop"
    },
    style: { backgroundColor: theme.bg, textColor: theme.text }
  };
  
  fs.writeFileSync(path.join(dir, `newsletter-${i}.json`), JSON.stringify(data, null, 2));
}
