import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import './LoginForm.css'; // Import the CSS file for styling

const LoginForm = ({ onLogin }) => {
  const history = useHistory();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your login validation logic here
    if (email === 'admin@gmail.com' && password === 'admin') {
      onLogin();
      history.push('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="login-form">
        <div className="sub-login-form">
          <h1 className="heading">Login</h1>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit}>
            <label htmlFor="college-id">
              <b>College Id </b>
              <span style={{ color: 'red' }}>*</span>
            </label>
            <br />
            <br />
            <input
              type="email"
              name="email"
              placeholder="id@pvppcoe.ac.in"
              value={email}
              onChange={handleEmailChange}
              required
            />

            <label htmlFor="psw">
              <b>Password</b>
              <span style={{ color: 'red' }}>*</span>
            </label>
            <br />
            <br />
            <div className="password-input">
              <input
                type={passwordVisible ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <i
                className={`password-toggle ${passwordVisible ? 'visible' : 'hidden'}`}
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? (
                  <i className="far fa-eye-slash"></i>
                ) : (
                  <i className="far fa-eye"></i>
                )}
              </i>
            </div>
            <br />

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
