import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Technologies from './components/Technologies';

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

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Technologies onAddToStack={handleAddToStack} />
    </div>
  );
}
