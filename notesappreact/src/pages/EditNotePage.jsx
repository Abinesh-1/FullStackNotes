// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";

// function EditNotePage({updateNote}){

//   const [title,setTitle] = useState("")
//   const [body,setBody] = useState("")
//   const [category,setCategory] = useState("")

//   const {slug} = useParams();
//   const navigate = useNavigate()
//   useEffect(() => {
//     axios.get(`${API_URL}/notes/${slug}`)
//     .then((res) => {
//       setTitle(res.data.title)
//       setBody(res.data.body)
//       setCategory(res.data.category)
//     })
//     .catch((err) => {
//       console.log(err.message)
//     })
//   },[slug])

//   const updateNoteObject = {
//     title:title,
//     body:body,
//     category:category
//   }

//   const handleSubmit = (e) => {
//   e.preventDefault();
//   if(!title || !body || !category) return;
//   updateNote(updateNoteObject,slug)
//   navigate("/");
//   }


//   return (
//     <form onSubmit={handleSubmit} className="max-w-xl mt-10 mx-auto bg-white p-6 rounded-lg shadow">
//   <h5 className="text-lg font-semibold mb-4">Update Note</h5>

//   <div className="mb-4">
//     <label
//       htmlFor="exampleFormControlInput1"
//       className="block text-sm font-medium text-gray-700 mb-1"
//     >
//       Title
//     </label>
//     <input
//       type="text"
//       className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       id="exampleFormControlInput1"
//       placeholder="Enter note's title"
//       value={title}
//       onChange={(e) => setTitle(e.target.value)}
//     />
//   </div>

//   <div className="mb-4">
//     <label
//       htmlFor="exampleFormControlTextarea1"
//       className="block text-sm font-medium text-gray-700 mb-1"
//     >
//       Content
//     </label>
//     <textarea
//       className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       id="exampleFormControlTextarea1"
//       rows={4}
//       placeholder="Enter note's content"
//       value={body}
//       onChange={(e) => setBody(e.target.value)}
//     ></textarea>
//   </div>

//   <div className="mb-4">
//     <label
//       htmlFor="exampleFormControlTextarea1"
//       className="block text-sm font-medium text-gray-700 mb-1"
//     >
//       Note's category
//     </label>
//     <select
//       className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       aria-label="Default select example"
//       style={{ height: "40px" }}
//       value={category}
//       onChange={(e) => setCategory(e.target.value)}
//     >
//       <option value="">Pick a category</option>
//       <option value="BUSINESS">Business</option>
//       <option value="PERSONAL">Personal</option>
//       <option value="IMPORTANT">Important</option>
//     </select>
//   </div>

//   <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md flex justify-center">
//     Update Note
//   </button>
// </form>
//   )
// }


// export default EditNotePage;

// ------------- 

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import API_URL from '../config';  

function EditNotePage({ updateNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");

  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/notes/${slug}`)
      .then((res) => {
        setTitle(res.data.title);
        setBody(res.data.body);
        setCategory(res.data.category);
      })
      .catch((err) => console.log(err.message));
  }, [slug]);

  const updateNoteObject = { title, body, category };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body || !category) return;
    updateNote(updateNoteObject, slug);
    navigate("/"); // Redirect to home after update
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Update Note
      </h2>

      {/* Title */}
      <div className="mb-5">
        <label className="block text-gray-700 font-semibold mb-2">Title</label>
        <input
          type="text"
          placeholder="Enter note's title"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* Content */}
      <div className="mb-5">
        <label className="block text-gray-700 font-semibold mb-2">Content</label>
        <textarea
          rows={5}
          placeholder="Enter note's content"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>

      {/* Category */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Category</label>
        <select
          className="w-full h-12 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Pick a category</option>
          <option value="BUSINESS">Business</option>
          <option value="PERSONAL">Personal</option>
          <option value="IMPORTANT">Important</option>
        </select>
      </div>

      {/* Update Button */}
      <button
        type="submit"
        className="w-full py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-blue-600 transition"
      >
        Update Note
      </button>
    </form>
  );
}

export default EditNotePage;
