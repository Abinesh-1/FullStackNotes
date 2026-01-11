import React from "react";

function Filter({ handleFilterText }) {
  const categories = [
    { value: "", label: "All Notes" },
    { value: "BUSINESS", label: "Business" },
    { value: "PERSONAL", label: "Personal" },
    { value: "IMPORTANT", label: "Important" }
  ];

  return (
    <div className="border-b bg-white px-4 py-3 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center gap-3">
        <span className="text-sm font-medium text-gray-700">Filter by:</span>
        <div className="flex gap-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => handleFilterText(cat.value)}
              className="px-4 py-1.5 text-sm border border-gray-300 rounded-full hover:bg-gray-50 hover:border-gray-400 whitespace-nowrap transition-colors"
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filter;