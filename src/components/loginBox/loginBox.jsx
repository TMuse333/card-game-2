import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './loginBox.css';
import { useGameContext } from '../context';

const LoginBox = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitClicked, setSubmitClicked] = useState(false); // Track if submit button is clicked
  const [isRegisterMode, setIsRegisterMode] = useState(true); // Track if in registration mode

  const [errorMessage, setErrorMessage] = useState('')


  const { setUserLoginClicked, userLoggedIn, setUserLoggedIn,
setUsername, username } = useGameContext();


const handleLogout = () => {
    localStorage.removeItem('token');
    setUserLoggedIn(false);
    setUsername('');
  };

useEffect(()=> {
    console.log('the user name',username)
  })

  function handleLoginExit() {
    setUserLoginClicked(false);
  }

  useEffect(() => {
    if (submitClicked && username && password) {
      const userData = {
        username: username,
        password: password,
      };

      if (isRegisterMode) {
        userData.email = email; // Include email only in registration mode
      }

      const url = isRegisterMode ? 'https://quantum-card-game-bd4eaa931b03.herokuapp.com/userData/register' : 'http://localhost:9000/userData/login';

      axios.post(url, userData)
        .then(response => {
          console.log('Data sent successfully', response.data);

          console.log('the token',response.data.token)

          localStorage.setItem('token', JSON.stringify({
            username: username,
            token: response.data.token
          }));

        //   console.log('the token for storage',token)

          setEmail(''); // Optionally reset email field
          setPassword(''); // Reset password field
          setUserLoggedIn(true); // Set userLoggedIn state to true upon successful login
        })
        .catch(error => {
          console.error('Error sending data', error);
          if (error.response && error.response.status === 400) {
            setErrorMessage('Invalid username or password. Please try again.');

          } else {
            setErrorMessage('An error occurred. Please try again later.');
          }
        });

      setSubmitClicked(false); // Reset submitClicked after POST request
    }
  }, [submitClicked, email, username, password, isRegisterMode]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitClicked(true); // Set submitClicked to true when form is submitted
  };

  const toggleMode = () => {
    setIsRegisterMode(prevMode => !prevMode); // Toggle between register and login modes
  };




  return (
    <div className='login-box'>
        {errorMessage !== '' ? (
            <h2>{errorMessage}</h2>
        ) : (
            <h2>{isRegisterMode && !userLoggedIn? 'Register' : userLoggedIn ? `Salutations, ${username}` : 'Login'}</h2>
        )}
     
      <p onClick={handleLoginExit} className='exit-button'>X</p>
      {!userLoggedIn ? (
<>
<form onSubmit={handleFormSubmit}>
<input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required={!isRegisterMode} />

{isRegisterMode && (
    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
)}

<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
<button type="submit">{isRegisterMode ? 'Register' : 'Login'}</button>
</form>

<p onClick={toggleMode} className="toggle-mode-link">
{isRegisterMode ? 'Already have an account? Login here.' : 'Don\'t have an account? Register here.'}
</p>
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