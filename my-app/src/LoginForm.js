import React from 'react';
import './LoginForm.css'; // Import the CSS file for styling

const LoginForm = () => {
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
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                    />
                    <br />

                    <input type="submit" value="Submit" />
                </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
