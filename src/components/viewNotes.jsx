import React, { useState, useEffect } from "react";

const ViewNotes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">All Notes</h2>
      {notes.length === 0 ? (
        <p className="text-center text-gray-500">No notes available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note, index) => (
            <div key={index} className="bg-white border-l-4 border-blue-500 p-4 shadow-md rounded-lg transition duration-200 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{note.title}</h3>
              <p className="text-gray-700">{note.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>      
  );
};

export default ViewNotes;
