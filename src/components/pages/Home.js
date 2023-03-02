import React from 'react' 
import Navbar from './bars/Navbar' 
import Hero from './hero/Hero' 
import Service from './services/Service'
import './styles/home.scss'

function Home() {
  return (
    <div>
      
        <Hero/> 
        <Service/>
    </div>
  )
}

export default Home