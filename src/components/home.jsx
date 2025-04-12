import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";

const Home = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index); // Filter out the note to delete
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes)); // Update localStorage
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 w-full">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-900">Welcome to Remind-Me Application</h1>
      <p className="text-lg mb-8 text-center text-gray-600">Your personal note-taking application.</p>

      <div className="grid center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-5 gap-4 min-w">
        <Link
          to="/Add"
          className="text-center w-full mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add a Note
        </Link>
        <Link
          to="/view"
          className="text-center w-full mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          View Notes
        </Link>

        <Link
          to="/search"
          className="text-center w-full mt-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
        >
          Search Notes
        </Link>
      </div>

      <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-gray-900">Stored Notes</h2>
      <div className="w-full max-w-md mx-auto">
        {notes.length === 0 ? (
          <p className="text-center text-gray-500">No notes available.</p>
        ) : (
          notes.map((note, index) => (
            <div
              key={index}
              className="bg-white border-l-4 border-blue-500 p-4 shadow-md rounded-lg transition duration-200 hover:shadow-lg mb-4"
            >
              {/* Note Title as a Link */}
              <Link
                to={`/view/${index}`}
                className="text-xl font-semibold text-blue-700 mb-2 hover:text-blue-900 block"
              >
                {note.title}
              </Link>
              <p className="text-gray-700">{note.content}</p>
              {/* Edit button */}
              <Link
                to={`/edit/${index}`}
                className="mt-4 inline-block text-blue-500 hover:text-blue-700 mr-4"
              >
                Edit
              </Link>
              {/* Delete button */}
              <button
                onClick={() => handleDeleteNote(index)}
                className="mt-4 inline-block text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
