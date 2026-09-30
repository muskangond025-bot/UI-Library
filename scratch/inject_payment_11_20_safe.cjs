const fs = require('fs');
const path = require('path');

const gridPath = path.join('c:/UI Library/src/components/section-library/SectionLibraryGrid.tsx');
let content = fs.readFileSync(gridPath, 'utf8');

let newImports = '';
for (let i = 11; i <= 20; i++) {
  const compName = 'PaymentInformation' + i;
  const imp = "import " + compName + " from '../sections/product/14-payment-information/payment-information-" + i + "/" + compName + "';\n";
  if (!content.includes(imp)) {
    newImports += imp;
  }
}
if (newImports) {
  content = content.replace(
    /import PaymentInformation10 from '\.\.\/sections\/product\/14-payment-information\/payment-information-10\/PaymentInformation10';/,
    "import PaymentInformation10 from '../sections/product/14-payment-information/payment-information-10/PaymentInformation10';\n" + newImports
  );
}

let newDataImports = '';
for (let i = 11; i <= 20; i++) {
  const dataName = 'paymentInformation' + i + 'Data';
  const imp = "import " + dataName + " from '../sections/product/14-payment-information/payment-information-" + i + "/payment-information-" + i + ".json';\n";
  if (!content.includes(imp)) {
    newDataImports += imp;
  }
}
if (newDataImports) {
  content = content.replace(
    /import paymentInformation10Data from '\.\.\/sections\/product\/14-payment-information\/payment-information-10\/payment-information-10\.json';/,
    "import paymentInformation10Data from '../sections/product/14-payment-information/payment-information-10/payment-information-10.json';\n" + newDataImports
  );
}

const arrayObjects = [];
for (let i = 11; i <= 20; i++) {
  arrayObjects.push("{ id: \"payment-information-" + i + "\", title: paymentInformation" + i + "Data.title || \"\", description: paymentInformation" + i + "Data.description || \"\", previewComponent: <PaymentInformation" + i + " data={paymentInformation" + i + "Data as any} /> }");
}

const match = content.match(/category === 'payment-information' \? \[(.*?)\] :/s);
if (match) {
  let existingArray = match[1];
  for (let i = 11; i <= 20; i++) {
    if (!existingArray.includes("id: \"payment-information-" + i + "\"")) {
      existingArray += ', ' + arrayObjects[i - 11];
    }
  }
  content = content.replace(/category === 'payment-information' \? \[(.*?)\] :/s, "category === 'payment-information' ? [" + existingArray + "] :");
}

fs.writeFileSync(gridPath, content, 'utf8');
console.log('Injected Payment 11-20');
