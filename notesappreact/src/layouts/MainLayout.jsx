import React from 'react';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';


function MainLayout({searchText,handleSearchText}){
  return (
    <div>
      <Navbar searchText={searchText} handleSearchText={handleSearchText}/>
      <ToastContainer />
      <Outlet/>
    </div>
  )
}


export default MainLayout;