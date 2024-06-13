import React, { useState } from 'react';
import './loginBox.css'
import { AnimatePresence, motion } from 'framer-motion';
import { useGameContext } from '../context';
const LoginBox = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin ? 'http://localhost:9000/login' : 'http://localhost:9000/register';
    const body = isLogin ? { email, password } : { username, email, password };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      if (data.success) {
        setMessage(isLogin ? 'Login successful!' : 'Registration successful!');
        if (isLogin) {
          localStorage.setItem('token', data.token);
        }
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  const {setUserLoginClicked} = useGameContext()

  function handleExitClick(){
    setUserLoginClicked(false)
  }

  return (
    <AnimatePresence mode='wait'>
       
    <motion.div className="login-box"
    initial={{
        opacity:0
    }}
    animate={{opacity:1}}
    exit={{opacity:0,
    transition:{
        duration:0.5
    } }}>
         <p onClick={handleExitClick}
         className='exit-button'>X</p>
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div>
          
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder='Enter Username'
            />
          </div>
        )}
        <div>
         
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='Enter Email'
          />
        </div>
        <div>
         
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='Enter Password'
          />
        </div>
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      <button style={{
        marginTop:'2rem'
      }}
       onClick={toggleForm}>
        {isLogin ? 'Create an account' : 'Already have an account?'}
      </button>
      {message && <p>{message}</p>}
    </motion.div>
    </AnimatePresence>
  );
};

export default LoginBox;
