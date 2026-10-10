const fs = require('fs');
const path = require('path');

const teamDir = path.join(__dirname, '../src/components/sections/about/08-about-team-showcase');

function processDir(dir) {
  const list = fs.readdirSync(dir);
  for (const item of list) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('Linkedin') || content.includes('Twitter') || content.includes('Github')) {
        content = content.replace(
          /import\s*\{\s*Sparkles,\s*Linkedin,\s*Twitter,\s*Github,\s*Mail,\s*Award\s*\}\s*from\s*['"]lucide-react['"];?/g,
          "import { Sparkles, Share2 as Linkedin, Globe as Twitter, Code as Github, Mail, Award } from 'lucide-react';"
        );
        content = content.replace(
          /import\s*\{\s*Sparkles,\s*Linkedin,\s*Twitter,\s*Github,\s*Award\s*\}\s*from\s*['"]lucide-react['"];?/g,
          "import { Sparkles, Share2 as Linkedin, Globe as Twitter, Code as Github, Award } from 'lucide-react';"
        );
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Fixed:', item);
      }
    }
  }
}

processDir(teamDir);
console.log('Finished fixing missing icon imports.');
