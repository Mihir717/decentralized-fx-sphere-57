
import React from 'react';
import { Shield, ExternalLink, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-fluxfx-400">Flux</span>
              <span className="text-2xl font-bold text-white">FX</span>
            </div>
            <p className="text-slate-400 mb-6">
              Decentralising the Centralised. Trade Forex & Commodities with full sovereignty and unmatched transparency.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.085 4.733l1.915-1.832v-.401h-6.634l-4.728 11.768-5.379-11.768h-6.955v.401l2.237 2.693c.218.199.332.49.303.783v10.583c.069.381-.055.773-.323 1.05l-2.52 3.054v.396h7.145v-.401l-2.52-3.049c-.273-.278-.402-.663-.347-1.05v-9.154l6.272 13.659h.729l5.393-13.659v10.881c0 .287 0 .346-.188.534l-1.94 1.877v.402h9.412v-.401l-1.87-1.831c-.164-.124-.249-.332-.214-.534v-13.467c-.035-.203.049-.411.213-.534z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#trading-assets" className="text-slate-400 hover:text-white transition-colors inline-flex items-center">
                  <ChevronRight className="h-3 w-3 mr-2" />
                  Trading Assets
                </a>
              </li>
              <li>
                <a href="#trading-engine" className="text-slate-400 hover:text-white transition-colors inline-flex items-center">
                  <ChevronRight className="h-3 w-3 mr-2" />
                  Trading Engine
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-slate-400 hover:text-white transition-colors inline-flex items-center">
                  <ChevronRight className="h-3 w-3 mr-2" />
                  Key Benefits
                </a>
              </li>
              <li>
                <a href="#security" className="text-slate-400 hover:text-white transition-colors inline-flex items-center">
                  <ChevronRight className="h-3 w-3 mr-2" />
                  Security
                </a>
              </li>
              <li>
                <a href="#platforms" className="text-slate-400 hover:text-white transition-colors inline-flex items-center">
                  <ChevronRight className="h-3 w-3 mr-2" />
                  Platforms
                </a>
              </li>
              <li>
                <a href="#community" className="text-slate-400 hover:text-white transition-colors inline-flex items-center">
                  <ChevronRight className="h-3 w-3 mr-2" />
                  Community
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors inline-flex items-center">
                  <ChevronRight className="h-3 w-3 mr-2" />
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors inline-flex items-center">
                  <ChevronRight className="h-3 w-3 mr-2" />
                  Market Insights
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors inline-flex items-center">
                  <ChevronRight className="h-3 w-3 mr-2" />
                  Trading Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors inline-flex items-center">
                  <ChevronRight className="h-3 w-3 mr-2" />
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors inline-flex items-center">
                  <ChevronRight className="h-3 w-3 mr-2" />
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors inline-flex items-center">
                  <ChevronRight className="h-3 w-3 mr-2" />
                  Blog
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors inline-flex items-center">
                  <ChevronRight className="h-3 w-3 mr-2" />
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors inline-flex items-center">
                  <ChevronRight className="h-3 w-3 mr-2" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors inline-flex items-center">
                  <ChevronRight className="h-3 w-3 mr-2" />
                  Risk Disclosure
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors inline-flex items-center">
                  <ChevronRight className="h-3 w-3 mr-2" />
                  Trading Rules
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors inline-flex items-center">
                  <ChevronRight className="h-3 w-3 mr-2" />
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Security badges */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg flex items-center justify-center">
              <Shield className="h-5 w-5 text-green-400 mr-2" />
              <span className="text-sm text-white">Security Audited</span>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg flex items-center justify-center">
              <svg className="h-5 w-5 text-slate-400 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-sm text-white">Verified Smart Contracts</span>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg flex items-center justify-center">
              <svg className="h-5 w-5 text-slate-400 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15V17M6 21H18C19.1046 21 20 20.1046 20 19V13C20 11.8954 19.1046 11 18 11H6C4.89543 11 4 11.8954 4 13V19C4 20.1046 4.89543 21 6 21ZM16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11H16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-sm text-white">SSL Secured</span>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg flex items-center justify-center">
              <svg className="h-5 w-5 text-slate-400 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12H15M12 9V15M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-sm text-white">24/7 Support</span>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Flux FX. All rights reserved.
          </p>
          <div className="flex items-center space-x-3">
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">
              Terms
            </a>
            <span className="text-slate-700">•</span>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">
              Privacy
            </a>
            <span className="text-slate-700">•</span>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
