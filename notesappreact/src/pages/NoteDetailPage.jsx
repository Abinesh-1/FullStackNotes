import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BiSolidTrashAlt } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import axios from "axios";
import { FormatDate } from "../components/FormatDate";
import Modal from "../components/Modal";
import API_URL from '../config'; 

function NoteDetailPage({ deleteNote }) {
  const [isOpen, setIsOpen] = useState(false);
  const [note, setNote] = useState({});
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    axios.get(`${API_URL}/notes/${slug}`)
      .then((res) => {
        setNote(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <div className="text-center py-20">Loading note...</div>;
  }

  const getCategoryColor = () => {
    if (note.category === "BUSINESS") return "bg-blue-500";
    if (note.category === "PERSONAL") return "bg-green-500";
    return "bg-orange-500";
  };

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-4">
          <Link to="/" className="text-blue-600 hover:underline text-sm">
            ← Back to notes
          </Link>
        </div>

        <div className="bg-white border rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <span className={`${getCategoryColor()} text-white text-xs px-2 py-1 rounded-full`}>
                {note.category}
              </span>
              <h1 className="text-3xl font-bold text-gray-800 mt-3 mb-2">
                {note.title}
              </h1>
              <div className="text-sm text-gray-500 space-x-4">
                <span>Created {FormatDate(note.created)}</span>
                <span>•</span>
                <span>Updated {FormatDate(note.updated)}</span>
              </div>
            </div>
          </div>

          <hr className="my-6" />

          <div className="prose max-w-none">
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
              {note.body}
            </p>
          </div>

          <hr className="my-6" />

          <div className="flex gap-2">
            <Link to={`/edit-note/${note.slug}`}>
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">
                <FiEdit />
                Edit
              </button>
            </Link>
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm"
            >
              <BiSolidTrashAlt />
              Delete
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <Modal handleIsOpen={() => setIsOpen(false)} deleteNote={() => deleteNote(slug)} />
      )}
    </>
  );
}

export default NoteDetailPage;