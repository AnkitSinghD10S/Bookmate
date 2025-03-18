import { useState } from "react";

function UploadBook() {
  const [input, setInput] = useState({
    bookName: "",
    bookAuthorName: "",
    publishedYear: "",
    bookImage: null,
    bookLink: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Book Data:", input);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">
          Upload Book
        </h2>

        {/* Book Name */}
        <label htmlFor="bookName" className="block text-gray-600 mb-1">Book Name:</label>
        <input
          type="text"
          name="bookName"
          value={input.bookName}
          onChange={handleChange}
          placeholder="Enter book name"
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Author Name */}
        <label htmlFor="bookAuthorName" className="block text-gray-600 mb-1">Author:</label>
        <input
          type="text"
          name="bookAuthorName"
          value={input.bookAuthorName}
          onChange={handleChange}
          placeholder="Enter author name"
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Published Year */}
        <label htmlFor="publishedYear" className="block text-gray-600 mb-1">Published Year:</label>
        <input
          type="date"
          name="publishedYear"
          value={input.publishedYear}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Book Image Upload */}
        <label htmlFor="bookImage" className="block text-gray-600 mb-1">Book Image:</label>
        <input
          type="file"
          name="bookImage"
          onChange={handleFileChange}
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none"
        />

        {/* Book File Upload */}
        <label htmlFor="bookLink" className="block text-gray-600 mb-1">Book:</label>
        <input
          type="file"
          name="bookLink"
          onChange={handleFileChange}
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Upload Book
        </button>
      </form>
    </div>
  );
}

export default UploadBook;
