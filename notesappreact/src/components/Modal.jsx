import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Modal({handleIsOpen, deleteNote}) {
  const navigate = useNavigate();

  const handleDeleteNote = () => {
    deleteNote();
    navigate("/");
    toast.success("Note Deleted Successfully");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-md shadow-xl w-full max-w-sm">
        <div className="border-b px-5 py-4">
          <h3 className="text-lg font-semibold text-gray-800">Confirm Delete</h3>
        </div>
        
        <div className="px-5 py-6">
          <p className="text-gray-600 text-sm mb-1">
            Are you sure you want to delete this note?
          </p>
          <p className="text-gray-500 text-xs">
            This action cannot be undone.
          </p>
        </div>

        <div className="border-t px-5 py-4 flex gap-2 justify-end">
          <button
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded border"
            onClick={handleIsOpen}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 text-sm bg-red-600 text-white hover:bg-red-700 rounded"
            onClick={handleDeleteNote}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;