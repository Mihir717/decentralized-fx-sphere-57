
import React from 'react';
import { Shield, LockKeyhole, Code, CheckCircle, AlertTriangle } from 'lucide-react';

const Security: React.FC = () => {
  return (
    <section id="security" className="section-padding relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-fluxfx-50/40 to-transparent opacity-60 z-0"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-fluxfx-100 text-fluxfx-800 mb-4">
              Trust & Security
            </span>
            <h2 className="heading-lg mb-6">Uncompromising Security</h2>
            <p className="paragraph mb-8">
              Security is our top priority. Our platform utilizes advanced blockchain technology and audited smart contracts to ensure your funds and trades are protected at all times.
            </p>

            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-fluxfx-100 text-fluxfx-600">
                    <Shield className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium mb-2">Smart Contract Security</h3>
                  <p className="text-muted-foreground">
                    All smart contracts undergo rigorous security audits by leading blockchain security firms before deployment.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-fluxfx-100 text-fluxfx-600">
                    <LockKeyhole className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium mb-2">Non-Custodial Architecture</h3>
                  <p className="text-muted-foreground">
                    Your assets remain in your wallet until trade execution, eliminating custodial risks associated with centralized exchanges.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-fluxfx-100 text-fluxfx-600">
                    <Code className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium mb-2">Open Source Transparency</h3>
                  <p className="text-muted-foreground">
                    Our smart contract code is publicly available for review, ensuring complete transparency and community verification.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
              <div className="bg-fluxfx-900 text-white p-4">
                <h3 className="flex items-center text-lg font-bold">
                  <Shield className="mr-2 h-5 w-5" />
                  Security Dashboard
                </h3>
              </div>
              
              <div className="p-6 space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Smart Contract Status</h4>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Secure</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Protocol Uptime</h4>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">99.99%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '99.99%' }}></div>
                  </div>
                </div>
                
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <h4 className="font-medium mb-3 flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Security Audits
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">CertiK Audit</span>
                      <span className="text-green-600 font-medium">Passed</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Hacken Audit</span>
                      <span className="text-green-600 font-medium">Passed</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">PeckShield Audit</span>
                      <span className="text-green-600 font-medium">Passed</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                  <h4 className="font-medium mb-3 flex items-center text-amber-800">
                    <AlertTriangle className="h-4 w-4 text-amber-600 mr-2" />
                    Security Recommendations
                  </h4>
                  <ul className="space-y-2 text-sm text-amber-700">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Always verify wallet connections before approving transactions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Use hardware wallets for additional security when trading large amounts</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
