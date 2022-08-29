import React from "react";
import { Routes, Route } from "react-router-dom";

// components
import NavbarComponent from "./Components/NavbarComponent/NavbarComponent";

// pages
import HomePage from "./pages/HomePage/HomePage";
import UploadProducts from "./pages/UploadProducts/UploadProducts";

function App() {
    return (
        <div className="App">
            <NavbarComponent />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/upload" element={<UploadProducts />} />
            </Routes>
        </div>
    );
}

export default App;
