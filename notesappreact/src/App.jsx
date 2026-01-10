import React, { useEffect, useState } from "react"; 
import HomePage from "./pages/HomePage";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AddNotePage from "./pages/AddNotes";
import NoteDetailPage from "./pages/NoteDetailPage";
import EditNotePage from "./pages/EditNotePage";
import axios from "axios";
import { toast } from 'react-toastify';
import API_URL from './config';

function App(){
  const [notes,setNotes] = useState([]);
  const [isLoading,setIsLoading] = useState(false)
  const [searchText,setSearchtext] = useState("")
  const [filterText,setFilterText] = useState("")

  const handleFilterText = (val) => {
    setFilterText(val)
  }

  const handleSearchText = (val) => {
    setSearchtext(val)
  }

const filteredNotes =
    filterText === "BUSINESS"
      ? notes.filter((note) => note.category == "BUSINESS")
      : filterText === "PERSONAL"
      ? notes.filter((note) => note.category == "PERSONAL")
      : filterText === "IMPORTANT"
      ? notes.filter((note) => note.category == "IMPORTANT")
      : notes;


      useEffect(() => {
        if(searchText.length < 3) return;
        axios.get(`${API_URL}/notes-search/?search=${searchText}`)
        .then((res) => {
          setNotes(res.data)
        })
        .catch((err) => {
          console.log(err.message)
        })
      },[searchText])

  useEffect(() => {
  setIsLoading(true)
   axios.get("${API_URL}/notes/")
   .then((res) => {
    console.log(res.data)
    setNotes(res.data)
    setIsLoading(false)
   })
   .catch((err) => {
   console.log(err.message)
   })
  },[])

  const addNote = (data) => {
     axios.post("${API_URL}/notes/",data)
     .then((res) => {
      setNotes([...notes,res.data])
      toast.success("New Note has been added successfully")
      console.log(res)
     })
     .catch((err) => {
      console.log(err.message)
     })
  }

const updateNote = (data, slug) => {
  return axios.put(`${API_URL}/notes/${slug}/`, data)
    .then((res) => {
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.slug === slug ? res.data : note
        )
      );
      toast.success("Note Updated Successfully");
      return res.data;
    })
    .catch((err) => {
      console.log(err.message);
      throw err;
    });
}


 const deleteNote = (slug) => {
  axios.delete(`${API_URL}/notes/${slug}/`)
    .then(() => {
      setNotes((prevNotes) => prevNotes.filter((note) => note.slug !== slug));
      toast.success("Note deleted successfully");
    })
    .catch((err) => {
      console.log(err.message);
      toast.error("Failed to delete note");
    });
}

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout searchText={searchText} handleSearchText={handleSearchText}/>}>
          <Route index element={<HomePage notes={filteredNotes} loading={isLoading} handleFilterText={handleFilterText}/>}/>
          <Route path="/add-note" element={<AddNotePage addNote={addNote}/>}/>
          <Route path="/notes/:slug" element={<NoteDetailPage deleteNote={deleteNote} />} />
          <Route path="/edit-note/:slug" element={<EditNotePage updateNote={updateNote}/>} />
    </Route>
  ))

  return <RouterProvider router={router} />
}

export default App;