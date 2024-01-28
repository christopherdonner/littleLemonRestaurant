import React from 'react';
import './App.css';
import {Header} from './header.js'
// import {Nav} from './nav.js'
import {Main} from  './main.js'
import {Footer} from './footer.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Homepage} from './homepage'
import { BookingPage } from "./Bookingpage";

function App() {
  return (
    <div>
    <Header/>
    
    <Main/>
    <Footer/>
    <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/booking" element={<BookingPage />}></Route>
            {/* <Route path="/booking" element={<BookingPage />}</Route> */}
        </Routes>
    </div>
    
  );
}

export default App;
