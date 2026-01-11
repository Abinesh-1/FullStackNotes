import React, { useEffect } from 'react';
import Filter from "../components/Filter";
import NoteCardContainer from '../components/NoteCardContainer';

function HomePage({notes, loading, handleFilterText}) {
  // Reset filter when returning to home page
  useEffect(() => {
    handleFilterText("");
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">  
      {!loading && notes.length > 0 && (
        <Filter handleFilterText={handleFilterText} />
      )}
      <NoteCardContainer notes={notes} loading={loading} />
    </div>
  );
}

export default HomePage;