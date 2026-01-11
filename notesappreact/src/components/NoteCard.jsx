// import React from "react";
// import { MdMarkunread } from "react-icons/md";
// import { FaNoteSticky } from "react-icons/fa6";
// import { Link } from "react-router-dom";

// function NoteCard({ note }) {
//   const bodyPreview = `${note.body.split(" ").slice(0, 20).join(" ")}...`;

//   // Category color mapping
//   const categoryColor =
//     note.category === "BUSINESS"
//       ? "bg-blue-100 text-blue-600"
//       : note.category === "PERSONAL"
//       ? "bg-green-100 text-green-600"
//       : "bg-purple-100 text-purple-600";

//   return (
//     <div className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-6 lg:w-full">
//       <div className="relative bg-white rounded-xl shadow-md p-5 h-full hover:shadow-xl transition-all duration-300">
//         {/* Category strip */}
//         <span
//           className={`absolute left-0 top-0 h-full w-1 rounded-l-xl ${categoryColor.replace("bg-", "bg-")}`}
//         ></span>

//         {/* Top icon */}
//         <FaNoteSticky
//           className={`ml-auto text-2xl ${categoryColor.split(" ")[1]}`}
//         />

//         {/* Title */}
//         <Link to={`/notes/${note.slug}`}>
//           <h5 className="mt-3 text-lg font-semibold truncate w-11/12 hover:text-indigo-600 transition-colors">
//             {note.title}
//           </h5>
//         </Link>

//         {/* Updated Date */}
//         <p className="text-xs text-gray-400 mt-1">
//           {new Date(note.updated).toLocaleString("en-GB", {
//             day: "2-digit",
//             month: "short",
//             year: "numeric",
//             hour: "2-digit",
//             minute: "2-digit",
//             hour12: true,
//           })}
//         </p>

//         {/* Body preview */}
//         <div className="mt-3">
//           <p className="text-sm text-gray-600 line-clamp-3">{bodyPreview}</p>
//         </div>

//         {/* Category & Action Icon */}
//         <div className="flex items-center justify-between mt-4">
//           <span
//             className={`px-2 py-1 rounded text-xs font-medium ${categoryColor}`}
//           >
//             {note.category}
//           </span>

//           <MdMarkunread
//             className={`text-2xl cursor-pointer ${categoryColor.split(" ")[1]}`}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NoteCard;



import React from "react";
import { Link } from "react-router-dom";

function NoteCard({ note }) {
  const bodyPreview = note.body.length > 150 
    ? note.body.substring(0, 150) + "..." 
    : note.body;

  const getBadgeColor = () => {
    if (note.category === "BUSINESS") return "bg-blue-500";
    if (note.category === "PERSONAL") return "bg-green-500";
    return "bg-orange-500";
  };

  return (
    <div className="border border-gray-200 rounded bg-white p-4 hover:shadow-md">
      <div className="flex items-start justify-between mb-2">
        <Link to={`/notes/${note.slug}`} className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600">
            {note.title}
          </h3>
        </Link>
        <span className={`${getBadgeColor()} text-white text-xs px-2 py-1 rounded-full ml-2`}>
          {note.category}
        </span>
      </div>

      <p className="text-sm text-gray-500 mb-3">
        {new Date(note.updated).toLocaleDateString()}
      </p>

      <p className="text-gray-700 text-sm leading-relaxed">
        {bodyPreview}
      </p>
    </div>
  );
}

export default NoteCard;