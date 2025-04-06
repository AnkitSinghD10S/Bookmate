import  { useState, useEffect } from "react";
import Nav from "../component/Nav/nav";
import { motion, AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer/footer"; 

const UserDashBoard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Nav />
      
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 text-white z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <img
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHUzY2x3MmpwMWF0a29obW9sdG5qMDd3aWhvNGFqcjhnZ2l4ZDdxeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vGLy4PAdZEu1Gr7q3B/giphy.gif"
              alt="Loading..."
              className="w-32 h-32 object-contain"
            />
            <h1 className="mt-4 text-2xl font-bold text-cyan-400">BooꓘMate</h1>
            <p className="text-gray-400 mt-1">Loading your book world...</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="">{!loading && <Outlet />}</div>

      <div className="footer-content">
        <Footer />
      </div>
    </>
  );
};

export default UserDashBoard;
