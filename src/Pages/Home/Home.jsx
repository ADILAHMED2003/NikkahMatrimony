import React, { useState } from 'react';
// import Navbar from './Navbar';
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
// import Navbar from "./Components/Navbar";
import { useNavigate } from 'react-router-dom';

// import NikahForm from '../Detailform/DetailForm';


// import Footer from './Footer';
import About from './About';
import HowItWorks from './HowItWorks';
import NikkahImage from '../../Assets/Images/nikkahImage.png';
import './Home.css';
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";


const Home = () => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.data);
  // const [searchData, setSearchData] = useState({
  //   lookingFor: "Female's Biodata",
  //   maritalStatus: 'Never Married',
  //   location: ''
  // });

  // const handleInputChange = (e) => {
  //   setSearchData({
  //     ...searchData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // const handleSearch = () => {
  //   console.log('Search data:', searchData);
  // };


  return (
    <div id='home' className="home-page">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            {/* <h1 className="hero-title">
              {userData?.user?.fullname ? `Welcome ${userData.user.fullname}!` : ""}
            </h1> */}
            <h1 className="hero-title">
              {userData?.user?.fullname && (
                <span>
                  Welcome <span style={{ color: "#C71585" }}>{userData.user.fullname}!</span>
                </span>
              )}
            </h1>

            <h2 className="hero-title">
              Find a religious partner<br />
              of your choice
            </h2>
            <p className="hero-subtitle">
              We made it easy for you to get your life partner in your location
            </p>

            {/* Search Box */}
            {/* <div className="search-box">
              <div className="search-field">
                <label className="search-label">I'm looking for</label>
                <select
                  name="lookingFor"
                  value={searchData.lookingFor}
                  onChange={handleInputChange}
                  className="search-select"
                >
                  <option value="Female's Biodata">Female's Biodata</option>
                  <option value="Male's Biodata">Male's Biodata</option>
                </select>
              </div>

              <div className="search-field">
                <label className="search-label">Marital Status</label>
                <select
                  name="maritalStatus"
                  value={searchData.maritalStatus}
                  onChange={handleInputChange}
                  className="search-select"
                >
                  <option value="Never Married">Never Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                  <option value="Awaiting Divorce">Awaiting Divorce</option>
                </select>
              </div>

              <div className="search-field">
                <label className="search-label">Location</label>
                <input
                  type="text"
                  name="location"
                  value={searchData.location}
                  onChange={handleInputChange}
                  placeholder="Where are you looking for?"
                  className="search-input"
                />
              </div>

              <button onClick={handleSearch} className="search-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="8" strokeWidth="2"/>
                  <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Search
              </button>
            </div> */}
            <div className='search-box'>
              <p>When a man marries, he has fulfilled half of his religion;
                so let him fear Allah regarding the remaining half.</p>

              <span>— Hadith (Bayhaqi, Shu’ab al-Iman 5100)</span>

              <button onClick={() => navigate("/detailsform")} className="search-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="8" strokeWidth="2" />
                  <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Create Profile
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <img
                src={NikkahImage}
                alt="Nikkah Couple"
                className="hero-image"
              />
              {/* Decorative Flowers */}
              <div className="flower-decoration flower-top-left">
                <svg width="80" height="80" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="10" fill="#FCD34D" />
                  <ellipse cx="25" cy="30" rx="12" ry="15" fill="#6EE7B7" transform="rotate(-30 25 30)" />
                  <ellipse cx="55" cy="30" rx="12" ry="15" fill="#A78BFA" transform="rotate(30 55 30)" />
                  <ellipse cx="25" cy="50" rx="12" ry="15" fill="#EC4899" transform="rotate(-150 25 50)" />
                </svg>
              </div>
              <div className="flower-decoration flower-top-right">
                <svg width="80" height="80" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="10" fill="#FCD34D" />
                  <ellipse cx="25" cy="30" rx="12" ry="15" fill="#6EE7B7" transform="rotate(-30 25 30)" />
                  <ellipse cx="55" cy="30" rx="12" ry="15" fill="#EC4899" transform="rotate(30 55 30)" />
                  <ellipse cx="55" cy="50" rx="12" ry="15" fill="#A78BFA" transform="rotate(150 55 50)" />
                </svg>
              </div>
              <div className="flower-decoration flower-bottom-left">
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <circle cx="30" cy="30" r="8" fill="#FCD34D" />
                  <circle cx="20" cy="20" r="10" fill="#5B21B6" opacity="0.8" />
                  <circle cx="40" cy="20" r="8" fill="#5B21B6" opacity="0.6" />
                  <circle cx="20" cy="40" r="8" fill="#5B21B6" opacity="0.6" />
                  <circle cx="40" cy="40" r="8" fill="#5B21B6" opacity="0.6" />
                </svg>
              </div>
              <div className="flower-decoration flower-bottom-right">
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <circle cx="30" cy="30" r="8" fill="#FCD34D" />
                  <circle cx="20" cy="20" r="10" fill="#5B21B6" opacity="0.8" />
                  <circle cx="40" cy="20" r="8" fill="#5B21B6" opacity="0.6" />
                  <circle cx="20" cy="40" r="8" fill="#5B21B6" opacity="0.6" />
                  <circle cx="40" cy="40" r="8" fill="#5B21B6" opacity="0.6" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decorations */}
        <div className="bg-decoration bg-circle-1"></div>
        <div className="bg-decoration bg-circle-2"></div>
      </section>

      <div id='about'>
        <About />
      </div>

      <div id='howitworks'>
        <HowItWorks />
      </div>

      <div id='footer'>
        <Footer />
      </div>

    </div>
  );
};

export default Home;