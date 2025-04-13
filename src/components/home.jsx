import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import AddNoteModal from "./addNoteModal";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  const addNote = (newNote) => {
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter(note => (note.id !== id));
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-6 bg-white gradient-to-r from-blue-100 to-blue-200 min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-900">Welcome to Remind-Me Application</h1>
      <p className="text-lg mb-8 text-center text-gray-600">Your personal note-taking application.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-6">
        <button
          onClick={openModal}
          className="text-center w-full mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add a Note
        </button>
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
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 line-clamp-2">
        {notes.length === 0 ? (
          <p className="text-center text-gray-500">No notes available.</p>
        ) : (
          notes.map((note) => (
            <div
              key={note.id}
              className="bg-white border-l-4 border-blue-500 p-4 shadow-md rounded-lg transition duration-200 hover:shadow-lg"
            >
              <Link
                to={`/view`}
                className="text-xl font-semibold text-blue-700 mb-2 hover:text-blue-900 block"
              >
                {note.title}
              </Link>
              <p className="text-gray-700 line-clamp-2">{note.content}</p>
              <p className="text-gray-500 text-sm">{note.date}</p>

              {note.image && (
                <img src={note.image} alt="Note" className="w-full h-64 object-cover mt-2 rounded" />
              )}

              <Link
                to={`/edit/${note.id}`}
                className="mt-4 inline-block text-blue-500 hover:text-blue-700 mr-4"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDeleteNote(note.id)}
                className="mt-4 inline-block text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      {isModalOpen && <AddNoteModal closeModal={closeModal} addNote={addNote} />}
      <Footer />
    </div>
  );
};

export default Home;
