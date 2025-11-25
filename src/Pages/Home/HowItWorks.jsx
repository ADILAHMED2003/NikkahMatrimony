import React from 'react';
// import Navbar from './Navbar';
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <div className="how-it-works-page">
      {/* <Navbar /> */}

      <section className="how-it-works-section">
        <div className="how-it-works-container">
          <div className="how-it-works-header">
            <h1 className="how-it-works-title">How niqah works</h1>
            <p className="how-it-works-subtitle">
              A very easy four step process to find your partner.
            </p>
          </div>

          <div className="steps-container">
            {/* Central Illustration */}
            <div className="central-illustration">
              <div className="couple-illustration">
                <svg width="400" height="400" viewBox="0 0 400 400" className="couple-svg">
                  {/* Background Circle */}
                  <ellipse cx="200" cy="250" rx="150" ry="120" fill="#6EE7B7" opacity="0.3" />

                  {/* Groom */}
                  <ellipse cx="160" cy="180" rx="40" ry="50" fill="#4A5568" />
                  <rect x="140" y="220" width="40" height="80" rx="5" fill="#2D3748" />
                  <circle cx="160" cy="160" r="25" fill="#FED7AA" />

                  {/* Bride */}
                  <ellipse cx="240" cy="180" rx="40" ry="50" fill="#8B4513" />
                  <rect x="220" y="220" width="40" height="80" rx="5" fill="#FFFFFF" />
                  <ellipse cx="240" cy="160" rx="20" ry="25" fill="#FED7AA" />

                  {/* Decorative Elements */}
                  <circle cx="150" cy="320" r="8" fill="#A78BFA" opacity="0.6" />
                  <circle cx="180" cy="340" r="6" fill="#A78BFA" opacity="0.6" />
                  <circle cx="250" cy="320" r="8" fill="#A78BFA" opacity="0.6" />
                  <circle cx="220" cy="340" r="6" fill="#A78BFA" opacity="0.6" />
                </svg>
              </div>
            </div>

            {/* Step 1 - Top Left */}
            <div className="step-card step-1">
              <div className="step-badge">01</div>
              <div className="step-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="step-title">Create Biodata</h3>
              <p className="step-description">
                You can easily create a biodata on Niqah completely free of cost within some steps.
              </p>
            </div>

            {/* Step 2 - Top Right */}
            <div className="step-card step-2">
              <div className="step-badge">02</div>
              <div className="step-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="step-title">Search Biodata</h3>
              <p className="step-description">
                You can easily search biodatas using many filters including age, profession, educational qualification, marital/talaq and more.
              </p>
            </div>

            {/* Step 3 - Bottom Left */}
            <div className="step-card step-3">
              <div className="step-badge">03</div>
              <div className="step-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="step-title">Contact with Guardians</h3>
              <p className="step-description">
                If someone likes your biodata or you like someone's biodata, you can directly contact their parents.
              </p>
            </div>

            {/* Step 4 - Bottom Right */}
            <div className="step-card step-4">
              <div className="step-badge">04</div>
              <div className="step-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="step-title">Get Married</h3>
              <p className="step-description">
                If you like the biodata and if you thin conversation is well, do your own inquiry & get married according to sunnah
              </p>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="additional-info">
            <div className="info-card">
              <div className="info-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="info-title">100% Verified</h4>
              <p className="info-text">All profiles are verified to ensure authenticity and safety</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="info-title">Privacy Protected</h4>
              <p className="info-text">Your personal information is completely secure with us</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="info-title">24/7 Support</h4>
              <p className="info-text">Our support team is always ready to help you</p>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default HowItWorks;