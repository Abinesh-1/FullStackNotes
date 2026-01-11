// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function AddNotes({ addNote }) {
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");
//   const [category, setCategory] = useState("");

//   const navigate = useNavigate();

//   const newNote = {
//     title: title,
//     body: body,
//     category: category,
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!title || !body || !category) return;

//     addNote(newNote);
//     navigate("/");
//     console.log(newNote);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-2xl mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg"
//     >
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//         Add New Note
//       </h2>

//       {/* Title */}
//       <div className="mb-5">
//         <label className="block text-gray-700 font-semibold mb-2">Title</label>
//         <input
//           type="text"
//           placeholder="Enter note's title"
//           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//       </div>

//       {/* Content */}
//       <div className="mb-5">
//         <label className="block text-gray-700 font-semibold mb-2">Content</label>
//         <textarea
//           rows={5}
//           placeholder="Enter note's content"
//           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//           value={body}
//           onChange={(e) => setBody(e.target.value)}
//         ></textarea>
//       </div>

//       {/* Category */}
//       <div className="mb-6">
//         <label className="block text-gray-700 font-semibold mb-2">Category</label>
//         <select
//           className="w-full h-12 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//         >
//           <option value="">Pick a category</option>
//           <option value="BUSINESS">Business</option>
//           <option value="PERSONAL">Personal</option>
//           <option value="IMPORTANT">Important</option>
//         </select>
//       </div>

//       {/* Submit */}
//       <button
//         type="submit"
//         className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-600 transition"
//       >
//         Add Note
//       </button>
//     </form>
//   );
// }

// export default AddNotes;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddNotes({ addNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body || !category) {
      alert("Please fill all fields");
      return;
    }

    addNote({ title, body, category });
    navigate("/");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New Note</h2>
      
      <form onSubmit={handleSubmit} className="bg-white border rounded-lg p-6 shadow-sm">
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Title</label>
          <input
            type="text"
            placeholder="Note title"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Category</label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select category</option>
            <option value="BUSINESS">Business</option>
            <option value="PERSONAL">Personal</option>
            <option value="IMPORTANT">Important</option>
          </select>
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">Content</label>
          <textarea
            rows={6}
            placeholder="Write your note here..."
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Save Note
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNotes;