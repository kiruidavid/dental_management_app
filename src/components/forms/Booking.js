import React, {useState} from 'react' 
import TextField from '@mui/material/TextField';

import './styles/bookingform.scss' 


function Booking() {  
  const [timevalue, setTimeValue] = useState('10:00');
  const [first_name, setFirstName] = useState("") 
  const [phone_number, setPhoneNumber] = useState(0) 
  
  const [bookings, setBookings] = useState([
    {
      first_name: "David", 
     
      phone_number: "56655"
    },  
    

]) 
function timeChange(newValue){
  setTimeValue(newValue)
}


  function handleSubmit(e){
    e.preventDefault() 
    const new_booking = {
      first_name, 
      
      phone_number
      
    }  
    setBookings([...bookings, new_booking])
   
  }
  
     
    
   
    
   
  return (
    <div className='booking-form'>
        <h1>Book Patient Appointment</h1> 
        <form onSubmit={handleSubmit}>
  <div className="row">
    <div className="col"> 
    <label>First name</label>
      <input onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control"  value={first_name}/>
    </div>
    
  
    
    <div className="col"> 
    <label>Phone Number</label>
    <input onChange={(e) => setPhoneNumber(e.target.value)} type="text" className="form-control"  value={phone_number}/>
    </div>
  </div>  
  <div>
  <div class="form-check">
  
  <label class="form-check-label" for="flexCheckChecked"> 
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  Teeth Cleanings 
  </label>
  </div> 
  <div class="form-check">
  
  <label class="form-check-label" for="flexCheckChecked"> 
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  Teeth Whitening 
  </label>
  </div> 
  <div class="form-check">
  
  <label class="form-check-label" for="flexCheckChecked"> 
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  Extractions 
  </label>
  </div>
  
  </div> 
  <div> 
    <label>Time Appointment</label>
    <input type="time"/>
  </div>
 

  
  
 
  
   
  <input type="submit" className="btn btn-primary btn-lg" value="Submit"/>
</form>  
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
 
  
    </div>
  )
}

export default Booking