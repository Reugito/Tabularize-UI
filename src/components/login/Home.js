import React, { useState } from 'react';
import Register from '../register/Register';
import Login from './Login';
import './Style.css'

function Home() {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <>
      <div className="container">
        <div className="form-container">
          <h1 id="header">{showLogin ? 'Sign In' : 'Sign Up'}</h1>
          <div className="toggle-button">
            <button
              id="sign-in-toggle"
              onClick={() => setShowLogin(true)}
              className={showLogin ? 'active-login' : ''}
            >
              Sign In
            </button>
            <button
              id="sign-up-toggle"
              onClick={() => setShowLogin(false)}
              className={!showLogin ? 'active-login' : ''}
            >
              Sign Up
            </button>
          </div>

          
            {showLogin ? <Login /> : <Register />}
          
        </div>
      </div>
    </>
  );
}

export default Home;
