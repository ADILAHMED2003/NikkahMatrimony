// import React, { useState, useEffect } from 'react';
// import adilPhoto2 from "../../Assets/Images/adilimgorange.jpeg";
// import './ProfileCards.css';

// const ProfileCards = () => {
//     const [profiles, setProfiles] = useState([]);
//     const [isFilterOpen, setIsFilterOpen] = useState(false);
//     const [filters, setFilters] = useState({
//         ageRange: [20, 35],
//         religion: '',
//         maritalStatus: '',
//         location: '',
//         occupation: '',
//         education: '',
//         gender: '',
//         motherTongue: ''
//     });

//     useEffect(() => {
//         const data = [
//             {
//                 id: 1,
//                 fullName: 'Adil Ahmed',
//                 dateOfBirth: 'Nov 11, 2025',
//                 profilePhoto: adilPhoto2,
//                 aboutMe: "I'm a simple, family-oriented person who believes in honesty, respect, and faith.",
//                 occupation: 'Software Engineer',
//                 age: 21,
//                 religion: 'Islam',
//                 maritalStatus: 'Never Married',
//                 location: 'Karachi, Pakistan',
//                 education: 'Bachelor in Computer Science',
//                 gender: 'Male',
//                 motherTongue: 'Urdu'
//             },
//             {
//                 id: 2,
//                 fullName: 'Aayesha Khan',
//                 dateOfBirth: 'May 20, 1998',
//                 profilePhoto: adilPhoto2,
//                 aboutMe: "I'm a passionate teacher who loves to inspire young minds.",
//                 occupation: 'Teacher',
//                 age: 26,
//                 religion: 'Islam',
//                 maritalStatus: 'Never Married',
//                 location: 'Lahore, Pakistan',
//                 education: 'Masters in Education',
//                 gender: 'Female',
//                 motherTongue: 'Urdu'
//             },
//             {
//                 id: 3,
//                 fullName: 'Mohammed Ali',
//                 dateOfBirth: 'Dec 15, 1995',
//                 profilePhoto: adilPhoto2,
//                 aboutMe: "As a doctor, I believe in serving humanity.",
//                 occupation: 'Doctor',
//                 age: 28,
//                 religion: 'Islam',
//                 maritalStatus: 'Never Married',
//                 location: 'Islamabad, Pakistan',
//                 education: 'MBBS',
//                 gender: 'Male',
//                 motherTongue: 'Punjabi'
//             },
//             {
//                 id: 4,
//                 fullName: 'Fatima Noor',
//                 dateOfBirth: 'Mar 10, 1997',
//                 profilePhoto: adilPhoto2,
//                 aboutMe: "I enjoy reading, cooking, and spending quality time with family.",
//                 occupation: 'Graphic Designer',
//                 age: 27,
//                 religion: 'Islam',
//                 maritalStatus: 'Never Married',
//                 location: 'Karachi, Pakistan',
//                 education: 'Bachelor in Fine Arts',
//                 gender: 'Female',
//                 motherTongue: 'Sindhi'
//             },
//             {
//                 id: 5,
//                 fullName: 'Omar Farooq',
//                 dateOfBirth: 'Jul 22, 1994',
//                 profilePhoto: adilPhoto2,
//                 aboutMe: "Business professional with strong family values.",
//                 occupation: 'Business Owner',
//                 age: 30,
//                 religion: 'Islam',
//                 maritalStatus: 'Never Married',
//                 location: 'Dubai, UAE',
//                 education: 'MBA',
//                 gender: 'Male',
//                 motherTongue: 'Urdu'
//             },
//             {
//                 id: 6,
//                 fullName: 'Zainab Malik',
//                 dateOfBirth: 'Nov 05, 1999',
//                 profilePhoto: adilPhoto2,
//                 aboutMe: "Simple, religious, and family-oriented person.",
//                 occupation: 'Accountant',
//                 age: 24,
//                 religion: 'Islam',
//                 maritalStatus: 'Never Married',
//                 location: 'Lahore, Pakistan',
//                 education: 'ACCA',
//                 gender: 'Female',
//                 motherTongue: 'Urdu'
//             }
//         ];
//         setProfiles(data);
//     }, []);

//     const handleFilterChange = (filterName, value) => {
//         setFilters(prev => ({
//             ...prev,
//             [filterName]: value
//         }));
//     };

//     const toggleFilter = () => {
//         setIsFilterOpen(!isFilterOpen);
//     };

//     const filteredProfiles = profiles.filter(profile => {
//         return (
//             profile.age >= filters.ageRange[0] &&
//             profile.age <= filters.ageRange[1] &&
//             (filters.religion === '' || profile.religion === filters.religion) &&
//             (filters.maritalStatus === '' || profile.maritalStatus === filters.maritalStatus) &&
//             (filters.location === '' || profile.location.includes(filters.location)) &&
//             (filters.occupation === '' || profile.occupation.includes(filters.occupation)) &&
//             (filters.education === '' || profile.education.includes(filters.education)) &&
//             (filters.gender === '' || profile.gender === filters.gender) &&
//             (filters.motherTongue === '' || profile.motherTongue === filters.motherTongue)
//         );
//     });

