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
            
            if (content.includes('w-screen')) {
                // max-w-screen-2xl is valid tailwind, don't break that.
                // we only want to replace w-screen with w-full
                content = content.replace(/\bw-screen\b/g, 'w-full');
                changed = true;
            }
            if (content.includes('w-[100vw]')) {
                content = content.replace(/w-\[100vw\]/g, 'w-full');
                changed = true;
            }
            
            if (changed) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

processDirectory('c:/UI Library/src/components/sections');
console.log('Finished fixing width classes');
