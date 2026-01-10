// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from "react-router-dom";
// import { BiSolidTrashAlt } from "react-icons/bi";
// import { FiEdit } from "react-icons/fi";
// import axios from 'axios';
// import { FormatDate } from '../components/formatDate';
// import Modal from "../components/Modal"

// function NoteDetailPage({deleteNote}){

//   const [isOpen,setIsOpen] = useState(false)

//   const handleIsOpen = () => {
//     setIsOpen(!isOpen)
//   }

//   const [note,setNote] = useState({});

//   const {slug} = useParams()

//   useEffect(() => {
//     axios.get(`http://127.0.0.1:8000/notes/${slug}`)
//     .then((res) => {
//       setNote(res.data)
//       console.log(res.data)
//     })
//     .catch((err) => {
//       console.log(err.message)
//     })
//   },[slug])

//   return (
//  <>
//  <div className="max-w-5xl  mx-auto bg-white p-6 rounded-lg shadow-md">
//   <h3 className="text-2xl font-semibold text-center mb-4">
//     {note.title}
//   </h3>

//   <div className="flex justify-center gap-8 mb-6 text-sm text-gray-500">
//     <p>created: {FormatDate(note.created)}</p>
//     <p>last updated: {FormatDate(note.updated)}</p>
//   </div>

//   <div className="flex justify-center gap-4 mb-6">
//     <Link to={`/edit-note/${note.slug}`}>
//         <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition">
//       <FiEdit />
//       <span>Edit</span>
//     </button>
//     </Link>

//     <button onClick={handleIsOpen} className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition">
//       <BiSolidTrashAlt />
//       <span>Delete</span>
//     </button>
//   </div>

//   <p className="text-gray-700 leading-relaxed text-justify">
//     {note.body}
//   </p>
// </div>
// { isOpen && <Modal handleIsOpen={handleIsOpen} deleteNote={() => deleteNote(slug)}/>}
//  </>
//   )
// }

// export default NoteDetailPage;

// ----------- 


import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BiSolidTrashAlt } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import axios from "axios";
import { FormatDate } from "../components/FormatDate";
import Modal from "../components/Modal";
function NoteDetailPage({ deleteNote }) {
  const [isOpen, setIsOpen] = useState(false);
  const [note, setNote] = useState({});
  const { slug } = useParams();

  const handleIsOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/notes/${slug}`)
      .then((res) => setNote(res.data))
      .catch((err) => console.log(err.message));
  }, [slug]);

  return (
    <>
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8 mt-10">
        {/* Title */}
        <h3 className="text-3xl font-bold text-center mb-6 text-gray-800">
          {note.title}
        </h3>

        {/* Dates */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 text-gray-500 text-sm sm:text-base mb-6">
          <p>Created: {FormatDate(note.created)}</p>
          <p>Last updated: {FormatDate(note.updated)}</p>
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          <Link to={`/edit-note/${note.slug}`}>
            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition shadow-md hover:shadow-lg">
              <FiEdit className="text-lg" />
              <span>Edit</span>
            </button>
          </Link>

          <button
            onClick={handleIsOpen}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition shadow-md hover:shadow-lg"
          >
            <BiSolidTrashAlt className="text-lg" />
            <span>Delete</span>
          </button>
        </div>

        {/* Note Body */}
        <p className="text-gray-700 leading-relaxed text-justify whitespace-pre-line">
          {note.body}
        </p>
      </div>

      {/* Modal */}
      {isOpen && (
        <Modal handleIsOpen={handleIsOpen} deleteNote={() => deleteNote(slug)} />
      )}
    </>
  );
}

export default NoteDetailPage;
