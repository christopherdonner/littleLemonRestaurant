import {BookingForm} from './BookingForm.js';



export const BookingPage = (state, children) => {
console.log(state)
console.log(children)
    return (<div><BookingForm 
    availableTimes = {state.availableTimes}
    updateAvailableTimes = {state.updateTimes}
    dispatch={state.dispatch}
    submitForm = {state.submitForm}
    /></div>)
}