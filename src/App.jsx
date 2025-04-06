import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';



const App = () => {
  return (   
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        {/* Add other routes here */}
      </Routes>
    </>
  );
};

export default App;
