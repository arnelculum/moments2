import React from 'react';
import { Header } from './components/Header';
import { VideoSection } from './components/VideoSection';
import { ImageCarousel } from './components/ImageCarousel';
import { SponsorLeaderboard } from './components/SponsorLeaderboard';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <VideoSection />
      
      {/* Program Description */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            The Moments Program fuels the Twin Falls community by funding $100 experiences that support local businesses and create cherished memories. Every dollar donated circulates back into the community, strengthening local connections and showcasing your business as a vital supporter. Your contribution helps foster shared stories that enrich our community’s spirit, with all funds managed through a trusted local nonprofit for transparency. Join us in building moments that matter.
          </p>
        </div>
      </section>

      <ImageCarousel />

      {/* Donation Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Support the Twin Falls Community</h2>
        <button className="bg-rose-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-rose-600 transform transition hover:-translate-y-1">
          Donate Now
        </button>
      </section>

      <SponsorLeaderboard />
    </div>
  );
}

export default App;
