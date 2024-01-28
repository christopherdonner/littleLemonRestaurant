import { useState } from "react";

export const BookingForm = (props) => {
   const [date, setDate] = useState(""),
         [time, setTime] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']),
         [guests, setGuests] = useState(0);
   return <div>
      <form >
    <label htmlFor="res-date">Choose date</label>
<input type="date" id="res-date" value={date} onChange={e=>setDate(e.target.value)}></input>
<label htmlFor="res-time">Choose time</label>
<select id="res-time" value={time} onChange={e=>setTime(e.target.value)} >
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
   </select>
   <label htmlFor="guests">Number of guests</label>
        <input type="number" name="guests" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e=>setGuests(e.target.value)}/>
    <button type="Submit">Submit</button>
</form>
   </div>

 }