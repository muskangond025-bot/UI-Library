import React from 'react';
import { motion } from 'framer-motion';

export default function ProductCare8({ data }) {
  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-indigo-50 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        <motion.div 
          className="bg-white p-8 rounded-2xl shadow-sm border border-indigo-100"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="h-12 w-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center text-xl font-bold mb-6">
            !
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Important Warning</h3>
          <p className="text-gray-600">
            Never expose this product to extreme temperatures or high humidity environments for prolonged periods.
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-indigo-600 p-8 rounded-2xl shadow-md text-white"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="h-12 w-12 bg-indigo-500 rounded-xl flex items-center justify-center text-xl font-bold mb-6">
            ?
          </div>
          <h3 className="text-xl font-bold mb-4">Need Help?</h3>
          <p className="text-indigo-100 mb-6">
            Our support team is available 24/7 to assist you with any care or maintenance questions.
          </p>
          <button className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-medium text-sm hover:bg-indigo-50 transition-colors">
            Contact Support
          </button>
        </motion.div>
      </div>
    </div>
  );
}