//     return (
//         <div className="profile-cards-page">
//             {/* Header with Filter Toggle */}
//             <div className="page-header">
//                 <h1 className="page-title">Find Your Perfect Match</h1>
//                 <button className="filter-toggle-btn" onClick={toggleFilter}>
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                         <line x1="3" y1="6" x2="21" y2="6" strokeWidth="2" strokeLinecap="round"/>
//                         <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2" strokeLinecap="round"/>
//                         <line x1="3" y1="18" x2="21" y2="18" strokeWidth="2" strokeLinecap="round"/>
//                     </svg>
//                     Filters
//                 </button>
//             </div>

//             {/* Filters Sidebar */}
//             <div className={`filters-sidebar ${isFilterOpen ? 'open' : ''}`}>
//                 <div className="filters-header">
//                     <h2>Filter Profiles</h2>
//                     <button className="close-filter-btn" onClick={toggleFilter}>
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                             <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2" strokeLinecap="round"/>
//                             <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" strokeLinecap="round"/>
//                         </svg>
//                     </button>
//                 </div>

//                 <div className="filters-content">
//                     <div className="filter-group">
//                         <label>Age Range: {filters.ageRange[0]} - {filters.ageRange[1]}</label>
//                         <input 
//                             type="range" 
//                             min="18" 
//                             max="50" 
//                             value={filters.ageRange[1]}
//                             onChange={(e) => handleFilterChange('ageRange', [filters.ageRange[0], parseInt(e.target.value)])}
//                             className="age-slider"
//                         />
//                     </div>

//                     <div className="filter-group">
//                         <label>Gender</label>
//                         <select 
//                             value={filters.gender} 
//                             onChange={(e) => handleFilterChange('gender', e.target.value)}
//                         >
//                             <option value="">Any</option>
//                             <option value="Male">Male</option>
//                             <option value="Female">Female</option>
//                         </select>
//                     </div>

//                     <div className="filter-group">
//                         <label>Religion</label>
//                         <select 
//                             value={filters.religion} 
//                             onChange={(e) => handleFilterChange('religion', e.target.value)}
//                         >
//                             <option value="">Any</option>
//                             <option value="Islam">Islam</option>
//                             <option value="Christianity">Christianity</option>
//                             <option value="Hinduism">Hinduism</option>
//                         </select>
//                     </div>

//                     <div className="filter-group">
//                         <label>Marital Status</label>
//                         <select 
//                             value={filters.maritalStatus} 
//                             onChange={(e) => handleFilterChange('maritalStatus', e.target.value)}
//                         >
//                             <option value="">Any</option>
//                             <option value="Never Married">Never Married</option>
//                             <option value="Divorced">Divorced</option>
//                             <option value="Widowed">Widowed</option>
//                         </select>
//                     </div>

//                     <div className="filter-group">
//                         <label>Location</label>
//                         <input 
//                             type="text" 
//                             placeholder="Enter location"
//                             value={filters.location}
//                             onChange={(e) => handleFilterChange('location', e.target.value)}
//                         />
//                     </div>

//                     <div className="filter-group">
//                         <label>Occupation</label>
//                         <input 
//                             type="text" 
//                             placeholder="Enter occupation"
//                             value={filters.occupation}
//                             onChange={(e) => handleFilterChange('occupation', e.target.value)}
//                         />
//                     </div>

//                     <div className="filter-group">
//                         <label>Education</label>
//                         <input 
//                             type="text" 
//                             placeholder="Enter education"
//                             value={filters.education}
//                             onChange={(e) => handleFilterChange('education', e.target.value)}
//                         />
//                     </div>

//                     <div className="filter-group">
//                         <label>Mother Tongue</label>
//                         <select 
//                             value={filters.motherTongue} 
//                             onChange={(e) => handleFilterChange('motherTongue', e.target.value)}
//                         >
//                             <option value="">Any</option>
//                             <option value="Urdu">Urdu</option>
//                             <option value="Punjabi">Punjabi</option>
//                             <option value="Sindhi">Sindhi</option>
//                             <option value="English">English</option>
//                         </select>
//                     </div>
//                 </div>
//             </div>

//             {/* Overlay */}
//             {isFilterOpen && <div className="overlay" onClick={toggleFilter}></div>}

//             {/* Profiles Grid Container */}
//             <div className="profiles-container">
//                 <div className="results-count">
//                     Showing {filteredProfiles.length} profile{filteredProfiles.length !== 1 ? 's' : ''}
//                 </div>

