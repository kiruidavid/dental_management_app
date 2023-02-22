import React, {useState} from 'react'

function BookingsList() { 
      
  const [bookings, setBookings] = useState([
    {
      first_name: "David", 
      last_name: "Wendot", 
      age: 23, 
      phone_number: "56655"
    },  
    {
      first_name: "Mike", 
      last_name: "Lowry", 
      age: 33, 
      phone_number: "0756655"
    }, 

]) 
  
  return (
    <div>
        <h1>BookingsList</h1> 
        
 <table className="table">
  <thead>
    <tr>
      
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Age</th>  
      <th scope="col">Phone Number</th> 
    </tr>
  </thead>
  <tbody>
     
      {bookings.map((booking) => (
        <tr>
        <td>{booking.first_name}</td> 
        <td>{booking.last_name}</td> 
        <td>{booking.age}</td> 
        <td>{booking.phone_number}</td>
        </tr>
      ))}
     
      
    
    
  </tbody>
</table>

 </div>

   
  )
}

export default BookingsList