
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TradingAssets from '@/components/TradingAssets';
import PricingSpreads from '@/components/PricingSpreads';
import GrowingEcosystem from '@/components/GrowingEcosystem';
import DecentralizedEngine from '@/components/DecentralizedEngine';
import KeyBenefits from '@/components/KeyBenefits';
import Security from '@/components/Security';
import Platforms from '@/components/Platforms';
import Community from '@/components/Community';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-fluxfx-900 flex flex-col items-center justify-center z-50">
        <div className="flex items-center mb-8">
          <span className="text-5xl font-bold text-fluxfx-500">Flux</span>
          <span className="text-5xl font-bold text-fluxfx-500">FX</span>
        </div>
        <div className="w-16 h-16 border-4 border-fluxfx-200 border-t-fluxfx-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <TradingAssets />
        <PricingSpreads />
        <GrowingEcosystem />
        <DecentralizedEngine />
        <KeyBenefits />
        <Security />
        <Platforms />
        <Community />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
