const fs = require('fs');
const path = require('path');

const themes = [
  { id: 11, title: "Customer Review 11", bg: "#f8fafc", text: "#0f172a" },
  { id: 12, title: "Customer Review 12", bg: "#000000", text: "#ffffff" },
  { id: 13, title: "Customer Review 13", bg: "#ffffff", text: "#000000" },
  { id: 14, title: "Customer Review 14", bg: "#0f172a", text: "#ffffff" },
  { id: 15, title: "Customer Review 15", bg: "#fafafa", text: "#171717" },
  { id: 16, title: "Customer Review 16", bg: "#ecfccb", text: "#3f6212" },
  { id: 17, title: "Customer Review 17", bg: "#1e1b4b", text: "#e0e7ff" },
  { id: 18, title: "Customer Review 18", bg: "#ffffff", text: "#000000" },
  { id: 19, title: "Customer Review 19", bg: "#09090b", text: "#fafafa" },
  { id: 20, title: "Customer Review 20", bg: "#000000", text: "#ffffff" },
];

const basePath = 'c:\\UI Library\\src\\components\\CustomerReview';
if (!fs.existsSync(basePath)) fs.mkdirSync(basePath, { recursive: true });

for (let i = 11; i <= 20; i++) {
  const dir = path.join(basePath, `customer-review-${i}`);
  fs.mkdirSync(dir, { recursive: true });
  
  const theme = themes.find(t => t.id === i);
  
  const data = {
    id: `customer-review-${i}`,
    name: `CustomerReview${i}`,
    type: 'customer-review',
    content: {
      heading: `Real reviews from real users`,
      description: "Don't just take our word for it. Here is what our community says.",
      overallRating: 4.9,
      totalReviews: 850,
      reviews: [
        {
          name: "Emma Stone",
          date: "1 day ago",
          rating: 5,
          title: "Incredible Support",
          content: "The support team went above and beyond to help me set up my custom integrations. I have never experienced this level of service before.",
          avatar: "https://i.pravatar.cc/150?img=41",
          verified: true
        },
        {
          name: "Lucas Grant",
          date: "3 days ago",
          rating: 5,
          title: "Lightning Fast",
          content: "The speed at which this platform operates is just mind-blowing. It handles our massive datasets without breaking a sweat.",
          avatar: "https://i.pravatar.cc/150?img=12",
          verified: true
        },
        {
          name: "Olivia Chen",
          date: "1 week ago",
          rating: 4,
          title: "Great tool, slight learning curve",
          content: "It took our team a few days to get used to the new workflow, but once we did, the efficiency gains were massive.",
          avatar: "https://i.pravatar.cc/150?img=23",
          verified: true
        },
        {
          name: "Marcus Johnson",
          date: "2 weeks ago",
          rating: 5,
          title: "Exactly what we needed",
          content: "We were looking for a scalable solution for months before finding this. It ticks every single box on our requirements list.",
          avatar: "https://i.pravatar.cc/150?img=33",
          verified: false
        }
      ]
    },
    style: { backgroundColor: theme.bg, textColor: theme.text }
  };
  
  fs.writeFileSync(path.join(dir, `customer-review-${i}.json`), JSON.stringify(data, null, 2));
}
