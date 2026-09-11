import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import StackSidebar from './components/StackSidebar';

export default function App() {
  const [stack, setStack] = useState([]);

  const handleAddToStack = (tech) => {
    const exists = stack.find((item) => item.id === tech.id);
    if (exists) {
      alert(`${tech.name} is already in your stack!`);
      return;
    }
    setStack([...stack, tech]);
  };

  const handleRemoveFromStack = (techId) => {
    setStack(stack.filter((item) => item.id !== techId));
  };

  const handleClearStack = () => {
    setStack([]);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* ১. হেডিং (সম্পূর্ণ ফুল-উইডথ আলাদা Div-এ) */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Explore <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Select technologies to build your customized tech stack.
          </p>
        </div>

        {/* ২. ২-কলামের লেআউট: কার্ডের ১ম রো এবং সাইডবার একদম একই সমান্তরাল টপ-লাইনে শুরু হবে */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* বামপাশে টেকনোলজিস (৯ কলাম -> প্রতি সারিতে ৩টি করে কার্ড) */}
          <div className="lg:col-span-9">
            <Technologies onAddToStack={handleAddToStack} />
          </div>

          {/* ডানপাশে Your Stack সাইডবার (৩ কলাম -> কার্ডের সাথেই একই এলাইনমেন্টে) */}
          <div className="lg:col-span-3">
            <StackSidebar
              stack={stack}
              onRemoveFromStack={handleRemoveFromStack}
              onClearStack={handleClearStack}
            />
          </div>

        </div>
      </main>
    </div>
  );
}
