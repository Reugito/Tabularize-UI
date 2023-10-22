import React, { useState } from 'react';
import api from '../../services/Api';
import { useNavigate } from 'react-router-dom';

import '../login/Style.css'

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (password !== confirmPassword) {
      alert("Password Not Matching");
      return;
    }

    try {
      const userData = { name, email, password };
      const response = await api.register(userData);

      if (response.status === true) {
        window.location.reload();
      }

      alert('Registration successful', response);
    } catch (error) {
      alert('Registration error', error);
    }
  }

  return (

    <div className="form-toggle">
    <form className="sign-up-form" id="sign-up-form">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <button type="button" onClick={handleRegister} id="sign-up-btn">Sign Up</button>
    </form>
    </div>
  );
}

export default Register;
