
import React, { useEffect, useRef } from 'react';
import { Smartphone, Monitor, Tablet, Laptop } from 'lucide-react';

const Platforms: React.FC = () => {
  const deviceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!deviceRef.current) return;
      
      const rect = deviceRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isVisible) {
        const scrollPercent = 1 - (rect.top / window.innerHeight);
        const rotateY = Math.min(scrollPercent * 10, 5);
        
        deviceRef.current.style.transform = `perspective(1000px) rotateY(${rotateY}deg)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="platforms" className="section-padding bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-full h-full bg-grid"></div>
      </div>
      
      <div className="absolute top-40 left-20 w-64 h-64 rounded-full bg-fluxfx-700/20 filter blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-64 h-64 rounded-full bg-fluxfx-500/20 filter blur-3xl"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-fluxfx-800 text-fluxfx-100 mb-4">
            Trade Anywhere
          </span>
          <h2 className="heading-lg mb-4 text-white">Mobile & Web Accessibility</h2>
          <p className="paragraph max-w-2xl mx-auto text-slate-300">
            Access Flux FX from any device through our responsive web application and dedicated mobile apps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800 transition-all">
                <div className="rounded-full p-3 w-12 h-12 flex items-center justify-center bg-fluxfx-900 text-fluxfx-400 mb-4">
                  <Smartphone className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Mobile App</h3>
                <p className="text-sm text-slate-400">
                  Execute trades on the go with our feature-rich mobile applications for iOS and Android.
                </p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800 transition-all">
                <div className="rounded-full p-3 w-12 h-12 flex items-center justify-center bg-fluxfx-900 text-fluxfx-400 mb-4">
                  <Monitor className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Web Platform</h3>
                <p className="text-sm text-slate-400">
                  Access advanced charting tools and full trading functionality through our web application.
                </p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800 transition-all">
                <div className="rounded-full p-3 w-12 h-12 flex items-center justify-center bg-fluxfx-900 text-fluxfx-400 mb-4">
                  <Tablet className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Tablet Optimized</h3>
                <p className="text-sm text-slate-400">
                  Enjoy an optimized trading experience on tablet devices with touch-friendly interfaces.
                </p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800 transition-all">
                <div className="rounded-full p-3 w-12 h-12 flex items-center justify-center bg-fluxfx-900 text-fluxfx-400 mb-4">
                  <Laptop className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Desktop Trading</h3>
                <p className="text-sm text-slate-400">
                  Experience the full power of Flux FX with our desktop application for serious traders.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="heading-sm mb-4">Available Platforms</h3>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="inline-flex items-center justify-center rounded-md bg-slate-800 px-6 py-3 text-base font-medium text-white hover:bg-slate-700 transition-all duration-200">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.24 3.51 7.59 8.42 7.31c1.33.07 2.25.8 3.06.84.82.04 2.05-.65 3.47-.55 2.09.18 3.65 1.21 4.62 3.25-4.06 2.46-3.38 8.17.48 9.43-.88 1.96-2.02 3.04-3 4zm-1.84-17.3c-1.41 1.58-1.19 4.06-.03 5.28 1.26-1.4 1.19-3.92-.03-5.28z"/>
                  </svg>
                  iOS App
                </a>
                <a href="#" className="inline-flex items-center justify-center rounded-md bg-slate-800 px-6 py-3 text-base font-medium text-white hover:bg-slate-700 transition-all duration-200">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 3h18v18H3V3m12.71 7.28l-8-8h-.82L9.82 8l-5 5 5 5 1.93 5.72h.82l-8-8 8-5.72m-.89 1.13L7.73 13l6.37 6.43.56.57h.34l1.5-2.28.4-.61c.36-.54.5-.92.5-1.68 0-.96-.32-1.31-.73-1.76-.3-.33-.55-.67-.55-1.24 0-.57.25-.91.54-1.23.43-.44.75-.8.75-1.76 0-.76-.14-1.14-.5-1.69l-.4-.61-1.5-2.28h-.34l-.55.57z"/>
                  </svg>
                  Android App
                </a>
                <a href="#" className="inline-flex items-center justify-center rounded-md bg-slate-800 px-6 py-3 text-base font-medium text-white hover:bg-slate-700 transition-all duration-200">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 3v18h18V3H3m15 15H6V6h12v12z"/>
                  </svg>
                  Web Platform
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2" ref={deviceRef}>
            <div className="relative max-w-sm mx-auto">
              {/* Phone mockup */}
              <div className="relative w-64 h-[500px] mx-auto">
                <div className="absolute inset-0 rounded-[36px] bg-black border-[14px] border-black z-10 overflow-hidden shadow-2xl">
                  {/* Screen content */}
                  <div className="relative w-full h-full bg-fluxfx-900 overflow-hidden">
                    {/* Status bar */}
                    <div className="h-6 bg-black/80 flex justify-between items-center px-4">
                      <div className="text-white text-[10px]">9:41</div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-white/80"></div>
                        <div className="w-2 h-2 rounded-full bg-white/80"></div>
                        <div className="w-2 h-2 rounded-full bg-white/80"></div>
                      </div>
                    </div>
                    
                    {/* App header */}
                    <div className="bg-fluxfx-800 p-3 flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="text-xl font-bold text-white">Flux</span>
                        <span className="text-xl font-bold text-fluxfx-400">FX</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-5 w-5 rounded-full bg-fluxfx-700"></div>
                        <div className="h-5 w-5 rounded-full bg-fluxfx-700"></div>
                      </div>
                    </div>
                    
                    {/* Chart area */}
                    <div className="p-2 bg-black/20">
                      <div className="bg-fluxfx-800 rounded-md p-2">
                        <div className="flex justify-between items-center mb-2">
                          <div>
                            <div className="text-xs text-fluxfx-300">EUR/USD</div>
                            <div className="text-base font-bold text-white">1.0956</div>
                          </div>
                          <div className="flex items-center">
                            <div className="text-xs px-1.5 py-0.5 rounded bg-green-500/20 text-green-500">+0.05%</div>
                          </div>
                        </div>
                        
                        {/* Simulated chart */}
                        <div className="h-28 w-full relative overflow-hidden">
                          <svg className="w-full h-full" viewBox="0 0 100 40">
                            <path
                              d="M0,20 L5,23 L10,21 L15,24 L20,19 L25,18 L30,22 L35,25 L40,23 L45,26 L50,24 L55,29 L60,27 L65,28 L70,26 L75,25 L80,28 L85,27 L90,24 L95,21 L100,20"
                              fill="none"
                              stroke="#3f87ff"
                              strokeWidth="1.5"
                            />
                            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#3f87ff" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="#3f87ff" stopOpacity="0" />
                            </linearGradient>
                            <path
                              d="M0,20 L5,23 L10,21 L15,24 L20,19 L25,18 L30,22 L35,25 L40,23 L45,26 L50,24 L55,29 L60,27 L65,28 L70,26 L75,25 L80,28 L85,27 L90,24 L95,21 L100,20 V40 H0 Z"
                              fill="url(#chartGradient)"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Trade controls */}
                    <div className="p-3">
                      <div className="flex justify-between gap-2 mb-3">
                        <div className="basis-1/2 bg-fluxfx-700 rounded-md p-2">
                          <div className="text-xs text-fluxfx-300">Buy Price</div>
                          <div className="text-base font-bold text-white">1.0957</div>
                        </div>
                        <div className="basis-1/2 bg-fluxfx-700 rounded-md p-2">
                          <div className="text-xs text-fluxfx-300">Sell Price</div>
                          <div className="text-base font-bold text-white">1.0955</div>
                        </div>
                      </div>
                      
                      <div className="bg-fluxfx-700 rounded-md p-3 mb-3">
                        <div className="flex justify-between items-center mb-2">
                          <div className="text-xs text-fluxfx-300">Amount (Lots)</div>
                          <div className="text-xs font-medium text-white bg-fluxfx-600 px-2 py-0.5 rounded">0.10</div>
                        </div>
                        <div className="w-full h-1.5 bg-fluxfx-800 rounded-full overflow-hidden">
                          <div className="w-1/3 h-full bg-fluxfx-400 rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between gap-2 mb-3">
                        <button className="flex-1 bg-green-600 text-white py-2 rounded-md text-sm font-medium">BUY</button>
                        <button className="flex-1 bg-red-600 text-white py-2 rounded-md text-sm font-medium">SELL</button>
                      </div>
                    </div>
                    
                    {/* Bottom nav */}
                    <div className="absolute bottom-0 left-0 right-0 bg-fluxfx-800 px-2 py-3 flex justify-around items-center">
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 rounded-full bg-fluxfx-600"></div>
                        <div className="text-[8px] mt-1 text-white">Trade</div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 rounded-full bg-fluxfx-700"></div>
                        <div className="text-[8px] mt-1 text-fluxfx-400">Portfolio</div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 rounded-full bg-fluxfx-700"></div>
                        <div className="text-[8px] mt-1 text-fluxfx-400">Markets</div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 rounded-full bg-fluxfx-700"></div>
                        <div className="text-[8px] mt-1 text-fluxfx-400">Account</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-5 bg-black rounded-b-2xl z-20"></div>
                
                {/* Reflections */}
                <div className="absolute top-[14px] bottom-[14px] left-[14px] w-[1px] bg-white/10 z-20"></div>
                <div className="absolute top-[14px] right-[14px] w-[1px] h-12 bg-white/10 z-20"></div>
              </div>
              
              {/* Shadow */}
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-40 h-10 bg-black/30 filter blur-xl rounded-full z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platforms;