//                 <div className="profiles-grid">
//                     {filteredProfiles.map(profile => (
//                         <div key={profile.id} className="profile-card-horizontal">
//                             <div className="profile-image-section">
//                                 <img 
//                                     src={profile.profilePhoto} 
//                                     alt={profile.fullName}
//                                     className="profile-img"
//                                 />
//                                 {/* <div className="profile-id">#{profile.id}0293</div> */}
//                             </div>

//                             <div className="profile-details-section">
//                                 <div className="profile-info">
//                                     <h3 className="profile-fullname">{profile.fullName}</h3>
//                                     <div className="profile-meta">
//                                         <div className="meta-item">
//                                             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                                                 <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2"/>
//                                                 <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2"/>
//                                                 <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2"/>
//                                                 <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2"/>
//                                             </svg>
//                                             <span>{profile.dateOfBirth}</span>
//                                         </div>
//                                         <div className="meta-item">
//                                             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                                                 <circle cx="12" cy="12" r="10" strokeWidth="2"/>
//                                                 <polyline points="12 6 12 12 16 14" strokeWidth="2"/>
//                                             </svg>
//                                             <span>Age: {profile.age}</span>
//                                         </div>
//                                     </div>
//                                     <div className="profile-meta">
//                                         <div className="meta-item">
//                                             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                                                 <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="2"/>
//                                                 <circle cx="12" cy="10" r="3" strokeWidth="2"/>
//                                             </svg>
//                                             <span>{profile.location}</span>
//                                         </div>
//                                     </div>
//                                     <div className="profile-meta">
//                                         <div className="meta-item">
//                                             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                                                 <rect x="2" y="7" width="20" height="14" rx="2" ry="2" strokeWidth="2"/>
//                                                 <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" strokeWidth="2"/>
//                                             </svg>
//                                             <span>{profile.occupation}</span>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="profile-actions-horizontal">
//                                     <button className="btn-view-profile">View Profile</button>
//                                     <button className="btn-contact">Contact</button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {filteredProfiles.length === 0 && (
//                     <div className="no-results">
//                         <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                             <circle cx="11" cy="11" r="8" strokeWidth="2"/>
//                             <path d="m21 21-4.35-4.35" strokeWidth="2"/>
//                         </svg>
//                         <h3>No profiles found</h3>
//                         <p>Try adjusting your filters to see more results</p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };
// export default ProfileCards;



import React, { useState } from 'react';
import './ProfileCards.css';
import adilPhoto2 from "../../Assets/Images/adilimgorange.jpeg";

