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
    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
      Create Lasting Memories with the Moments Program
    </h2>
    <h3 className="text-xl md:text-2xl text-gray-700 mb-6">
      Empowering Twin Falls Through Shared Experiences
    </h3>
    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
      Join us in strengthening the Twin Falls community by funding $100 experiences that support local businesses and create cherished memories. Here’s how your contribution makes an impact:
    </p>
    <ul className="list-disc list-inside text-left text-lg md:text-xl text-gray-700 mb-6">
      <li><strong>Boosts the Local Economy:</strong> Every dollar donated is spent at local businesses, keeping funds circulating within the community.</li>
      <li><strong>Builds Community Bonds:</strong> Your contribution helps create experiences that foster meaningful connections and shared stories.</li>
      <li><strong>Strengthens Your Presence:</strong> Showcase your business as a committed supporter of the community’s growth and spirit.</li>
    </ul>
    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
      <strong>Trusted and Transparent Management:</strong> All donations are handled through a trusted local nonprofit, ensuring accountability and transparency. See your support translate into real moments that matter to the people of Twin Falls.
    </p>
    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-6 font-semibold">
      Join us in creating moments that make a difference. Your support is the heartbeat of a stronger, more connected community.
    </p>
  </div>
</section>

      <ImageCarousel />

     {/* Donation Section */}
<section className="container mx-auto px-4 py-12 text-center">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Support the Twin Falls Community</h2>
  <a 
    href="/moments.pdf" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-block bg-rose-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-rose-600 transform transition hover:-translate-y-1 duration-300"
  >
    Donate Now
  </a>
</section>

<SponsorLeaderboard />
</div>
);
}

export default App;
