const fs = require('fs');
const path = require('path');

const overviewDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'account', '01-overview');

for (let i = 1; i <= 20; i++) {
  const num = String(i).padStart(2, '0');
  const filePath = path.join(overviewDir, `account-overview-${num}.tsx`);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  content = content
    .replace(/MUSKAN GOND/g, 'ALEX MORGAN')
    .replace(/Muskan Gond/g, 'Alex Morgan')
    .replace(/muskan\.gond/g, 'alex.morgan')
    .replace(/muskangond/g, 'alexmorgan')
    .replace(/OPERATOR_MUSKAN/g, 'OPERATOR_ALEX')
    .replace(/MUSKAN/g, 'ALEX');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Replaced names in account-overview-${num}.tsx`);
}
