import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";

const Home = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-gray-800 w-full">
      <h1 className="text-4xl font-bold mb-4">Welcome to Remind-Me Application</h1>
      <p className="text-lg mb-8">Your personal note-taking application.</p>
      
      <div className="grid center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-5 gap-4 min-w">
        <Link to="/Add" className="text-center w-full mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
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

      {/* Display stored notes or current date */}
      <div className="mt-8 w-full text-center">
        {notes.length > 0 ? (
          <div>
            <h2 className="text-xl font-bold mb-4">Stored Notes:</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {notes.map((note, index) => (
                <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white shadow-md rounded-lg p-4">
                  <div className="text-lg font-semibold mb-2">{note.title}</div>
                  <p className="text-gray-600 mb-4">{note.content}</p>
                  <Link 
                    to={`/edit/${index}`} 
                    className="inline-block bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-lg">
            <p>No notes found. Current Date: {new Date().toLocaleString()}</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
