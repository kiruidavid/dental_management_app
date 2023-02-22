import React, {useContext} from 'react' 
import {PatientContext} from '../contents/Patients/PatientState'

function PatientList() { 
    const {patients} = useContext(PatientContext) 
    {console.log(patients)}
  return (
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
  )
}

export default PatientList