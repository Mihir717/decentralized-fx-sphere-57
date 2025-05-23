import React from 'react';
import { BanknoteIcon, TimerIcon, ShieldCheckIcon, CoinsIcon, SearchIcon, WalletIcon, LockIcon, GlobeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isHighlighted?: boolean;
}
const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  title,
  description,
  isHighlighted = false
}) => <Card className={`h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${isHighlighted ? 'bg-gradient-to-br from-fluxfx-500/10 to-fluxfx-600/5 shadow-md border-fluxfx-100' : 'bg-white shadow border-slate-100'}`}>
    <CardContent className="p-6">
      <div className={`rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4 ${isHighlighted ? 'bg-fluxfx-600 text-white' : 'bg-fluxfx-100 text-fluxfx-600'}`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </CardContent>
  </Card>;
const KeyBenefits: React.FC = () => {
  const benefits = [{
    icon: <BanknoteIcon className="h-6 w-6" />,
    title: "Low Spreads",
    description: "Trade with some of the tightest spreads in the industry, starting from just 0.2 pips on major pairs.",
    isHighlighted: true
  }, {
    icon: <TimerIcon className="h-6 w-6" />,
    title: "Instant Withdrawals",
    description: "Access your funds instantly with no delays or waiting periods. Full control when you need it.",
    isHighlighted: true
  }, {
    icon: <ShieldCheckIcon className="h-6 w-6" />,
    title: "No KYC Required",
    description: "Start trading immediately without lengthy verification processes. Your privacy is respected.",
    isHighlighted: true
  }, {
    icon: <CoinsIcon className="h-6 w-6" />,
    title: "Full Asset Ownership",
    description: "Maintain complete ownership of your assets at all times with our non-custodial platform.",
    isHighlighted: true
  }, {
    icon: <SearchIcon className="h-6 w-6" />,
    title: "Transparent Execution",
    description: "All trades are executed on-chain with complete transparency and verifiability."
  }, {
    icon: <WalletIcon className="h-6 w-6" />,
    title: "Web3 Wallet Integration",
    description: "Seamlessly connect with popular Web3 wallets like MetaMask and WalletConnect."
  }, {
    icon: <LockIcon className="h-6 w-6" />,
    title: "Secure Smart Contracts",
    description: "Trade with confidence knowing transactions are secured by audited smart contracts."
  }, {
    icon: <GlobeIcon className="h-6 w-6" />,
    title: "Global Accessibility",
    description: "Access the platform from anywhere in the world, 24/7, without restrictions."
  }];

  // Group benefits into categories for tabs
  const primaryBenefits = benefits.filter(benefit => benefit.isHighlighted);
  const secondaryBenefits = benefits.filter(benefit => !benefit.isHighlighted);
  const handleSeeAllFeaturesClick = () => {
    const allTabTrigger = document.querySelector('[data-value="all"]') as HTMLElement;
    if (allTabTrigger) {
      allTabTrigger.click();
    }
  };
  return <section id="benefits" className="section-padding relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
      {/* Decorative elements for Robinhood-inspired look */}
      <div className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-fluxfx-100/40 blur-3xl" />
      <div className="absolute -bottom-40 left-0 w-96 h-96 rounded-full bg-fluxfx-100/40 blur-3xl" />
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-slate-100/80 to-transparent pointer-events-none" />
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center font-medium rounded-full bg-fluxfx-100 text-fluxfx-800 mb-6 shadow-sm text-xl px-[16px] py-[8px]">
            Why Choose Flux FX
          </span>
          <h2 className="heading-lg mb-5 text-fluxfx-900">Key Benefits</h2>
          <p className="paragraph max-w-2xl mx-auto">
            Our decentralized trading platform offers unmatched advantages for FX traders seeking sovereignty and superior trading conditions.
          </p>
        </div>

        <Tabs defaultValue="primary" className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="grid grid-cols-2 w-full max-w-md bg-slate-100/70 p-1 rounded-full">
              <TabsTrigger value="primary" className="text-base rounded-full px-8 py-2.5 data-[state=active]:bg-white data-[state=active]:shadow">Primary Benefits</TabsTrigger>
              <TabsTrigger value="all" className="text-base rounded-full px-8 py-2.5 data-[state=active]:bg-white data-[state=active]:shadow">All Features</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="primary" className="mt-0 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {primaryBenefits.map((benefit, index) => <BenefitCard key={index} icon={benefit.icon} title={benefit.title} description={benefit.description} isHighlighted={benefit.isHighlighted} />)}
            </div>
            <div className="flex justify-center">
              <Button variant="outline" className="rounded-full px-8 py-3 border-fluxfx-200 hover:bg-fluxfx-50 text-fluxfx-700 text-base shadow-sm" onClick={handleSeeAllFeaturesClick}>
                See all features
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => <BenefitCard key={index} icon={benefit.icon} title={benefit.title} description={benefit.description} isHighlighted={benefit.isHighlighted} />)}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-20 text-center">
          <Button className="bg-fluxfx-600 hover:bg-fluxfx-700 text-white rounded-full px-10 py-7 text-base font-medium shadow-lg">
            Start Trading Now
          </Button>
        </div>
      </div>
    </section>;
};
export default KeyBenefits;