import { useParams } from "react-router-dom";

const ShowBook = () => {
  const { bookLink } = useParams();

  if (!bookLink) {
    return (
      <div className="bg-gray-800 text-white min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">Book not found!</h1>
      </div>
    );
  }

  const decodedBookLink = decodeURIComponent(bookLink);

  return (
    <div className="bg-gray-800 text-white min-h-screen p-8">
      <div className="max-w-3xl mx-auto bg-gray-700 rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold text-cyan-400 mb-4">Book Viewer</h1>
        <div className="flex justify-center">
          <iframe
            src={decodedBookLink}
            title="Book Viewer"
            width="100%"
            height="600px"
            className="border-2 border-cyan-400 rounded-lg"
          ></iframe>
        </div>
        <div className="mt-6 text-center">
          <a
            href={decodedBookLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-400 text-black px-6 py-2 rounded-full hover:bg-cyan-300 transition"
          >
            Open in New Tab
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShowBook;