import React, { useRef } from 'react';
import './Register.css';
import { useHistory } from 'react-router';

import axios from "axios";

function Register() {

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();
        if( password.current.value !== passwordAgain.current.value ) {
            passwordAgain.current.setCustomValidity("Passwords don't match!");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try {
                await axios.post("/auth/register", user);
                history.push("/login");
            } catch( err ) {
                console.log(err);
            }
        }
    };

    return (
        <div className="login">
            <div className="loginWrapper">

                <div className="loginLeft">

                    <h3 className="loginLogo">My Social</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on MySocial.
                    </span>

                </div>

                <div className="loginRight">

                    <form className="registerBox" onSubmit={handleClick}>
                        
                        <input placeholder="Email" className="loginInput" type = "email" ref={email} required />
                        <input placeholder="Username" className="loginInput" ref={username} required />
                        <input placeholder="Password" className="loginInput" minLength="6" type="password" ref={password} required />
                        <input placeholder="Password Again" className="loginInput" minLength="6" type="password" ref={passwordAgain} required />

                        <button className="loginButton" type="submit">Sign Up</button>

                        <button className="loginRegisterButton">Log In</button>

                    </form>

                </div>

            </div>
        </div>
    )
}

export default Register
