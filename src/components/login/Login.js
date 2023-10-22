import React, { useState } from 'react';
import api from '../../services/Api';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await api.signIn(username, password); // Replace 'api.signIn' with your actual API endpoint
      // Handle successful login
      console.log('Login successful', response);
    } catch (error) {
      // Handle login error
      console.error('Login error', error);
    }
  }

  return (
    <form className="sign-in-form" id="sign-in-form">
      <input
        type="email"
        placeholder="Email Address"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="password"
        required
      />
      <button onClick={handleSignIn}  id="sign-in-btn" >Sign In</button>
    </form>
  );
}

export default Login;
