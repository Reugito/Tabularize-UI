import React, { useState } from 'react';
import api from '../../services/Api';
import { useNavigate } from 'react-router-dom';
import AlertDialog from "../alerts/AlertDialog";

import '../login/Style.css'

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const closeAlert = () => {
    setAlertOpen(false);
  }

  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (password !== confirmPassword) {
      setAlertMessage("Password Not Matching");
      setAlertOpen(true)
      return;
    }

    try {
      const userData = { name, email, password };
      const response = await api.register(userData);

      if (response.status === true) {
        setAlertMessage('Success '+response.message);
        window.location.reload();
      }else{
        setAlertMessage('Failed '+ response.message);
      }

    } catch (error) {
      setAlertMessage('Registration error'+error.message);
    }
    setAlertOpen(true)
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
      required
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        
      />
      <input
      required
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        
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
    <AlertDialog open={alertOpen} message={alertMessage} onClose={closeAlert} />

    </div>
  );
}

export default Register;
