import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './Registration';
import './App.css'
import SignupForm from './Signup';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/Signup" element={<SignupForm/>} />
        <Route path="/" element={<RegistrationForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
