import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './loginBox.css'
import { useGameContext } from '../context';
const LoginBox = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitClicked, setSubmitClicked] = useState(false); // Track if submit button is clicked


  const {setUserLoginClicked} = useGameContext()

  function handleLoginExit(){
    setUserLoginClicked(false)
  }

  useEffect(() => {
    if (submitClicked && email && username && password) {
      const userData = {
        email: email,
        username: username,
        password: password,
      };

      axios.post('http://localhost:9000/userData', userData)
        .then(response => {
          console.log('Data sent successfully', response.data);
          // Optionally, you can reset the form fields after successful submission
          setUsername('');
          setEmail('');
          setPassword('');
        })
        .catch(error => {
          console.error('Error sending data', error);
          // Handle error scenarios if needed
        });

      setSubmitClicked(false); // Reset submitClicked after POST request
    }
  }, [submitClicked, email, username, password]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitClicked(true); // Set submitClicked to true when form is submitted
  };

  return (
    <div className='login-box'>
      <h2>Login Box</h2>
      <p onClick={handleLoginExit}
      className='exit-button'>X</p>
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginBox;
