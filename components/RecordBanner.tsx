
import React from 'react';

const RecordBanner: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400 py-8 md:py-12 shadow-lg border-y-2 border-yellow-700/20 overflow-hidden">
      <div className="flex justify-center items-center">
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-black text-white drop-shadow-md tracking-tight md:tracking-wider text-center px-4 uppercase italic leading-tight">
          2000+ Record Testimonials
        </h2>
      </div>
    </div>
  );
};

export default RecordBanner;
