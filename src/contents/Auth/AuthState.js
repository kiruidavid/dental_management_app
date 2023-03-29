import React, {useState, useEffect, createContext} from "react"; 

import axios from "axios";

export const AuthContext = createContext() 
export const AuthProvider = ({children}) => { 
    const [patientUser, setPatientUser] = useState(JSON.parse(localStorage.getItem('patient')) || null)
    function login(patientDetails){ 
        axios.post("http://localhost:3400/api/patients/login", patientDetails)
             .then((res) => {
                setPatientUser(res.data.data)
             }).catch((error) => {
                console.log(error)
             })

    }  
    function logout(){
        axios.post("http://localhost:3400/api/patients/logout").then(() => {
            setPatientUser(null)
        }).catch((error) => {
            console.log(error)
        })
    }
    useEffect(() => {
        localStorage.setItem("patient", JSON.stringify(patientUser))
    }, [patientUser])

    return <AuthContext.Provider value={{patientUser, login, logout}}>
       {children}
    </AuthContext.Provider>

}
