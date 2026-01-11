import React from "react"; 
import { Link } from "react-router-dom";
import { FaSquarePlus } from "react-icons/fa6";

function Navbar({ searchText, handleSearchText }) {
  const handleLogoClick = () => {
    handleSearchText("");  // Reset search when clicking logo
  };

  return (
    <nav className="bg-blue-600 shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          
          <Link 
            to="/" 
            onClick={handleLogoClick}
            className="text-white text-xl font-bold"
          >
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