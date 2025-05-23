import React from 'react';
import { MessageSquare, Twitter, Users, ChevronRight } from 'lucide-react';
const Community: React.FC = () => {
  return <section id="community" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-grid opacity-20 z-0"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center font-medium rounded-full bg-fluxfx-100 text-fluxfx-800 mb-4 px-[16px] py-[8px] text-xl">
            Join Us
          </span>
          <h2 className="heading-lg mb-4">Community & Support</h2>
          <p className="paragraph max-w-2xl mx-auto">
            Join our growing community of traders and get access to exclusive insights, updates, and personalized support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="bg-fluxfx-800 p-4 flex items-center">
              <div className="p-2 bg-white/10 rounded-lg mr-3">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">Telegram</h3>
            </div>
            <div className="p-6">
              <p className="text-slate-600 mb-5">
                Join our Telegram channel for instant updates, trading discussions, and direct support from our team.
              </p>
              <a href="#" className="inline-flex items-center text-fluxfx-600 font-medium hover:text-fluxfx-700 transition-colors">
                Join Telegram
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="bg-fluxfx-800 p-4 flex items-center">
              <div className="p-2 bg-white/10 rounded-lg mr-3">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">Discord</h3>
            </div>
            <div className="p-6">
              <p className="text-slate-600 mb-5">
                Connect with fellow traders, participate in community events, and get technical assistance on our Discord server.
              </p>
              <a href="#" className="inline-flex items-center text-fluxfx-600 font-medium hover:text-fluxfx-700 transition-colors">
                Join Discord
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="bg-fluxfx-800 p-4 flex items-center">
              <div className="p-2 bg-white/10 rounded-lg mr-3">
                <Twitter className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">Twitter</h3>
            </div>
            <div className="p-6">
              <p className="text-slate-600 mb-5">
                Follow us on Twitter for the latest news, market insights, and platform updates from Flux FX.
              </p>
              <a href="#" className="inline-flex items-center text-fluxfx-600 font-medium hover:text-fluxfx-700 transition-colors">
                Follow Us
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-fluxfx-50 rounded-2xl p-8 border border-fluxfx-100 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-fluxfx-100 rounded-full filter blur-3xl opacity-60 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-fluxfx-100 rounded-full filter blur-3xl opacity-60 transform -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative">
            <h3 className="heading-md mb-4 text-center">Stay Updated</h3>
            <p className="text-center text-slate-600 mb-6">
              Subscribe to our newsletter to receive trading insights, platform updates, and early access to new features.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="Enter your email" className="flex-1 bg-white px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-fluxfx-500 focus:border-transparent" />
              <button type="submit" className="bg-fluxfx-600 hover:bg-fluxfx-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </form>
            
            <p className="text-xs text-slate-500 mt-4 text-center">
              By subscribing, you agree to receive marketing communications from Flux FX. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default Community;