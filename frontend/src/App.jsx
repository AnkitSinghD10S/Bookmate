import "./App.css";
import Nav from "./Component/Nav/nav";
import Footer from "./Component/Footer/footer";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
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
            <div className="nav">
                <Nav />
            </div>
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
            <div className="body">
                {!loading && <Outlet />}
            </div>
            <div className="footer-content">
                <Footer />
            </div>
        </>
    );
}

export default App;
