import React from 'react';
import { useState, useReducer, useEffect } from "react";
import './App.css';
import { Header } from './header.js'
// import {Nav} from './nav.js'
import { Main } from './main.js'
import { Footer } from './footer.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from './homepage'
import { BookingPage } from "./Bookingpage";



function App() {

  function initializeTimes() {
    // setAvailableTimes(initialTimes)
    let date = new Date();
    // useEffect(()=>{
    //   // fetchAPI(date).then((response)=>{console.log(response);})
    // })
  }



  const updateTimes = (times, action) => {
console.log(times);
    console.log(action);
    // switch (action.type){
    //   case 'update': {times.push({
    //     id: action.id
    //   })}
    // }
// dispatch({
//   date: date,
//   action: action
// })
return [...times];
  }

  const initialTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']

  // const [availableTimes, setAvailableTimes] = useState(initialTimes);
  const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes)

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/booking" element={<BookingPage
          availableTimes={availableTimes}
          updateTimes={updateTimes}
        />}></Route>
        {/* <Route path="/booking" element={<BookingPage />}</Route> */}
      </Routes>
      <Main />

      <Footer />


    </div>

  );
}

export default App;
