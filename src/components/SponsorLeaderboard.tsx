import React from 'react';
import { Trophy } from 'lucide-react';

const sponsors = [
  { name: 'TechCorp', amount: 5000, logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200' },
  { name: 'Green Foods', amount: 3500, logo: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=200' },
  { name: 'Local Bank', amount: 2500, logo: 'https://images.unsplash.com/photo-1598425237654-4fc758e50a93?auto=format&fit=crop&q=80&w=200' },
];

export function SponsorLeaderboard() {
  return (
    <section className="container mx-auto px-4 py-12 mb-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 justify-center mb-8">
          <Trophy className="w-8 h-8 text-yellow-500" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Generous Sponsors</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-square w-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img src={sponsor.logo} alt={sponsor.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{sponsor.name}</h3>
              <p className="text-rose-500 font-bold">${sponsor.amount.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}