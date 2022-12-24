
import  React from 'react';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Public from "./routes/Public";
import Private from "./routes/Private";




function App() {
  return (
  <BrowserRouter>
    <Routes>
       <Route path="/" element={<Public />} >       
         <Route path="/Login" element={<Login />} />
       <Route />
       <Route path="/Private" element={<Private/>} >
         <Route path="/Home" element={<Home/>} />    
       </Route>
     </Routes>

   </BrowserRouter>)
}

export default App;
