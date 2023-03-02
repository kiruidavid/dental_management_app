import React from 'react' 
import {TbDental, TbReportMedical} from 'react-icons/tb' 
import {BiPlusMedical} from 'react-icons/bi'
import '../styles/services.scss'

function Service() {
  return (
    <div className='services' id='services'>
    <h3>What We Do</h3> 
    <h1>D<TbDental color={'red'}/>ental  Services</h1> 
    <div className='service-grid'> 
       <div className='grid-item'>
        <TbDental size={'34px'}/>
        <h4>Fillings</h4> 
       
        </div> 
        <div className='grid-item'>
        <BiPlusMedical size={'34px'} color={'green'}/>
        <h4>Dental crowns</h4> 
       
        </div> 
       
        <div className='grid-item'>
        <TbDental size={'34px'} color={'green'}/>
        <h4>Dental implants</h4> 
       
        </div> 
        <div className='grid-item'>
        <BiPlusMedical size={'34px'} color={'green'}/>
        <h4>Braces</h4> 
       
        </div> 
        <div className='grid-item'>
        <TbReportMedical size={'34px'} color={'green'}/>
        <h4>Tooth extractions</h4> 
       
        </div> 
    </div>
</div>
  )
}

export default Service