import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import AddNote from './components/addNote';
import ViewNotes from './components/viewNotes';
import EditNotes from './components/editNotes';
import DeleteNotes from './components/deleteNotes';
import SearchNotes from './components/searchNotes';
import ContactUs from './components/contactUs';
import Settings from './components/settings';
import Footer from './components/footer';




const App = () => {
  return (   
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        {/* Add other routes here */}
        <Route path="/add" element={<AddNote />} />
        <Route path="/view" element={<ViewNotes />} />
        <Route path="/edit/:id" element={<EditNotes />} />
        <Route path="/delete" element={<DeleteNotes />} />
        <Route path="/search" element={<SearchNotes />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/footer" element={<Footer />} />
        {/* Add more routes as needed */}
      </Routes>
    </>
  );
};

export default App;
