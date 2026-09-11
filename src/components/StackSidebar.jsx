import React from 'react';

export default function StackSidebar({ stack, onRemoveFromStack, onClearStack }) {
  return (
    <aside id="your-stack" className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm sticky top-20">
      {/* সাইডবার হেডার */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
        <div>
          <h2 className="text-lg font-extrabold text-gray-900">
            Your <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-xs text-gray-500">
            Selected ({stack.length})
          </p>
        </div>

        {/* ক্লিয়ার অল বাটন */}
        {stack.length > 0 && (
          <button
            onClick={onClearStack}
            className="text-[11px] font-semibold text-red-500 hover:text-red-700 bg-red-50 px-2 py-0.5 rounded transition-colors"
          >
            Clear All 🗑️
          </button>
        )}
      </div>

      {/* খালি অবস্থা নাকি স্ট্যাকের ভার্টিক্যাল লিস্ট */}
      {stack.length === 0 ? (
        <div className="border-2 border-dashed border-gray-200 rounded-xl p-5 text-center">
          <div className="text-2xl mb-1">🧱</div>
          <h3 className="text-xs font-bold text-gray-800">Your Stack is Empty</h3>
          <p className="text-[11px] text-gray-500 mt-1">
            Click <span className="font-semibold text-pink-600">"Add to Stack ➕"</span> on any card to start.
          </p>
        </div>
      ) : (
        <div className="space-y-2.5 max-h-[480px] overflow-y-auto pr-1">
          {stack.map((tech) => (
            <div
              key={tech.id}
              className="bg-gray-50/80 rounded-xl p-2.5 border border-gray-100 flex items-center justify-between gap-2 hover:border-pink-200 transition-all"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <img src={tech.icon} alt={tech.name} className="w-7 h-7 object-contain shrink-0" />
                <div className="min-w-0">
                  <h4 className="font-bold text-gray-900 text-xs truncate">{tech.name}</h4>
                  <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-orange-100 text-orange-600 inline-block">
                    {tech.category}
                  </span>
                </div>
              </div>

              <button
                onClick={() => onRemoveFromStack(tech.id)}
                className="text-gray-400 hover:text-red-500 p-1 rounded hover:bg-red-50 transition-colors text-xs shrink-0"
                title="Remove"
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}
