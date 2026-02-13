
import React from 'react';
import { BENEFITS, CheckIcon } from '../constants';
import WhatsAppButton from './WhatsAppButton';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center p-3 sm:p-6 md:p-10 bg-[#064e3b] pt-28 pb-16">
      <div className="max-w-4xl w-full bg-white rounded-3xl p-5 sm:p-10 md:p-16 shadow-2xl border-[3px] md:border-4 border-[#065f46] transition-all duration-500 hover:shadow-green-900/40">
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block px-3 py-1 bg-green-50 text-green-700 font-bold rounded-full text-[10px] sm:text-xs md:text-sm mb-4 border border-green-200 uppercase tracking-widest">
            અમે શુદ્ધ આયુર્વેદિક પદ્ધતિ અનુસરીએ છીએ
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#064e3b] leading-[1.2] mb-4 md:mb-8">
            કુદરતી રીતે <span className="text-yellow-600">વજન ઘટાડો</span> અને નિરોગી બનો
          </h1>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium mb-8 px-1">
            અમે ડાયરેક્ટ ફોન કોલ દ્વારા દવા શરીરમાં કેવી રીતે કામ કરે છે અને કેવી રીતે વજન ઘટે છે તેની સંપૂર્ણ સમજ આપીએ છીએ.
          </p>
          
          <div className="flex flex-col items-center gap-4 mb-6">
            <WhatsAppButton className="w-full sm:w-auto text-base sm:text-lg px-10" />
            <p className="text-[11px] sm:text-sm text-gray-400 italic font-medium">
              Join our growing community of 10,000+ members
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-8 md:gap-y-5">
          {BENEFITS.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3 group bg-green-50/50 p-3 rounded-xl border border-green-100 md:bg-transparent md:p-0 md:border-0">
              <div className="mt-0.5 transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                <CheckIcon />
              </div>
              <span className="text-gray-800 font-semibold text-sm sm:text-base md:text-lg leading-tight">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
