// import React from "react"; 
// import { Link } from "react-router-dom";
// import { FaSquarePlus } from "react-icons/fa6";

// function Navbar({searchText,handleSearchText}){
//   return<nav className="bg-gray-100 shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
          
//           <Link to="/" className="flex-shrink-0">
//             <h1 className="text-2xl font-bold text-gray-800">Note</h1>
//           </Link>
//           <div className="flex-1 mx-4 hidden md:flex justify-center">
//             <form className="flex w-full max-w-md"
//             onSubmit={(e) => e.preventDefault()}
//             >
//               <input
//                 type="search"
//                 placeholder="Search"
//                 className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
//                 "
//                 value={searchText}
//                 onChange={(e) => handleSearchText(e.target.value)}
//               />
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-blue-500 text-white font-medium rounded-r-md hover:bg-blue-600 transition-colors"
//               >
//                 Search
//               </button>
//             </form>
//           </div>

//           <div className="flex-shrink-0">
//             <Link to="/add-note">
//               <button className="flex items-center px-4 py-2 border border-blue-500 text-blue-500 font-medium rounded-md hover:bg-blue-500 hover:text-white transition-colors">
//                 <FaSquarePlus className="mr-2" /> Add Notes
//               </button>
//             </Link>
//           </div>
//         </div>


//         <div className="md:hidden mt-2">
//           <form className="flex w-full"
//             onSubmit={(e) => e.preventDefault()}
//           >
//             <input
//               type="search"
//               placeholder="Search"
//               className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-500 text-white font-medium rounded-r-md hover:bg-blue-600 transition-colors"
//             >
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
// }

// export default Navbar;

// ------- 

import React from "react"; 
import { Link } from "react-router-dom";
import { FaSquarePlus } from "react-icons/fa6";

function Navbar({ searchText, handleSearchText }) {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-800 tracking-wide">NoteApp</h1>
          </Link>

          {/* Search - Desktop */}
          <div className="hidden md:flex flex-1 justify-center mx-4">
            <form className="flex w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
              <input
                type="search"
                placeholder="Search your notes..."
                value={searchText}
                onChange={(e) => handleSearchText(e.target.value)}
                className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-r-md hover:bg-indigo-700 transition"
              >
                Search
              </button>
            </form>
          </div>

          {/* Add Note Button */}
          <div className="flex-shrink-0">
            <Link to="/add-note">
              <button className="flex items-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow hover:bg-indigo-700 transition">
                <FaSquarePlus className="mr-2" />
                Add Note
              </button>
            </Link>
          </div>

        </div>

        {/* Search - Mobile */}
        <div className="md:hidden mt-3">
          <form className="flex w-full" onSubmit={(e) => e.preventDefault()}>
            <input
              type="search"
              placeholder="Search..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-r-md hover:bg-indigo-700 transition"
            >
              Search
            </button>
          </form>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
