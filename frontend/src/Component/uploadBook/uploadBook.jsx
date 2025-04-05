import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function UploadBook() {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    bookName: "",
    bookAuthorName: "",
    publishedYear: "",
    bookImage: null,
    bookLink: null,
  });

  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input.bookName || !input.bookAuthorName || !input.publishedYear) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("bookName", input.bookName);
      formData.append("bookAuthorName", input.bookAuthorName);
      const year = new Date(input.publishedYear).getFullYear();
      formData.append("publishedYear", parseInt(year, 10));

      if (input.bookImage) {
        formData.append("bookImage", input.bookImage);
      }

      if (input.bookLink) {
        formData.append("bookLink", input.bookLink);
      }

      await axios.post("http://localhost:4000/api/book/new", formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Book uploaded successfully!");
      setInput({
        bookName: "",
        bookAuthorName: "",
        publishedYear: "",
        bookImage: null,
        bookLink: null,
      });

      setLoading(false);
      navigate("/");
    } catch (error) {
      console.error("uploading failed:", error);
      alert(error.response?.data?.message || "Uploading failed! Please try again.");
      setLoading(false);
    }
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

        <label htmlFor="bookName" className="block text-gray-600 mb-1">
          Book Name:
        </label>
        <input
          type="text"
          name="bookName"
          value={input.bookName}
          onChange={handleChange}
          placeholder="Enter book name"
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <label htmlFor="bookAuthorName" className="block text-gray-600 mb-1">
          Author:
        </label>
        <input
          type="text"
          name="bookAuthorName"
          value={input.bookAuthorName}
          onChange={handleChange}
          placeholder="Enter author name"
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <label htmlFor="publishedYear" className="block text-gray-600 mb-1">
          Published Year:
        </label>
        <input
          type="date"
          name="publishedYear"
          value={input.publishedYear}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <label htmlFor="bookImage" className="block text-gray-600 mb-1">
          Book Image:
        </label>
        <input
          type="file"
          name="bookImage"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none"
        />

        <label htmlFor="bookLink" className="block text-gray-600 mb-1">
          Book File:
        </label>
        <input
          type="file"
          name="bookLink"
          accept=".pdf,.epub"
          onChange={handleFileChange}
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white py-2 rounded-lg transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {loading ? "Uploading..." : "Upload Book"}
        </button>
      </form>
    </div>
  );
}

export default UploadBook;
