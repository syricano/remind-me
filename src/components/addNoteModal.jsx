import React, { useState } from "react";

const AddNoteModal = ({ closeModal, addNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState(""); // The selected date
  const [image, setImage] = useState(null); // Image (optional)

  const randomImages = [
    "https://picsum.photos/200/300?random1",
    "https://picsum.photos/200/300?random2",
    "https://picsum.photos/200/300?random3",
    "https://picsum.photos/200/300?random4",
  ]; // Replace with your list of image URLs

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Set the image as a base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title || !content) {
      alert("Title and Content are required.");
      return;
    }

    if (!date) {
      alert("Please select a valid date.");
      return;
    }

    const newNote = {
      id: Date.now(), // Use timestamp as unique ID
      title,
      content,
      date,
      image: image || randomImages[Math.floor(Math.random() * randomImages.length)], // Use a random image if no image is uploaded
    };

    addNote(newNote);
    closeModal();
  };

  return (
    <div className="modal-overlay fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="modal-container bg-white p-6 rounded-lg shadow-lg w-full sm:w-11/12 md:w-3/4 lg:w-1/3">
        <h2 className="text-2xl font-semibold mb-4 text-black">Add a New Note</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded text-black"
            required
          />

          {/* Content */}
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full sm:w-full md:w-full lg:w-full xl:w-full h-32 sm:h-40 md:h-48 lg:h-64 xl:h-80 px-4 py-2 border border-gray-300 rounded text-black"
            required
          />

          {/* Date Picker */}
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={new Date().toISOString().split("T")[0]} // Disable past dates
            max={new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split("T")[0]} // Disable dates more than a year in the future
            onClick={(e) => e.target.showPicker()}
            className="w-full px-4 py-2 border border-gray-300 rounded text-black"
            required
          />

          {/* Image Upload (Optional) */}
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border border-gray-300 rounded text-black"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Note
          </button>
        </form>

        <button
          onClick={closeModal}
          className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AddNoteModal;
