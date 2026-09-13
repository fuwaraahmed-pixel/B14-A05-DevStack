import React from 'react';
import bannerImg from '../../assets/banner-stack.png';

export default function Hero() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side: Headline & Buttons */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Build Your Ideal <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="text-gray-600 text-lg">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#technologies"
              className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:opacity-90 transition-all"
            >
              Explore Technologies
            </a>

            <a 
              href="#learn-more"
              className="bg-white border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Side: Banner Image */}
        <div className="flex justify-center">
          <img 
            src={bannerImg} 
            alt="Dev Stack Illustration" 
            className="w-full max-w-md h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
}
