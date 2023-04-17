import React from "react";
import {Link, NavLink} from "react-router-dom";
import {ROUTES} from "../../properties";
import {useOktaAuth} from "@okta/okta-react";
import {SpinnerLoading} from "../Utils/SpinnerLoading";

export const Navbar = () => {

    const {oktaAuth, authState} = useOktaAuth();

    if (!authState) {
        return <SpinnerLoading/>
    }

    const handleLogout = async () => oktaAuth.signOut();

    return (
        <nav className={"navbar navbar-expand-lg navbar-dark main-color py-3"}>
            <div className={"container-fluid"}>
                <span className={"navbar-brand"}>Luv 2 Read</span>
                <button className={"navbar-toggler"} type={"button"} data-bs-toggle={"collapse"}
                        data-bs-target={"#navbarNavDropdown"} aria-controls={"navbarNavDropdown"}
                        aria-expanded={"false"} aria-label={"Toggle Navigation"}>
                    <span className={"navbar-toggler-icon"}></span>
                </button>
                <div className={"collapse navbar-collapse"} id={"navbarNavDropdown"}>
                    <ul className={"navbar-nav"}>
                        <li className={"nav-item"}>
                            <NavLink className={"nav-link"} to={ROUTES.HOME}>Home</NavLink>
                        </li>
                        <li className={"nav-item"}>
                            <NavLink className={"nav-link"} to={ROUTES.SEARCH}>Search Books</NavLink>
                        </li>
                        {authState.isAuthenticated ?
                            <li className={"nav-item"}>
                                <NavLink className={"nav-link"} to={ROUTES.SHELF}>Shelf</NavLink>
                            </li>
                            : null}
                    </ul>
                    <ul className={"navbar-nav ms-auto"}>
                        {authState.isAuthenticated ?
                            <li>
                                <button className={"btn btn-outline-light"} onClick={handleLogout}>Sign out</button>
                            </li>
                            :
                            <li className={"nav-item m1"}>
                                <Link type={"button"} className={"btn btn-outline-light"} to={ROUTES.LOGIN}>Sign
                                    in</Link>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}
