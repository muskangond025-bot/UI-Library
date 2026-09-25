import React from 'react';
import { Copy, Share, X } from 'lucide-react';

interface JsonPanelProps {
  data: Record<string, any>;
  onClose?: () => void;
}

export function SectionJsonPanel({ data, onClose }: JsonPanelProps) {
  return (
    <div className="w-96 border-l border-gray-200 bg-white h-screen flex flex-col fixed right-0 top-0 shadow-xl z-20">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
        <h3 className="font-semibold text-sm text-gray-900">Section Data (JSON)</h3>
        <div className="flex items-center gap-2">
          <button className="p-1.5 text-gray-500 hover:bg-gray-200 rounded-md transition-colors" title="Copy JSON">
            <Copy size={16} />
          </button>
          <button className="p-1.5 text-gray-500 hover:bg-gray-200 rounded-md transition-colors" title="Share">
            <Share size={16} />
          </button>
          {onClose && (
            <button onClick={onClose} className="p-1.5 text-gray-500 hover:bg-gray-200 rounded-md transition-colors ml-2" title="Close Panel">
              <X size={16} />
            </button>
          )}
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4 bg-gray-900 text-gray-300">
        <pre className="text-xs font-mono leading-relaxed">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  );
}
