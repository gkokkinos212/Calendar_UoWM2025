import React from 'react';
import 'boxicons';
import './Sign.css';
import { useState } from 'react';

const SignIn = () => {
    
    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction(' active');
    };

    const loginLink = () => {
        setAction('');
    };


    return ( 
       <div className={`wrapper${action}`}>
       
        <div className="form-box login">
            <form action="">
                 <h2>Log in</h2>
                <div className="input-box">
                <input type="text" placeholder='Username' required /> <box-icon name='user' type='solid' animation='tada' ></box-icon>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required /> <box-icon name='lock-alt' type='solid' animation='tada' ></box-icon>
                </div>
                <div className="remember">
                <label><input type="checkbox" />Remember me</label> 
                <a href='#'>Forgot Password?</a>
                </div>
                <button type="submit">Login</button>
                <div className="register-link">
                    <p>Don't have a Account? <a href="#" onClick={registerLink}>Register</a></p>
                </div>
            </form>
        </div>
       
        <div className="form-box register">
            <form action="">
                 <h2>Sign Up</h2>
                <div className="input-box">
                <input type="text" placeholder='Username' required /> <box-icon name='user' type='solid' animation='tada' ></box-icon>
                </div>
                <div className="input-box">
                <input type="email" placeholder='Email' required /> <box-icon name='envelope' type='solid' animation='tada' ></box-icon>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required /> <box-icon name='lock-alt' type='solid' animation='tada' ></box-icon>
                </div>
                <button type="submit">Register</button>
                <div className="register-link">
                    <p>Already have a Account? <a href="#" onClick={loginLink}>Login</a></p>
                </div>
            </form>
        </div>
    
    </div>
     );
};
 
export default SignIn;