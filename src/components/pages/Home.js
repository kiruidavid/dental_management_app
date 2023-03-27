import React from 'react' 
import Navbar from './bars/Navbar' 
import Hero from './hero/Hero' 
import Service from './services/Service' 
import Footer from './footer/Footer'
import './styles/home.scss'

function Home() {
  return (
    <div>
      
        <Hero/> 
        <Service/> 
        <Footer/>
    </div>
  )
}

export default Home