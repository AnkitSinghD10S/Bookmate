import "./App.css";
import Nav from "./Component/Nav/Nav";
import Footer from "./Component/Footer/footer";
import { Outlet } from "react-router";

function App() {
    return (
        <>
            <div className="nav">
                <Nav />
            </div>

            <div className="body">
            <Outlet />
            </div>

            <div className="footer-content">
                <Footer />
            </div>
        </>
    );
}

export default App;
