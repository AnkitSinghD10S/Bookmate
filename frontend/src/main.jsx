import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Login from "./Component/Login/login.jsx";
import Home from "./Component/Home/Home.jsx";
import Signup from "./Component/Signup/Signup.jsx";
import UploadBook from "./Component/uploadBook/uploadBook.jsx";
import About from "./Component/About/About.jsx";
import Contact from "./Component/Contact/Contact.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/uploadBook" element={<UploadBook />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
    </StrictMode>
);
