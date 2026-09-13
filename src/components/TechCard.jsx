import React from 'react';

export default function TechCard({ tech, isAdded, onAdd }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
      <div>
        {/* উপরের সারিতে লোগো এবং ব্যাজ */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center p-2 border border-gray-100">
            <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
          </div>
          {tech.badge && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
              {tech.badge}
            </span>
          )}
        </div>

        {/* টেকনোলজির নাম এবং সংক্ষিপ্ত ডেসক্রিপশন */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-3 leading-relaxed">
          {tech.description}
        </p>
      </div>

      <div>
        {/* ট্যাগস: ক্যাটাগরি, লেভেল এবং রেটিং */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pt-3 border-t border-gray-100">
          <span className="bg-gray-100 text-gray-700 font-medium px-2 py-1 rounded">
            {tech.category}
          </span>
          <span className="font-medium">{tech.difficulty}</span>
          <span className="font-bold text-gray-800">⭐ {tech.rating}</span>
        </div>

        {/* Add to Stack বাটন */}
        <button
          onClick={() => onAdd(tech)}
          disabled={isAdded}
          className={`w-full py-2.5 px-4 rounded-lg font-semibold text-sm transition-all ${
            isAdded
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
              : 'bg-gray-900 text-white hover:bg-gray-800 active:scale-98'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
}
