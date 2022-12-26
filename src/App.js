
import  React from 'react';
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'
import {Routes,Route,Link } from 'react-router-dom'
import Tutoriales from './components/Tutoriales.jsx'





function App() {
  return (
  
    <Routes>

          <Route path="/" element={<Login />} /> 
                    
          <Route path="/Home" element={<Home/>} >
           <Route path="Tutoriales" element={<Tutoriales/>}/ >
          </Route>
     

    </Routes>

  

   )
}

export default App;
