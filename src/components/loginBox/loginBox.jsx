import React, { useState } from 'react';
import './loginBox.css'
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

  return (
    <div className="login-box">
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
      <button onClick={toggleForm}>
        {isLogin ? 'Create an account' : 'Already have an account?'}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginBox;
