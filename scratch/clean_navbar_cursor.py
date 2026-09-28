import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf8') as f:
        content = f.read()

    original_content = content
    
    # 1. Remove Navbar
    content = re.sub(r'<Navbar\b[^>]*/>', '', content)
    content = re.sub(r'import\s+\{\s*Navbar\s*\}\s+from\s+[^;]+;', '', content)

    # 2. Remove global mousemove cursors
    if 'window.addEventListener' in content and 'mousemove' in content:
        # Let's remove the useEffect that contains window.addEventListener
        # A simple regex for the useEffect block
        # Because we might break hooks, let's just comment out the event listener and the cursor rendering.
        # Actually, if we just remove the window.addEventListener lines, the state won't update, 
        # so the cursor will stay fixed at 0,0. We need to remove the rendering too.
        content = re.sub(r'window\.addEventListener\([\'"]mousemove[\'"][^\)]+\);', '', content)
        content = re.sub(r'window\.removeEventListener\([\'"]mousemove[\'"][^\)]+\);', '', content)
        
        # Remove the cursor divs. They usually have classes like "fixed ... pointer-events-none ... rounded-full"
        # We can look for fixed elements that are cursors.
        content = re.sub(r'className="[^"]*fixed[^"]*pointer-events-none[^"]*"', 'className="hidden"', content)
        
    if content != original_content:
        with open(filepath, 'w', encoding='utf8') as f:
            f.write(content)
        print(f"Updated {filepath}")

def main():
    root_dir = 'c:/UI Library/src/components/sections'
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts'):
                process_file(os.path.join(root, file))

if __name__ == '__main__':
    main()
