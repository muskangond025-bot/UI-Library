const fs = require('fs');
const path = require('path');

const themes = [
  { id: 11, title: "FAQ 11", bg: "#f8fafc", text: "#0f172a" },
  { id: 12, title: "FAQ 12", bg: "#020617", text: "#f8fafc" },
  { id: 13, title: "FAQ 13", bg: "#ffffff", text: "#18181b" },
  { id: 14, title: "FAQ 14", bg: "#1e1b4b", text: "#e0e7ff" },
  { id: 15, title: "FAQ 15", bg: "#fafaf9", text: "#292524" },
  { id: 16, title: "FAQ 16", bg: "#000000", text: "#ffffff" },
  { id: 17, title: "FAQ 17", bg: "#ffffff", text: "#000000" },
  { id: 18, title: "FAQ 18", bg: "#0f172a", text: "#e2e8f0" },
  { id: 19, title: "FAQ 19", bg: "#ffffff", text: "#000000" },
  { id: 20, title: "FAQ 20", bg: "#09090b", text: "#fafafa" },
];

const basePath = 'c:\\UI Library\\src\\components\\Faq';
if (!fs.existsSync(basePath)) fs.mkdirSync(basePath, { recursive: true });

for (let i = 11; i <= 20; i++) {
  const dir = path.join(basePath, `faq-${i}`);
  fs.mkdirSync(dir, { recursive: true });
  
  const theme = themes.find(t => t.id === i);
  
  const data = {
    id: `faq-${i}`,
    name: `Faq${i}`,
    type: 'faq',
    content: {
      heading: `Common Questions`,
      description: "Find out everything you need to know about our platform, billing, and support options.",
      supportText: "Still have questions?",
      faqs: [
        {
          question: "How do I invite team members?",
          answer: "You can invite team members from the Workspace Settings page. Click on 'Members' and enter their email addresses. They will receive an invitation link."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards including Visa, Mastercard, and American Express. We also support PayPal and wire transfers for enterprise annual plans."
        },
        {
          question: "Can I export my data?",
          answer: "Yes, you can export all your data at any time in CSV or JSON format from the Data Management section in your account settings."
        },
        {
          question: "Do you offer custom integrations?",
          answer: "Custom integrations are available on our Enterprise plan. Our engineering team will work with you to connect our platform with your internal tools."
        },
        {
          question: "How long are backups kept?",
          answer: "We keep daily backups for 30 days on all paid plans. Enterprise customers can request custom retention periods."
        },
        {
          question: "What happens if I exceed my usage limit?",
          answer: "We'll never cut off your service immediately. You'll receive a warning email when you reach 80% and 100% of your limit, giving you time to upgrade your plan."
        }
      ]
    },
    style: { backgroundColor: theme.bg, textColor: theme.text }
  };
  
  fs.writeFileSync(path.join(dir, `faq-${i}.json`), JSON.stringify(data, null, 2));
}
