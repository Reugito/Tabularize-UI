import React, { useState } from 'react';
import api from '../../services/Api';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      // Handle password mismatch error
      return;
    }

    try {
      const userData = { name, email, password };
      const response = await api.register(userData);
      // Handle successful registration
      console.log('Registration successful', response);
    } catch (error) {
      // Handle registration error
      console.error('Registration error', error);
    }
  }

  return (
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
      <button onClick={handleRegister} id="sign-up-btn">Sign Up</button>
    </form>
  );
}

export default Register;
