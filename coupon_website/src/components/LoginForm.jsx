import React from 'react';
import { Link } from 'react-router-dom';

function LoginForm() {
  return (
    <div> <br /> <br />
    <div className="form-container">
      <h2>Login</h2>
      <form>
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
        <input type="submit" value="Login" />
      </form>
      <Link to="/signup" className='link'>click here to sign up for free</Link>
    </div>
    </div>
  );
}

export default LoginForm;
