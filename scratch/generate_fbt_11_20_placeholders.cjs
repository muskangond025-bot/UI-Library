const fs = require('fs');
const path = require('path');

const components = Array.from({ length: 10 }).map((_, i) => {
  const num = i + 11;
  return {
    name: 'FrequentlyBoughtTogether' + num,
    content: `import React from 'react';

export default function FrequentlyBoughtTogether${num}({ data }: { data: any }) {
  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-100 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-neutral-400">Frequently Bought Together ${num}</h2>
        <p className="text-neutral-500 mt-2">Placeholder for upcoming design</p>
      </div>
    </div>
  );
}
`
  };
});

components.forEach(comp => {
  const filePath = path.join(__dirname, '..', 'src', 'components', 'sections', 'product', '15-frequently-bought-together', 'frequently-bought-together-' + comp.name.replace('FrequentlyBoughtTogether', ''), comp.name + '.tsx');
  
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filePath, comp.content, 'utf-8');
  console.log('Updated ' + comp.name);
});
