import React, { useState, useEffect } from "react";

const AddNote = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
        setNotes(storedNotes);
    }, []);

    const handleAddNote = (e) => {
        e.preventDefault();

        const today = new Date().toISOString().split("T")[0];

        const newNote = {
            title: e.target[0].value,
            content: e.target[1].value,
            date: today,
        };

        const updatedNotes = [...notes, newNote];
        setNotes(updatedNotes);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));

        e.target[0].value = "";
        e.target[1].value = "";

        alert("Note added successfully!");
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-start">
            <form
                onSubmit={handleAddNote}
                className="bg-white shadow-md rounded-lg p-6 w-full max-w-md space-y-4"
            >
                <h2 className="text-2xl font-bold text-gray-800 text-center">Add New Note</h2>
                
                <input
                    type="text"
                    placeholder="Title"
                    className="text-gray-800 placeholder-gray-500 bg-white border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                />
                
                <textarea
                    placeholder="Content"
                    className="text-gray-800 placeholder-gray-500 bg-white border border-gray-300 rounded px-4 py-2 w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                ></textarea>
                
                <button
                    type="submit"
                    className="bg-blue-500 text-white font-medium py-2 px-4 rounded w-full hover:bg-blue-600 transition"
                >
                    Add Note
                </button>
            </form>
        </div>
    );
};

export default AddNote;
