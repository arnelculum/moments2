import React from 'react';
import { Youtube } from 'lucide-react';

export function VideoSection() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="aspect-video w-full max-w-3xl mx-auto bg-gray-100 rounded-xl overflow-hidden shadow-lg">
        <div className="w-full h-full flex items-center justify-center bg-gray-800">
          <Youtube className="w-16 h-16 text-gray-400" />
        </div>
      </div>
    </section>
  );
}