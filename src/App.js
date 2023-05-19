import React from 'react';
import Profile from './profile/Profile';
import profileImage from './profile/profile-image.jpg';

function App() {
const handleName = (name) => {
    alert(`Profile user's name: ${name}`);
};

return (
    <div>
    <Profile
        fullName="Jihed nairi"
        bio="high school student"
        profession="student"
        handleName={handleName}
    >
        <img src={profileImage} alt="Profile" />
    </Profile>
    </div>
);
}

export default App;
