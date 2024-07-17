import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
   
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className='form-group'>
      <div>
        <h3>Register Form</h3>
        <label>Full Name:</label><br></br>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
      </div>
      <div>
        <label>Mobile Number:</label><br></br>
        <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
      </div>
      <div>
        <label>Username:</label><br></br>
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />
      </div>
      <div>
        <label>Email ID:</label><br></br>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Password:</label><br></br>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </div>
       
      <button type="submit" className='sign-btn'>Register</button>
      <p>
        If you have an account?<Link to="/signup">Sign up</Link>
      </p>
      </div>
    </form>
  );
};

export default RegistrationForm;
