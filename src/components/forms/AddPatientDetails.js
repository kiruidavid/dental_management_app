import React, {useState, useContext} from 'react' 
import {PatientContext} from '../../contents/Patients/PatientState' 

import {useForm} from 'react-hook-form'
import './styles/patientform.scss' 
import "react-datepicker/dist/react-datepicker.css";

function AddPatientDetails() { 
  const {addPatients, getPatientDetails, patients} = useContext(PatientContext)
  const {register, formState:{errors}, handleSubmit} = useForm()
 
  

 
  
  return (
    <div className='patient-container'> 
   
    <div className='patient-form'>
    <h1>PATIENT DETAILS</h1> 
    <hr/>
    <form onSubmit={handleSubmit(({first_name,last_name,email,phoneNo,gender,dateofbirth}) => {
      const new_patient = {
        first_name, 
        last_name, 
        email, 
        phoneNo, 
        gender, 
        dateofbirth
      } 
     addPatients(new_patient)
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
<label>Last name</label> 
<input className='form-control' {...register("last_name", {
    required: "Name is required", 
    pattern: {
      value: /^[A-Z][a-z-']{2,20}$\S*/, 
      message:"Name must begin with a capital letter and no whitespaces"
    }
  })}/> 
  <p>{errors.last_name?.message}</p>
 
</div>
</div> 
<div className="row">
<div className="col"> 
<label>Email</label> 
<input className='form-control' {...register("email", {
    required: "Name is required", 
    pattern: {
      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 
      message:"Enter valid email formart"
    }
  })}/> 
   <p>{errors.email?.message}</p>
 
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
<div className="row"> 
<div className="col">
<label>Gender</label> 
<select className='form-control' {...register("gender", {
     required:"Enter gender"
   })}> 
   
    <option value="male">Male</option> 
    <option value="female">Female</option> 
    
   
   </select>  
   <p>{errors.gender?.message}</p>


</div> 
<div className="col">   
<label>DOB</label>
<input className='form-control' type="date" {...register("dateofbirth", {
  valueAsDate: true
})} /><span className="input-group-addon"><span className="glyphicon glyphicon-calendar"></span>
</span>
 <p>{errors.dateofbirth?.message}</p>

 

</div>
</div>







<input type="submit" className="btn btn-primary btn-lg" value="Submit"/>
</form>  

</div> 
</div>
  )
}

export default AddPatientDetails