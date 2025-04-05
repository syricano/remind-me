import React, { useState, useEffect } from "react";

const notes = [
    {id: 1, title: 'Note 1', content: 'This is the first note.', date: '2025.04.05'},
    {id: 2, title: 'Note 2', content: 'This is the second note.', date: '2025.04.06'},
    {id: 3, title: 'Note 3', content: 'This is the third note.', date: '2025.04.07'},
];

// save notes to local storage
const saveNotesToLocalStorage = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
}

// get notes from local storage
const getNotesFromLocalStorage = () => {
    const notes = localStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
}

// delete notes from local storage
const deleteNotesFromLocalStorage = (id) => {
    const notes = getNotesFromLocalStorage();
    const filteredNotes = notes.filter(note => note.id !== id);
    saveNotesToLocalStorage(filteredNotes);
}

// update notes in local storage
const updateNotesInLocalStorage = (id, updatedNote) => {
    const notes = getNotesFromLocalStorage();
    const updatedNotes = notes.map(note => note.id === id ? updatedNote : note);
    saveNotesToLocalStorage(updatedNotes);
}

const NotesApp = () => {
    const [localNotes, setLocalNotes] = useState(getNotesFromLocalStorage()); // get notes from local storage

    // handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // add note logic here (e.g., get data from inputs)
    };

    // useEffect to sync notes with localStorage
    useEffect(() => {
        saveNotesToLocalStorage(localNotes);
    }, [localNotes]); // update localStorage whenever notes change

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-5">Notes App</h1>
            <form onSubmit={handleSubmit} className="mb-5">
                <input type="text" placeholder="Title" className="border border-gray-300 rounded p-2 mr-2" />
                <input type="text" placeholder="Content" className="border border-gray-300 rounded p-2 mr-2" />
                <button type="submit" className="bg-blue-500 text-white rounded p-2">Add Note</button>
            </form>
            <ul className="list-disc pl-5">
                {localNotes.map(note => (
                    <li key={note.id} className="mb-2">
                        <h2 className="text-xl font-bold">{note.title}</h2>
                        <p>{note.content}</p>
                        <p>{note.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NotesApp;
