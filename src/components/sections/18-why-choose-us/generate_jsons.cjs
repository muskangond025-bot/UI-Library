const fs = require('fs');
const path = require('path');

const themes = [
  { id: 11, bg: "#ffffff", text: "#171717", title: "Why Choose Us 11" },
  { id: 12, bg: "#fef3c7", text: "#92400e", title: "Why Choose Us 12" },
  { id: 13, bg: "#0f172a", text: "#e2e8f0", title: "Why Choose Us 13" },
  { id: 14, bg: "#ffffff", text: "#000000", title: "Why Choose Us 14" },
  { id: 15, bg: "#000000", text: "#39ff14", title: "Why Choose Us 15" },
  { id: 16, bg: "#f0fdfa", text: "#0f766e", title: "Why Choose Us 16" },
  { id: 17, bg: "#ffffff", text: "#000000", title: "Why Choose Us 17" },
  { id: 18, bg: "#1e293b", text: "#f8fafc", title: "Why Choose Us 18" },
  { id: 19, bg: "#0a0a0a", text: "#fafafa", title: "Why Choose Us 19" },
  { id: 20, bg: "#ffffff", text: "#000000", title: "Why Choose Us 20" },
];

const basePath = 'c:\\UI Library\\src\\components\\WhyChooseUs';
if (!fs.existsSync(basePath)) fs.mkdirSync(basePath, { recursive: true });

for (let i = 11; i <= 20; i++) {
  const dir = path.join(basePath, `why-choose-us-${i}`);
  fs.mkdirSync(dir, { recursive: true });
  
  const theme = themes.find(t => t.id === i);
  
  const data = {
    id: `why-choose-us-${i}`,
    name: `WhyChooseUs${i}`,
    type: 'why-choose-us',
    content: {
      heading: `Why Choose Us ${i}`,
      description: "Discover what makes us different and why we are the best choice for your next project.",
      features: [
        { title: "Fast & Reliable", description: "Experience lightning fast load times with 99.9% uptime." },
        { title: "Secure by Design", description: "Enterprise-grade security built into every layer of our platform." },
        { title: "24/7 Support", description: "Our expert team is available around the clock to help you." },
        { title: "Scalable Architecture", description: "Grow without limits. Our infrastructure scales with your needs." }
      ]
    },
    style: { backgroundColor: theme.bg, textColor: theme.text }
  };
  
  fs.writeFileSync(path.join(dir, `why-choose-us-${i}.json`), JSON.stringify(data, null, 2));
}
