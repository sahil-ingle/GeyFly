import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './LoginForm.css'; // Import the CSS file for styling


const LoginForm = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };


    return (
        <div className="container">
            <div className="logo">
                <img src="logo.png" alt="Logo" />
            </div>
            <div className="login-form">
                <div className="sub-login-form">
                    <h1 className="heading">Login</h1>
                    <p className="sub-heading">
                        Welcome to &lt;product name&gt;, Please login to your account
                    </p>
                    <form action="#" method="POST">
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
