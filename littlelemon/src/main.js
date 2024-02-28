import { useReducer } from "react";
import {About} from "./about.js"
import {Hero} from "./heroSection.js"
import {Highlights} from "./highlights.js"
import {Testimonials} from "./testimonials.js"
import { Routes, Route, useNavigate } from "react-router-dom";
import { Homepage } from './homepage'
import { BookingPage } from "./Bookingpage";
import { ConfirmedBooking } from "./ConfirmedBooking";


const submitAPI = formData => true;


  const updateTimes = (state, action) => {
return  action;
  }

  const initialTimes = ['Select date first']

export const Main = ()=>{
    const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes)

    const navigate = useNavigate();

    const submitForm = (formData) => {
      submitAPI(formData);
      if(formData && formData.time && formData.guests && formData.date){
          console.log(formData);
          // alert(`Time: ${formData.time}
          //       Date: ${formData.date}
          //       Number of Guests: ${formData.guests}`)
          navigate('/ConfirmedBooking', {state: {formData}, props: formData})
        }
      }

    return <main>
        {/* <BrowserRouter> */}
        <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/booking" element={<BookingPage
          availableTimes={availableTimes}
          updateTimes={updateTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />}></Route>
       <Route path="ConfirmedBooking" element={<ConfirmedBooking ></ConfirmedBooking>}></Route>
      </Routes>
      {/* </BrowserRouter> */}
        <Hero />
        <Highlights />
        <Testimonials />
        <About />
    </main>
}