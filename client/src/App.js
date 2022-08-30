import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useCookies } from "react-cookie";
import { userSignInExists } from "./Redux/Actions/appAction";
import { useDispatch } from "react-redux";

// components
import NavbarComponent from "./Components/NavbarComponent/NavbarComponent";

// pages
import HomePage from "./pages/HomePage/HomePage";
import UploadProducts from "./pages/UploadProducts/UploadProducts";
import EditProduct from "./pages/EditProduct/EditProduct";
import SignIn from "./pages/SignIn/SignIn";

function App() {
    const [cookie] = useCookies(["user"]);
    const dispatch = useDispatch();
    useEffect(() => {
        if (cookie && cookie.user) {
            dispatch(userSignInExists(cookie.user));
        }
    }, [cookie]);

    return (
        <div className="App">
            <NavbarComponent />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/upload" element={<UploadProducts />} />
                <Route path="/edit-product/:id" element={<EditProduct />} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>
        </div>
    );
}

export default App;
