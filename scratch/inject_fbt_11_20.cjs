const fs = require('fs');
const path = require('path');

const gridPath = path.join('c:/UI Library/src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridPath, 'utf8');

let newImports = '';
for (let i = 11; i <= 20; i++) {
  const compName = 'FrequentlyBoughtTogether' + i;
  const imp = "import " + compName + " from '../sections/product/15-frequently-bought-together/frequently-bought-together-" + i + "/" + compName + "';\n";
  if (!content.includes(imp)) {
    newImports += imp;
  }
}
if (newImports) {
  content = content.replace(
    /import FrequentlyBoughtTogether10 from '\.\.\/sections\/product\/15-frequently-bought-together\/frequently-bought-together-10\/FrequentlyBoughtTogether10';/,
    "import FrequentlyBoughtTogether10 from '../sections/product/15-frequently-bought-together/frequently-bought-together-10/FrequentlyBoughtTogether10';\n" + newImports
  );
}

let newDataImports = '';
for (let i = 11; i <= 20; i++) {
  const dataName = 'frequentlyBoughtTogether' + i + 'Data';
  const imp = "import " + dataName + " from '../sections/product/15-frequently-bought-together/frequently-bought-together-" + i + "/frequently-bought-together-" + i + ".json';\n";
  if (!content.includes(imp)) {
    newDataImports += imp;
  }
}
if (newDataImports) {
  content = content.replace(
    /import frequentlyBoughtTogether10Data from '\.\.\/sections\/product\/15-frequently-bought-together\/frequently-bought-together-10\/frequently-bought-together-10\.json';/,
    "import frequentlyBoughtTogether10Data from '../sections/product/15-frequently-bought-together/frequently-bought-together-10/frequently-bought-together-10.json';\n" + newDataImports
  );
}

const arrayObjects = [];
for (let i = 11; i <= 20; i++) {
  arrayObjects.push("{ id: \"frequently-bought-together-" + i + "\", title: frequentlyBoughtTogether" + i + "Data.title || \"\", description: frequentlyBoughtTogether" + i + "Data.description || \"\", previewComponent: <FrequentlyBoughtTogether" + i + " data={frequentlyBoughtTogether" + i + "Data as any} /> }");
}

const match = content.match(/category === 'frequently-bought-together' \? \[(.*?)\] :/s);
if (match) {
  let existingArray = match[1];
  for (let i = 11; i <= 20; i++) {
    if (!existingArray.includes("id: \"frequently-bought-together-" + i + "\"")) {
      existingArray += ', ' + arrayObjects[i - 11];
    }
  }
  content = content.replace(/category === 'frequently-bought-together' \? \[(.*?)\] :/s, "category === 'frequently-bought-together' ? [" + existingArray + "] :");
}

fs.writeFileSync(gridPath, content, 'utf8');
console.log('Injected FBT 11-20');
