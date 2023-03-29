import React, {createContext, useState, useEffect} from "react"; 
import axios from "axios";

export const PatientContext = createContext() 

export const PatientProvider = ({children}) => { 
 /* function patientsLS(){
    let patientDetails = localStorage.getItem('patients')
    if (patientDetails){
      return JSON.parse(patientDetails)
    } else {
      return []
    }
  }*/
  
  //const [patients, setPatients] = useState(patientsLS()) 
 

  function addPatients(patientsDetails){
     axios.post("http://localhost:3400/api/patients/register", patientsDetails)
          .then(res => {
            console.log(res)
          }).catch(error => {
            console.log(error)
          })
      
  } 
  function getPatientDetails(){ 
   
    
  } 
  return <PatientContext.Provider value={{addPatients, getPatientDetails}}>
     {children}
  </PatientContext.Provider>
}