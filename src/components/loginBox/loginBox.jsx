import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './loginBox.css';
import { useGameContext } from '../context';

const LoginBox = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitClicked, setSubmitClicked] = useState(false);
  const [isRegisterMode, setIsRegisterMode] = useState(true);
  const { setUserLoginClicked, userLoggedIn, setUserLoggedIn, setUsername, username } = useGameContext();

  useEffect(() => {
    console.log('the user name', username);
  }, [username]);

  const handleLoginExit = () => {
    setUserLoginClicked(false);
  };

  useEffect(() => {
    if (submitClicked && username && password) {
      const userData = {
        username,
        password,
      };

      if (isRegisterMode) {
        userData.email = email;
      }

      const url = isRegisterMode
        ? 'https://quantum-card-game-bd4eaa931b03.herokuapp.com/userData/register'
        : 'https://quantum-card-game-bd4eaa931b03.herokuapp.com/userData/login';

        axios.post(url, userData)
        .then(response => {
          const { token, user } = response.data;
          localStorage.setItem('token', token);
          setUserLoggedIn(true);
          setUsername(user.username);
          setEmail('');
          setPassword('');
          console.log('Login successful:', response.data);
        })
        .catch(error => {
          console.error('Login failed:', error);
          // Handle specific errors here
          if (error.response) {
            console.log('Server responded with:', error.response.data);
          } else if (error.request) {
            console.log('No response received:', error.request);
          } else {
            console.log('Error setting up request:', error.message);
          }
        })
        .finally(() => {
          setSubmitClicked(false);
        });
    }
  }, [submitClicked, username, password, isRegisterMode]); // Dependencies array to watch for changes

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitClicked(true);
  };
  

  const toggleMode = () => {
    setIsRegisterMode((prevMode) => !prevMode);
  };

  return (
    <div className='login-box'>
      <h2>{isRegisterMode && !userLoggedIn ? 'Register' : userLoggedIn ? `Salutations, ${username}` : 'Login'}</h2>
      <p onClick={handleLoginExit} className='exit-button'>X</p>
      {!userLoggedIn ? (
        <>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required={!isRegisterMode}
            />

            {isRegisterMode && (
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            )}

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">{isRegisterMode ? 'Register' : 'Login'}</button>
          </form>

          <p onClick={toggleMode} className="toggle-mode-link">
            {isRegisterMode ? 'Already have an account? Login here.' : 'Don\'t have an account? Register here.'}
          </p>
        </>
      ) : (
        <>
          <p>You are logged in, you can close this tab now.</p>
          <button>Switch account</button>
        </>
      )}
    </div>
  );
};

export default LoginBox;
