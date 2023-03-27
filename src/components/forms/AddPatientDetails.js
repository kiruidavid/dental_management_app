import React, {useState, useContext} from 'react' 
import {PatientContext} from '../../contents/Patients/PatientState' 
import Navbar from '../pages/bars/Navbar' 
import {useForm} from 'react-hook-form' 
import { Link } from 'react-router-dom' 
import DatePicker from 'react-datepicker'
import axios from 'axios'
import './styles/patientform.scss' 
import "react-datepicker/dist/react-datepicker.css";

function AddPatientDetails() { 
 
  const {confirmPassword, setConfirmPassword} = useState("")
  const {addPatients, getPatientDetails, patients} = useContext(PatientContext)
  const {register, formState:{errors}, handleSubmit} = useForm()
 
  

 
  
  return (
    <div className='patient-container'>  
    <Navbar/>
   
    <div className='patient-form'>
    <h1>REGISTER YOUR DETAILS WITH US</h1> 
    <hr/>
    <form onSubmit={handleSubmit(({first_name,last_name,email,phone_number,gender, dateOfBirth, password}) => {
      const new_patient = {
        first_name, 
        last_name, 
        email, 
        phone_number, 
        gender, 
        dateOfBirth, 
        password

      }   
     axios.post("http://localhost:3400/api/patients/register", new_patient).then((res) => {
      console.log(res)
     }).catch((error)=> {
      console.log(error)
     })
     
     
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
<input className='form-control' {...register("phone_number",{ 
        required:"Phone number is required", 
        pattern:{
          value:/^(?:254|\+254|0)?(7(?:(?:[12][0-9])|(?:0[0-8])|(9[0-2]))[0-9]{6})$/, 
          message:"Phone number is not valid/must begin with 07,254,+254"
        }

      })} /> 
  <p>{errors.phone_number?.message}</p>
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

<input
          
          type="date"  
          
          
          {...register("dateOfBirth", {
            required: true
          })}
        /> 
        <p>{errors.dateOfBirth?.message}</p>
        
 

 

</div>
</div> 
<div className='row'>
  <div className='col'>  
  <label>PASSWORD</label>
  <input className='form-control' {...register("password", {
    required: "Name is required", 
   
  })}/>  
   <p>{errors.password?.message}</p>

  </div> 
  <div className='col'>  
  <label>CONFIRM PASSWORD</label>
   <input className='form-control' type='password'/>

  </div>
</div>


<input type="submit" className="btn btn-primary btn-lg" value="REGISTER"/>
</form>  
<div className=''> 
 <Link to='/login'>
 If you have an account Login Here 
 </Link>
  </div> 

</div> 
</div>
  )
}

export default AddPatientDetails