const ProfileCards = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filters, setFilters] = useState({
        age: '',
        gender: '',
        motherTongue: '',
        maritalStatus: ''
    });

    const profiles = [
        {
            id: 77023,
            age: 25,
            name: 'Adil Ahmed',
            city: 'Thanjavur',
            country: 'Tamil Nadu',
            occupation: 'MSc, life sciences in CUTN',
            gender: 'Male',
            motherTongue: 'Tamil',
            maritalStatus: 'Single',
            image: adilPhoto2,
            lastLogin: 'Nov 19, 2025 2:52 pm'
        },
        {
            id: 81280,
            age: 37,
            name: 'Athief Ahmed',
            city: 'Nagercoil',
            country: 'Tamil Nadu',
            occupation: 'BA, NOT WORKING',
            gender: 'Female',
            motherTongue: 'Tamil',
            maritalStatus: 'Divorced',
            image: 'https://via.placeholder.com/120/87CEEB/FFFFFF?text=Profile',
            lastLogin: 'Nov 19, 2025 2:32 pm'
        },
        {
            id: 44423,
            age: 37,
            name: 'Hemanth',
            city: 'Chennai',
            country: 'Tamil Nadu',
            occupation: 'Msc psychology, ADMIN MANAGEMENT',
            gender: 'Female',
            motherTongue: 'Tamil',
            maritalStatus: 'Single',
            image: 'https://via.placeholder.com/120/FFB6C1/FFFFFF?text=Profile',
            lastLogin: 'Nov 19, 2025 2:04 pm'
        },
        {
            id: 55234,
            age: 28,
            name: 'Furkhan',
            city: 'Coimbatore',
            country: 'Tamil Nadu',
            occupation: 'BE, Software Engineer',
            gender: 'Male',
            motherTongue: 'Tamil',
            maritalStatus: 'Single',
            image: 'https://via.placeholder.com/120/98FB98/FFFFFF?text=Profile',
            lastLogin: 'Nov 19, 2025 1:45 pm'
        },
        {
            id: 62341,
            age: 32,
            name: 'Roqshan',
            city: 'Madurai',
            country: 'Tamil Nadu',
            occupation: 'MBA, Marketing Manager',
            gender: 'Female',
            motherTongue: 'Tamil',
            maritalStatus: 'Married',
            image: 'https://via.placeholder.com/120/DDA0DD/FFFFFF?text=Profile',
            lastLogin: 'Nov 19, 2025 1:20 pm'
        },
        {
            id: 73452,
            age: 29,
            name: 'Muzammil',
            city: 'Salem',
            country: 'Tamil Nadu',
            occupation: 'BBA, Business Analyst',
            gender: 'Male',
            motherTongue: 'Tamil',
            maritalStatus: 'Single',
            image: 'https://via.placeholder.com/120/F0E68C/FFFFFF?text=Profile',
            lastLogin: 'Nov 19, 2025 12:55 pm'
        }
    ];

    const filterProfiles = () => {
        return profiles.filter(profile => {
            if (filters.age && profile.age !== parseInt(filters.age)) return false;
            if (filters.gender && profile.gender.toLowerCase() !== filters.gender.toLowerCase()) return false;
            if (filters.motherTongue && profile.motherTongue.toLowerCase() !== filters.motherTongue.toLowerCase()) return false;
            if (filters.maritalStatus && profile.maritalStatus.toLowerCase() !== filters.maritalStatus.toLowerCase()) return false;
            return true;
        });
    };

    const filteredProfiles = filterProfiles();

    const handleFilterChange = (field, value) => {
        setFilters(prev => ({ ...prev, [field]: value }));
    };

    const clearFilters = () => {
        setFilters({
            age: '',
            gender: '',
            motherTongue: '',
            maritalStatus: ''
        });
    };

    return (
        <div className="profile-containers">
            <div className="header">
                <button
                    className={`hamburger ${isFilterOpen ? 'active' : ''}`}
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    aria-label="Toggle filter menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <h1 className="page-title">Find Your Match</h1>
            </div>

            <div className={`filter-sidebar ${isFilterOpen ? 'open' : ''}`}>
                <div className="filter-header">
                    <h2>Filters</h2>
                    <button className="close-btn" onClick={() => setIsFilterOpen(false)}>×</button>
                </div>

                <div className="filter-content">
                    <div className="filter-group">
                        <label>Age</label>
                        <input
                            type="number"
                            placeholder="Enter age"
                            value={filters.age}
                            onChange={(e) => handleFilterChange('age', e.target.value)}
                        />
                    </div>

                    <div className="filter-group">
                        <label>Gender</label>
                        <select
                            value={filters.gender}
                            onChange={(e) => handleFilterChange('gender', e.target.value)}
                        >
                            <option value="">All</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <div className="filter-group">
                        <label>Mother Tongue</label>
                        <input
                            type="text"
                            placeholder="e.g., Tamil"
                            value={filters.motherTongue}
                            onChange={(e) => handleFilterChange('motherTongue', e.target.value)}
                        />
                    </div>

                    <div className="filter-group">
                        <label>Marital Status</label>
                        <select
                            value={filters.maritalStatus}
                            onChange={(e) => handleFilterChange('maritalStatus', e.target.value)}
                        >
                            <option value="">All</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="divorced">Divorced</option>
                            <option value="widowed">Widowed</option>
                        </select>
                    </div>

                    <button className="clear-btn" onClick={clearFilters}>Clear All Filters</button>
                </div>
            </div>

            <div className={`main-content ${isFilterOpen ? 'shifted' : ''}`}>
                <div className="profile-count">
                    Showing {filteredProfiles.length} profile{filteredProfiles.length !== 1 ? 's' : ''}
                </div>

                <div className="profiles-grid">
                    {filteredProfiles.map(profile => (
                        <div key={profile.id} className="profile-card">
                            <div className="card-content">
                                <div className="profile-image-section">
                                    <img src={profile.image} alt={profile.name} />
                                    <div className="profile-id">ID: {profile.id}</div>
                                </div>

                                <div className="profile-info-section">
                                    <h3 className="profile-names">{profile.name}</h3>
                                    <div className="profile-detail">
                                        <span className="detail-label">Age:</span>
                                        <span className="detail-values">{profile.age}</span>
                                    </div>
                                    <div className="profile-detail">
                                        <span className="detail-label">City:</span>
                                        <span className="detail-values">{profile.city}</span>
                                    </div>
                                    <div className="profile-detail">
                                        <span className="detail-label">Country:</span>
                                        <span className="detail-values">{profile.country}</span>
                                    </div>
                                    <div className="profile-detail">
                                        <span className="detail-label">Occupation:</span>
                                        <span className="detail-values">{profile.occupation}</span>
                                    </div>
                                    <div className="profile-actions">
                                        <button className="view-profile-btn">View Profile</button>
                                        <button className="contact-btn">Contact</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProfiles.length === 0 && (
                    <div className="no-results">
                        <p>No profiles found matching your filters.</p>
                        <button onClick={clearFilters} className="clear-filters-btn">Clear Filters</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfileCards;

