import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile Hamburger (Left on mobile) */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Brand Logo (Left on Desktop, Center on Mobile) */}
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl brand-gradient flex items-center justify-center text-white font-black text-sm tracking-wider shadow-md shadow-pink-500/20">
              DS
            </div>
            <span className="text-2xl font-black tracking-tight text-slate-900">
              Dev <span className="brand-gradient-text">Stack</span>
            </span>
          </div>

          {/* Desktop Nav Links (Center) */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold">
            <a href="#home" className="text-[#FF2A85] hover:opacity-80 transition-colors">Home</a>
            <a href="#technologies" className="text-slate-600 hover:text-slate-900 transition-colors">Technologies</a>
            <a href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors">Projects</a>
            <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">About</a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
          </nav>

          {/* Auth Buttons (Right) */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button className="text-sm font-semibold text-slate-700 hover:text-slate-900 px-3 py-2">
              Sign In
            </button>
            <button className="text-sm font-bold text-white brand-gradient px-5 py-2.5 rounded-full shadow-md shadow-pink-500/25 hover:opacity-95 transition-all transform active:scale-95">
              Sign Up
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3">
          <a href="#home" className="block text-base font-semibold text-[#FF2A85]" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#technologies" className="block text-base font-medium text-slate-700 hover:text-slate-900" onClick={() => setMobileMenuOpen(false)}>Technologies</a>
          <a href="#projects" className="block text-base font-medium text-slate-700 hover:text-slate-900" onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <a href="#about" className="block text-base font-medium text-slate-700 hover:text-slate-900" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#contact" className="block text-base font-medium text-slate-700 hover:text-slate-900" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}
