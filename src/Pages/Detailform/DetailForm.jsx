import React, { useState, useEffect } from 'react';
import './DetailForm.css';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
// import adilPng from "./assests/adil_ahmed.jpg"
import { useDispatch, useSelector } from "react-redux";
import { detailSlice } from "../../redux/slices/detailFormSlice";
import adilAhmed from "../../Assets/Images/adil_ahmed.jpg";

import { URLS } from '../../utils/constants';
import { handlePost } from '../../utils/axios';
import { showNotify } from '../../redux/slices/notifySlice';

const NikahForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const user = useSelector((state) => state.user.data);
    const [formData, setFormData] = useState({
        // Personal Details
        email: '',
        fullname: '',
        dateOfBirth: '',
        age: '',
        height: '',
        weight: '',
        maritalStatus: '',
        // children: '',
        physicalStatus: '',
        motherTongue: '',
        nationality: '',
        currentCity: '',
        currentCountry: '',

        // Profile & Photos
        profilePhoto: null,
        aboutMe: '',
        partnerPreferences: '',

        // Religious/Cultural Details
        religion: '',
        caste: '',
        values: '',
        spiritualLevel: '',

        // Education & Profession
        highestQualification: '',
        fieldOfStudy: '',
        occupation: '',
        annualIncome: '',
        workLocation: '',

        // Family Details
        fatherOccupation: '',
        motherOccupation: '',
        siblings: '',
        familyType: '',
        familyValues: '',
        familyLocation: '',

        // Partner Preferences
        preferredAgeMin: '',
        preferredAgeMax: '',
        preferredHeightMin: '',
        preferredHeightMax: '',
        preferredMaritalStatus: '',
        preferredEducation: '',
        preferredProfession: '',
        preferredReligiousLevel: '',
        preferredLocation: ''
    });


    // const userStorageData =
    //   localStorage.getItem("userregisterdata") || localStorage.getItem("userData");


    // useEffect(() => {
    //   if (!userStorageData) {
    //     navigate("/marriagelogin");
    //   }
    // }, [userStorageData, navigate]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // const handleSubmit = async (e) => {
    //   e.preventDefault();

    //   const { fullName, religion, profilePhoto } = formData;

    //   if (!fullName || !religion || !profilePhoto) {
    //     alert("Please fill all required fields (Name, Religion, and Profile Photo are mandatory)");
    //     console.log("Missing required fields:", formData);
    //     return;
    //   }

    //   try {
    //     const formDataToSend = new FormData();

    //     Object.keys(formData).forEach(key => {
    //       formDataToSend.append(key, formData[key]);
    //     });

    //     const response = await axios.post(
    //       "http://localhost:5000/user/create_profile",
    //       formDataToSend,
    //       { headers: { "Content-Type": "multipart/form-data" } }
    //     );

    //     console.log("Server response:", response.data);
    //     alert(response.data.message);
    //     navigate("/");

    //     // if (response.data.success) {
    //     // }
    //   } catch (error) {
    //     console.error("Error while creating profile:", error);
    //     if (error.response && error.response.data.message) {
    //       alert(error.response.data.message);
    //     } else {
    //       alert("Something went wrong. Please try again.");
    //     }
    //   }
    // };

    //   const handleSubmit = async (e, formData) => {
    //     e.preventDefault();

    //     // Simple validation (adjust fields according to your form)
    //     if (!formData.fullname || !formData.age || !formData.height || !formData.weight) {
    //         alert("Please fill all required fields!");
    //         return;
    //     }

    //     try {
    //         console.log("Sending payload:", formData);

    //         const response = await dodetailForm(formData);

    //         if (response.success) {
    //             dispatch(detailSlice(response));

    //             // show success message
    //             alert("Profile details submitted successfully ✅");

    //             // navigate to next page if needed
    //             navigate("/");
    //         } else {
    //             alert(response.message || "Something went wrong.");
    //         }

    //     } catch (error) {
    //         if (error.response) {
    //             // backend returned 400/500
    //             const msg = error.response.data.message +
    //                         (error.response.data.errors ? "\n" + error.response.data.errors.join("\n") : "");
    //             alert(msg);
    //         } else if (error.request) {
    //             alert("No response from server.");
    //         } else {
    //             alert(error.message);
    //         }
    //         console.log("Error submitting detail form:", error);
    //     }
    // };



    const handleSubmit = async (e) => {
        e.preventDefault();
        for (let key in formData) {
            if (formData[key] === "" || formData[key] === null) {
                dispatch(
                    showNotify({
                        message: `Please fill the field: ${key}`,
                        type: "error"
                    }));
                return;
            }
        }

        // Basic validation
        // if (!formData.fullname || !formData.email || !formData.gender) {
        //     alert("Please fill all fields!");
        //     return;
        // }

        try {
            const formDataToSend = new FormData();
            // for (let key in formData) {
            //     if (key !== "profilePhoto") {
            //         formDataToSend.append(key, formData[key]);
            //     }
            // }
            // if (formData.profilePhoto) {
            //     // formDataToSend.append("profilePhoto", formData.profilePhoto[0]);
            //     formDataToSend.append("profilePhoto", formData.profilePhoto);
            // }


            for (let key in formData) {
                if (key === "profilePhoto") {
                    formDataToSend.append("profilePhoto", formData[key]);
                } else {
                    formDataToSend.append(key, formData[key]);
                }
            }


            const response = await handlePost(URLS.detailForm, formDataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "authorization": `Bearer ${user.token}`
                },
            });

            if (response.success) {
                dispatch(showNotify({
                    message: "Profile created successfully ✅",
                    type: "success"
                }))
                // alert("Profile created successfully ✅");
                dispatch(detailSlice(response.data)); // store profile in Redux if needed
                navigate("/");
            }

        } catch (error) {
            if (error.response) {
                dispatch(showNotify({
                    message: error.response.data.message || "Something went wrong.",
                    type: "error"
                }))
                // alert(error.response.data.message || "Something went wrong.");
            } else {
                dispatch(showNotify({
                    message: error.message,
                    type: "error"   
                }))
                // alert(error.message);
            }
            console.log("Error submitting detail form:", error);
        }
    };


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Check file size (5MB limit)
            if (file.size > 5 * 1024 * 1024) {
                dispatch(showNotify({
                    message: "File size too large! Please select an image under 5MB.",
                    type: "error"
                }))
                // alert("File size too large! Please select an image under 5MB.");
                return;
            }

            // Check file type
            if (!file.type.startsWith('image/')) {
                dispatch(showNotify({
                    message: "Please select a valid image file (PNG, JPG)",
                    type: "error"
                }))
                // alert("Please select a valid image file (PNG, JPG)");
                return;
            }

            setFormData({
                ...formData,
                profilePhoto: file
            });
        }
    };
    return (
        // userStorageData && <div className="nikah-form-container">
        <div className='detailParent'>
            <div className="nikah-form-container">
                <div className="form-header">
                    <h1>Create Your Profile</h1>
                    <p>Find your perfect match with our comprehensive profile setup</p>
                </div>

                <form onSubmit={handleSubmit} className="nikah-form">
                    {/* Personal Details Section */}
                    <section className="form-section">
                        <div className="section-header">
                            <span className="section-icon">🧍‍♂️</span>
                            <h2>Personal Details</h2>
                        </div>


                        <div className="form-grid">
                            <div className="form-group">
                                <label>Email*</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                // min="0"
                                />
                            </div>
                            <div className="form-group">
                                <label>Full Name *</label>
                                <input
                                    type="text"
                                    name="fullname"
                                    value={formData.fullname}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>


                            <div className="form-group">
                                <label>Date of Birth</label>
                                <input
                                    type="date"
                                    name="dateOfBirth"
                                    value={formData.dateOfBirth}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Age</label>
                                <input
                                    type="number"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    placeholder="Your age"
                                    min="18"
                                    max="100"
                                />
                            </div>

                            <div className="form-group">
                                <label>Height (cm)</label>
                                <input
                                    type="number"
                                    name="height"
                                    value={formData.height}
                                    onChange={handleChange}
                                    placeholder="Height in cm"
                                />
                            </div>

                            <div className="form-group">
                                <label>Weight (kg)</label>
                                <input
                                    type="number"
                                    name="weight"
                                    value={formData.weight}
                                    onChange={handleChange}
                                    placeholder="Weight in kg"
                                />
                            </div>

                            <div className="form-group">
                                <label>Marital Status</label>
                                <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}>
                                    <option value="">Select status</option>
                                    <option value="never-married">Never Married</option>
                                    <option value="divorced">Divorced</option>
                                    <option value="widowed">Widowed</option>
                                    <option value="separated">Separated</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Physical Status</label>
                                <select name="physicalStatus" value={formData.physicalStatus} onChange={handleChange}>
                                    <option value="">Select status</option>
                                    <option value="normal">Normal</option>
                                    <option value="disabled">Disabled</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Mother Tongue</label>
                                <input
                                    type="text"
                                    name="motherTongue"
                                    value={formData.motherTongue}
                                    onChange={handleChange}
                                    placeholder="Your mother tongue"
                                />
                            </div>

                            <div className="form-group">
                                <label>Nationality</label>
                                <input
                                    type="text"
                                    name="nationality"
                                    value={formData.nationality}
                                    onChange={handleChange}
                                    placeholder="Your nationality"
                                />
                            </div>

                            <div className="form-group">
                                <label>Current City</label>
                                <input
                                    type="text"
                                    name="currentCity"
                                    value={formData.currentCity}
                                    onChange={handleChange}
                                    placeholder="Your current city"
                                />
                            </div>

                            <div className="form-group">
                                <label>Current Country</label>
                                <input
                                    type="text"
                                    name="currentCountry"
                                    value={formData.currentCountry}
                                    onChange={handleChange}
                                    placeholder="Your current country"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Profile & Photos Section */}
                    <section className="form-section">
                        <div className="section-header">
                            <span className="section-icon">🖼️</span>
                            <h2>Profile & Photos</h2>
                        </div>

                        <div className="form-grid">
                            <div className="form-group full-width">
                                <label>Upload Profile Photo</label>
                                <div className="file-upload">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                    />
                                    <div className="upload-placeholder">
                                        {formData.profilePhoto ? (
                                            // Show preview when file is selected
                                            <div className="image-preview">
                                                <img
                                                    src={URL.createObjectURL(formData.profilePhoto)}
                                                    alt="Profile preview"
                                                />
                                                <div className="preview-overlay">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="48"
                                                        height="48"
                                                        fill="none"
                                                        stroke="black"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                                                        <circle cx="12" cy="13" r="4" />
                                                    </svg>
                                                    <p>Change Photo</p>
                                                </div>
                                            </div>
                                        ) : (
                                            // Show upload prompt when no file
                                            <>
                                                <div className="upload-icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="48"
                                                        height="48"
                                                        fill="none"
                                                        stroke="black"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                                                        <circle cx="12" cy="13" r="4" />
                                                    </svg>
                                                </div>
                                                <p className="upload-text">Click to upload profile photo</p>
                                                <p className="upload-hint">PNG, JPG (max 5MB)</p>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="form-group full-width">
                                <label>About Me</label>
                                <textarea
                                    name="aboutMe"
                                    value={formData.aboutMe}
                                    onChange={handleChange}
                                    placeholder="Tell others about yourself, your interests, personality, etc."
                                    rows="4"
                                />
                            </div>

                            <div className="form-group full-width">
                                <label>Partner Preferences</label>
                                <textarea
                                    name="partnerPreferences"
                                    value={formData.partnerPreferences}
                                    onChange={handleChange}
                                    placeholder="Describe what you're looking for in a partner"
                                    rows="4"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Religious/Cultural Details Section */}
                    <section className="form-section">
                        <div className="section-header">
                            <span className="section-icon">🕊️</span>
                            <h2>Religious & Cultural Details</h2>
                        </div>

                        <div className="form-grid">
                            <div className="form-group">
                                <label>Religion *</label>
                                <select name="religion" value={formData.religion} onChange={handleChange} required>
                                    <option value="">Select religion</option>
                                    <option value="islam">Islam</option>
                                    <option value="christianity">Christianity</option>
                                    <option value="hinduism">Hinduism</option>
                                    <option value="sikhism">Sikhism</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Caste / Community(Optional)</label>
                                <input
                                    type="text"
                                    name="caste"
                                    value={formData.caste}
                                    onChange={handleChange}
                                    placeholder="Your caste or community"
                                />
                            </div>

                            <div className="form-group">
                                <label>Values</label>
                                <select name="values" value={formData.values} onChange={handleChange}>
                                    <option value="">Select values</option>
                                    <option value="traditional">Traditional</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="liberal">Liberal</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Spiritual Level</label>
                                <select name="spiritualLevel" value={formData.spiritualLevel} onChange={handleChange}>
                                    <option value="">Select level</option>
                                    <option value="not-religious">Pure Divine</option>
                                    <option value="somewhat-religious">Somewhat Religious</option>
                                    <option value="religious">Religious</option>
                                    <option value="very-religious">Very Religious</option>
                                </select>
                            </div>
                        </div>
                    </section>

                    {/* Education & Profession Section */}
                    <section className="form-section">
                        <div className="section-header">
                            <span className="section-icon">🎓</span>
                            <h2>Education & Profession</h2>
                        </div>

                        <div className="form-grid">
                            <div className="form-group">
                                <label>Highest Qualification</label>
                                <select name="highestQualification" value={formData.highestQualification} onChange={handleChange}>
                                    <option value="">Select qualification</option>
                                    <option value="high-school">High School</option>
                                    <option value="bachelors">Bachelor's Degree</option>
                                    <option value="masters">Master's Degree</option>
                                    <option value="phd">PhD</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Field of Study</label>
                                <input
                                    type="text"
                                    name="fieldOfStudy"
                                    value={formData.fieldOfStudy}
                                    onChange={handleChange}
                                    placeholder="Your field of study"
                                />
                            </div>

                            <div className="form-group">
                                <label>Occupation / Job Title</label>
                                <input
                                    type="text"
                                    name="occupation"
                                    value={formData.occupation}
                                    onChange={handleChange}
                                    placeholder="Your occupation"
                                />
                            </div>

                            <div className="form-group">
                                <label>Annual Income Range</label>
                                <select name="annualIncome" value={formData.annualIncome} onChange={handleChange}>
                                    <option value="">Select income range</option>
                                    <option value="0-50000">$0 - $50,000</option>
                                    <option value="50000-100000">$50,000 - $100,000</option>
                                    <option value="100000-150000">$100,000 - $150,000</option>
                                    <option value="150000+">$150,000+</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Work Location / Country</label>
                                <input
                                    type="text"
                                    name="workLocation"
                                    value={formData.workLocation}
                                    onChange={handleChange}
                                    placeholder="Your work location"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Family Details Section */}
                    <section className="form-section">
                        <div className="section-header">
                            <span className="section-icon">🏡</span>
                            <h2>Family Details</h2>
                        </div>

                        <div className="form-grid">
                            <div className="form-group">
                                <label>Father's Occupation</label>
                                <input
                                    type="text"
                                    name="fatherOccupation"
                                    value={formData.fatherOccupation}
                                    onChange={handleChange}
                                    placeholder="Father's occupation"
                                />
                            </div>

                            <div className="form-group">
                                <label>Mother's Occupation</label>
                                <input
                                    type="text"
                                    name="motherOccupation"
                                    value={formData.motherOccupation}
                                    onChange={handleChange}
                                    placeholder="Mother's occupation"
                                />
                            </div>

                            <div className="form-group">
                                <label>Number of Siblings</label>
                                <input
                                    type="text"
                                    name="siblings"
                                    value={formData.siblings}
                                    onChange={handleChange}
                                    placeholder="e.g., 2 brothers, 1 sister"
                                />
                            </div>

                            <div className="form-group">
                                <label>Family Type</label>
                                <select name="familyType" value={formData.familyType} onChange={handleChange}>
                                    <option value="">Select family type</option>
                                    <option value="nuclear">Nuclear</option>
                                    <option value="joint">Joint</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Family Values</label>
                                <select name="familyValues" value={formData.familyValues} onChange={handleChange}>
                                    <option value="">Select values</option>
                                    <option value="traditional">Traditional</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="liberal">Liberal</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Family Location</label>
                                <input
                                    type="text"
                                    name="familyLocation"
                                    value={formData.familyLocation}
                                    onChange={handleChange}
                                    placeholder="Family's location"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Partner Preferences Section */}
                    <section className="form-section">
                        <div className="section-header">
                            <span className="section-icon">❤️</span>
                            <h2>Partner Preferences</h2>
                        </div>

                        <div className="form-grid">
                            <div className="form-group">
                                <label>Preferred Age Range</label>
                                <div className="range-inputs">
                                    <input
                                        type="number"
                                        name="preferredAgeMin"
                                        value={formData.preferredAgeMin}
                                        onChange={handleChange}
                                        placeholder="Min"
                                        min="18"
                                    />
                                    <span>to</span>
                                    <input
                                        type="number"
                                        name="preferredAgeMax"
                                        value={formData.preferredAgeMax}
                                        onChange={handleChange}
                                        placeholder="Max"
                                        min="18"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Preferred Height Range (cm)</label>
                                <div className="range-inputs">
                                    <input
                                        type="number"
                                        name="preferredHeightMin"
                                        value={formData.preferredHeightMin}
                                        onChange={handleChange}
                                        placeholder="Min"
                                    />
                                    <span>to</span>
                                    <input
                                        type="number"
                                        name="preferredHeightMax"
                                        value={formData.preferredHeightMax}
                                        onChange={handleChange}
                                        placeholder="Max"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Preferred Marital Status</label>
                                <select name="preferredMaritalStatus" value={formData.preferredMaritalStatus} onChange={handleChange}>
                                    <option value="">Select status</option>
                                    <option value="never-married">Never Married</option>
                                    <option value="divorced">Divorced</option>
                                    <option value="widowed">Widowed</option>
                                    <option value="any">Any</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Preferred Education Level</label>
                                <select name="preferredEducation" value={formData.preferredEducation} onChange={handleChange}>
                                    <option value="">Select education</option>
                                    <option value="high-school">High School</option>
                                    <option value="bachelors">Bachelor's Degree</option>
                                    <option value="masters">Master's Degree</option>
                                    <option value="phd">PhD</option>
                                    <option value="any">Any</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Preferred Profession</label>
                                <input
                                    type="text"
                                    name="preferredProfession"
                                    value={formData.preferredProfession}
                                    onChange={handleChange}
                                    placeholder="Preferred profession"
                                />
                            </div>

                            <div className="form-group">
                                <label>Preferred Religious Level</label>
                                <select name="preferredReligiousLevel" value={formData.preferredReligiousLevel} onChange={handleChange}>
                                    <option value="">Select level</option>
                                    <option value="not-religious">Not Religious</option>
                                    <option value="somewhat-religious">Somewhat Religious</option>
                                    <option value="religious">Religious</option>
                                    <option value="very-religious">Very Religious</option>
                                    <option value="any">Any</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Preferred Location</label>
                                <input
                                    type="text"
                                    name="preferredLocation"
                                    value={formData.preferredLocation}
                                    onChange={handleChange}
                                    placeholder="Preferred country/city"
                                />
                            </div>
                        </div>
                    </section>

                    <div className="form-actions">
                        <button type="submit" onClick={handleSubmit} className="submit-btn">
                            Create Profile
                        </button>
                        {/* <button type="button" className="cancel-btn">
                            Save as Draft
                        </button> */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NikahForm;