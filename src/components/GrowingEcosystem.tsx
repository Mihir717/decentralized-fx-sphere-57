import React from 'react';
import { TrendingUp, BarChart3 } from 'lucide-react';
const GrowingEcosystem: React.FC = () => {
  return <section className="py-16 bg-gradient-to-br from-fluxfx-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-fluxfx-100 filter blur-3xl opacity-40 z-0"></div>
      
      <div className="w-full max-w-7xl mx-auto container-padding relative z-10">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4 text-fluxfx-800">Our Growing Ecosystem</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="glass-card rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-fluxfx-100 p-4">
                <TrendingUp className="h-8 w-8 text-fluxfx-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-fluxfx-800">Total Traded Volume</h3>
            <p className="text-3xl font-bold text-fluxfx-600">$7 Billion +</p>
          </div>
          
          <div className="glass-card rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-fluxfx-100 p-4">
                <BarChart3 className="h-8 w-8 text-fluxfx-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-fluxfx-800">Total Trades</h3>
            <p className="text-3xl font-bold text-fluxfx-600">1.3 Million + </p>
          </div>
        </div>
      </div>
    </section>;
};
export default GrowingEcosystem;