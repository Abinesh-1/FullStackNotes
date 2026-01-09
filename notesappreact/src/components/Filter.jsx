// import React from "react";

// function Filter({handleFilterText}) {
//   return (
//     <div className="w-full flex justify-center items-center py-4">
//       <select
//         className="
//           w-full max-w-sm h-12 px-4
//           border border-gray-300 rounded-lg
//           bg-white text-gray-800
//           shadow-sm
//           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
//           transition
//         "
//         defaultValue=""
//         onChange={(e) => handleFilterText(e.target.value)}
//       >
//         <option value="">
//           All Notes
//         </option>
//         <option value="BUSINESS">Business</option>
//         <option value="PERSONAL">Personal</option>
//         <option value="IMPORTANT">Important</option>
//       </select>
//     </div>
//   );
// }

// export default Filter;

// -------- 

import React from "react";

function Filter({ handleFilterText }) {
  return (
    <div className="w-full flex justify-center py-4">
      <select
        className="
          w-full max-w-sm h-12 px-4
          border border-gray-300 rounded-md
          bg-white text-gray-800
          shadow-sm
          focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
          transition
          hover:border-indigo-400
        "
        defaultValue=""
        onChange={(e) => handleFilterText(e.target.value)}
      >
        <option value="">All Notes</option>
        <option value="BUSINESS">Business</option>
        <option value="PERSONAL">Personal</option>
        <option value="IMPORTANT">Important</option>
      </select>
    </div>
  );
}

export default Filter;
