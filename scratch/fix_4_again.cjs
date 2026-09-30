const fs = require('fs');
const p = 'c:/UI Library/src/components/sections/product/14-payment-information/payment-information-4/PaymentInformation4.tsx';
let c = fs.readFileSync(p, 'utf8');

c = c.replace(/\\\$\{/g, '${');
c = c.replace(/\}\\\`/g, '}`');

fs.writeFileSync(p, c);
