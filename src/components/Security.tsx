import React from 'react';
import { Shield, LockKeyhole, Code, CheckCircle, AlertTriangle } from 'lucide-react';
const Security: React.FC = () => {
  return <section id="security" className="section-padding relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-fluxfx-50/40 to-transparent opacity-60 z-0"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-3xl mx-auto">
          <span className="inline-flex items-center font-medium rounded-full bg-fluxfx-100 text-fluxfx-800 mb-4 px-[16px] py-[8px] text-xl">
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
      </div>
    </section>;
};
export default Security;