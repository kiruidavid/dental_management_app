import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import Home from './components/pages/Home';
import Booking from './components/forms/Booking'; 
import {BookingProvider} from './contents/Bookings/BookingsState'
import BookingsList from './components/BookingsList'; 
import PatientList from './components/PatientList'; 
import Login from './components/forms/Login';
import AddPatientDetails from './components/forms/AddPatientDetails'; 
import {PatientProvider} from './contents/Patients/PatientState' 
import { AuthProvider } from './contents/Auth/AuthState';
import './App.css';

function App() {
  return (
    <div className="App"> 
    <BookingProvider>
      <PatientProvider> 
        <AuthProvider>
        <Router>
          <Routes> 
            <Route path='/' element={<Home/>}/>
            <Route path='/add-patients' element={<AddPatientDetails/>}/>  
            <Route path='/login' element={<Login/>}/>
            <Route path='/patient-details' element={<PatientList/>} /> 
            <Route path='/add-booking' element={<Booking/>}/> 
            <Route path='/bookings' element={<BookingsList/>}/> 
            
          </Routes>
        </Router> 
        </AuthProvider>
      </PatientProvider> 
      </BookingProvider>
     
    </div>
  );
}

export default App;
