const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/cart/05-free-shipping-progress');

if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

for (let i = 1; i <= 20; i++) {
  const dirName = `free-shipping-progress-${i}`;
  const folderPath = path.join(baseDir, dirName);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  // JSON template
  const jsonContent = {
    title: `Free Shipping Progress ${i < 10 ? '0' + i : i}`,
    description: `Bright premium free shipping progress visualization variant ${i}`,
    section: {
      settings: {
        currency: "₹",
        currentValue: i === 19 ? 3000 : 2400,
        threshold: 3000,
        remaining: i === 19 ? 0 : 600,
        label: "Free Shipping",
        remainingMessage: "Add ₹600 more to unlock FREE shipping",
        unlockedMessage: "🎉 Congratulations! You unlocked FREE Shipping!",
        achieved: i === 19,
        cta: {
          label: "Continue Shopping",
          href: "/shop"
        },
        milestones: [
          { value: 1000, label: "Standard" },
          { value: 2000, label: "Express Discount" },
          { value: 3000, label: "Free Shipping" }
        ]
      }
    }
  };

  fs.writeFileSync(
    path.join(folderPath, `${dirName}.json`),
    JSON.stringify(jsonContent, null, 2),
    'utf8'
  );
}

console.log("JSON files created successfully!");
