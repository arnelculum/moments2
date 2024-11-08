import React, { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1521336993297-77c011d4b4c7?auto=format&fit=crop&q=80&w=800'
];

export function ImageCarousel() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, []);

  const prevImage = useCallback(() => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="relative max-w-3xl mx-auto">
        <div className="aspect-[16/9] overflow-hidden rounded-xl shadow-lg">
          <img 
            src={images[currentImage]} 
            alt="Community moments" 
            className="w-full h-full object-cover transition-transform duration-500"
          />
        </div>
        <button 
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}