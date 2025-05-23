import React, { useState } from 'react';
import { Network, DatabaseZap, Maximize, Lock, RefreshCw, ShieldCheck } from 'lucide-react';
const DecentralizedEngine: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [{
    title: 'Liquidity Provider Model',
    icon: <Network className="w-5 h-5" />,
    description: 'Connect to deep institutional liquidity pools. Trades are executed through a network of global liquidity providers, ensuring optimal execution prices.',
    benefits: ['Reduced slippage', 'Deep market access', 'Competitive pricing']
  }, {
    title: 'Smart Contract Security',
    icon: <Lock className="w-5 h-5" />,
    description: 'All trades are executed through secure smart contracts that automatically enforce the terms and conditions of each trade, guaranteeing fair execution.',
    benefits: ['Immutable transaction records', 'Tamper-proof execution', 'Automated settlement']
  }, {
    title: 'Decentralized Order Book',
    icon: <DatabaseZap className="w-5 h-5" />,
    description: 'Our decentralized order book ensures all orders are visible and accessible to all participants, creating a fair and transparent market.',
    benefits: ['Full market visibility', 'Fair price discovery', 'Resistant to manipulation']
  }, {
    title: 'Non-Custodial Trading',
    icon: <ShieldCheck className="w-5 h-5" />,
    description: 'Maintain complete control of your assets at all times. Your funds never leave your wallet until a trade is executed, eliminating counterparty risk.',
    benefits: ['Full asset control', 'No custodial risk', 'Direct withdrawals']
  }];
  return <section id="trading-engine" className="section-padding relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-fluxfx-100 filter blur-3xl opacity-60 z-0"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Increased size of the category button */}
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-fluxfx-100 text-fluxfx-800 mb-4 font-medium text-xl">
              Innovative Technology
            </span>
            <h2 className="heading-lg mb-6">Decentralized Trading Engine</h2>
            <p className="paragraph mb-8">
              Our revolutionary decentralized trading engine removes intermediaries, reduces costs, and increases transparency. Trade with confidence knowing your assets remain in your control until execution.
            </p>

            <div className="space-y-6">
              <div className="flex overflow-x-auto scrollbar-hide space-x-2 pb-2">
                {tabs.map((tab, index) => <button key={index} onClick={() => setActiveTab(index)} className={`flex items-center px-4 py-2 rounded-lg whitespace-nowrap transition-all ${activeTab === index ? 'bg-fluxfx-600 text-white shadow-md' : 'bg-white text-slate-600 hover:bg-fluxfx-50 border border-slate-200'}`}>
                    {tab.icon}
                    <span className="ml-2 text-sm font-medium">{tab.title}</span>
                  </button>)}
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  {tabs[activeTab].icon}
                  <span className="ml-2">{tabs[activeTab].title}</span>
                </h3>
                <p className="text-slate-600 mb-6">{tabs[activeTab].description}</p>
                <div className="space-y-3">
                  {tabs[activeTab].benefits.map((benefit, index) => <div key={index} className="flex items-center">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-slate-600">{benefit}</span>
                    </div>)}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-105 duration-700">
              {/* Trading Interface Mockup */}
              <div className="bg-fluxfx-900 text-white p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xs opacity-70">Flux FX</span>
                    <h4 className="text-lg font-bold">EUR/USD</h4>
                  </div>
                  <div className="text-right">
                    <span className="text-xs opacity-70">Price</span>
                    <p className="text-lg font-bold">1.0956</p>
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-slate-50 rounded-lg p-3">
                    <span className="text-xs text-slate-500">Buy Price</span>
                    <p className="text-lg font-semibold text-green-600">1.0957</p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <span className="text-xs text-slate-500">Sell Price</span>
                    <p className="text-lg font-semibold text-red-600">1.0955</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Amount (Lots)</label>
                  <input type="number" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-fluxfx-500 focus:ring-fluxfx-500 p-2 border" defaultValue="0.10" />
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Stop Loss</label>
                    <input type="number" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-fluxfx-500 focus:ring-fluxfx-500 p-2 border" defaultValue="1.0930" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Take Profit</label>
                    <input type="number" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-fluxfx-500 focus:ring-fluxfx-500 p-2 border" defaultValue="1.0990" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <button className="py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors">
                    Buy / Long
                  </button>
                  <button className="py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors">
                    Sell / Short
                  </button>
                </div>
              </div>
              
              <div className="bg-slate-50 p-4 border-t">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Spread:</span>
                  <span className="font-medium">0.2 pips</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Margin Required:</span>
                  <span className="font-medium">$109.56</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-fluxfx-100 rounded-full filter blur-3xl opacity-60"></div>
            <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-fluxfx-50 rounded-full filter blur-3xl opacity-60"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default DecentralizedEngine;