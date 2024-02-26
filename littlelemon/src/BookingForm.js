import { useState, useReducer, useEffect } from "react";
import { Link  } from "react-router-dom";




export const BookingForm = (state, setAvailableTimes) => {

   const seededGenerator = (date, hour) => {
      const m = 9;
      const d = date.getDate();
      const result = ((d + hour) % m ) / 10;
    
      return result;
    }
    
    const fetchAPI = (date) => {
      let result = [];
    
      result.push("--- Select a Time ---")
    
      for (let hour = 15; hour <= 23; hour++) {
        if(seededGenerator(date, hour) < 0.5) result.push(hour + ':00');
        if(seededGenerator(date, hour + 7) < 0.5) result.push(hour + ':30');
      }
    
      return result;
    };
    
    const submitAPI = formData => true;

const useDoSubmit = (time, date, guests) => {
   let formData = {
      time: time,
      date: date,
      guests: guests
   }
   submitAPI(formData)
   console.log(formData);
   useEffect(()=>{
      console.log('bah')
      if(formData){
      // navigate('/ConfirmedBooking')
      }
      // if(formData)
   })
   
}

   const [times, dispatch] = useReducer(state.updateAvailableTimes, state.availableTimes)


const availableTimesUpdate = (e) => {
   let update = true;
   // setDate(e.target.value);
   // state.updateAvailableTimes(e.target.value, update)
   // dispatch({
   //    date: e.target.value,
   //    time: state.availableTimes,
   //    action: update
   // })
   setDate(e.target.value);
   console.log(fetchAPI(new Date(e.target.value)))
   state.updateAvailableTimes(fetchAPI(new Date(e.target.value)))
   dispatch(fetchAPI(new Date(e.target.value)))
}

   const [date, setDate] = useState(""),
         [time, setTime] = useState(''),
         [guests, setGuests] = useState(0);
   console.log(state);
   return <div>
      <form onSubmit={state.submitForm({time:time, date:date, guests:guests})}>
    <label htmlFor="res-date">Choose date</label>
<input type="date" id="res-date" value={date} onChange={availableTimesUpdate}></input>
<label htmlFor="res-time">Choose time</label>
<select id="res-time" value={time} onChange={e=>{setTime(e.target.value);}} >
{times.map((time, index)=>{
   return <option key={index} value={time}>{time}</option>
})}
   </select>
   <label htmlFor="guests">Number of guests</label>
        <input type="number" name="guests" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e=>setGuests(e.target.value)}/>
    <button type="Submit" >Submit</button>
<Link to="/"><button>Cancel</button></Link>
</form>
   </div>

 }