import React from 'react';
import './App.css'; 
import Men from './Men';
import Women from './Women';
import Usercontext from './Comp/UserContext';
import { UserProvider } from './Comp/UserContext';
import Nav from './Comp/Nav';
import Home from './Comp/Home';
import Register from './Comp/Register';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; // Make sure you import Routes
import End from './End';
import Login from './Comp/Login';


function App() {
  const location = useLocation();
  const isHomeOrLoggedIn = location.pathname === '/'|| location.pathname === '/profile'||location.pathname === '/men'||location.pathname === '/women' || location.pathname === '/login';

  return (
    <div style={{ backgroundColor: 'black' }}>
      {/* Conditionally render Nav component */}
      {isHomeOrLoggedIn && <Nav />}
      <UserProvider>
       
      <Routes>
      
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
       
       
      </Routes>
      </UserProvider>
      {/* Conditionally render Nav component */}
      {isHomeOrLoggedIn && <Nav />}
      {isHomeOrLoggedIn &&  <End />}
     
    </div>
  );
}

export default App;
