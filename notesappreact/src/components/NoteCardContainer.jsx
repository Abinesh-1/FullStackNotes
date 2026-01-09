import React from "react";
import NoteCard from "./NoteCard";
import Loader from "./Loader";

function NoteCardContainer({notes,loading}) {
  return (
    <div className="w-full px-6 py-8 bg-gray-50 min-h-screen">
      <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">

       {loading && <Loader loading={loading}/> }

    {notes.map(note => <NoteCard key={note.id} note={note}/>)}
      </div>
    </div>
  );
}

export default NoteCardContainer;
