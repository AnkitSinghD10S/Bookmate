import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function HandleApplication() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/book", {
          withCredentials: true,
        });
        console.log(res)
        setBooks(res.data || []);
      } catch (error) {
        console.error("Error fetching books:", error);
        alert("Failed to fetch books.");
      } finally {
        setLoading(false);
      }
    };

    const checkAdmin = async () => {
      try {
        if (user.role !== "admin") {
          alert("Unauthorized: Only admins can access this page.");
          navigate("/");
        }
      } catch (error) {
        console.error("Error checking admin role:", error);
        navigate("/");
      }
    };

    checkAdmin();
    fetchBooks();
  }, [navigate, user]);

  const handleDelete = async (bookId) => {
    const confirm = window.confirm("Are you sure you want to delete this book?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:4000/api/book/delete/${bookId}`, {
        withCredentials: true,
      });
      setBooks((prev) => prev.filter((book) => book._id !== bookId));
      alert("Book deleted successfully.");
    } catch (error) {
      console.error("Failed to delete book:", error);
      alert("Failed to delete the book. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-cyan-400 mb-8 text-center">
        Handle Applications
      </h1>
      {loading ? (
        <p className="text-center text-cyan-300 text-xl font-medium">
          Loading books...
        </p>
      ) : books.length > 0 ? (
        <div className="flex flex-col gap-6">
          {books.map((book) => (
            <div
              key={book._id}
              className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-row gap-6 items-center"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-cyan-400">
                  {book.bookName}
                </h3>
                <p className="text-sm text-gray-300">
                  <strong>Author:</strong> {book.bookAuthorName || "Unknown"}
                </p>
                <p className="text-sm text-gray-300">
                  <strong>Published Year:</strong> {book.publishedYear || "N/A"}
                </p>
                <p className="text-sm text-gray-300">
                  <strong>Uploaded-By:</strong> {book.User.name || "N/A"}
                </p>
                <p className="text-sm text-gray-300">
                  <strong>Uploaded-On:</strong> {new Date(book.createdAt).toLocaleString()|| "N/A"}
                </p>
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => window.open(book.bookLink, "_blank")}
                    className="bg-cyan-400 text-black px-4 py-2 rounded-md hover:bg-cyan-300 transition"
                  >
                    Read
                  </button>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>

              {/* Book Image */}
              <div className="w-40 h-40 flex-shrink-0">
                <img
                  src={book.bookImage || "/placeholder-book.png"}
                  alt={book.bookName}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400">No books available.</p>
      )}
    </div>
  );
}

export default HandleApplication;