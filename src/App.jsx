import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import AddNoteModal from './components/addNoteModal';
import ViewNotes from './components/viewNotes';
import SearchNotes from './components/searchNotes';
import ContactUs from './components/contactUs';
import Settings from './components/settings';
import EditNotes from './components/editNotes';
import ViewNote from './components/viewNote';
import Footer from './components/footer';




const App = () => {
  return (   
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/add" element={<AddNoteModal />} />
        <Route path="/view" element={<ViewNotes />} />
        <Route path="/view/:index" element={<ViewNote />} /> {/* View note by index */}
        <Route path="/edit/:id" element={<EditNotes />} /> {/* Edit note route */}
        <Route path="/search" element={<SearchNotes />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </>
  );
};

export default App;
