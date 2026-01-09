import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Modal({handleIsOpen,deleteNote}){

  const navigate = useNavigate()

 const handleDeleteNote = () => {
      deleteNote()
      navigate("/")
      toast.success("Note Deleted Successfully")
 }

  return (
   <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
  <div className="bg-white rounded-lg shadow-lg w-full max-w-md relative">
    <button
      className="absolute top-3 right-3 text-2xl text-gray-500 hover:text-gray-700"
      onClick={handleIsOpen}
    >
      ×
    </button>
    <div className="p-6 text-center">
      <h2 className="text-xl font-semibold mb-2">Delete Note</h2>
      <p className="text-gray-600 mb-6">
        Are you you want to Delete this note?
      </p>
      <span className="flex justify-center">
        <button
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded mr-3"
          onClick={handleDeleteNote}
        >
          Delete
        </button>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          onClick={handleIsOpen}
        >
          Cancel
        </button>
      </span>
    </div>
  </div>
</div>
  )
}

export default Modal;

