import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const handleChange = event => {
    const result = event.target.value.replace(' ').toLowerCase();

    setUsername(result);
  };
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === '') {
      setError('Please enter your username and password.');
    } else if (password === '') {
      setError('Please enter your password.');
    } else {
      setError('');
      navigate('/employe');
      alert('Login successful!');

    }
  };


  return (
    <div className='box'>
      <div className='login'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className='textfiled'>
            <div>
            <input placeholder='User Name'
              type="text"
              maxLength={7}
              value={username}
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            
            <input placeholder='Password'
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          </div>
          {error && <p className="error">{error}</p>}
          <br />
          <button className='btn-you' onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
