import React from 'react';
import { RefreshCw, DollarSign, Euro, PoundSterling, JapaneseYen, TrendingUp, Droplet, Gem, Bitcoin } from 'lucide-react';
import PriceTicker from './PriceTicker';
import { AspectRatio } from '@/components/ui/aspect-ratio';
const forexPairs = [{
  name: 'EUR/USD',
  description: 'Euro / US Dollar',
  icon: <Euro className="w-8 h-8 text-fluxfx-600" />
}, {
  name: 'GBP/USD',
  description: 'British Pound / US Dollar',
  icon: <PoundSterling className="w-8 h-8 text-fluxfx-600" />
}, {
  name: 'USD/JPY',
  description: 'US Dollar / Japanese Yen',
  icon: <JapaneseYen className="w-8 h-8 text-fluxfx-600" />
}, {
  name: 'USD/CHF',
  description: 'US Dollar / Swiss Franc',
  icon: <DollarSign className="w-8 h-8 text-fluxfx-600" />
}, {
  name: 'AUD/USD',
  description: 'Australian Dollar / US Dollar',
  icon: <DollarSign className="w-8 h-8 text-fluxfx-600" />
}, {
  name: 'USD/CAD',
  description: 'US Dollar / Canadian Dollar',
  icon: <DollarSign className="w-8 h-8 text-fluxfx-600" />
}, {
  name: 'NZD/USD',
  description: 'New Zealand Dollar / US Dollar',
  icon: <DollarSign className="w-8 h-8 text-fluxfx-600" />
}, {
  name: 'USD/SEK',
  description: 'US Dollar / Swedish Krona',
  icon: <DollarSign className="w-8 h-8 text-fluxfx-600" />
}];
const commodities = [{
  name: 'XAU/USD',
  description: 'Gold / US Dollar',
  icon: <Gem className="w-8 h-8 text-fluxfx-600" />
}, {
  name: 'XAG/USD',
  description: 'Silver / US Dollar',
  icon: <Bitcoin className="w-8 h-8 text-fluxfx-600" />
}, {
  name: 'WTI/USD',
  description: 'Crude Oil WTI / US Dollar',
  icon: <Droplet className="w-8 h-8 text-fluxfx-600" />
}];
const TradingAssets: React.FC = () => {
  return <section id="trading-assets" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Subtle trading-related background imagery */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-64 opacity-5 z-0 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1500&auto=format&fit=crop" alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="absolute bottom-0 left-0 w-full md:w-1/3 h-64 opacity-5 z-0 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1590283603385-c1e84fe52760?q=80&w=1500&auto=format&fit=crop" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Trading Assets</h2>
          <p className="paragraph max-w-2xl mx-auto">
            Trade a wide range of forex pairs and commodities with competitive spreads and deep liquidity.
          </p>
        </div>

        {/* Price Ticker placed above Forex Pairs section */}
        <div className="mb-12">
          <PriceTicker />
        </div>

        <div className="grid gap-12 md:gap-16">
          <div>
            <div className="flex items-center mb-8">
              <RefreshCw className="w-6 h-6 text-fluxfx-600 mr-3" />
              <h3 className="heading-md">Forex Pairs</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {forexPairs.map((pair, index) => <div key={pair.name} className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl relative overflow-hidden">
                  <div className="absolute -right-12 -bottom-12 w-32 h-32 opacity-5 z-0">
                    <div className="w-full h-full bg-fluxfx-600 rounded-full"></div>
                  </div>
                  <div className="flex items-center mb-4 relative z-10">
                    {pair.icon}
                    <div className="ml-4">
                      <h4 className="font-bold text-lg">{pair.name}</h4>
                      <p className="text-sm text-muted-foreground">{pair.description}</p>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-8">
              <TrendingUp className="w-6 h-6 text-fluxfx-600 mr-3" />
              <h3 className="heading-md">Commodities</h3>
            </div>
            
            <div className="lg:flex lg:items-stretch gap-8 mb-12">
              <div className="lg:w-1/3 mb-8 lg:mb-0">
                <div className="glass-card rounded-xl h-full overflow-hidden shadow-md">
                  
                  
                </div>
              </div>
              
              <div className="lg:w-2/3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {commodities.map((commodity, index) => <div key={commodity.name} className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl relative overflow-hidden">
                      <div className="absolute -right-12 -bottom-12 w-32 h-32 opacity-5 z-0">
                        <div className="w-full h-full bg-fluxfx-600 rounded-full"></div>
                      </div>
                      <div className="flex items-center mb-4 relative z-10">
                        {commodity.icon}
                        <div className="ml-4">
                          <h4 className="font-bold text-lg">{commodity.name}</h4>
                          <p className="text-sm text-muted-foreground">{commodity.description}</p>
                        </div>
                      </div>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default TradingAssets;