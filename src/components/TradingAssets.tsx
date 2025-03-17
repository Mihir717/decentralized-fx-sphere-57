
import React from 'react';
import { 
  RefreshCw, 
  DollarSign, 
  Euro, 
  PoundSterling, 
  JapaneseYen, 
  TrendingUp,
  Droplet,
  Gem,
  Bitcoin
} from 'lucide-react';
import PriceTicker from './PriceTicker';

const forexPairs = [
  { name: 'EUR/USD', description: 'Euro / US Dollar', icon: <Euro className="w-8 h-8 text-fluxfx-600" /> },
  { name: 'GBP/USD', description: 'British Pound / US Dollar', icon: <PoundSterling className="w-8 h-8 text-fluxfx-600" /> },
  { name: 'USD/JPY', description: 'US Dollar / Japanese Yen', icon: <JapaneseYen className="w-8 h-8 text-fluxfx-600" /> },
  { name: 'USD/CHF', description: 'US Dollar / Swiss Franc', icon: <DollarSign className="w-8 h-8 text-fluxfx-600" /> },
  { name: 'AUD/USD', description: 'Australian Dollar / US Dollar', icon: <DollarSign className="w-8 h-8 text-fluxfx-600" /> },
  { name: 'USD/CAD', description: 'US Dollar / Canadian Dollar', icon: <DollarSign className="w-8 h-8 text-fluxfx-600" /> },
  { name: 'NZD/USD', description: 'New Zealand Dollar / US Dollar', icon: <DollarSign className="w-8 h-8 text-fluxfx-600" /> },
  { name: 'USD/SEK', description: 'US Dollar / Swedish Krona', icon: <DollarSign className="w-8 h-8 text-fluxfx-600" /> },
];

const commodities = [
  { name: 'XAU/USD', description: 'Gold / US Dollar', icon: <Gem className="w-8 h-8 text-fluxfx-600" /> },
  { name: 'XAG/USD', description: 'Silver / US Dollar', icon: <Bitcoin className="w-8 h-8 text-fluxfx-600" /> },
  { name: 'WTI/USD', description: 'Crude Oil WTI / US Dollar', icon: <Droplet className="w-8 h-8 text-fluxfx-600" /> },
  { name: 'BRENT/USD', description: 'Crude Oil Brent / US Dollar', icon: <Droplet className="w-8 h-8 text-fluxfx-600" /> },
];

const TradingAssets: React.FC = () => {
  return (
    <section id="trading-assets" className="section-padding bg-slate-50">
      <div className="container mx-auto container-padding">
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
              {forexPairs.map((pair, index) => (
                <div 
                  key={pair.name}
                  className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex items-center mb-4">
                    {pair.icon}
                    <div className="ml-4">
                      <h4 className="font-bold text-lg">{pair.name}</h4>
                      <p className="text-sm text-muted-foreground">{pair.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Spread from</span>
                    <span className="font-semibold text-green-600">0.5 pips</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-8">
              <TrendingUp className="w-6 h-6 text-fluxfx-600 mr-3" />
              <h3 className="heading-md">Commodities</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {commodities.map((commodity, index) => (
                <div 
                  key={commodity.name}
                  className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex items-center mb-4">
                    {commodity.icon}
                    <div className="ml-4">
                      <h4 className="font-bold text-lg">{commodity.name}</h4>
                      <p className="text-sm text-muted-foreground">{commodity.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Spread from</span>
                    <span className="font-semibold text-green-600">0.8 pips</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingAssets;
