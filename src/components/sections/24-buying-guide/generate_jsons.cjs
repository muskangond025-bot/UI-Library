const fs = require('fs');
const path = require('path');

const themes = [
  { id: 11, title: "Buying Guide 11", bg: "#f8fafc", text: "#0f172a" },
  { id: 12, title: "Buying Guide 12", bg: "#020617", text: "#f8fafc" },
  { id: 13, title: "Buying Guide 13", bg: "#ffffff", text: "#18181b" },
  { id: 14, title: "Buying Guide 14", bg: "#1e1b4b", text: "#e0e7ff" }, // Indigo
  { id: 15, title: "Buying Guide 15", bg: "#fafaf9", text: "#292524" },
  { id: 16, title: "Buying Guide 16", bg: "#000000", text: "#ffffff" },
  { id: 17, title: "Buying Guide 17", bg: "#ffffff", text: "#000000" },
  { id: 18, title: "Buying Guide 18", bg: "#0f172a", text: "#e2e8f0" },
  { id: 19, title: "Buying Guide 19", bg: "#ffffff", text: "#000000" },
  { id: 20, title: "Buying Guide 20", bg: "#09090b", text: "#fafafa" },
];

const basePath = 'c:\\UI Library\\src\\components\\BuyingGuide';
if (!fs.existsSync(basePath)) fs.mkdirSync(basePath, { recursive: true });

for (let i = 11; i <= 20; i++) {
  const dir = path.join(basePath, `buying-guide-${i}`);
  fs.mkdirSync(dir, { recursive: true });
  
  const theme = themes.find(t => t.id === i);
  
  const data = {
    id: `buying-guide-${i}`,
    name: `BuyingGuide${i}`,
    type: 'buying-guide',
    content: {
      heading: `The 2026 Smartphone Buying Guide`,
      description: "We evaluated battery life, camera performance, and value to find the absolute best smartphones you can buy right now.",
      lastUpdated: "Updated November 2026",
      items: [
        {
          award: "Best Overall",
          name: "OmniPhone 15 Pro",
          image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2000&auto=format&fit=crop",
          price: "From $999",
          verdict: "With its incredible battery life, stunning titanium build, and unmatched camera system, the OmniPhone 15 Pro is the best phone for most people.",
          pros: ["Exceptional camera system", "Incredible battery life", "Premium titanium build"],
          cons: ["Very expensive", "Slow charging speeds"],
          specs: [
            { label: "Screen", value: "6.7\" OLED 120Hz" },
            { label: "Processor", value: "A18 Pro" },
            { label: "Storage", value: "256GB - 1TB" },
            { label: "Weight", value: "221g" }
          ],
          buyLink: "#"
        },
        {
          award: "Best Budget",
          name: "PixelLens 8a",
          image: "https://images.unsplash.com/photo-1598327105666-5b89351cb315?q=80&w=2000&auto=format&fit=crop",
          price: "From $499",
          verdict: "You get flagship-level cameras and a clean, incredibly smart software experience for half the price of the competition.",
          pros: ["Flagship camera quality", "7 years of updates", "Clean software"],
          cons: ["Thick bezels", "Average battery life"],
          specs: [
            { label: "Screen", value: "6.1\" OLED 90Hz" },
            { label: "Processor", value: "Tensor G3" },
            { label: "Storage", value: "128GB - 256GB" },
            { label: "Weight", value: "188g" }
          ],
          buyLink: "#"
        },
        {
          award: "Best Foldable",
          name: "Galaxy Flex 6",
          image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?q=80&w=2000&auto=format&fit=crop",
          price: "From $1,799",
          verdict: "The most refined foldable yet. The Flex 6 fixes the hinge, improves the cameras, and finally makes folding phones feel mainstream.",
          pros: ["Massive inner display", "Much improved hinge", "Great multitasking software"],
          cons: ["Still very expensive", "Outer screen is very narrow", "Cameras aren't flagship tier"],
          specs: [
            { label: "Inner Screen", value: "7.6\" AMOLED 120Hz" },
            { label: "Processor", value: "Snapdragon 8 Gen 3" },
            { label: "Storage", value: "512GB - 1TB" },
            { label: "Weight", value: "253g" }
          ],
          buyLink: "#"
        }
      ]
    },
    style: { backgroundColor: theme.bg, textColor: theme.text }
  };
  
  fs.writeFileSync(path.join(dir, `buying-guide-${i}.json`), JSON.stringify(data, null, 2));
}
