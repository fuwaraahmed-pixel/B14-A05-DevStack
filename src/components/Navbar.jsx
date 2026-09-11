import React, { useState } from 'react';

export default function Navbar() {
  // মোবাইল মেনু খোলা বা বন্ধ রাখার জন্য state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3.5 flex items-center justify-between gap-2">
        
        {/* ১. বামপাশের সেকশন: মোবাইল মেনু বাটন + ব্র্যান্ড লোগো ও নাম */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* মোবাইল মেনু বাটন */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-gray-700 hover:text-gray-900 p-1.5 rounded-lg border border-gray-200 text-xl font-bold focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>

          {/* ব্র্যান্ড লোগো ও নাম */}
          <a href="#home" className="flex items-center gap-2 shrink-0">
            <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-black text-sm sm:text-base px-2.5 py-1 rounded-lg shadow-sm">
              DS
            </div>
            <span className="text-base sm:text-xl font-extrabold text-gray-900 tracking-tight whitespace-nowrap">
              Dev <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Stack</span>
            </span>
          </a>
        </div>

        {/* ২. বড় স্ক্রিনের নেভিগেশন লিংকসমূহ */}
        <div className="hidden md:flex items-center space-x-6 font-medium text-sm lg:text-base text-gray-600">
          <a href="#home" className="text-pink-600 font-semibold hover:text-pink-700 transition-colors">Home</a>
          <a href="#technologies" className="hover:text-gray-900 transition-colors">Technologies</a>
          <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </div>

        {/* ৩. ডানপাশের সাইন ইন ও সাইন আপ বাটন */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <button className="text-gray-700 hover:text-gray-900 text-xs sm:text-sm font-semibold px-2.5 sm:px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors">
            Sign In
          </button>
          <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 rounded-full shadow-sm hover:opacity-95 whitespace-nowrap transition-all">
            Sign Up
          </button>
        </div>

      </div>

      {/* ৪. মোবাইল স্ক্রিনের ড্রপডাউন মেনু */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-2 font-medium text-sm text-gray-700 animate-fadeIn">
          <a 
            href="#home" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-pink-600 bg-pink-50 font-semibold"
          >
            Home
          </a>
          <a 
            href="#technologies" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Technologies
          </a>
          <a 
            href="#projects" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Projects
          </a>
          <a 
            href="#about" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            About
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
