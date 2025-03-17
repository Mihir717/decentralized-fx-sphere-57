
import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface Price {
  symbol: string;
  price: string;
  change: number;
}

const initialPrices: Price[] = [
  { symbol: 'EUR/USD', price: '1.0956', change: 0.05 },
  { symbol: 'GBP/USD', price: '1.2701', change: -0.12 },
  { symbol: 'USD/JPY', price: '156.34', change: 0.21 },
  { symbol: 'USD/CHF', price: '0.9042', change: -0.08 },
  { symbol: 'AUD/USD', price: '0.6601', change: 0.15 },
  { symbol: 'USD/CAD', price: '1.3642', change: -0.03 },
  { symbol: 'NZD/USD', price: '0.5981', change: 0.07 },
  { symbol: 'XAU/USD', price: '2322.45', change: 0.42 },
  { symbol: 'XAG/USD', price: '27.35', change: -0.18 },
  { symbol: 'WTI/USD', price: '78.26', change: 0.33 },
  { symbol: 'BRENT/USD', price: '82.64', change: 0.22 },
];

const PriceTicker: React.FC = () => {
  const [prices, setPrices] = useState<Price[]>(initialPrices);

  // Simulate price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prevPrices => 
        prevPrices.map(price => {
          // Random price fluctuation
          const fluctuation = (Math.random() - 0.5) * 0.2;
          const newPrice = parseFloat(price.price) + fluctuation;
          return {
            ...price,
            price: newPrice.toFixed(newPrice >= 100 ? 2 : 4),
            change: parseFloat((price.change + fluctuation / 10).toFixed(2))
          };
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-fluxfx-800 shadow-md">
      <div className="relative flex py-2">
        <div className="flex animate-ticker whitespace-nowrap">
          {prices.map((item, index) => (
            <div key={`${item.symbol}-${index}`} className="flex items-center px-4 border-r border-fluxfx-700 last:border-0">
              <span className="mr-2 text-sm font-medium text-white">{item.symbol}</span>
              <span className="text-sm font-bold text-white">{item.price}</span>
              <span className={`flex items-center ml-2 text-xs font-medium ${item.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {item.change >= 0 ? (
                  <ArrowUp className="w-3 h-3 mr-0.5" />
                ) : (
                  <ArrowDown className="w-3 h-3 mr-0.5" />
                )}
                {Math.abs(item.change).toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
        <div className="flex animate-ticker whitespace-nowrap" aria-hidden="true">
          {prices.map((item, index) => (
            <div key={`${item.symbol}-duplicate-${index}`} className="flex items-center px-4 border-r border-fluxfx-700 last:border-0">
              <span className="mr-2 text-sm font-medium text-white">{item.symbol}</span>
              <span className="text-sm font-bold text-white">{item.price}</span>
              <span className={`flex items-center ml-2 text-xs font-medium ${item.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {item.change >= 0 ? (
                  <ArrowUp className="w-3 h-3 mr-0.5" />
                ) : (
                  <ArrowDown className="w-3 h-3 mr-0.5" />
                )}
                {Math.abs(item.change).toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceTicker;
