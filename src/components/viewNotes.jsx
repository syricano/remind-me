import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ViewNotes = () => {
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
    <div className="p-6 bg-white min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">All Notes</h2>
      {notes.length === 0 ? (
        <p className="text-center text-gray-500">No notes available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note, index) => (
            <div
              key={index}
              className="bg-white border-l-4 border-blue-500 p-4 shadow-md rounded-lg transition duration-200 hover:shadow-lg"
            >
              {/* Title as a Link to ViewNote */}
              <Link
                to={`/view/${index}`} // Navigate to the ViewNote page with the note ID (index)
                className="card-title text-xl font-semibold text-gray-800 hover:text-blue-600"
              >
                {note.title}
              </Link>
              <p className="text-gray-700 line-clamp-2">{note.content}</p>
              
              {/* Display the image if exists */}
              {note.image && (
                <img src={note.image} alt="Note" className=" h-32 object-cover rounded mt-4" />
              )}

              {/* Edit button */}
              <Link
                to={`/edit/${index}`} // Navigate to the EditNote page with the note ID (index)
                className="mt-4 inline-block text-blue-500 hover:text-blue-700 mr-4"
              >
                Edit
              </Link>
              {/* Delete button */}
              <button
                onClick={() => handleDeleteNote(index)} // Call handleDeleteNote on click
                className="mt-4 inline-block text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewNotes;
