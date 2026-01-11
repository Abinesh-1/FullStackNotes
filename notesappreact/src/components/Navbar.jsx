// import React from "react"; 
// import { Link } from "react-router-dom";
// import { FaSquarePlus } from "react-icons/fa6";

// function Navbar({ searchText, handleSearchText }) {
//   return (
//     <nav className="bg-white shadow-sm border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">

//           {/* Logo */}
//           <Link to="/" className="flex-shrink-0">
//             <h1 className="text-2xl font-bold text-gray-800 tracking-wide">NoteApp</h1>
//           </Link>

//           {/* Search - Desktop */}
//           <div className="hidden md:flex flex-1 justify-center mx-4">
//             <form className="flex w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
//               <input
//                 type="search"
//                 placeholder="Search your notes..."
//                 value={searchText}
//                 onChange={(e) => handleSearchText(e.target.value)}
//                 className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
//               />
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-r-md hover:bg-indigo-700 transition"
//               >
//                 Search
//               </button>
//             </form>
//           </div>

//           {/* Add Note Button */}
//           <div className="flex-shrink-0">
//             <Link to="/add-note">
//               <button className="flex items-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow hover:bg-indigo-700 transition">
//                 <FaSquarePlus className="mr-2" />
//                 Add Note
//               </button>
//             </Link>
//           </div>

//         </div>

//         {/* Search - Mobile */}
//         <div className="md:hidden mt-3">
//           <form className="flex w-full" onSubmit={(e) => e.preventDefault()}>
//             <input
//               type="search"
//               placeholder="Search..."
//               className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
//             />
//             <button
//               type="submit"
//               className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-r-md hover:bg-indigo-700 transition"
//             >
//               Search
//             </button>
//           </form>
//         </div>

//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React from "react"; 
import { Link } from "react-router-dom";
import { FaSquarePlus } from "react-icons/fa6";

function Navbar({ searchText, handleSearchText }) {
  return (
    <nav className="bg-blue-600 shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          
          <Link to="/" className="text-white text-xl font-bold">
            MyNotes
          </Link>

          <div className="hidden md:block flex-1 max-w-lg mx-6">
            <input
              type="text"
              placeholder="Search notes..."
              value={searchText}
              onChange={(e) => handleSearchText(e.target.value)}
              className="w-full px-3 py-1.5 rounded border border-blue-500 bg-blue-50 text-gray-800 text-sm focus:outline-none focus:bg-white"
            />
          </div>

          <Link to="/add-note">
            <button className="bg-white text-blue-600 px-3 py-1.5 rounded text-sm font-semibold hover:bg-gray-100 flex items-center gap-1">
              <FaSquarePlus />
              <span className="hidden sm:inline">New</span>
            </button>
          </Link>
        </div>

        <div className="md:hidden pb-3">
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => handleSearchText(e.target.value)}
            className="w-full px-3 py-2 rounded border border-blue-500 bg-blue-50 text-sm focus:outline-none"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;