import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditNote = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [notes, setNotes] = useState([]);
    const [note, setNote] = useState({ title: "", content: "" });

    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
        setNotes(storedNotes);
        setNote(storedNotes[id] || { title: "", content: "" });
    }, [id]);

    const handleUpdateNote = (e) => {
        e.preventDefault();

        const updatedNotes = [...notes];
        updatedNotes[id] = note;

        setNotes(updatedNotes);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));

        alert("Note updated successfully!");
        navigate("/view"); // رجوع لصفحة عرض الملاحظات
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-start">
            <form
                onSubmit={handleUpdateNote}
                className="bg-white shadow-md rounded-lg p-6 w-full max-w-md space-y-4"
            >
                <h2 className="text-2xl font-bold text-gray-800 text-center">Edit Note</h2>

                <input
                    type="text"
                    placeholder="Title"
                    value={note.title}
                    onChange={(e) => setNote({ ...note, title: e.target.value })}
                    className="text-gray-800 placeholder-gray-500 bg-white border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                />

                <textarea
                    placeholder="Content"
                    value={note.content}
                    onChange={(e) => setNote({ ...note, content: e.target.value })}
                    className="text-gray-800 placeholder-gray-500 bg-white border border-gray-300 rounded px-4 py-2 w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                ></textarea>

                <button
                    type="submit"
                    className="bg-blue-500 text-white font-medium py-2 px-4 rounded w-full hover:bg-blue-600 transition"
                >
                    Update Note
                </button>
            </form>
        </div>
    );
};

export default EditNote;
