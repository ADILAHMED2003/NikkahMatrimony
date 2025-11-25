import React, { useState } from 'react';
import './Login.css';
import { login } from '../../redux/slices/userSlice';
import { useDispatch, useSelector } from "react-redux";
import { store } from '../../redux/store';
import { useNavigate } from 'react-router-dom';

import { handlePost } from '../../utils/axios';
import { URLS } from '../../utils/constants';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state) => state.user);

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userResponse = await handlePost(URLS.login,formData);   // ✅ API outside reducer

            dispatch(login(userResponse));                  // ✅ store plain data
            if (userResponse.success === true) {    
                alert("successfully logged in✅");
                navigate('/');
            }
        } catch (error) {
            alert("Something went wrong. Please try again.");
            console.log("error", error);
            
        }
    };


    const handleRegisterClick = () => {
        window.location.href = '/register';
    };

    return (
        <div className='loginParent'>
            <div className="loginMain">
                <div className="loginBgEffect">
                    <div className="loginCircleOne"></div>
                    <div className="loginCircleTwo"></div>
                </div>

                <div className="loginCard">
                    <div className="loginHeader">
                        <div className="loginIconWrapper">
                            <svg className="loginIcon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 
                20.364l7.682-7.682a4.5 4.5 0 
                00-6.364-6.364L12 7.636l-1.318-1.318a4.5 
                4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <h1 className="loginTitle">Welcome Back</h1>
                        <p className="loginSubtitle">Sign in to continue your journey</p>
                    </div>

                    <form className="loginForm" onSubmit={handleSubmit}>
                        <div className="inputGroup">
                            <label className="inputLabel">Email Address</label>
                            <div className="inputWrapper">
                                <svg className="inputIcon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 
                  0L21 8M5 19h14a2 2 0 
                  002-2V7a2 2 0 00-2-2H5a2 2 
                  0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="inputField"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="inputGroup">
                            <label className="inputLabel">Password</label>
                            <div className="inputWrapper">
                                <svg className="inputIcon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M12 15v2m-6 4h12a2 2 0 
                  002-2v-6a2 2 0 00-2-2H6a2 
                  2 0 00-2 2v6a2 2 0 
                  002 2zm10-10V7a4 4 0 
                  00-8 0v4h8z" />
                                </svg>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="inputField"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                        </div>

                        <div className="loginOptions">
                            <label className="rememberMe">
                                <input type="checkbox" className="rememberCheckbox" />
                                <span>Remember me</span>
                            </label>
                            <a href="#" className="forgotPassword">Forgot Password?</a>
                        </div>

                        <button type="submit" className="loginButton">Sign In</button>
                    </form>

                    <div className="loginFooter">
                        <p>
                            Don't have an account?{' '}
                            <span onClick={handleRegisterClick} className="loginLink">Register</span>
                        </p>
                    </div>

                    <div className="loginTerms">
                        <p>By continuing, you agree to Nikkah.com's Terms of Service and Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
