
import React, { useEffect } from 'react';
import Hero from './components/Hero';
import RecordBanner from './components/RecordBanner';
import Testimonials from './components/Testimonials';
import Results from './components/Results';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#064e3b]">
      {/* Fixed Header */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-4 sm:px-8 py-4 bg-[#064e3b]/90 backdrop-blur-lg border-b border-white/10 flex justify-between items-center">
        <div className="text-white font-black text-xl sm:text-2xl tracking-tighter italic">
          TRIVEDA<span className="text-yellow-400 underline decoration-2 underline-offset-4">SLIM</span>
        </div>
        <div className="flex space-x-4 sm:space-x-8 text-white/90 font-bold text-xs sm:text-sm uppercase tracking-widest">
          <a href="#testimonials" className="hover:text-yellow-400 transition-colors">Results</a>
        </div>
      </nav>

      {/* Page Content */}
      <Hero />
      <RecordBanner />
      <Testimonials />
      <Results />

      {/* Footer */}
      <footer className="bg-[#033025] py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-white/70">
          <div className="space-y-4">
            <h3 className="text-white font-black text-2xl italic tracking-tight">Trivedaslim</h3>
            <p className="leading-relaxed text-sm sm:text-base max-w-sm">
              તમારા સ્વાસ્થ્યને આયુર્વેદિક પદ્ધતિથી સુધારો. અમે કુદરતી રીતે વજન ઘટાડવા અને નિરોગી જીવન જીવવા માટે મદદ કરીએ છીએ.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg uppercase tracking-widest">Contact Us</h3>
            <div className="space-y-2 text-sm sm:text-base">
              <p className="font-bold text-yellow-400">Support available via WhatsApp</p>
              <p className="opacity-80">
                Phone: <a href="tel:8980893154" className="hover:text-yellow-400 transition-colors">8980893154</a>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 text-center text-xs sm:text-sm text-white/40">
          &copy; {new Date().getFullYear()} Trivedaslim. શુદ્ધ આયુર્વેદિક અને કુદરતી ઉપચાર.
        </div>
      </footer>
    </main>
  );
};

export default App;
