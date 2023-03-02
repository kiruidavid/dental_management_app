import React from 'react' 
import {TbDental, TbReportMedical} from 'react-icons/tb' 
import {BiBookAdd} from 'react-icons/bi' 
import {FaStreetView, FaPlus} from 'react-icons/fa' 
import {HiDocument} from 'react-icons/hi'
import {Link} from 'react-router-dom'
import '../styles/navbar.scss'

function Navbar() {
  return ( 
    <div className='navbar'>
    
    <div className='nav-logo'><Link to='home' smooth={true}><TbDental/>Dental Management System</Link></div> 
    <ul className='nav-links'> 
    
     
     <Link className='user-details'>View Details</Link>
     <Link className='login-button'>Login/Register</Link> 
    </ul>  
   
   
    
     
     
    
    </div>  
  )
}

export default Navbar