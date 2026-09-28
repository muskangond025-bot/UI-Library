const fs = require('fs');
const path = require('path');

const themes = [
  { id: 11, title: "Blog Highlight 11", bg: "#ffffff", text: "#171717" },
  { id: 12, title: "Blog Highlight 12", bg: "#0f172a", text: "#f8fafc" },
  { id: 13, title: "Blog Highlight 13", bg: "#fdfbf7", text: "#292524" }, // Newspaper/Warm
  { id: 14, title: "Blog Highlight 14", bg: "#000000", text: "#ffffff" },
  { id: 15, title: "Blog Highlight 15", bg: "#ffffff", text: "#000000" },
  { id: 16, title: "Blog Highlight 16", bg: "#ecfccb", text: "#3f6212" }, // Pastel Green
  { id: 17, title: "Blog Highlight 17", bg: "#1e1b4b", text: "#e0e7ff" }, // Deep Indigo
  { id: 18, title: "Blog Highlight 18", bg: "#ffffff", text: "#000000" }, // High Contrast B/W
  { id: 19, title: "Blog Highlight 19", bg: "#09090b", text: "#fafafa" }, // Cyberpunk Pink
  { id: 20, title: "Blog Highlight 20", bg: "#f8fafc", text: "#0f172a" }, // Soft minimal
];

const basePath = 'c:\\UI Library\\src\\components\\BlogHighlight';
if (!fs.existsSync(basePath)) fs.mkdirSync(basePath, { recursive: true });

for (let i = 11; i <= 20; i++) {
  const dir = path.join(basePath, `blog-highlight-${i}`);
  fs.mkdirSync(dir, { recursive: true });
  
  const theme = themes.find(t => t.id === i);
  
  const data = {
    id: `blog-highlight-${i}`,
    name: `BlogHighlight${i}`,
    type: 'blog-highlight',
    content: {
      heading: `Latest from the Blog`,
      description: "Insights, thoughts, and best practices from our expert team.",
      posts: [
        {
          title: "The Future of Web Design in 2026",
          excerpt: "Exploring the rise of AI-driven interfaces, brutalist revivals, and hyper-personalized user experiences.",
          author: {
            name: "Sarah Jenkins",
            avatar: "https://i.pravatar.cc/150?img=32"
          },
          date: "Oct 24, 2026",
          category: "Design",
          imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
          readTime: "5 min read"
        },
        {
          title: "Optimizing React Performance at Scale",
          excerpt: "Deep dive into memoization, concurrent rendering, and state management strategies for massive applications.",
          author: {
            name: "David Chen",
            avatar: "https://i.pravatar.cc/150?img=11"
          },
          date: "Oct 20, 2026",
          category: "Engineering",
          imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
          readTime: "8 min read"
        },
        {
          title: "Building High-Converting SaaS Landing Pages",
          excerpt: "A comprehensive guide to structure, copy, and visual hierarchy that actually drives user signups.",
          author: {
            name: "Elena Rodriguez",
            avatar: "https://i.pravatar.cc/150?img=5"
          },
          date: "Oct 15, 2026",
          category: "Marketing",
          imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
          readTime: "6 min read"
        },
        {
          title: "The State of CSS Architecture",
          excerpt: "From Tailwind to CSS Modules: How modern teams are structuring their styles for maintainability.",
          author: {
            name: "Marcus Johnson",
            avatar: "https://i.pravatar.cc/150?img=53"
          },
          date: "Oct 10, 2026",
          category: "Engineering",
          imageUrl: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=2000&auto=format&fit=crop",
          readTime: "4 min read"
        },
        {
          title: "Mastering Typography in Modern UI",
          excerpt: "How to choose, pair, and scale fonts to create interfaces that are both beautiful and readable.",
          author: {
            name: "Alicia Keys",
            avatar: "https://i.pravatar.cc/150?img=20"
          },
          date: "Oct 05, 2026",
          category: "Design",
          imageUrl: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=2000&auto=format&fit=crop",
          readTime: "7 min read"
        }
      ]
    },
    style: { backgroundColor: theme.bg, textColor: theme.text }
  };
  
  fs.writeFileSync(path.join(dir, `blog-highlight-${i}.json`), JSON.stringify(data, null, 2));
}
