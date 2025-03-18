
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Wallet, LineChart, ShieldCheck } from 'lucide-react';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      
      const xPos = (clientX - rect.left) / rect.width;
      const yPos = (clientY - rect.top) / rect.height;
      
      const xOffset = (xPos - 0.5) * 20; // max 20px offset
      const yOffset = (yPos - 0.5) * 20; // max 20px offset
      
      heroRef.current.style.setProperty('--x-offset', `${xOffset}px`);
      heroRef.current.style.setProperty('--y-offset', `${yOffset}px`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative pt-24 pb-16 min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        '--x-offset': '0px',
        '--y-offset': '0px',
      } as React.CSSProperties}
    >
      {/* Background grid with parallax effect */}
      <div 
        className="absolute inset-0 bg-grid opacity-30 will-change-transform"
        style={{
          transform: 'translate3d(var(--x-offset), var(--y-offset), 0) scale(1.05)',
        }}
      />
      
      {/* Gradient orb */}
      <div 
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-fluxfx-500/30 filter blur-3xl will-change-transform opacity-60"
        style={{
          transform: 'translate3d(calc(var(--x-offset) * -0.5), calc(var(--y-offset) * -0.5), 0)',
        }}
      />
      
      <div 
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-fluxfx-700/20 filter blur-3xl will-change-transform opacity-60"
        style={{
          transform: 'translate3d(calc(var(--x-offset) * -0.7), calc(var(--y-offset) * -0.7), 0)',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Enhanced FluxFX logo - dark blue */}
          <div className="mb-10 flex items-center justify-center">
            <div className="inline-flex items-center py-3 px-6">
              <span className="text-6xl font-bold text-fluxfx-700 mr-1">Flux</span>
              <span className="text-6xl font-bold text-fluxfx-700">FX</span>
            </div>
          </div>
          
          <span className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full bg-fluxfx-100 text-fluxfx-800 mb-6 animate-fade-in">
            Decentralising the Centralised
          </span>
          
          {/* Adjusted heading with padding to ensure full visibility of letters */}
          <h1 className="heading-xl text-gradient animate-fade-in-up pb-2" style={{animationDelay: '200ms'}}>
            Decentralising the Centralised
          </h1>
          
          <p className="paragraph mt-6 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '400ms'}}>
            Trade Forex & Commodities with complete transparency, security, and no intermediaries. Experience the future of decentralized FX trading
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{animationDelay: '600ms'}}>
            <a href="#" className="btn-primary">
              Start Trading <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#community" className="btn-secondary">
              Join Community
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3 animate-fade-in-up" style={{animationDelay: '800ms'}}>
          <div className="glass-card rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-fluxfx-100 p-3">
                <Wallet className="h-6 w-6 text-fluxfx-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Instant Withdrawals</h3>
            <p className="text-sm text-muted-foreground">No waiting periods - your funds, your control</p>
          </div>
          
          <div className="glass-card rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-fluxfx-100 p-3">
                <LineChart className="h-6 w-6 text-fluxfx-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Real-Time Trading</h3>
            <p className="text-sm text-muted-foreground">Execute trades in real-time with competitive market rates</p>
          </div>
          
          <div className="glass-card rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-fluxfx-100 p-3">
                <ShieldCheck className="h-6 w-6 text-fluxfx-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Security & Transparency</h3>
            <p className="text-sm text-muted-foreground">Smart contracts ensure fair execution and asset security</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
