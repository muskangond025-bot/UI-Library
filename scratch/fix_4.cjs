const fs = require('fs');
const p = 'c:/UI Library/src/components/sections/product/14-payment-information/payment-information-4/PaymentInformation4.tsx';
let c = fs.readFileSync(p, 'utf8');

c = c.replace(/className=\{\\`relative w-48/g, 'className={`relative w-48');
c = c.replace(/border-neutral-700'\\`\}/g, "border-neutral-700'}`");
c = c.replace(/className=\{\\`transition-colors/g, 'className={`transition-colors');
c = c.replace(/hover:text-neutral-500'\\`\}/g, "hover:text-neutral-500'}`");

fs.writeFileSync(p, c);
