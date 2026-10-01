const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/cart/06-cart-frequently-bought-together');

const writeVariant = (num, title, desc, tsxCode) => {
  const dirName = `cart-frequently-bought-together-${num}`;
  const dirPath = path.join(baseDir, dirName);
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });

  const tsxPath = path.join(dirPath, `CartFrequentlyBoughtTogether${num}.tsx`);
  const jsonPath = path.join(dirPath, `cart-frequently-bought-together-${num}.json`);

  fs.writeFileSync(tsxPath, tsxCode, 'utf8');

  const jsonContent = {
    title: `Cart Frequently Bought Together ${num < 10 ? '0' + num : num} — ${title}`,
    description: desc,
    section: {
      settings: {
        title: title,
        description: desc,
        cartItem: { name: "Navy Tailored Blazer", price: "₹8,999" },
        bundleItems: [
          { id: 1, name: "Silk Pocket Square", price: 499, image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&auto=format&fit=crop&q=80" },
          { id: 2, name: "Silver Metal Tie Bar", price: 349, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&auto=format&fit=crop&q=80" },
          { id: 3, name: "Leather Care Cream", price: 299, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&auto=format&fit=crop&q=80" }
        ],
        bundleSavings: "Save ₹200 on bundle"
      }
    }
  };

  fs.writeFileSync(jsonPath, JSON.stringify(jsonContent, null, 2), 'utf8');
};

console.log("Cart FBT generator script base ready.");
