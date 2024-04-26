import React from 'react';
import { Link } from 'react-router-dom';

function SignupForm() {
  return (
    <div><br /><br />
    <div className="form-container">
      <h2>Sign Up</h2>
      <form>
      <label htmlFor="first_name">First Name:</label>
        <input 
          type="text" 
          id="first_name" 
          name="first_name" 
        />
          <label htmlFor="last_name">Last Name:</label>
        <input 
          type="text" 
          id="last_name" 
          name="last_name" 
        />
        <label htmlFor="phone_number">Phone Number:</label>
        <input 
           type="tel"
          id="phone_number" 
          name="phone_number" 
        />
        <label htmlFor="email">Email:</label>
        <input 
          type="text" 
          id="email" 
          name="email" 
        />
        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          name="password"  
        />
        <input type="submit" value="sign up" />
      </form>
      <Link to="/login" className='link'>sign up already? Click here to login</Link>
    </div>
    </div>
  );

}

export default SignupForm;
