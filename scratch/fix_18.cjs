const fs = require('fs');
const p = 'c:/UI Library/src/components/sections/product/13-return-refund-information/return-refund-information-18/ReturnRefundInformation18.tsx';
let c = fs.readFileSync(p, 'utf8');

// Replace the escaped backticks with actual backticks
c = c.replace("animate={{ width: \\`\\${(amount / targetAmount) * 100}%\\` }}", "animate={{ width: `${(amount / targetAmount) * 100}%` }}");

fs.writeFileSync(p, c);
