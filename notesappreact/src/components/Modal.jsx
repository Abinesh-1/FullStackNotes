// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// function Modal({handleIsOpen,deleteNote}){

//   const navigate = useNavigate()

//  const handleDeleteNote = () => {
//       deleteNote()
//       navigate("/")
//       toast.success("Note Deleted Successfully")
//  }

//   return (
//    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//   <div className="bg-white rounded-lg shadow-lg w-full max-w-md relative">
//     <button
//       className="absolute top-3 right-3 text-2xl text-gray-500 hover:text-gray-700"
//       onClick={handleIsOpen}
//     >
//       ×
//     </button>
//     <div className="p-6 text-center">
//       <h2 className="text-xl font-semibold mb-2">Delete Note</h2>
//       <p className="text-gray-600 mb-6">
//         Are you you want to Delete this note?
//       </p>
//       <span className="flex justify-center">
//         <button
//           className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded mr-3"
//           onClick={handleDeleteNote}
//         >
//           Delete
//         </button>
//         <button
//           className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
//           onClick={handleIsOpen}
//         >
//           Cancel
//         </button>
//       </span>
//     </div>
//   </div>
// </div>
//   )
// }

// export default Modal;



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