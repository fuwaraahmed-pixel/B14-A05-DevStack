import React, { useState, useEffect } from 'react';

export default function Technologies({ onAddToStack }) {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    fetch('./data/technologies.json')
      .then((res) => res.json())
      .then((data) => setTechnologies(data))
      .catch((err) => console.error('Error fetching technologies:', err));
  }, []);

  if (technologies.length === 0) {
    return <p className="text-center text-gray-500 py-10">Loading technologies...</p>;
  }

  return (
    /* প্রতি সারিতে ৩টি করে কার্ড (3 cards per row) */
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {technologies.map((tech) => (
        <div
          key={tech.id}
          className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
        >
          <div>
            {/* আইকন ও ক্যাটাগরি */}
            <div className="flex items-center justify-between mb-3">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-10 h-10 object-contain"
              />
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-orange-100 text-orange-600">
                {tech.category}
              </span>
            </div>

            {/* নাম ও ডেসক্রিপশন */}
            <h3 className="text-base font-bold text-gray-900">{tech.name}</h3>
            <p className="text-xs text-gray-600 mt-1 line-clamp-2">
              {tech.description}
            </p>
          </div>

          {/* রেটিং ও বাটন */}
          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-700">
              ⭐ {tech.rating}
            </span>
            <button
              onClick={() => onAddToStack(tech)}
              className="btn btn-xs text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 border-0 hover:opacity-90 text-[11px]"
            >
              Add to Stack ➕
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
