
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="bg-[#3f6212] py-16 px-4 sm:px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Client Testimonials</h2>
          <div className="w-20 h-1.5 bg-yellow-400 mx-auto rounded-full mb-6"></div>
          <p className="text-green-50 max-w-2xl mx-auto text-base sm:text-lg px-2">
            Real stories, real people, real results. See how Trivedaslim has changed lives across the globe.
          </p>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id} 
              className="relative group overflow-hidden rounded-2xl shadow-2xl cursor-pointer border-2 border-transparent hover:border-yellow-400 transition-all duration-300 bg-black/10 flex flex-col"
            >
              <div className="w-full h-full overflow-hidden">
                <img 
                  src={t.imageUrl} 
                  alt={t.alt} 
                  className="w-full h-auto min-w-full block object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <p className="text-white font-bold text-sm tracking-wide uppercase italic">
                  Success Story #{t.id}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
