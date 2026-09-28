const fs = require('fs');
const path = require('path');

const themes = [
  { id: 11, title: "Testimonial 11", bg: "#f8fafc", text: "#0f172a" },
  { id: 12, title: "Testimonial 12", bg: "#ffffff", text: "#000000" },
  { id: 13, title: "Testimonial 13", bg: "#0f172a", text: "#ffffff" },
  { id: 14, title: "Testimonial 14", bg: "#000000", text: "#ffffff" },
  { id: 15, title: "Testimonial 15", bg: "#ffffff", text: "#171717" },
  { id: 16, title: "Testimonial 16", bg: "#f0fdf4", text: "#14532d" },
  { id: 17, title: "Testimonial 17", bg: "#1e1b4b", text: "#e0e7ff" },
  { id: 18, title: "Testimonial 18", bg: "#ffffff", text: "#000000" },
  { id: 19, title: "Testimonial 19", bg: "#09090b", text: "#fafafa" },
  { id: 20, title: "Testimonial 20", bg: "#000000", text: "#ffffff" },
];

const basePath = 'c:\\UI Library\\src\\components\\Testimonial';
if (!fs.existsSync(basePath)) fs.mkdirSync(basePath, { recursive: true });

for (let i = 11; i <= 20; i++) {
  const dir = path.join(basePath, `testimonial-${i}`);
  fs.mkdirSync(dir, { recursive: true });
  
  const theme = themes.find(t => t.id === i);
  
  const data = {
    id: `testimonial-${i}`,
    name: `Testimonial${i}`,
    type: 'testimonial',
    content: {
      heading: `Loved by thousands`,
      description: "See what our users have to say about their experience.",
      testimonials: [
        {
          name: "Sarah Jenkins",
          role: "CEO at TechFlow",
          content: "This platform has completely transformed how our team collaborates. The intuitive interface and powerful features saved us countless hours.",
          avatar: "https://i.pravatar.cc/150?img=1"
        },
        {
          name: "David Chen",
          role: "Lead Developer",
          content: "I've tried dozens of similar tools, but nothing comes close to this. The performance is unmatched and the support team is incredible.",
          avatar: "https://i.pravatar.cc/150?img=11"
        },
        {
          name: "Emily Rodriguez",
          role: "Product Manager",
          content: "Deploying this across our organization was seamless. The ROI we've seen in just the first quarter has been absolutely staggering.",
          avatar: "https://i.pravatar.cc/150?img=5"
        },
        {
          name: "Michael Chang",
          role: "Design Director",
          content: "A beautiful, well-thought-out product. You can tell the team obsessed over every little detail. It's a joy to use every single day.",
          avatar: "https://i.pravatar.cc/150?img=8"
        },
        {
          name: "Jessica Walsh",
          role: "Marketing Head",
          content: "Finally, a solution that actually does what it promises without the unnecessary complexity. Highly recommended for growing teams.",
          avatar: "https://i.pravatar.cc/150?img=9"
        }
      ]
    },
    style: { backgroundColor: theme.bg, textColor: theme.text }
  };
  
  fs.writeFileSync(path.join(dir, `testimonial-${i}.json`), JSON.stringify(data, null, 2));
}
