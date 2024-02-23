import l from 'ace-diff';
import {BookingForm} from './BookingForm.js';
import { useState, useReducer } from "react";



export const BookingPage = (state, children) => {
console.log(state)
console.log(children)
    return (<div><BookingForm 
    availableTimes = {state.availableTimes}
    updateAvailableTimes = {state.updateTimes}
    /></div>)
}