import './App.css'
import React, { useState } from 'react';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="signup-form">
      <form onSubmit={handleSubmit}>
     
        <div className='Signup-Form'> 
            <h3>Signup Form</h3>
        <div>
          <label htmlFor="email">Email:</label><br></br>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label><br></br>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='sign-btn'>Sign Up</button>
        </div>
        
      </form>
    </div>
     
  );
}

export default SignupForm;
