
import React from 'react';
import { 
  BanknoteIcon,
  TimerIcon,
  ShieldCheckIcon,
  CoinsIcon,
  SearchIcon,
  WalletIcon,
  LockIcon,
  GlobeIcon
} from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, isHighlighted = false }) => (
  <div className={`rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
    isHighlighted 
      ? 'border border-fluxfx-200 bg-gradient-to-br from-white to-fluxfx-50 shadow-lg' 
      : 'glass-card'
  }`}>
    <div className={`rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4 ${
      isHighlighted ? 'bg-fluxfx-600 text-white' : 'bg-fluxfx-100 text-fluxfx-600'
    }`}>
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

const KeyBenefits: React.FC = () => {
  const benefits = [
    {
      icon: <BanknoteIcon className="h-6 w-6" />,
      title: "Low Spreads",
      description: "Trade with some of the tightest spreads in the industry, starting from just 0.2 pips on major pairs.",
      isHighlighted: true
    },
    {
      icon: <TimerIcon className="h-6 w-6" />,
      title: "Instant Withdrawals",
      description: "Access your funds instantly with no delays or waiting periods. Full control when you need it.",
      isHighlighted: true
    },
    {
      icon: <ShieldCheckIcon className="h-6 w-6" />,
      title: "No KYC Required",
      description: "Start trading immediately without lengthy verification processes. Your privacy is respected.",
      isHighlighted: true
    },
    {
      icon: <CoinsIcon className="h-6 w-6" />,
      title: "Full Asset Ownership",
      description: "Maintain complete ownership of your assets at all times with our non-custodial platform.",
      isHighlighted: true
    },
    {
      icon: <SearchIcon className="h-6 w-6" />,
      title: "Transparent Execution",
      description: "All trades are executed on-chain with complete transparency and verifiability."
    },
    {
      icon: <WalletIcon className="h-6 w-6" />,
      title: "Web3 Wallet Integration",
      description: "Seamlessly connect with popular Web3 wallets like MetaMask and WalletConnect."
    },
    {
      icon: <LockIcon className="h-6 w-6" />,
      title: "Secure Smart Contracts",
      description: "Trade with confidence knowing transactions are secured by audited smart contracts."
    },
    {
      icon: <GlobeIcon className="h-6 w-6" />,
      title: "Global Accessibility",
      description: "Access the platform from anywhere in the world, 24/7, without restrictions."
    },
  ];

  return (
    <section id="benefits" className="section-padding relative overflow-hidden bg-slate-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-fluxfx-100 text-fluxfx-800 mb-4">
            Why Choose Flux FX
          </span>
          <h2 className="heading-lg mb-4">Key Benefits</h2>
          <p className="paragraph max-w-2xl mx-auto">
            Our decentralized trading platform offers unmatched advantages for FX traders seeking sovereignty and superior trading conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              isHighlighted={benefit.isHighlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
