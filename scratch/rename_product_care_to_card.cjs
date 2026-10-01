const fs = require('fs');
const path = require('path');

const productDir = path.join(__dirname, '../src/components/sections/product');
const newCardDir = path.join(productDir, '10-product-card');

if (fs.existsSync(newCardDir)) {
  const subdirs = fs.readdirSync(newCardDir);
  for (const subdir of subdirs) {
    const oldSubPath = path.join(newCardDir, subdir);
    if (fs.statSync(oldSubPath).isDirectory()) {
      const num = subdir.replace('product-care-', '').replace('product-card-', '');
      const newSubdir = `product-card-${num}`;
      const newSubPath = path.join(newCardDir, newSubdir);

      if (oldSubPath !== newSubPath) {
        fs.cpSync(oldSubPath, newSubPath, { recursive: true });
        try { fs.rmSync(oldSubPath, { recursive: true, force: true }); } catch (e) {}
      }

      // Process files inside newSubPath
      const files = fs.readdirSync(newSubPath);
      for (const file of files) {
        let newFile = file.replace(/product-care-/g, 'product-card-').replace(/ProductCare/g, 'ProductCard');
        const oldFilePath = path.join(newSubPath, file);
        const newFilePath = path.join(newSubPath, newFile);

        if (oldFilePath !== newFilePath) {
          fs.copyFileSync(oldFilePath, newFilePath);
          try { fs.unlinkSync(oldFilePath); } catch (e) {}
        }

        // Update file content
        if (fs.existsSync(newFilePath)) {
          let content = fs.readFileSync(newFilePath, 'utf8');
          let updated = content
            .replace(/ProductCare/g, 'ProductCard')
            .replace(/product-care/g, 'product-card')
            .replace(/Product Care/g, 'Product Card')
            .replace(/PRODUCT CARE/g, 'PRODUCT CARD');
          
          fs.writeFileSync(newFilePath, updated, 'utf8');
        }
      }
    }
  }
}

// Update navigationData.ts
const navPath = path.join(__dirname, '../src/components/section-library/navigationData.ts');
if (fs.existsSync(navPath)) {
  let navContent = fs.readFileSync(navPath, 'utf8');
  navContent = navContent
    .replace(/id: 'product-care'/g, "id: 'product-card'")
    .replace(/mappedId: 'product-care'/g, "mappedId: 'product-card'")
    .replace(/label: 'Product Care'/g, "label: 'Product Card'");
  fs.writeFileSync(navPath, navContent, 'utf8');
  console.log('Updated navigationData.ts');
}

// Update SectionLibraryGrid.tsx
const gridPath = path.join(__dirname, '../src/components/section-library/SectionLibraryGrid.tsx');
if (fs.existsSync(gridPath)) {
  let gridContent = fs.readFileSync(gridPath, 'utf8');
  gridContent = gridContent
    .replace(/10-product-care/g, '10-product-card')
    .replace(/product-care/g, 'product-card')
    .replace(/ProductCare/g, 'ProductCard')
    .replace(/Product Care/g, 'Product Card');
  fs.writeFileSync(gridPath, gridContent, 'utf8');
  console.log('Updated SectionLibraryGrid.tsx');
}

console.log('Done migration!');
