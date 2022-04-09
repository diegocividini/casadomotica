import "./App.css";
import Home from "./components/Home";
import ControlliPage from "./components/ControlliPage";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route index element={<Home />} />
                    <Route exact path="/controlli" element={<ControlliPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
