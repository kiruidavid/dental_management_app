import React, {useState} from 'react' 
import DatePicker from 'react-datepicker'
import './styles/patientform.scss' 
import "react-datepicker/dist/react-datepicker.css";

function AddPatientDetails() { 
    
  const [first_name, setFirstName] = useState("") 
  const [last_name, setLastName] = useState("") 
  const [email, setEmail] = useState("") 
  const [phone_number, setPhoneNumber] = useState(0) 
  const [dateofbirth, setDateofBirth] = useState(new Date()) 
  const [gender, setGender] = useState("") 
  const [patients, setPatients] = useState([ 
    {
    first_name: "",   
    last_name: "", 
    email: "", 
    phone_number: "", 
    gender: "", 
    dateofbirth: ""

    }

  ])
  
  return (
    <div className='patient-form'>
    <h1>PATIENT DETAILS</h1> 
    <form onSubmit={(e) => {
      e.preventDefault() 
      let new_patient = {
        first_name, 
        last_name, 
        email, 
        phone_number, 
        dateofbirth,
        gender, 

      } 
      setPatients([...patients,new_patient])
    }}>
<div className="row">
<div className="col"> 
<label>First name</label>
  <input onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control"  value={first_name}/>
</div>
<div className="col"> 
<label>Last name</label>
  <input onChange={(e) => setLastName(e.target.value)} type="text" className="form-control"  value={last_name}/>
</div>
</div> 
<div className="row">
<div className="col"> 
<label>Email</label>
  <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control"  value={email}/>
</div>
<div className="col"> 
<label>Phone Number</label>
<input onChange={(e) => setPhoneNumber(e.target.value)} type="text" className="form-control"  value={phone_number}/>
</div>
</div>   
<div className="row"> 
<div className="col">
<label for="cars">Gender</label>

<select className="form-control" onChange={(e) => setGender(e.target.value)}>
  <option value="male">Male</option>
  <option value="female">Female</option>
 
</select> 
</div> 
<div className="col">   
<label>DOB</label>
<input type="date" className="form-control" value={dateofbirth} onChange={(e) => setDateofBirth(e.target.value)} />

 

</div>
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
      <th scope="col">Email</th>  
      <th scope="col">Phone Number</th> 
      <th scope="col">Gender</th> 
      <th scope="col">DOB</th>
    </tr>
  </thead>
  <tbody>
     
      {patients.map((patient) => (
        <tr>
        <td>{patient.first_name}</td> 
        <td>{patient.last_name}</td> 
        <td>{patient.email}</td> 
        <td>{patient.phone_number}</td> 
        <td>{patient.gender}</td> 
        <td>{patient.dateofbirth}</td>
        </tr>
      ))}
     
      
    
    
  </tbody>
</table>

 </div>
</div>
  )
}

export default AddPatientDetails