import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCard from './components/TechCard';
import YourStackSidebar from './components/YourStackSidebar';
import Footer from './components/Footer';

export default function App() {
  // ১. স্টেট ডিক্লেয়ারেশন (স্টেটসমূহ)
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  // ২. useEffect দিয়ে JSON ডাটা লোড করা
  useEffect(() => {
    setLoading(true);
    fetch('/data/technologies.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setLoading(false);
      });
  }, []);

  // ৩. "Add to Stack" বাটনের কাজ (ডুপ্লিকেট নোটিফিকেশন সহ)
  const handleAddToStack = (tech) => {
    // একই টেকনোলজি ২ বার যোগ আছে কিনা চেক
    const isExist = stack.find((item) => item.id === tech.id);

    if (isExist) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }

    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  // ৪. একটি টেকনোলজি সরানোর (Remove) কাজ
  const handleRemove = (techId) => {
    const itemToRemove = stack.find((item) => item.id === techId);
    const updatedStack = stack.filter((item) => item.id !== techId);
    setStack(updatedStack);

    if (itemToRemove) {
      toast.info(`${itemToRemove.name} removed from your stack.`);
    }
  };

  // ৫. সব টেকনোলজি একবারে সরানোর (Remove All) কাজ
  const handleRemoveAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.error('Removed all technologies from your stack.');
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col font-sans">
      {/* Toast Notification Container */}
      <ToastContainer position="top-right" autoClose={2500} />

      {/* নেভবার এবং হিরো ব্যানার */}
      <Navbar />
      <Hero />

      {/* মূল টেকনোলজি গ্রিড এবং সাইডবার */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8" id="technologies">
        
        {/* সেকশন হেডিং */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Explore the <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* লোডিং স্পিনার */}
        {loading ? (
          <div className="py-16 text-center text-gray-500 font-medium">
            Loading technologies data...
          </div>
        ) : (
          /* গ্রিড এবং সাইডবার লেআউট */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* ১২টি টেকনোলজির কার্ডস (৮ কলাম) */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {technologies.map((tech) => (
                  <TechCard
                    key={tech.id}
                    tech={tech}
                    isAdded={stack.some((item) => item.id === tech.id)}
                    onAdd={handleAddToStack}
                  />
                ))}
              </div>
            </div>

            {/* সাইডবার (৪ কলাম) */}
            <div className="lg:col-span-4">
              <YourStackSidebar
                stack={stack}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
              />
            </div>

          </div>
        )}

      </main>

      {/* ফুটার */}
      <Footer />
    </div>
  );
}
