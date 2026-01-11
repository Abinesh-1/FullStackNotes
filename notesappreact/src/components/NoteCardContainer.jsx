import React from "react";
import NoteCard from "./NoteCard";
import Loader from "./Loader";

function NoteCardContainer({notes, loading}) {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader loading={loading} />
      </div>
    );
  }

  if (notes.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 text-lg">No notes found</p>
        <p className="text-gray-400 text-sm mt-2">Try creating a new note or adjusting your filters</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map(note => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}

export default NoteCardContainer;