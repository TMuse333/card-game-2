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
  const [errorMessage, setErrorMessage] = useState('');
  const [emailVerified, setEmailVerified] = useState(false);
  const [tokenFromURL, setTokenFromURL] = useState('');
  const [emailSent, setEmailSent] = useState(false)

  useEffect(() => {
    const verifyEmail = async (token) => {
      try {
        const response = await axios.get(`https://quantum-card-game-bd4eaa931b03.herokuapp.com/verify/${token}`);
        if (response.data.success) {
          setEmailVerified(true);
          setUserLoggedIn(true);
          setEmailSent(false) // Update email verification state
          console.log('Email verified successfully');
        } else {
          console.log('Email verification failed');
        }
      } catch (error) {
        console.error('Error verifying email:', error);
      }
    };

    // Check if there is a token in the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
      verifyEmail(token); // Call verifyEmail with the token
    }
  }, []);// Empty dependency array ensures this runs once on mount

  

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
          localStorage.setItem('token', JSON.stringify({
            username: username,
            token: response.data.token
          }));
          if(isRegisterMode){
            setEmailSent(true)
          }
          setEmail('');
          setPassword('');
          setErrorMessage('');
          console.log('Login successful:', response.data);
        })
        .catch(error => {
          console.error('Login failed:', error);
          if (error.response) {
            setErrorMessage(error.response.data.message);
            console.log('Server responded with:', error.response.data);
          } else if (error.request) {
            setErrorMessage('No response received from server.');
            console.log('No response received:', error.request);
          } else {
            setErrorMessage('Error setting up request.');
            console.log('Error setting up request:', error.message);
          }
        })
        .finally(() => {
          setSubmitClicked(false);
        });
    }
  }, [submitClicked, username, password, isRegisterMode]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitClicked(true);
  };

  const toggleMode = () => {
    setIsRegisterMode((prevMode) => !prevMode);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUserLoggedIn(false);
    setUsername('');
  };

  return (
    <div className='login-box'>
      <h2>{errorMessage ? errorMessage : isRegisterMode && !userLoggedIn ? 'Register' : userLoggedIn ? `Salutations, ${username}` : 'Login'}</h2>
      <p onClick={handleLoginExit} className='exit-button'>X</p>
      {!userLoggedIn && !emailSent ? (
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
      ) :
        !emailVerified && emailSent && isRegisterMode ? (
            <>
          <h2>Check your email for verification</h2>
          <p>Then return to this page a refresh to start playing!</p>
          </>
        ) : (
          <>
            <p>You are logged in, you can close this tab now.</p>
            <button onClick={handleLogout}>Log out</button>
          </>
        )}
    </div>
  );
};

export default LoginBox;
