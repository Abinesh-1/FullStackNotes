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