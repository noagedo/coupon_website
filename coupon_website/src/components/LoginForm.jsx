import React from 'react';


function LoginForm() {
  return (
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
    </div>
  );
}

export default LoginForm;
