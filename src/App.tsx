import React from 'react';
import './App.css';
import {Navbar} from "./layouts/NavbarAndFooter/Navbar";
import {Footer} from "./layouts/NavbarAndFooter/Footer";
import {SearchBooksPage} from "./layouts/SearchBooksPage/SearchBooksPage";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./layouts/HomePage/HomePage";

export const App = () => {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/home"} element={<HomePage/>}/>
                <Route path={"/search"} element={<SearchBooksPage/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}
