import React, {createContext, useState, useEffect} from "react"; 

export const PatientContext = createContext() 

export const PatientProvider = ({children}) => { 
  function patientsLS(){
    let patientDetails = localStorage.getItem('patients')
    if (patientDetails){
      return JSON.parse(patientDetails)
    } else {
      return []
    }
  }
  
  const [patients, setPatients] = useState(patientsLS()) 
 
  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])
  function addPatients(patientsDetails){
     setPatients([...patients, patientsDetails])
      
  } 
  function getPatientDetails(){ 
    console.log(patients)
    
  } 
  return <PatientContext.Provider value={{patients, addPatients, getPatientDetails}}>
     {children}
  </PatientContext.Provider>
}