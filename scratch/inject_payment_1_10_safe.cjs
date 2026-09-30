const fs = require('fs');
const path = require('path');

const file = 'c:/UI Library/src/components/section-library/SectionLibraryGrid.tsx';
let c = fs.readFileSync(file, 'utf8');

const updates = [
  { id: 1, title: '3D CREDIT CARD FLIP', desc: 'A realistic 3D credit card that flips over when you hover to show the CVC and security details.' },
  { id: 2, title: 'INFINITE PAYMENT MARQUEE', desc: 'An infinite scrolling banner of accepted payment methods using glassmorphism logos.' },
  { id: 3, title: 'INTERACTIVE RECEIPT PRINTER', desc: 'A terminal that literally prints out a sample encrypted, secure payment confirmation.' },
  { id: 4, title: 'BIOMETRIC SCAN SIMULATOR', desc: 'A payment security component that simulates a fingerprint scan with laser animations.' },
  { id: 5, title: 'CARD STACKING ACCORDION', desc: 'A vertical stack of different payment methods that fan out when you hover.' },
  { id: 6, title: 'NFC TAP ANIMATION', desc: 'A mobile phone hovering over a terminal, simulating an NFC tap to pay.' },
  { id: 7, title: 'SECURE VAULT LOCK', desc: 'A giant 3D vault padlock that snaps shut and glows green to signify bank-grade encryption.' },
  { id: 8, title: 'INTERACTIVE SPLIT PAYMENT', desc: 'A custom slider that lets the user visually split a payment between multiple cards.' },
  { id: 9, title: 'CYBERPUNK PAYMENT TERMINAL', desc: 'A dark mode terminal with a loading bar and hex codes that resolves into PAYMENT SECURED.' },
  { id: 10, title: 'PORTAL REVEAL GATEWAY', desc: 'A huge vault door that slides open to reveal your secure payment gateway.' }
];

let itemsStr = updates.map(u => {
  return '{ id: "payment-information-' + u.id + '", title: "' + u.title + '", description: "' + u.desc + '", previewComponent: <PaymentInformation' + u.id + ' data={paymentInformation' + u.id + 'Data as any} /> }';
}).join(', ');

const regex = /category === 'payment-information' \? \[(.*?)\] :/s;
c = c.replace(regex, (match, p1) => {
  return "category === 'payment-information' ? [" + itemsStr + "] :";
});

fs.writeFileSync(file, c);
console.log('Injected Payment 1-10');
