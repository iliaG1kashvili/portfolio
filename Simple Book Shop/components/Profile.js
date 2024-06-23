import React from 'react';
import './Profile.css';

function Profile() {
    return (
        <div className="profile-container">
            <h2>Profile Information</h2>
            <div className="profile-details">
                <div>
                    <strong>Name:</strong> 
                </div>
                <div>
                    <strong>Email:</strong> 
                </div>
                <div>
                    <strong>Address:</strong> 
                </div>
                <div>
                    <strong>Phone:</strong> 
                </div>
                
            </div>
        </div>
    );
}

export default Profile;
