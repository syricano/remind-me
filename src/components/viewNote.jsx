import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const ViewNote = () => {
  const {index  } = useParams(); // Get the index from the URL
  const [note, setNote] = useState(null);

  useEffect(() => {

    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const noteIndex = parseInt(index, 10);

    if (!isNaN(noteIndex) && savedNotes[noteIndex]) {
      setNote(savedNotes[noteIndex]);
    }
  }, [index]);

  if (!note) {
    return (
      <div className="p-6 bg-white min-h-screen">
        <h1 className="text-2xl text-black font-bold mb-4">Note not found</h1>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-2xl text-black font-bold mb-4">View Note</h1>

      {/* 📝 Note Card */}
      <div className="bg-white text-black p-6 mt-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition duration-300 line-clamp-2">
        {/* Note Title */}
        <h2 className="text-xl font-semibold text-gray-800">{note.title}</h2>

        {/* Note Content */}
        <p className="text-gray-700 mt-4 line-clamp-2">{note.content}</p>

        {/* Display image if exists */}
        {note.image && (
          <img src={note.image} alt="Note" className=" h-32 object-cover rounded mt-4" />
        )}

        {/* Edit and Delete Buttons */}
        <div className="mt-6 flex justify-end gap-4">
          <Link
            to={`/view`} // Navigate to the Edit page with the note index
            className="text-blue-500 hover:text-blue-700"
          >
            Edit
          </Link>
          <button
            onClick={() => {
              const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
              savedNotes.splice(index, 1); // Delete the note at the specific index
              localStorage.setItem("notes", JSON.stringify(savedNotes)); // Save the updated notes
              window.location.href = "/"; // Redirect back to the home page
            }}
            className="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewNote;
