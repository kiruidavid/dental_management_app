import React, {useContext} from 'react' 
import {TbDental, TbReportMedical} from 'react-icons/tb' 
import {BiBookAdd} from 'react-icons/bi' 
import {FaStreetView, FaPlus} from 'react-icons/fa' 
import {HiDocument} from 'react-icons/hi'
import {Link} from 'react-router-dom' 
import { AuthContext } from '../../../contents/Auth/AuthState'
import '../styles/navbar.scss'

function Navbar() { 
  const {patientUser, logout} = useContext(AuthContext)
  return ( 
    <div className='navbar'>
    
    <div className='nav-logo'><Link to='/' smooth={true}><TbDental/>Dental Management System</Link></div> 
    <ul className='nav-links'> 
    
     
     <Link className='user-details'>{patientUser? patientUser.first_name: ""}</Link> 
     {patientUser ? <button onClick={logout}>Logout</button> :  <Link to='/add-patients' className='login-button'>Login/Register</Link> }
     
    </ul>  
   
   
    
     
     
    
    </div>  
  )
}

export default Navbar