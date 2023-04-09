import React from 'react';
import './App.css';
import {Navbar} from "./layouts/NavbarAndFooter/Navbar";
import {ExploreTopBooks} from "./layouts/HomePage/ExploreTopBooks";
import {Carousel} from "./layouts/HomePage/Carousel";
import {Hero} from "./layouts/HomePage/Hero";

function App() {
    return (
        <div>
            <Navbar/>
            <ExploreTopBooks/>
            <Carousel/>
            <Hero/>
        </div>
    );
}

export default App;
