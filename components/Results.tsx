
import React from 'react';
import WhatsAppButton from './WhatsAppButton';

const Results: React.FC = () => {
  return (
    <section className="bg-[#064e3b] py-16 md:py-24 px-4 text-center relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,_#065f46_0%,_transparent_70%)] opacity-30 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tight">
          100% પરિણામ <span className="text-yellow-500 block sm:inline">મેળવો</span>
        </h2>
        <p className="text-green-50 text-base sm:text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium px-4 opacity-90">
          જો તમે ખરેખર વજન ઘટાડવા અને આયુર્વેદિક સારવાર માટે ગંભીર હોવ તો નીચે આપેલ બટન પર ક્લિક કરો.
        </p>
        <div className="relative inline-block w-full max-w-[280px] sm:max-w-sm">
          <div className="absolute -inset-6 bg-yellow-400/20 rounded-full blur-2xl animate-pulse"></div>
          <WhatsAppButton className="relative z-10 text-base sm:text-xl w-full py-5 md:py-7 shadow-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Results;
