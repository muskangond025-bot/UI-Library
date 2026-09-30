const fs = require('fs');
const path = require('path');

const comp8 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function PaymentInformation8({ data }: { data: any }) {
  const [split, setSplit] = useState(50);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-900 flex flex-col items-center justify-center relative text-white">
      
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold">Split Payments</h2>
        <p className="text-neutral-400">Use multiple cards for a single order.</p>
      </div>

      <div className="w-full max-w-md bg-neutral-800 p-8 rounded-3xl border border-neutral-700 shadow-2xl">
        <div className="flex justify-between font-mono mb-8 text-xl font-bold">
          <div className="text-blue-400">Card 1: {split}%</div>
          <div className="text-purple-400">Card 2: {100 - split}%</div>
        </div>

        {/* Custom Slider */}
        <div className="relative w-full h-8 flex items-center mb-12">
          {/* Track */}
          <div className="absolute inset-0 rounded-full overflow-hidden flex">
            <motion.div className="h-full bg-blue-500" animate={{ width: \`\${split}%\` }} transition={{ type: "tween", ease: "circOut" }} />
            <motion.div className="h-full bg-purple-500" animate={{ width: \`\${100 - split}%\` }} transition={{ type: "tween", ease: "circOut" }} />
          </div>
          
          {/* Thumb */}
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={split}
            onChange={(e) => setSplit(parseInt(e.target.value))}
            className="absolute inset-0 w-full opacity-0 cursor-ew-resize z-10"
          />
          <motion.div 
            className="w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center absolute -ml-5 pointer-events-none z-20 border-2 border-neutral-900"
            animate={{ left: \`\${split}%\` }}
            transition={{ type: "tween", ease: "circOut" }}
          >
            <div className="flex gap-1">
               <div className="w-1 h-3 bg-neutral-300 rounded-full" />
               <div className="w-1 h-3 bg-neutral-300 rounded-full" />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-4">
           <div className="bg-neutral-900/50 p-4 rounded-xl border border-blue-500/30 text-center">
             <div className="text-sm text-neutral-400 mb-1">Visa ending 4242</div>
             <div className="text-2xl font-bold text-white">\${(120 * (split/100)).toFixed(2)}</div>
           </div>
           <div className="bg-neutral-900/50 p-4 rounded-xl border border-purple-500/30 text-center">
             <div className="text-sm text-neutral-400 mb-1">Store Credit</div>
             <div className="text-2xl font-bold text-white">\${(120 * ((100-split)/100)).toFixed(2)}</div>
           </div>
        </div>
      </div>
    </div>
  );
}
`;

const filePath = path.join(__dirname, '..', 'src', 'components', 'sections', 'product', '14-payment-information', 'payment-information-8', 'PaymentInformation8.tsx');
fs.writeFileSync(filePath, comp8, 'utf-8');
console.log('Fixed Payment 8');
