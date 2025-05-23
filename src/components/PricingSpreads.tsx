import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChevronDown, ChevronUp, Banknote, Gem } from 'lucide-react';
const PricingSpreads: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const toggleItem = (key: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  const currencyPricing = [{
    pair: 'EUR/USD',
    spread: '0.2 pips',
    commission: 'None',
    leverage: 'Up to 1:500',
    swap: {
      long: '-1.2',
      short: '0.5'
    }
  }, {
    pair: 'GBP/USD',
    spread: '0.3 pips',
    commission: 'None',
    leverage: 'Up to 1:400',
    swap: {
      long: '-1.5',
      short: '0.6'
    }
  }, {
    pair: 'USD/JPY',
    spread: '0.4 pips',
    commission: 'None',
    leverage: 'Up to 1:400',
    swap: {
      long: '-1.3',
      short: '0.4'
    }
  }, {
    pair: 'USD/CHF',
    spread: '0.5 pips',
    commission: 'None',
    leverage: 'Up to 1:300',
    swap: {
      long: '-1.2',
      short: '0.5'
    }
  }];
  const commodityPricing = [{
    asset: 'XAU/USD (Gold)',
    spread: '20 pips',
    commission: 'None',
    leverage: 'Up to 1:200',
    swap: {
      long: '-3.2',
      short: '1.5'
    }
  }, {
    asset: 'XAG/USD (Silver)',
    spread: '3 pips',
    commission: 'None',
    leverage: 'Up to 1:100',
    swap: {
      long: '-2.5',
      short: '1.2'
    }
  }, {
    asset: 'WTI/USD (Crude Oil)',
    spread: '4 pips',
    commission: 'None',
    leverage: 'Up to 1:100',
    swap: {
      long: '-4.3',
      short: '1.4'
    }
  }];

  // No spreads currency pairs
  const noSpreadsCurrencyPairs = [{
    pair: 'EUR/USD',
    spread: 'No spreads'
  }, {
    pair: 'JPY/USD',
    spread: 'No spreads'
  }, {
    pair: 'GBP/USD',
    spread: 'No spreads'
  }];
  return <section id="pricing-spreads" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-fluxfx-50 filter blur-3xl opacity-60 z-0"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center font-medium rounded-full bg-fluxfx-100 text-fluxfx-800 mb-4 px-[16px] py-[8px] text-xl">
            Transparent Pricing
          </span>
          <h2 className="heading-lg mb-4">Pricing & Spreads</h2>
          <p className="paragraph max-w-2xl mx-auto">
            Enjoy competitive spreads and transparent fee structure across all trading instruments. No hidden fees or surprises.
          </p>
        </div>

        <div className="mb-10 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-2">Standard Fees</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
              <div className="flex items-center mb-4">
                <Banknote className="w-6 h-6 text-fluxfx-600 mr-3" />
                <h4 className="text-lg font-semibold">Currency Pairs</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-center text-sm">
                  <span className="text-slate-700">Open Fee:</span>
                  <span className="font-medium text-fluxfx-800">0.01%</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-slate-700">Close Fee:</span>
                  <span className="font-medium text-fluxfx-800">0.03%</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-slate-700">Overnight Funding:</span>
                  <span className="font-medium text-fluxfx-800">Varies by pair</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
              <div className="flex items-center mb-4">
                <Gem className="w-6 h-6 text-fluxfx-600 mr-3" />
                <h4 className="text-lg font-semibold">Commodities</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-center text-sm">
                  <span className="text-slate-700">Open Fee:</span>
                  <span className="font-medium text-fluxfx-800">0.08%</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-slate-700">Close Fee:</span>
                  <span className="font-medium text-fluxfx-800">0.08%</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-slate-700">Overnight Funding:</span>
                  <span className="font-medium text-fluxfx-800">Varies by asset</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 max-w-2xl mx-auto">
          </p>
          <a href="#" className="inline-block mt-6 text-fluxfx-600 hover:text-fluxfx-700 font-medium">
            View Complete Fee Schedule
          </a>
        </div>
        
        {/* New Spreads Table */}
        <div className="mt-10 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-center">Spreads</h3>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Currency Pair</TableHead>
                  <TableHead>Spread</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {noSpreadsCurrencyPairs.map(pair => <TableRow key={pair.pair}>
                    <TableCell className="font-medium">{pair.pair}</TableCell>
                    <TableCell className="text-fluxfx-600 font-semibold">{pair.spread}</TableCell>
                  </TableRow>)}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>;
};
export default PricingSpreads;