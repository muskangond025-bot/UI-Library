const fs = require('fs');
const path = require('path');

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let changed = false;
            
            if (content.includes('max-w-full-')) {
                content = content.replace(/max-w-full-/g, 'max-w-screen-');
                changed = true;
            }
            
            if (changed) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Reverted max-w-full- in ${fullPath}`);
            }
        }
    }
}

processDirectory('c:/UI Library/src/components/sections');
console.log('Finished fixing max-w-screen');
