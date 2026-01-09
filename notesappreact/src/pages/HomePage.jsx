import React from 'react';
import Filter from "../components/Filter";
import NoteCardContainer from '../components/NoteCardContainer';

function HomePage({notes,loading,handleFilterText}) {
  return (
    <div>  
     {notes.length < 1 ?<div className="flex items-center justify-center min-h-[60vh] px-4">
  <p className="bg-blue-600 text-white text-center text-sm sm:text-base md:text-lg font-medium px-3 py-2 rounded-lg shadow-lg w-70 max-w-md">
    Notes not Available
  </p>
</div>

 : <Filter handleFilterText={handleFilterText}/>}
      <NoteCardContainer notes={notes}  loading={loading}/>
    </div>
  )
}

export default HomePage;


