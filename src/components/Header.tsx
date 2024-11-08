import React from 'react';
import { Heart } from 'lucide-react';

export function Header() {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-center items-center">
      <div className="flex items-center gap-2">
        <Heart className="w-8 h-8 text-rose-500" />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Moments Program</h1>
      </div>
    </header>
  );
}