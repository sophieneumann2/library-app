import React from 'react';
import './App.css';
import {Navbar} from "./layouts/NavbarAndFooter/Navbar";
import {Footer} from "./layouts/NavbarAndFooter/Footer";
import {SearchBooksPage} from "./layouts/SearchBooksPage/SearchBooksPage";
import {Route, Routes, Navigate} from "react-router-dom";
import {HomePage} from "./layouts/HomePage/HomePage";
import {ROUTES} from "./properties";

export const App = () => {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path={ROUTES.BASE} element={<Navigate replace to={ROUTES.HOME} />} />
                <Route path={ROUTES.HOME} element={<HomePage/>}/>
                <Route path={ROUTES.SEARCH} element={<SearchBooksPage/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}
