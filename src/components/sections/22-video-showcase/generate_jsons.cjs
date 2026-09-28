const fs = require('fs');
const path = require('path');

const themes = [
  { id: 11, title: "Video Showcase 11", bg: "#f8fafc", text: "#0f172a" },
  { id: 12, title: "Video Showcase 12", bg: "#000000", text: "#ffffff" },
  { id: 13, title: "Video Showcase 13", bg: "#ffffff", text: "#000000" },
  { id: 14, title: "Video Showcase 14", bg: "#0f172a", text: "#ffffff" },
  { id: 15, title: "Video Showcase 15", bg: "#fafafa", text: "#171717" },
  { id: 16, title: "Video Showcase 16", bg: "#ecfccb", text: "#3f6212" },
  { id: 17, title: "Video Showcase 17", bg: "#1e1b4b", text: "#e0e7ff" },
  { id: 18, title: "Video Showcase 18", bg: "#ffffff", text: "#000000" },
  { id: 19, title: "Video Showcase 19", bg: "#09090b", text: "#fafafa" },
  { id: 20, title: "Video Showcase 20", bg: "#000000", text: "#ffffff" },
];

const basePath = 'c:\\UI Library\\src\\components\\VideoShowcase';
if (!fs.existsSync(basePath)) fs.mkdirSync(basePath, { recursive: true });

for (let i = 11; i <= 20; i++) {
  const dir = path.join(basePath, `video-showcase-${i}`);
  fs.mkdirSync(dir, { recursive: true });
  
  const theme = themes.find(t => t.id === i);
  
  const data = {
    id: `video-showcase-${i}`,
    name: `VideoShowcase${i}`,
    type: 'video-showcase',
    content: {
      heading: `See it in action`,
      description: "Watch how our platform can transform your workflow in minutes.",
      mainVideo: {
        title: "Platform Overview",
        description: "A quick 2-minute tour of all the core features.",
        thumbnailUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        duration: "02:45"
      },
      playlist: [
        {
          title: "Getting Started",
          thumbnailUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
          duration: "01:20"
        },
        {
          title: "Advanced Integrations",
          thumbnailUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
          duration: "04:15"
        },
        {
          title: "Team Collaboration",
          thumbnailUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop",
          duration: "03:10"
        }
      ]
    },
    style: { backgroundColor: theme.bg, textColor: theme.text }
  };
  
  fs.writeFileSync(path.join(dir, `video-showcase-${i}.json`), JSON.stringify(data, null, 2));
}
