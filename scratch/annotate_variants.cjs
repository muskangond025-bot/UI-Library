const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, '../src/components/sections/account/01-overview');
const files = fs.readdirSync(dir);

for (const file of files) {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Make sure Variants is imported if motion is imported from framer-motion
    if (content.includes("import { motion } from 'framer-motion';")) {
      content = content.replace("import { motion } from 'framer-motion';", "import { motion, Variants } from 'framer-motion';");
    }

    // Annotate object declarations that end with Variants
    content = content.replace(/const (\w+Variants) = \{/g, 'const $1: Variants = {');

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Annotated variants in ${file}`);
  }
}
