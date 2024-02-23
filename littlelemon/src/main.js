import { useState, useReducer } from "react";
import {About} from "./about.js"
import {Hero} from "./heroSection.js"
import {Highlights} from "./highlights.js"
import {Testimonials} from "./testimonials.js"



export const Main = ()=>{

//   const [availableTimes, setAvailableTimes] = useState([]);

//   function initializeTimes (){
// setAvailableTimes(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])
//   }
  
//   function updateTimes ({availableTimes}){
//   return availableTimes;
//   }

    return <main>
        <Hero />
        <Highlights />
        <Testimonials />
        <About />
    </main>
}