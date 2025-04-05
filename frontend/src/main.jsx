import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Login from "./component/Login/login.jsx";
import Home from "./component/Home/Home.jsx";
import Signup from "./component/Signup/Signup.jsx";
import UploadBook from "./component/uploadBook/uploadBook.jsx";
import About from "./component/About/About.jsx";
import Contact from "./component/Contact/Contact.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import OTP from "./component/OTP/AuthOtp.jsx";
import Profile from "./component/Profile/Profile.jsx";

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
                    <Route path="/verifyEmail" element={<OTP/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
    </StrictMode>
);
