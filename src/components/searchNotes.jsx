import React, { useState, useEffect } from "react";

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
          <div key={index} className="bg-white p-4 mt-4 border-l-4 border-blue-500 shadow rounded">
            <h3 className="text-lg font-semibold text-black">{note.title}</h3>
            <p className="text-gray-700">{note.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchNotes;
