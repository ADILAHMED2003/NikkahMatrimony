import React, { useState, useEffect } from "react";
import './Profile.css';
import adilPhoto from "../../Assets/Images/adil_ahmed.jpg";
import adilPhoto2 from "../../Assets/Images/adilimgorange.jpeg";
import adilPhotowhite from "../../Assets/Images/adilimg2.jpeg";
import adilPhotodark from "../../Assets/Images/adilimgdark.jpeg";

const Profile = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        // Simulate fetching static data
        const data = {
            // Basic Details
            email: 'roshanadil101@gmail.com',
            fullName: 'Adil Ahmed',
            dateOfBirth: '2003-08-13',
            age: '22',
            height: '165 cm',
            weight: '65 kg',
            maritalStatus: 'Never Married',
            physicalStatus: 'Normal',
            motherTongue: 'Urdu',
            nationality: 'Indian',
            currentCity: 'Krishnagiri',
            currentCountry: 'India',

            // Profile & Photos
            profilePhoto: adilPhoto2,
            aboutMe:
                "I'm a simple, family-oriented person who believes in honesty, respect, and faith. I value strong family bonds and try to live life with kindness and gratitude. I enjoy peaceful moments, meaningful conversations, and spending time with loved ones. For me, marriage is a journey of understanding, patience, and love guided by faith.",
            partnerPreferences:
                "I'm looking for a life partner who is caring, respectful, and grounded in good values. Someone who believes in mutual understanding, emotional support, and growing together through all phases of life. A person who values family, faith, and togetherness — someone who will stand as a true companion in both joy and challenges.",

            // Religious/Cultural Details
            religion: 'Islam',
            caste: 'Shiekh',
            values: 'Traditional',
            spiritualLevel: 'Very Religious',

            // Education & Profession
            highestQualification: 'Bachelors',
            fieldOfStudy: 'ECE',
            occupation: 'Software Engineer',
            annualIncome: '₹0-50,000',
            workLocation: 'India',

            // Family Details
            fatherOccupation: 'Driver',
            motherOccupation: 'Housewife',
            siblings: '3',
            familyType: 'Nuclear',
            familyValues: 'Traditional',
            familyLocation: 'Krishnagiri',

            // Partner Preferences
            preferredAgeMin: '20',
            preferredAgeMax: '24',
            preferredHeightMin: '160 cm',
            preferredHeightMax: '165 cm',
            preferredMaritalStatus: 'Never Married',
            preferredEducation: 'Any',
            preferredProfession: 'No Need',
            preferredReligiousLevel: 'Religious',
            preferredLocation: 'Krishnagiri'
        };

        setProfile(data);
    }, []);

    if (!profile) return <div className="loading">Loading profile...</div>;

    return (
        <div className="profile-page">
            <div className="profile-container">
                {/* Header Section */}
                <div className="profile-header">
                    <div className="profile-photo-section">
                        <div className="profile-photo">
                            {profile.profilePhoto ? (
                                <img src={profile.profilePhoto} alt={profile.fullName} />
                            ) : (
                                <div className="photo-placeholder">Profile Photo</div>
                            )}
                        </div>
                    </div>
                    <div className="profile-basic-info">
                        <h1 className="profile-name">{profile.fullName}</h1>
                        <div className="basic-info-grid">
                            <div className="info-item">
                                <span className="info-label">Date of Birth:</span>
                                <span className="info-value">{profile.dateOfBirth}</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">Occupation:</span>
                                <span className="info-value">{profile.occupation}</span>
                            </div>
                        </div>
                        <div className="about-me-preview">
                            <h3>About Me</h3>
                            <p>{profile.aboutMe}</p>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="profile-content">
                    {/* Basic Details Section */}
                    <section className="profile-section">
                        <h2 className="section-title">Basic Details</h2>
                        <div className="details-grid">
                            <DetailItem label="Email" value={profile.email} />
                            <DetailItem label="Age" value={profile.age} />
                            <DetailItem label="Height" value={profile.height} />
                            <DetailItem label="Weight" value={profile.weight} />
                            <DetailItem label="Marital Status" value={profile.maritalStatus} />
                            <DetailItem label="Physical Status" value={profile.physicalStatus} />
                            <DetailItem label="Mother Tongue" value={profile.motherTongue} />
                            <DetailItem label="Nationality" value={profile.nationality} />
                            <DetailItem label="Current City" value={profile.currentCity} />
                            <DetailItem label="Current Country" value={profile.currentCountry} />
                        </div>
                    </section>

                    {/* Religious/Cultural Details */}
                    <section className="profile-section">
                        <h2 className="section-title">Religious/Cultural Details</h2>
                        <div className="details-grid">
                            <DetailItem label="Religion" value={profile.religion} />
                            <DetailItem label="Caste" value={profile.caste} />
                            <DetailItem label="Values" value={profile.values} />
                            <DetailItem label="Spiritual Level" value={profile.spiritualLevel} />
                        </div>
                    </section>

                    {/* Education & Profession */}
                    <section className="profile-section">
                        <h2 className="section-title">Education & Profession</h2>
                        <div className="details-grid">
                            <DetailItem label="Highest Qualification" value={profile.highestQualification} />
                            <DetailItem label="Field of Study" value={profile.fieldOfStudy} />
                            <DetailItem label="Occupation" value={profile.occupation} />
                            <DetailItem label="Annual Income" value={profile.annualIncome} />
                            <DetailItem label="Work Location" value={profile.workLocation} />
                        </div>
                    </section>

                    {/* Family Details */}
                    <section className="profile-section">
                        <h2 className="section-title">Family Details</h2>
                        <div className="details-grid">
                            <DetailItem label="Father's Occupation" value={profile.fatherOccupation} />
                            <DetailItem label="Mother's Occupation" value={profile.motherOccupation} />
                            <DetailItem label="Siblings" value={profile.siblings} />
                            <DetailItem label="Family Type" value={profile.familyType} />
                            <DetailItem label="Family Values" value={profile.familyValues} />
                            <DetailItem label="Family Location" value={profile.familyLocation} />
                        </div>
                    </section>

                    {/* Partner Preferences */}
                    <section className="profile-section">
                        <h2 className="section-title">Partner Preferences</h2>
                        <div className="partner-preferences-content">
                            <p className="preferences-text">{profile.partnerPreferences}</p>
                            <div className="details-grid">
                                <DetailItem label="Preferred Age" value={`${profile.preferredAgeMin} - ${profile.preferredAgeMax} years`} />
                                <DetailItem label="Preferred Height" value={`${profile.preferredHeightMin} - ${profile.preferredHeightMax}`} />
                                <DetailItem label="Preferred Marital Status" value={profile.preferredMaritalStatus} />
                                <DetailItem label="Preferred Education" value={profile.preferredEducation} />
                                <DetailItem label="Preferred Profession" value={profile.preferredProfession} />
                                <DetailItem label="Preferred Religious Level" value={profile.preferredReligiousLevel} />
                                <DetailItem label="Preferred Location" value={profile.preferredLocation} />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

// Reusable Detail Item Component
const DetailItem = ({ label, value }) => (
    <div className="detail-item">
        <span className="detail-label">{label}:</span>
        <span className="detail-value">{value || 'N/A'}</span>
    </div>
);

export default Profile;