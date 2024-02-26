import { useState, useReducer } from "react";
import {About} from "./about.js"
import {Hero} from "./heroSection.js"
import {Highlights} from "./highlights.js"
import {Testimonials} from "./testimonials.js"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Homepage } from './homepage'
import { BookingPage } from "./Bookingpage";
import { ConfirmedBooking } from "./ConfirmedBooking";

const submitAPI = formData => true;


function initializeTimes() {
    // setAvailableTimes(initialTimes)
    let date = new Date();
    // useEffect(()=>{
    //   // fetchAPI(date).then((response)=>{console.log(response);})
    // })
  }



  const updateTimes = (state, action) => {
console.log(state);
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

return  action;
  }

  const initialTimes = ['Select date first']

  // const [availableTimes, setAvailableTimes] = useState(initialTimes);


export const Main = ()=>{
    const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes)

    const navigate = useNavigate();

    const submitForm = (formData) => {
      
        console.log(formData);
        submitAPI(formData);
        if(formData.time){
        alert(formData.time);
        }
        // if(submitAPI(formData)){
        //   navigate('/ConfirmedBooking')
        // }
      }
//   const [availableTimes, setAvailableTimes] = useState([]);

//   function initializeTimes (){
// setAvailableTimes(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])
//   }
  
//   function updateTimes ({availableTimes}){
//   return availableTimes;
//   }
console.log(updateTimes);
console.log(availableTimes);

    return <main>
        <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/booking" element={<BookingPage
          availableTimes={availableTimes}
          updateTimes={updateTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />}></Route>
      </Routes>
        <Hero />
        <Highlights />
        <Testimonials />
        <About />
    </main>
}