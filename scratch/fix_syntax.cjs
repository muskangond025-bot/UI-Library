const fs = require('fs');
const path = require('path');

function processFile(filepath) {
    let content = fs.readFileSync(filepath, 'utf8');
    let original = content;

    // Fix the broken return () => ; syntax error
    content = content.replace(/return\s*\(\)\s*=>\s*;/g, 'return () => {};');

    if (content !== original) {
        fs.writeFileSync(filepath, content, 'utf8');
        console.log(`Fixed syntax in ${filepath}`);
    }
}

function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            processFile(fullPath);
        }
    }
}

walk('c:/UI Library/src/components/sections');
console.log('Done syntax fix');
