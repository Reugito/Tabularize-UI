import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/Api'
import './Style.css'
import AlertDialog from "../alerts/AlertDialog";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const closeAlert = () => {
    setAlertOpen(false);
  }

  const navigate = useNavigate(); // Create a history object

  const handleSignIn = async (e) => {
    e.preventDefault();
  
    try {


      if(username == "" || password == ""){
        setAlertMessage("Mandatory Fields are Missing")
        setAlertOpen(true)
        return
      }

      const response = await api.login(username, password);

      if(response.status == false){
        setAlertMessage("Failed: "+ response.message)
        
      }else{
        const token = response.data;
  
      if (token) {
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
        navigate('/dashboard');
      } else {
        setAlertMessage('Token not found in the response');
      }
        
      }
  
      
    } catch (error) {
      setAlertMessage('Login error'+ error.message);
    }
    setAlertOpen(true)
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
        required={true}
      />
      <button onClick={handleSignIn}  id="sign-in-btn" >Sign In</button>
    </form>

    <AlertDialog open={alertOpen} message={alertMessage} onClose={closeAlert} />

    </div>
  );
}

export default Login;
