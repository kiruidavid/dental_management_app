import React, {useContext, useState} from 'react' 
import Navbar from '../pages/bars/Navbar' 
import { AuthContext } from '../../contents/Auth/AuthState' 
import {useNavigate} from 'react-router-dom'
import '../forms/styles/login.scss'


function Login() {  
  const {login, patientUser} = useContext(AuthContext) 
  const [phone_number, setPhoneNo] = useState("") 
  const [password,setPassword] = useState("")  
  const navigate = useNavigate()

 
  return ( 
    <div className='login-container'> 
    <Navbar/>
    <div className='login-form'> 
      <h1>LOGIN FORM</h1> 
       <form onSubmit={(e) => { 
        e.preventDefault() 
        const patient_credentials = {
          phone_number, 
          password
        }
        login(patient_credentials) 
        navigate('/')
       }}> 
        <div> 
            <label>PHONE NUMBER</label>
        <input className='form-control' type='text' onChange={(e) => setPhoneNo(e.target.value) }/>  
        </div> 
        <div> 
            <label>PASSWORD</label>
        <input className='form-control' type='password' onChange={(e) => setPassword(e.target.value)}/>  
        </div> 
        <input type='submit' value="LOGIN"/>
        
       </form>

    </div> 
    </div>
  )
}

export default Login