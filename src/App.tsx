import React from 'react';
import './App.css';
import {Navbar} from "./layouts/NavbarAndFooter/Navbar";
import {Footer} from "./layouts/NavbarAndFooter/Footer";
import {SearchBooksPage} from "./layouts/SearchBooksPage/SearchBooksPage";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import {HomePage} from "./layouts/HomePage/HomePage";
import {ROUTES} from "./properties";
import {BookCheckoutPage} from "./layouts/BookCheckoutPage/BookCheckoutPage";
import {oktaConfig} from "./lib/oktaConfig";
import {OktaAuth, toRelativeUrl} from "@okta/okta-auth-js"
import {LoginCallback, Security} from "@okta/okta-react";
import LoginWidget from "./auth/LoginWidget";
import {ReviewListPage} from "./layouts/BookCheckoutPage/ReviewListPage/ReviewListPage";
import {ShelfPage} from "./layouts/ShelfPage/ShelfPage";
import {ProtectedRoute} from "./layouts/Utils/ProtectedRoute";
import {MessagesPage} from "./layouts/MessagesPage/MessagesPage";
import {ManageLibraryPage} from "./layouts/ManageLibraryPage/ManageLibraryPage";

const oktaAuth = new OktaAuth(oktaConfig)

export const App = () => {

    const navigate = useNavigate();

    const customAuthHandler = () => {
        navigate(ROUTES.LOGIN)
    }

    const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
        navigate(toRelativeUrl(originalUri || ROUTES.BASE, window.location.origin), {replace: true})
    }

    return (
        <div className={"d-flex flex-column min-vh-100"}>
            <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri} onAuthRequired={customAuthHandler}>
                <Navbar/>
                <div className={"flex-grow-1"}>
                    <Routes>
                        <Route path={ROUTES.BASE} element={<Navigate replace to={ROUTES.HOME}/>}/>
                        <Route path={ROUTES.HOME} element={<HomePage/>}/>
                        <Route path={ROUTES.SEARCH} element={<SearchBooksPage/>}/>
                        <Route path={`${ROUTES.REVIEW_LIST}/:bookId`} element={<ReviewListPage/>}/>
                        <Route path={`${ROUTES.CHECKOUT}/:bookId`} element={<BookCheckoutPage/>}/>
                        <Route path={ROUTES.LOGIN} element={<LoginWidget config={oktaConfig}/>}/>
                        <Route path={ROUTES.LOGIN_CALLBACK} element={<LoginCallback/>}/>
                        <Route path={ROUTES.SHELF} element={<ProtectedRoute
                            redirectTo={ROUTES.LOGIN}><ShelfPage/></ProtectedRoute>}/>
                        <Route path={ROUTES.MESSAGES} element={<ProtectedRoute
                            redirectTo={ROUTES.LOGIN}><MessagesPage/></ProtectedRoute>}/>
                        <Route path={ROUTES.ADMIN} element={<ProtectedRoute
                            redirectTo={ROUTES.LOGIN}><ManageLibraryPage/></ProtectedRoute>}/>
                    </Routes>
                </div>
                <Footer/>
            </Security>
        </div>
    );
}
