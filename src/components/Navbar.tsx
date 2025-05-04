
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'py-2 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm' 
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container-padding mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-fluxfx-600">Flux</span>
              <span className="text-2xl font-bold">FX</span>
            </a>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#trading-assets" className="text-sm font-medium hover:text-fluxfx-600 transition-colors">
              Trading Assets
            </a>
            <a href="#pricing-spreads" className="text-sm font-medium hover:text-fluxfx-600 transition-colors">
              Pricing & Spreads
            </a>
            <a href="#trading-engine" className="text-sm font-medium hover:text-fluxfx-600 transition-colors">
              Trading Engine
            </a>
            <a href="#benefits" className="text-sm font-medium hover:text-fluxfx-600 transition-colors">
              Benefits
            </a>
            <a href="#security" className="text-sm font-medium hover:text-fluxfx-600 transition-colors">
              Security
            </a>
            <a href="#platforms" className="text-sm font-medium hover:text-fluxfx-600 transition-colors">
              Platforms
            </a>
            <a href="#community" className="text-sm font-medium hover:text-fluxfx-600 transition-colors">
              Community
            </a>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="#" className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-fluxfx-600 shadow-sm border border-fluxfx-200 hover:bg-fluxfx-50 focus:outline-none focus:ring-2 focus:ring-fluxfx-500 focus:ring-offset-2 transition-all duration-200">
              Login
            </a>
            <a href="#" className="inline-flex items-center justify-center rounded-md bg-fluxfx-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-fluxfx-700 focus:outline-none focus:ring-2 focus:ring-fluxfx-500 focus:ring-offset-2 transition-all duration-200">
              Start Trading
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-fluxfx-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-950 shadow-xl border-b border-slate-200 dark:border-slate-800 animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <a href="#trading-assets" className="block py-2 text-base font-medium hover:text-fluxfx-600" onClick={() => setIsMenuOpen(false)}>
              Trading Assets
            </a>
            <a href="#pricing-spreads" className="block py-2 text-base font-medium hover:text-fluxfx-600" onClick={() => setIsMenuOpen(false)}>
              Pricing & Spreads
            </a>
            <a href="#trading-engine" className="block py-2 text-base font-medium hover:text-fluxfx-600" onClick={() => setIsMenuOpen(false)}>
              Trading Engine
            </a>
            <a href="#benefits" className="block py-2 text-base font-medium hover:text-fluxfx-600" onClick={() => setIsMenuOpen(false)}>
              Benefits
            </a>
            <a href="#security" className="block py-2 text-base font-medium hover:text-fluxfx-600" onClick={() => setIsMenuOpen(false)}>
              Security
            </a>
            <a href="#platforms" className="block py-2 text-base font-medium hover:text-fluxfx-600" onClick={() => setIsMenuOpen(false)}>
              Platforms
            </a>
            <a href="#community" className="block py-2 text-base font-medium hover:text-fluxfx-600" onClick={() => setIsMenuOpen(false)}>
              Community
            </a>
            <div className="pt-4 space-y-3">
              <a href="#" className="block w-full text-center rounded-md bg-white py-2 text-base font-medium text-fluxfx-600 shadow-sm border border-fluxfx-200 hover:bg-fluxfx-50">
                Login
              </a>
              <a href="#" className="block w-full text-center rounded-md bg-fluxfx-600 py-2 text-base font-medium text-white shadow-sm hover:bg-fluxfx-700">
                Start Trading
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
