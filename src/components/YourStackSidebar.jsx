import React from 'react';

export default function YourStackSidebar({ stack, onRemove, onRemoveAll }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 sticky top-24 shadow-xs">
      {/* হেডার: টাইটেল ও কতটি টেকনোলজি সিলেক্ট করা হয়েছে */}
      <div className="mb-5">
        <h2 className="text-xl font-bold text-gray-900">Your Stack</h2>
        <p className="text-sm font-medium text-gray-500 mt-1">
          {stack.length} Technology Selected
        </p>
      </div>

      {/* ১. স্ট্যাক খালি থাকলে (Empty State) */}
      {stack.length === 0 ? (
        <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center bg-gray-50">
          <div className="text-2xl mb-2">📦</div>
          <p className="text-sm font-medium text-gray-600">Your stack is empty</p>
          <p className="text-xs text-gray-400 mt-1">
            Add technologies from the grid to customize your stack.
          </p>
        </div>
      ) : (
        /* ২. স্ট্যাকে টেকনোলজি যোগ করা থাকলে */
        <div className="space-y-3">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-white"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-gray-50 flex items-center justify-center p-1 border border-gray-100">
                  <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{item.name}</h4>
                  <p className="text-xs text-gray-400">{item.category}</p>
                </div>
              </div>

              {/* একটি আইটেম মুছতে (✕) বাটন */}
              <button
                onClick={() => onRemove(item.id)}
                className="text-gray-400 hover:text-red-500 font-bold px-2 py-1"
                aria-label="Remove item"
              >
                ✕
              </button>
            </div>
          ))}

          {/* সব আইটেম একসাথে মোছার (Remove All) বাটন */}
          <div className="pt-3">
            <button
              onClick={onRemoveAll}
              className="w-full py-2 rounded-lg border border-red-200 text-red-500 font-semibold text-sm hover:bg-red-50 transition-colors"
            >
              Remove All
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
