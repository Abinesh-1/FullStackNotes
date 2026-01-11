// import React from "react";

// function Filter({ handleFilterText }) {
//   return (
//     <div className="w-full flex justify-center py-4">
//       <select
//         className="
//           w-full max-w-sm h-12 px-4
//           border border-gray-300 rounded-md
//           bg-white text-gray-800
//           shadow-sm
//           focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
//           transition
//           hover:border-indigo-400
//         "
//         defaultValue=""
//         onChange={(e) => handleFilterText(e.target.value)}
//       >
//         <option value="">All Notes</option>
//         <option value="BUSINESS">Business</option>
//         <option value="PERSONAL">Personal</option>
//         <option value="IMPORTANT">Important</option>
//       </select>
//     </div>
//   );
// }

// export default Filter;



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