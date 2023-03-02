import React from 'react' 
import Navbar from '../bars/Navbar' 
import { Link } from 'react-router-dom'
import '../styles/hero.scss'

function Hero() {
  return (
    <div className='hero-section' id='home'> 
    
    <Navbar/> 
    <hr/>
        <div className='hero-content'> 
         
          <h1>DENTAL MANAGEMENT SYSTEM</h1>
         <p>The best dental services with easy booking system</p> 
         <button><Link smooth={true} to='pricing'>Book now</Link></button>

        </div>
    </div>
  )
}

export default Hero