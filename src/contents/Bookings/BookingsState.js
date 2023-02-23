import React, {createContext, useState} from "react"; 

export const BookingContext = createContext() 

export const BookingProvider = ({children}) => {
 const [bookings, setBookings] = useState([]) 
 const dentalServices = [
    {
      service: 'Fillings', 
      cost: 5000
    },  
    {
        service: 'Dental crowns', 
        cost: 7000
    },  
    {
        service: 'Tooth extractions', 
        cost: 5000
    },  
    {
        service: 'Dental implants', 
        cost: 5000
    }, 
    {
        service: 'Braces', 
        cost: 75000
    } 
] 
function addBookings(booking){
    setBookings([...bookings, booking])
}
    
    

  
 return <BookingContext.Provider value={{dentalServices, addBookings}}>
   {children}
 </BookingContext.Provider>
}