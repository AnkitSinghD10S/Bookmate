import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Login from "./Component/Login/Login.jsx";
import HandleApplication from "./Component/HandleApplication/HandleApplication.jsx";
import Home from "./Component/Home/Home.jsx";
import Signup from "./Component/Signup/Signup.jsx";
import UploadBook from "./Component/uploadBook/UploadBook.jsx";
import About from "./Component/About/About.jsx";
import Contact from "./Component/Contact/Contact.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import OTP from "./Component/OTP/AuthOtp.jsx";
import Profile from "./Component/Profile/Profile.jsx";
import ShowBook from "./Component/showBook/ShowBook.jsx";
import PrivacyPolicy from "./Component/PrivacyPolicy.jsx";
import TermsOfService from "./Component/TermOfService.jsx";

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
                    <Route path="/viewBook/:bookLink" element={<ShowBook/>}/>
                    <Route path="/handle-application" element={<HandleApplication/>}/>
                    <Route path="/PrivacyPolicy" element={<PrivacyPolicy />}/>
                    <Route path="/TermsOfService" element={<TermsOfService />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
    </StrictMode>
);
