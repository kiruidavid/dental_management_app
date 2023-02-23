import React, {useState, useContext} from 'react' 
import {useForm} from 'react-hook-form'
import Sidebar from '../pages/bars/Sidebar';
import {BookingContext} from '../../contents/Bookings/BookingsState'

import './styles/bookingform.scss' 


function Booking() {  
  const {dentalServices} = useContext(BookingContext) 
  const {register, formState:{errors}, handleSubmit} = useForm()
 
  return ( 
    <div className='booking-container'> 
    <Sidebar/>
    <div className='booking-form'>
        <h1>Book Patient Appointment</h1> 
        <hr/>
        
   <form onSubmit={handleSubmit((first_name,phoneNo,services,dateofappointment, appointmentTime) => {
      const new_booking = {
        first_name, 
        phoneNo, 
        services, 
        dateofappointment, 
        appointmentTime
      } 
      console.log(new_booking)
   })}>     
  <div className="row">
    <div className="col"> 
    <label>First name</label>
    <input className='form-control' {...register("first_name", {
    required: "Name is required", 
    pattern: {
      value: /^[A-Z][a-z-']{2,20}$\S*/, 
      message:"Name must begin with a capital letter and no whitespaces"
    }
  })}/> 
  <p>{errors.first_name?.message}</p>
    </div>
    
  
    
    <div className="col"> 
    <label>Phone Number</label>
    <input className='form-control' {...register("phoneNo",{ 
        required:"Phone number is required", 
        pattern:{
          value:/^(?:254|\+254|0)?(7(?:(?:[12][0-9])|(?:0[0-8])|(9[0-2]))[0-9]{6})$/, 
          message:"Phone number is not valid/must begin with 07,254,+254"
        }

      })} /> 
  <p>{errors.phoneNo?.message}</p>
    </div>
  </div>  
  <div className='checkbox-service'> 
   <label>Services</label>
    {dentalServices.map((service) => ( 
      <div><input className='checkbox' type='checkbox' value={service.service} {...register('services')} />{service.service} - {service.cost}</div>

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
    </div>
  )
}

export default Booking