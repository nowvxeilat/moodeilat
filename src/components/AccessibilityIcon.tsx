import React, { useState } from 'react';
import { Accessibility } from 'lucide-react';

interface AccessibilityIconProps {
  onOpenAccessibility: () => void;
}

export function AccessibilityIcon({ onOpenAccessibility }: AccessibilityIconProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40">
      <button
        onClick={onOpenAccessibility}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="פתח הצהרת נגישות"
        title="נגישות"
      >
        <Accessibility className="h-6 w-6" />
      </button>
      
      {isHovered && (
        <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
          נגישות
          <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-slate-900"></div>
        </div>
      )}
    </div>
  );
}