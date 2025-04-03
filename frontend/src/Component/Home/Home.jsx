import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../Card/card";
import ImageSlider from "../BookSlider/index";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 2000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {/* Loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 text-white z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <motion.div
              className="w-20 h-20 border-4 border-cyan-400 border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
            <h1 className="mt-4 text-2xl font-bold text-cyan-400">BooꓘMate</h1>
            <p className="text-gray-400 mt-1">Loading your book world...</p>
          </motion.div>
        )}
      </AnimatePresence>
      {!loading && (
        <div className="bg-gray-800 w-full text-white min-h-screen">
          <div className="p-4">
            <ImageSlider />
          </div>

          <div className="flex flex-col items-center justify-center text-center h-[400px] w-full">
            <div className="flex justify-center">
              <img src="logo1.png" alt="Logo" className="h-40 w-40" />
            </div>
            <h1 className="text-6xl font-bold text-cyan-400">BooꓘMate</h1>
            <h2 className="text-2xl text-[2vmax] font-semibold mt-2">
              A Perfect Platform For Books..
            </h2>

            <div className="flex gap-4 mt-6">
              <button className="bg-cyan-400 text-black font-medium px-10 py-2 rounded-full border-2 border-gray-600 hover:scale-110 transition">
                Subscribe
              </button>
              <button className="bg-gray-700 text-white font-medium px-10 py-2 rounded-full border-2 border-gray-600 hover:scale-110 transition">
                5-Days Trial
              </button>
            </div>
          </div>

          <div className="bg-gray-700 p-8">
            <h1 className="text-4xl font-bold text-center mb-8">Books..</h1>
            <Card />

            <div className="flex flex-wrap justify-center gap-6">
              {books.length > 0 ? (
                books.map((book, index) => (
                  <div
                    key={index}
                    className="bg-gray-700 p-6 rounded-lg shadow-lg w-64 hover:scale-105 transition"
                  >
                    <div className="text-sm text-gray-400">#{index + 1}</div>
                    <h3 className="text-xl font-semibold">{book.bookName}</h3>
                    <p className="text-sm text-gray-300">{book.bookAuthorName}</p>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-400">No books available</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
