const fs = require('fs');
const path = require('path');

for (let i = 11; i <= 20; i++) {
  const p = path.join('c:/UI Library/src/components/sections/product/15-frequently-bought-together', 'frequently-bought-together-' + i, 'FrequentlyBoughtTogether' + i + '.tsx');
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    // Replace \$`\${...}` with \${...}
    content = content.replace(/\$`\$\{([^}]+)\}`/g, '$$${$1}');
    content = content.replace(/\+\$`\$\{([^}]+)\}`/g, '+$$${$1}');
    fs.writeFileSync(p, content, 'utf8');
    console.log('Fixed', i);
  }
}
