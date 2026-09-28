const fs = require('fs');
const path = require('path');

function processFile(filepath) {
    let content = fs.readFileSync(filepath, 'utf8');
    let original = content;

    // Remove Navbar tag
    content = content.replace(/<Navbar[^>]*\/>/g, '');
    
    // Remove Navbar import
    content = content.replace(/import\s+\{\s*Navbar\s*\}\s+from\s+[^;]+;/g, '');

    // Check for global cursors
    if (content.includes('window.addEventListener') && content.includes('mousemove')) {
        // Disable window.addEventListener for mousemove
        content = content.replace(/window\.addEventListener\(['"]mousemove['"][^\)]+\);/g, '');
        content = content.replace(/window\.removeEventListener\(['"]mousemove['"][^\)]+\);/g, '');
        
        // Hide the fixed cursor div
        // Cursors are usually fixed + pointer-events-none + z-50 or higher
        content = content.replace(/className="[^"]*fixed[^"]*pointer-events-none[^"]*"/g, 'className="hidden"');
        content = content.replace(/className=\{`fixed[^`]*pointer-events-none[^`]*`\}/g, 'className="hidden"');
    }

    if (content !== original) {
        fs.writeFileSync(filepath, content, 'utf8');
        console.log(`Updated ${filepath}`);
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
console.log('Done');
