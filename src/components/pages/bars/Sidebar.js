import React from 'react' 
import {Link} from 'react-router-dom'
import '../styles/sidebar.scss'

function Sidebar() {
  return ( 
    <div className='sidebar'>
    <div className='top'> 
        <div className='logo'><Link to='/'><span>DENTAL MANAGEMENT SYSTEM</span></Link></div>

       </div> 
       <hr/>
       <div className='nav-list'>
        <ul> 
        <li><Link to='/add-booking'><span>Book Dental Booking</span></Link></li> 
           
            <li><Link to='/add-patients'><span>Adding Patients</span></Link></li> 
            <li><Link to='/patient-details'><span>View Patients</span></Link></li>  
            <li><Link to='/#'><span>Dental Doctors</span></Link></li>
            
            
       </ul>

       </div>  
       </div>
  )
}

export default Sidebar