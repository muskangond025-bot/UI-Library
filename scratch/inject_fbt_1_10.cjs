const fs = require('fs');
const path = require('path');

const gridPath = path.join('c:/UI Library/src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridPath, 'utf8');

let newImports = '';
for (let i = 1; i <= 10; i++) {
  const compName = 'FrequentlyBoughtTogether' + i;
  const imp = "import " + compName + " from '../sections/product/15-frequently-bought-together/frequently-bought-together-" + i + "/" + compName + "';\n";
  if (!content.includes(imp)) {
    newImports += imp;
  }
}
if (newImports) {
  content = content.replace(
    /import FrequentlyBoughtTogether1Placeholder from '\.\.\/sections\/product\/15-frequently-bought-together\/frequently-bought-together-1\/FrequentlyBoughtTogether1';/,
    newImports + "import FrequentlyBoughtTogether1Placeholder from '../sections/product/15-frequently-bought-together/frequently-bought-together-1/FrequentlyBoughtTogether1';\n"
  );
}

let newDataImports = '';
for (let i = 1; i <= 10; i++) {
  const dataName = 'frequentlyBoughtTogether' + i + 'Data';
  const imp = "import " + dataName + " from '../sections/product/15-frequently-bought-together/frequently-bought-together-" + i + "/frequently-bought-together-" + i + ".json';\n";
  if (!content.includes(imp)) {
    newDataImports += imp;
  }
}
if (newDataImports) {
  content = content.replace(
    /import frequentlyBoughtTogether1Data from '\.\.\/sections\/product\/15-frequently-bought-together\/frequently-bought-together-1\/frequently-bought-together-1\.json';/,
    newDataImports + "import frequentlyBoughtTogether1DataPlaceholder from '../sections/product/15-frequently-bought-together/frequently-bought-together-1/frequently-bought-together-1.json';\n"
  );
}

const arrayObjects = [];
for (let i = 1; i <= 10; i++) {
  arrayObjects.push("{ id: \"frequently-bought-together-" + i + "\", title: frequentlyBoughtTogether" + i + "Data.title || \"\", description: frequentlyBoughtTogether" + i + "Data.description || \"\", previewComponent: <FrequentlyBoughtTogether" + i + " data={frequentlyBoughtTogether" + i + "Data as any} /> }");
}

const match = content.match(/category === 'frequently-bought-together' \? \[(.*?)\] :/s);
if (match) {
  let existingArray = match[1];
  for (let i = 1; i <= 10; i++) {
    // We are replacing the placeholders completely instead of appending.
  }
  content = content.replace(/category === 'frequently-bought-together' \? \[(.*?)\] :/s, "category === 'frequently-bought-together' ? [" + arrayObjects.join(', ') + "] :");
}

fs.writeFileSync(gridPath, content, 'utf8');
console.log('Injected FBT 1-10');
