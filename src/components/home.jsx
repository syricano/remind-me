// Home.jsx
import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-gray-800  w-full ">
      <h1 className="text-4xl font-bold mb-4">Welcome to Remind-Me Application</h1>
      <p className="text-lg mb-8">Your personal note-taking application.</p>
      <div className="grid center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-5 gap-4 min-w ">
        <Link to="/add" className="text-center w-full mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add a Note
        </Link>
        <Link to="/view" className="text-center w-full mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            View Notes
        </Link>
        <Link to="/edit" className="text-center w-full mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
            Edit Notes
        </Link>
        <Link to="/delete" className="text-center w-full mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Delete Notes
        </Link>
        <Link to="/search" className="text-center w-full mt-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
            Search Notes
        </Link>

      </div>
      
        
    </div>
  );
};

export default Home;
