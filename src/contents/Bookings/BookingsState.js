import React, {createContext, useEffect, useState} from "react"; 


export const BookingContext = createContext() 

export const BookingProvider = ({children}) => { 
    function bookingLS(){
        let bookingDetails = localStorage.getItem('bookings') 
        if(bookingDetails){
            return JSON.parse(bookingDetails)
        } else{
            return []
        }
    }
 const [bookings, setBookings] = useState(bookingLS()) 
 useEffect(() => {
  localStorage.setItem('bookings', JSON.stringify(bookings))
 }, [bookings])
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
function deleteBookings(phone_no){
    let new_bookings = bookings.filter((booking) => booking.phoneNo !== phone_no) 
    setBookings([...new_bookings])
}

    
    

  
 return <BookingContext.Provider value={{dentalServices, addBookings, bookings, deleteBookings}}>
   {children}
 </BookingContext.Provider>
}