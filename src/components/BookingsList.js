import React, {useState, useContext} from 'react' 
import {BookingContext} from '../contents/Bookings/BookingsState'

function BookingsList() { 
  const {bookings, deleteBookings} = useContext(BookingContext)
      
  
  
  return (
    <div>
        <h1>BookingsList</h1> 
        
 <table className="table">
  <thead>
    <tr>
      
      <th scope="col">First</th>
        
      <th scope="col">Phone Number</th>  
      <th scope="col">Procedures</th> 
      <th scope="col">Date of Appointment</th> 
      <th scope="col">Time</th>
    </tr>
  </thead>
  <tbody>
     
      {bookings.map((booking) => (
        <tr>
        <td>{booking.first_name}</td> 
        <td>{booking.phoneNo}</td> 
        <td>{booking.checkedServices.map((service) => service).join(',')}</td> 
        <td>{booking.dateofappointment}</td> 
        <td>{booking.appointmentTime}</td> 
        <button>UPDATE</button> 
        <button >DELETE</button>
        </tr>
      ))}
     
      
    
    
  </tbody>
</table>

 </div>

   
  )
}

export default BookingsList