import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './loginBox.css';
import { useGameContext } from '../context';

const LoginBox = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitClicked, setSubmitClicked] = useState(false); // Track if submit button is clicked
  const [isRegisterMode, setIsRegisterMode] = useState(true); // Track if in registration mode



  const { setUserLoginClicked, userLoggedIn, setUserLoggedIn,
setUsername, username } = useGameContext();

useEffect(()=> {
    console.log('the user name',username)
  })

  function handleLoginExit() {
    setUserLoginClicked(false);
  }

  useEffect(() => {
    if (submitClicked && email && username && password) {
      const userData = {
        email: email,
        username: username,
        password: password,
      };

      const url = isRegisterMode ? 'http://localhost:9000/userData/register' : 'http://localhost:9000/userData/login';

      axios.post(url, userData)
        .then(response => {
          console.log('Data sent successfully', response.data);
          // Optionally, you can reset the form fields after successful submission
          setUsername('');
          setEmail('');
          setPassword('');
          setUserLoggedIn(true)
        })
        .catch(error => {
          console.error('Error sending data', error);
          // Handle error scenarios if needed
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


//   const reRegister = () => {
//     setSubmitClicked(false)
//   }

  return (
    <div className='login-box'>
      <h2>{isRegisterMode && !userLoggedIn? 'Register' : userLoggedIn ? `Salutations, ${username}` : 'Login'}</h2>
      <p onClick={handleLoginExit} className='exit-button'>X</p>
      {!userLoggedIn ? (
<>
<form onSubmit={handleFormSubmit}>
<input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required={!isRegisterMode} />
<input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
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
        <button>Switch account</button>
        </>
      )}
      
    </div>
  );
};

export default LoginBox;
