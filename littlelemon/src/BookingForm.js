import { useState, useReducer, useEffect } from "react";
import { Link } from "react-router-dom";

export const BookingForm = (state) => {
let uzeEffect = useEffect();
   const seededGenerator = (date, hour) => {
      const m = 9;
      const d = date.getDate();
      const result = ((d + hour) % m) / 10;

      return result;
   }

   const fetchAPI = (date) => {
      let result = [];

      result.push("--- Select a Time ---")

      for (let hour = 15; hour <= 23; hour++) {
         if (seededGenerator(date, hour) < 0.5) result.push(hour + ':00');
         if (seededGenerator(date, hour + 7) < 0.5) result.push(hour + ':30');
      }

      return result;
   };

   const [times, dispatch] = useReducer(state.updateAvailableTimes, state.availableTimes)


   const availableTimesUpdate = (e) => {
      dispatch(fetchAPI(new Date(e.target.value)))
      uzeEffect((e)=>{
      setDate(e.target.value);

      })
      // effect(()=>{
      // }, [])
      
   }

   const [date, setDate] = useState(""),
      [time, setTime] = useState(''),
      [guests, setGuests] = useState(0);
   return <div>
      <form action={state.submitForm({ time: time, date: date, guests: guests })}>
         <label htmlFor="guests">Number of guests</label>
         <input type="number" name="guests" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e => setGuests(e.target.value)} />
         <label htmlFor="res-date">Choose date</label>
         <input type="date" required id="res-date" value={date} onChange={availableTimesUpdate} min={`${new Date().toLocaleString("default", { year: 'numeric' })}-${new Date().toLocaleString("default", { month: '2-digit' })}-${new Date().toLocaleDateString("default", { day: '2-digit' })}`}></input>
         <label htmlFor="res-time">Choose time</label>
         <select id="res-time" value={time} required onChange={e => { e.preventDefault();setTime(e.target.value); }} >
            {times.map((time, index) => {
               return <option key={index} value={time}>{time}</option>
            })}
         </select>
         <button type="submit" aria-label="Submit">Reserve!</button>
         <Link to="/"><button aria-label="Cancel">Cancel</button></Link>
      </form>
   </div>

}