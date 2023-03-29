import React, {useState, useContext, useEffect} from 'react' 
import {useForm} from 'react-hook-form'

import {BookingContext} from '../../contents/Bookings/BookingsState' 
import { AuthContext } from '../../contents/Auth/AuthState' 
import {Link} from 'react-router-dom'

import './styles/bookingform.scss' 


function Booking() {  
  const {dentalServices, addBookings, getBookings} = useContext(BookingContext) 
  const {patientUser} = useContext(AuthContext)
  const {register, formState:{errors}, handleSubmit} = useForm() 
  const [checkedPlan, setCheckedPlan] = useState([]) 
  const [checkedServices, setCheckedServices] = useState([])
  

  function handleChange(event, item){ 
    const {checked} = event.target 
    if (checked){
       setCheckedPlan((planItem) => [...planItem, item]) 
       setCheckedServices((service) => [...service, item.service])
    } else{
      setCheckedServices((plan) => plan.splice(plan.indexOf(item.service), 1))
    }
    
  } 
  useEffect(() => {
    
  }, [checkedServices])

  
 
  return ( 
    <div className='booking-container'> 
    {!patientUser ? 
    <div> Please login please to access this page <Link to='/login'>link</Link></div>: 
   
    <div className='booking-form'> 
        
        <h1>Book Patient Appointment</h1> 
        
       
        
   <form onSubmit={handleSubmit(({first_name,phoneNo,dateofappointment,appointmentTime}) => { 
    const new_booking = {
     first_name, 
     phoneNo, 
     checkedServices, 
     dateofappointment, 
     appointmentTime
    } 
   addBookings(new_booking)  
   
  
    
   })}>
  
    
  
    
   
  <div className='checkbox-service'> 
   <label>Services</label>
    {dentalServices.map((ser) => ( 
      <div><input className='checkbox' type='checkbox' onChange={(event) => handleChange(event, ser)}  />{ser.service} - {ser.cost}</div>

    ))}
  
  
  
  
  </div> 
  <div className='row'> 

  <div className='col'>
  <label>Date of Appointment</label>
<input className='form-control' type="date" {...register("dateofappointment", {
  valueAsDate: true
})} /><span className="input-group-addon"><span className="glyphicon glyphicon-calendar"></span>
</span>
 <p>{errors.dateofappointment?.message}</p>
  </div>
  <div className='col'>
  <label>Time of Appointment</label>
<input className='form-control' type="time" {...register("appointmentTime", {
  
})} />
 <p>{errors.appointmentTime?.message}</p>
  </div> 
  </div>
 

  
  
 
  
   
  <input type="submit" className="btn btn-primary btn-lg" value="Submit"/>
</form>  

 
  
    </div>  
}
    </div> 

  )
}

export default Booking