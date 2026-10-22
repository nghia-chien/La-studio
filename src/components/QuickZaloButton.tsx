import React from 'react';
import { MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const QuickZaloButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-2">
      <a
        href={STUDIO_INFO.zaloUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Tư vấn nhanh qua Zalo"
        className="group flex items-center space-x-2.5 bg-[#221F1F] hover:bg-[#CF9297] text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20"
      >
        <MessageCircle className="w-5 h-5 text-white" />
        <span className="hidden sm:inline text-xs font-semibold tracking-wider">
          Chat Zalo Tư Vấn
        </span>
      </a>
    </div>
  );
};
