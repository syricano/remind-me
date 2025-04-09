import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SearchNotes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    const results = notes.filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredNotes(results);
  }, [searchTerm, notes]);

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index); // Filter out the note to delete
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes)); // Update localStorage
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-2xl text-black font-bold mb-4">Search Notes</h1>

      {/* 🔍 Search Bar */}
      <input
        type="text"
        placeholder="Search by title or content..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full mt-4 bg-white text-black px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      {/* 📝 Notes List */}
      {filteredNotes.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">No matching notes found.</p>
      ) : (
        filteredNotes.map((note, index) => (
          <div
            key={index}
            className="bg-white text-black p-4 mt-4 border-l-4 border-blue-500 shadow-md rounded hover:bg-gray-100 hover:shadow-lg transition duration-300"
          >
            <h3 className="text-lg font-semibold">{note.title}</h3>
            <p className="text-gray-700">{note.content}</p>

            {/* Edit and Delete Buttons */}
            <div className="mt-4 flex justify-end gap-4">
              <Link
                to={`/edit/${index}`} // Navigate to the Edit page with the note index
                className="text-blue-500 hover:text-blue-700"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDeleteNote(index)} // Call handleDeleteNote on click
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchNotes;
