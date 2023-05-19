import React from 'react';
import PropTypes from 'prop-types';

const Profile = (props) => {
const { fullName, bio, profession, children, handleName } = props;

const profileStyle = {
    border: '1px solid gray',
    padding: '20px',
    margin: '10px',
    borderRadius: '5px',
};

const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
};

return (
    <div style={profileStyle}>
    {children}
    <h2>{fullName}</h2>
    <p>Bio: {bio}</p>
    <p>Profession: {profession}</p>
    <button style={buttonStyle} onClick={() => handleName(fullName)}>
        Show Name
    </button>
    </div>
);
};

Profile.propTypes = {
fullName: PropTypes.string.isRequired,
bio: PropTypes.string.isRequired,
profession: PropTypes.string.isRequired,
children: PropTypes.element.isRequired,
handleName: PropTypes.func.isRequired,
};

Profile.defaultProps = {
fullName: 'John Doe',
bio: 'No bio available',
profession: 'Unknown',
};

export default Profile;
