import { useState } from "react";
import { useReducer } from "react";




export const BookingForm = (state, setAvailableTimes) => {

   const [times, dispatch] = useReducer(state.updateAvailableTimes, state.availableTimes)


const availableTimesUpdate = (e) => {
   let update = true;
   // setDate(e.target.value);
   // state.updateAvailableTimes(e.target.value, update)
   dispatch({
      date: e.target.value,
      time: times,
      action: update
   })
   setDate(e.target.value)
}

   const [date, setDate] = useState(""),
         [time, setTime] = useState(''),
         [guests, setGuests] = useState(0);
   console.log(state);
   return <div>
      <form >
    <label htmlFor="res-date">Choose date</label>
<input type="date" id="res-date" value={date} onChange={availableTimesUpdate}></input>
<label htmlFor="res-time">Choose time</label>
<select id="res-time" value={times} onChange={e=>{setTime(e.target.value);}} >
{state.availableTimes.map((time, index)=>{
   return <option key={index} value={time}>{time}</option>
})}
   </select>
   <label htmlFor="guests">Number of guests</label>
        <input type="number" name="guests" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e=>setGuests(e.target.value)}/>
    <button type="Submit">Submit</button>
</form>
   </div>

 }