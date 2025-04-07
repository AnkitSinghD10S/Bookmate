import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Profile() {
  const user = useSelector((state) => state.auth.user);
  const [uploadedBooks, setUploadedBooks] = useState([]);
  const [savedBooks, setSavedBooks] = useState([]);
  const [loadingUploads, setLoadingUploads] = useState(true);
  const [loadingSaved, setLoadingSaved] = useState(true);

  useEffect(() => {
    const fetchUploadedBooks = async () => {
      try {
        const res = await axios.get('http://localhost:4000/api/book', {
          withCredentials: true,
        });
        const userBooks = res.data.filter(book => book.User._id === user?._id);
        setUploadedBooks(userBooks);
      } catch (error) {
        console.error('Error fetching uploaded books:', error);
      } finally {
        setLoadingUploads(false);
      }
    };

    const fetchSavedBooks = async () => {
      try {
        const savedBook = user.savedBook
        setSavedBooks(savedBook);
        
      } catch (error) {
        console.error('Error fetching saved books:', error);
      } finally {
        setLoadingSaved(false);
      }
    };

    if (user) {
      if (user.role === 'seller' || user.role === 'admin') fetchUploadedBooks();
      fetchSavedBooks();
    }
  }, [user]);

  const handleDelete = async (bookId) => {
    const confirm = window.confirm('Are you sure you want to delete this book?');
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:4000/api/book/delete/${bookId}`, {
        withCredentials: true,
      });
      setUploadedBooks(prev => prev.filter(book => book._id !== bookId));
    } catch (error) {
      console.error('Failed to delete book:', error);
      alert('Failed to delete the book. Try again.');
    }
  };

  const handleRemovedSaved = async (bookId) => {
    const confirm = window.confirm('Are you sure you want to unsave this book?');
    if (!confirm) return;
  
    try {
      await axios.patch(
        `http://localhost:4000/api/book/removedSavedBook/${bookId}`,
        {},
        { withCredentials: true }
      );
  
      setSavedBooks(prev => prev.filter(book => book._id !== bookId));
    } catch (error) {
      console.error('Failed to unsave book:', error);
      alert('Failed to unsave the book. Try again.');
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <div className="flex items-center gap-6 mb-10">
        <img
          src={user?.avatar || '/default-avatar.png'}
          alt="User Avatar"
          className="h-20 w-20 rounded-full object-cover border border-gray-700"
        />
        <div>
          <h2 className="text-2xl font-bold">{user?.name || 'User Name'}</h2>
          <p className="text-gray-400 capitalize">{user?.role || 'reader'}</p>
        </div>
      </div>
      {(user?.role === 'seller' || user?.role === 'admin') && (
        <section className="mb-12">
          <h3 className="text-3xl font-semibold mb-6 text-cyan-400">Uploaded Books</h3>
          {loadingUploads ? (
            <p className="text-gray-400">Loading uploaded books...</p>
          ) : uploadedBooks.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-6">
              {uploadedBooks.map((book) => (
                <div
                  key={book._id}
                  className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden w-72 transform hover:scale-105 transition duration-300"
                >
                  <img
                    src={book.bookImage || "/placeholder-book.png"}
                    alt={book.bookName}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-cyan-400 mb-1">
                      {book.bookName}
                    </h3>
                    <p className="text-sm text-gray-300 mb-2">
                      by {book.bookAuthorName}
                    </p>
                    <p className="text-sm text-gray-300 mb-2">
                      in Year {book.publishedYear}
                    </p>
                    <div className="flex justify-between items-center mb-2">
                      <button
                        onClick={() => window.open(book.bookLink, "_blank")}
                        className="bg-cyan-400 text-black px-4 py-1 text-sm rounded-full hover:bg-cyan-300 transition"
                      >
                        Read Now
                      </button>
                      <button
                        onClick={() => handleDelete(book._id)}
                        className="bg-red-600 text-white px-3 py-1 text-sm rounded-full hover:bg-red-500 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">You haven’t uploaded any books yet.</p>
          )}
        </section>
      )}

      <section>
        <h3 className="text-3xl font-semibold mb-6 text-cyan-400">Saved Books</h3>
        {loadingSaved ? (
          <p className="text-gray-400">Loading saved books...</p>
        ) : savedBooks.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-6">
            {savedBooks.map((book) => (
              <div
                key={book._id}
                className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden w-72 transform hover:scale-105 transition duration-300"
              >
                 <div
                  onClick={() => handleRemovedSaved(book._id)}
                  className="absolute top-3 right-3 bg-red-600 hover:bg-red-400 text-black rounded-full w-8 h-8 flex items-center justify-center shadow-md transition cursor-pointer"
                  title="Save Book"
                >
                  -
                </div>
                <img
                  src={book.bookImage || "/placeholder-book.png"}
                  alt={book.bookName}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-cyan-400 mb-1">
                    {book.bookName}
                  </h3>
                  <p className="text-sm text-gray-300 mb-2">
                    by {book.bookAuthorName || 'Unknown Author'}
                  </p>
                  <div className="flex justify-center">
                    <a
                      href={book.bookLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-400 text-black px-4 py-1 text-sm rounded-full hover:bg-cyan-300 transition"
                    >
                      Read Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">You haven’t saved any books yet.</p>
        )}
      </section>
    </div>
  );
}

export default Profile;
