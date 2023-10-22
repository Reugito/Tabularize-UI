import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/Api'
import './Style.css'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Create a history object

  const handleSignIn = async (e) => {
    e.preventDefault();
  
    try {
      const response = await api.login(username, password);
  
      const token = response.data;
  
      if (token) {
        localStorage.setItem('token', token);
        navigate('/dashboard');
      } else {
        console.error('Token not found in the response');
      }
    } catch (error) {
      console.error('Login error', error);
    }
  }
  

  return (
    <div className="form-toggle">
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
    </div>
  );
}

export default Login;
