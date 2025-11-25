import React, { useState } from 'react';
import './Register.css'; 
import { useNavigate } from 'react-router-dom';

import { register } from '../../redux/slices/userSlice';
import { useDispatch, useSelector } from "react-redux";
import { store } from '../../redux/store';

import { URLS } from '../../utils/constants';
import { handlePost } from '../../utils/axios';




const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
        phone: '',
        gender: '',
        dateOfBirth: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('Registration data:', formData);
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.fullname || !formData.email || !formData.phone || !formData.gender || !formData.password) {
            alert("Please fill all fields!");
            return;
        }

        const payload = {
            fullname: formData.fullname,
            email: formData.email,
            phone: formData.phone,
            gender: formData.gender,
            password: formData.password
        };
        console.log("Sending payload:", payload);

        try {
            const userResponseRegister = await handlePost(URLS.register,formData);   // ✅ API outside reducer

            dispatch(register(userResponseRegister)); // store in Redux
            if (userResponseRegister.success) {
                alert("Registered successfully ✅");
                navigate('/');
            }

        } catch (error) {
            if (error.response) {
                // Backend responded with 400/validation errors
                console.log("Backend response:", error.response.data);
                alert(
                    error.response.data.message +
                    (error.response.data.errors ? "\n" + error.response.data.errors.join("\n") : "")
                );
            } else if (error.request) {
                // Request made but no response received
                console.log("No response received:", error.request);
            } else {
                console.log("Error setting up request:", error.message);
            }
        }

    };


    const handleLoginClick = () => {
        window.location.href = '/login';
    };

    return (
        <div className='registerParent'>
            <div className="mainContainer">
                <div className="backgroundBlobs">
                    <div className="blob blobOne"></div>
                    <div className="blob blobTwo"></div>
                </div>

                <div className="formContainer">
                    <div className="formHeader">
                        <div className="iconBox">
                            <svg className="heartIcon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 
              20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 
              7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <h1 className="mainTitle">Join Nikkah.com</h1>
                        <p className="subTitle">Begin your journey to find your perfect match</p>
                    </div>

                    <form className="formFields" onSubmit={handleSubmit}>
                        <div className="inputGroup">
                            <label className="inputLabel">Full Name</label>
                            <div className="inputWrapper">
                                <span className="inputIcon">👤</span>
                                <input type="text" name="fullname" value={formData.fullname}
                                    onChange={handleChange} placeholder="Enter your full name" required />
                            </div>
                        </div>

                        <div className="inputGroup">
                            <label className="inputLabel">Email Address</label>
                            <div className="inputWrapper">
                                <span className="inputIcon">✉️</span>
                                <input type="email" name="email" value={formData.email}
                                    onChange={handleChange} placeholder="your.email@example.com" required />
                            </div>
                        </div>

                        <div className="inputGroup">
                            <label className="inputLabel">Password</label>
                            <div className="inputWrapper">
                                <span className="inputIcon">🔒</span>
                                <input type="password" name="password" value={formData.password}
                                    onChange={handleChange} placeholder="Create a strong password" required />
                            </div>
                        </div>

                        <div className="inputGroup">
                            <label className="inputLabel">Phone Number</label>
                            <div className="inputWrapper">
                                <span className="inputIcon">📞</span>
                                <input type="tel" name="phone" value={formData.phone}
                                    onChange={handleChange} placeholder="+1 (555) 000-0000" required />
                            </div>
                        </div>

                        <div className="inputGroup">
                            <label className="inputLabel">Gender</label>
                            <div className="inputWrapper">
                                <span className="inputIcon">⚧️</span>
                                <select name="gender" value={formData.gender}
                                    onChange={handleChange} required>
                                    <option value="">Select your gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>

                        <div className="inputGroup">
                            <label className="inputLabel">Date of Birth</label>
                            <div className="inputWrapper">
                                <span className="inputIcon">📅</span>
                                <input type="date" name="dateOfBirth" value={formData.dateOfBirth}
                                    onChange={handleChange} required />
                            </div>
                        </div>

                        <button type="submit" className="submitButton">Create Account</button>
                    </form>

                    <div className="loginLinkIf">
                        <p>
                            Already have an account?{' '}
                            <span className="loginButtonIf" onClick={handleLoginClick}>Sign In</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
