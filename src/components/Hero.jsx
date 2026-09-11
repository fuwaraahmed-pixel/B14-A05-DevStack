import React from 'react';
import bannerStack from '../assets/banner-stack.png';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-12 lg:py-20">
      
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন এবং গ্লো ইফেক্ট */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-orange-200/30 via-pink-200/30 to-purple-200/30 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* বামপাশের টেক্সট বিষয়বস্তু (Left Content) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* ব্যাজ/পিল */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/60 text-xs sm:text-sm font-semibold text-orange-600 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
              ⚡ Build Your Dream Software Stack
            </div>

            {/* প্রধান হেডিং (Main Headline) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Assemble & Compare Your <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            {/* বর্ণনা (Description) */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              DevStack Builder helps developers browse, evaluate, and combine modern frontend frameworks, backend runtimes, databases, and DevOps tools side-by-side effortlessly.
            </p>

            {/* অ্যাকশন বাটনসমূহ (Action Buttons) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#technologies"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-semibold text-base shadow-lg shadow-pink-500/25 hover:opacity-95 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Explore Technologies 🚀
              </a>
              <a
                href="#your-stack"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-700 font-semibold text-base shadow-sm hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
              >
                View Your Stack 🧱
              </a>
            </div>

            {/* মূল ফিচার হাইলাইটস / স্ট্যাটস (Feature Highlights) */}
            <div className="pt-8 border-t border-gray-100 grid grid-cols-3 gap-4 text-center lg:text-left max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  12+
                </p>
                <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">Tech Tools</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  6
                </p>
                <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">Categories</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                  100%
                </p>
                <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">Free & Open</p>
              </div>
            </div>

          </div>

          {/* ডানপাশের ব্যানার ইমেজ (Right Banner Image) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* ব্যাকগ্রাউন্ড ডেকোরেটিভ কার্ড শ্যাডো */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-600 rounded-3xl blur-2xl opacity-20 transform rotate-3 scale-95" />
              
              {/* ব্যানার ইমেজ */}
              <div className="relative bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-3xl border border-gray-100 shadow-2xl">
                <img
                  src={bannerStack}
                  alt="DevStack Banner"
                  className="w-full h-auto object-cover rounded-2xl transform hover:scale-[1.02] transition-transform duration-300"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
