import React from 'react';
// import Navbar from './Navbar';
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* <Navbar /> */}
      
      <section className="about-hero-section">
        <div className="about-container">
          <div className="about-header">
            <h1 className="about-title">About Niqah</h1>
            <p className="about-subtitle">
              Connecting hearts through faith and tradition
            </p>
          </div>

          <div className="about-content-grid">
            <div className="about-card">
              <div className="about-card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="about-card-title">Our Mission</h3>
              <p className="about-card-text">
                To help Muslims worldwide find their perfect life partner through a platform that respects Islamic values, traditions, and the importance of family involvement in the matrimonial process.
              </p>
            </div>

            <div className="about-card">
              <div className="about-card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="about-card-title">Privacy & Security</h3>
              <p className="about-card-text">
                We prioritize your privacy and security with advanced verification systems, secure data handling, and strict privacy controls to ensure a safe matrimonial experience for all members.
              </p>
            </div>

            <div className="about-card">
              <div className="about-card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="about-card-title">Community Driven</h3>
              <p className="about-card-text">
                Join thousands of Muslims who have successfully found their life partners through our platform. Our community is built on trust, respect, and shared Islamic values.
              </p>
            </div>
          </div>

          <div className="about-story-section">
            <div className="about-story-content">
              <h2 className="about-story-title">Our Story</h2>
              <p className="about-story-text">
                Niqah was founded with a simple yet profound vision: to make the sacred journey of finding a life partner easier and more accessible for Muslims around the world. We understand that marriage is not just a union of two individuals, but a coming together of families, values, and traditions.
              </p>
              <p className="about-story-text">
                In today's digital age, we've created a platform that honors traditional Islamic matrimonial practices while leveraging modern technology. Our team works tirelessly to ensure that every feature we develop respects the sanctity of marriage in Islam and provides tools that help families make informed decisions.
              </p>
              <p className="about-story-text">
                With thousands of success stories and counting, Niqah has become a trusted name in Muslim matrimony. We're committed to continuously improving our platform to serve our community better and help more people find their perfect match.
              </p>
            </div>
            <div className="about-story-image">
              <div className="story-image-placeholder">
                <svg width="200" height="200" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="80" fill="#7C3AED" opacity="0.1"/>
                  <circle cx="100" cy="100" r="60" fill="#EC4899" opacity="0.1"/>
                  <path d="M100 60 L120 90 L150 90 L125 110 L135 140 L100 120 L65 140 L75 110 L50 90 L80 90 Z" fill="#7C3AED"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="about-values-section">
            <h2 className="about-values-title">Our Core Values</h2>
            <div className="about-values-grid">
              <div className="value-item">
                <div className="value-number">01</div>
                <h4 className="value-title">Islamic Principles</h4>
                <p className="value-text">
                  Every feature is designed with Islamic principles at its core, ensuring halal and respectful interactions.
                </p>
              </div>
              <div className="value-item">
                <div className="value-number">02</div>
                <h4 className="value-title">Family Involvement</h4>
                <p className="value-text">
                  We encourage and facilitate family participation in the matrimonial process, honoring traditional practices.
                </p>
              </div>
              <div className="value-item">
                <div className="value-number">03</div>
                <h4 className="value-title">Transparency</h4>
                <p className="value-text">
                  Clear communication and verified profiles ensure trust and authenticity in every connection.
                </p>
              </div>
              <div className="value-item">
                <div className="value-number">04</div>
                <h4 className="value-title">Accessibility</h4>
                <p className="value-text">
                  Making Muslim matrimony accessible to everyone, regardless of location or background.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default About;