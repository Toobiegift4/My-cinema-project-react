import React from "react";
import '../styles/navbar.css'


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Booking from "../pages/Booking";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import Movie from "../pages/Movie";

import Sigin from "../pages/Sigin";






 
function App() {
    return ( 
        


        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path="sigin" element={<Sigin/>} />
                <Route path="booking" element={<Booking/>} />
                <Route path="contact" element={<Contact/>}/>
                <Route path="login" element={<Login/>} />
                <Route path="home/:movieId" element={<Movie/>} />
                
            </Route>
        </Routes>
        </BrowserRouter>
     );
}

export default App;