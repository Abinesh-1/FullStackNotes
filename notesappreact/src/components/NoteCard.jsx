// import React from "react";
// import { MdMarkunread } from "react-icons/md";
// import { FaNoteSticky } from "react-icons/fa6";
// import { Link } from "react-router-dom";

// function NoteCard({ note }) {
//   const body = `${note.body.split(" ").slice(0, 20).join(" ")}...`;
//   const color =
//     note.category == "BUSINESS"
//       ? "blue"
//       : note.category == "PERSONAL"
//       ? "green"
//       : "purple";

//   return (
//     <div className="w-full sm:w-1/2 lg:w-full px-4 mb-6">
//       <div className="relative bg-white rounded-xl shadow-md p-5 h-full hover:shadow-lg transition">
//         {/* Side stick */}
//         <span
//           className="absolute left-0 top-0 h-full w-1 rounded-l-xl"
//           style={{ backgroundColor: color }}
//         ></span>

//         {/* Top icon */}
//         <FaNoteSticky className="ml-auto text-xl" style={{ color: color }} />
//         <Link to={`/notes/${note.slug}`}>
//           {" "}
//           <h5 className="mt-3 font-semibold truncate w-3/4">{note.title}</h5>
//         </Link>

//         {/* Date */}
//         {/* <p className="text-sm text-gray-400 mt-1">
//           {note.updated}
//         </p> */}
//         <p className="text-sm text-gray-400 mt-1">
//           {new Date(note.updated).toLocaleString("en-GB", {
//             day: "2-digit",
//             month: "short",
//             year: "numeric",
//             hour: "2-digit",
//             minute: "2-digit",
//             hour12: true,
//           })}
//         </p>

//         <div className="mt-3">
//           <p className="text-sm text-gray-500 line-clamp-3">{body}</p>
//         </div>
//         <div className="flex items-center mt-4">
//           <span className="mr-2">
//             <a href="/notes-detail">
//               <MdMarkunread
//                 className="text-2xl cursor-pointer"
//                 style={{ color: color }}
//               />
//             </a>
//             <small>{note.category}</small>
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NoteCard;

{
  /* <span className="mr-2 cursor-pointer text-gray-400 hover:text-red-500 transition">
            <i className="fa fa-trash remove-note"></i>
          </span> */
}
{
  /* <div className="ml-auto relative group">
            <a
              href="#"
              className="p-1"
              aria-haspopup="true"
              aria-expanded="true"
            >
              <span className="text-gray-700">
                <i className="icon-options-vertical"></i>
              </span>
            </a>

            <div className="absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow-md hidden group-hover:block">
              <a
                className="block px-4 py-2 text-sm text-green-600 hover:bg-gray-50"
                href="javascript:void(0);"
              >
                ● Business
              </a>
              <a
                className="block px-4 py-2 text-sm text-blue-500 hover:bg-gray-50"
                href="javascript:void(0);"
              >
                ● Social
              </a>
              <a
                className="block px-4 py-2 text-sm text-red-500 hover:bg-gray-50"
                href="javascript:void(0);"
              >
                ● Important
              </a>
            </div> 
          </div>  */
}


// --------- 

import React from "react";
import { MdMarkunread } from "react-icons/md";
import { FaNoteSticky } from "react-icons/fa6";
import { Link } from "react-router-dom";

function NoteCard({ note }) {
  const bodyPreview = `${note.body.split(" ").slice(0, 20).join(" ")}...`;

  // Category color mapping
  const categoryColor =
    note.category === "BUSINESS"
      ? "bg-blue-100 text-blue-600"
      : note.category === "PERSONAL"
      ? "bg-green-100 text-green-600"
      : "bg-purple-100 text-purple-600";

  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-6 lg:w-full">
      <div className="relative bg-white rounded-xl shadow-md p-5 h-full hover:shadow-xl transition-all duration-300">
        {/* Category strip */}
        <span
          className={`absolute left-0 top-0 h-full w-1 rounded-l-xl ${categoryColor.replace("bg-", "bg-")}`}
        ></span>

        {/* Top icon */}
        <FaNoteSticky
          className={`ml-auto text-2xl ${categoryColor.split(" ")[1]}`}
        />

        {/* Title */}
        <Link to={`/notes/${note.slug}`}>
          <h5 className="mt-3 text-lg font-semibold truncate w-11/12 hover:text-indigo-600 transition-colors">
            {note.title}
          </h5>
        </Link>

        {/* Updated Date */}
        <p className="text-xs text-gray-400 mt-1">
          {new Date(note.updated).toLocaleString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
        </p>

        {/* Body preview */}
        <div className="mt-3">
          <p className="text-sm text-gray-600 line-clamp-3">{bodyPreview}</p>
        </div>

        {/* Category & Action Icon */}
        <div className="flex items-center justify-between mt-4">
          <span
            className={`px-2 py-1 rounded text-xs font-medium ${categoryColor}`}
          >
            {note.category}
          </span>

          <MdMarkunread
            className={`text-2xl cursor-pointer ${categoryColor.split(" ")[1]}`}
          />
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
