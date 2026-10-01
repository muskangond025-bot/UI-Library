const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/cart/05-free-shipping-progress');

const writeVariant = (num, title, desc, tsxCode, jsonSettings) => {
  const dir = path.join(baseDir, `free-shipping-progress-${num}`);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const tsxPath = path.join(dir, `FreeShippingProgress${num}.tsx`);
  const jsonPath = path.join(dir, `free-shipping-progress-${num}.json`);

  fs.writeFileSync(tsxPath, tsxCode, 'utf8');

  const jsonContent = {
    title: `Free Shipping Progress ${num < 10 ? '0' + num : num} — ${title}`,
    description: desc,
    section: {
      settings: jsonSettings || {
        currency: "₹",
        currentValue: 2400,
        threshold: 3000,
        remainingMessage: "Add ₹600 more to unlock FREE shipping",
        unlockedMessage: "🎉 Congratulations! You unlocked FREE Shipping!",
        achieved: false
      }
    }
  };

  fs.writeFileSync(jsonPath, JSON.stringify(jsonContent, null, 2), 'utf8');
};

console.log("Helper script ready.");
