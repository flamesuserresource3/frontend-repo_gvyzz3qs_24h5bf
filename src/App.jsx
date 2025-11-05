import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentSections from './components/ContentSections';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-inter">
      <Navbar />
      <Hero />
      <ContentSections />
      <Footer />
    </div>
  );
}
