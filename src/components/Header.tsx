import React from 'react';
import { Heart } from 'lucide-react';

export function Header() {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-center items-center">
      <div className="flex items-center gap-4">
        {/* Logo image - sized down proportionally */}
        <img 
          src="/logo.png"
          alt="Moments Program Logo" 
          className="w-16 h-auto object-contain"  // This maintains aspect ratio
        />
        
        {/* You can keep or remove the heart icon */}
        {/* <Heart className="w-8 h-8 text-rose-500" /> */}
      </div>
    </header>
  );
}
