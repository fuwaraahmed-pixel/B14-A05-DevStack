import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8 mt-16 text-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-100">
          
          {/* ব্র্যান্ড ইনফো */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-bold px-2.5 py-1 rounded-md">
                DS
              </div>
              <span className="text-lg font-bold text-gray-900">Dev Stack</span>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
          </div>

          {/* প্রোডাক্ট লিঙ্কস */}
          <div>
            <h4 className="font-bold text-gray-900 text-xs tracking-wider uppercase mb-3">Product</h4>
            <ul className="space-y-2 text-gray-600 text-xs">
              <li><a href="#home" className="hover:text-gray-900">Home</a></li>
              <li><a href="#technologies" className="hover:text-gray-900">Technologies</a></li>
              <li><a href="#projects" className="hover:text-gray-900">Projects</a></li>
            </ul>
          </div>

          {/* কোম্পানি লিঙ্কস */}
          <div>
            <h4 className="font-bold text-gray-900 text-xs tracking-wider uppercase mb-3">Company</h4>
            <ul className="space-y-2 text-gray-600 text-xs">
              <li><a href="#about" className="hover:text-gray-900">About</a></li>
              <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
              <li><a href="#careers" className="hover:text-gray-900">Careers</a></li>
            </ul>
          </div>

          {/* লিগ্যাল লিঙ্কস */}
          <div>
            <h4 className="font-bold text-gray-900 text-xs tracking-wider uppercase mb-3">Legal</h4>
            <ul className="space-y-2 text-gray-600 text-xs">
              <li><a href="#privacy" className="hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-gray-900">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* কপিরাইট লাইন */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-2">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#privacy" className="hover:text-gray-600">Privacy</a>
            <a href="#terms" className="hover:text-gray-600">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
