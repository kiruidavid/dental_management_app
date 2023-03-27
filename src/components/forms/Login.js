import React from 'react' 
import Navbar from '../pages/bars/Navbar'
import '../forms/styles/login.scss'

function Login() {
  return ( 
    <div className='login-container'> 
    <Navbar/>
    <div className='login-form'> 
      <h1>LOGIN FORM</h1> 
       <form> 
        <div> 
            <label>PHONE NUMBER</label>
        <input className='form-control' type='text'/>  
        </div> 
        <div> 
            <label>PASSWORD</label>
        <input className='form-control' type='password'/>  
        </div> 
        <input type='submit' value="LOGIN"/>
        
       </form>

    </div> 
    </div>
  )
}

export default Login