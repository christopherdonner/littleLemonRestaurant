import { fireEvent, render, screen } from '@testing-library/react';
import {BrowserRouter } from "react-router-dom";

import App from './App';

test('Header renders', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const linkElement = screen.getByText("Little Lemon Restaurant");
  expect(linkElement).toBeInTheDocument();
  
  const reserveButton = screen.getByText("Make Reservation");
  expect(reserveButton).toBeInTheDocument();
  fireEvent.click(reserveButton);
  const reservationText = screen.getByText("Number of guests");
  expect(reservationText).toBeInTheDocument();
  
});

test('Booking form renders', ()=>{
  
})
