import React, { useState } from 'react';
import './Profile.css'; // Import your CSS file

function Profile() {
  const [username, setUsername] = useState('heyoung');
  const [name, setName] = useState('Olzhas Bazarbekov');
  const [gender, setGender] = useState('Male');
  const [location, setLocation] = useState('Kazakhstan');

  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingGender, setIsEditingGender] = useState(false);
  const [isEditingLocation, setIsEditingLocation] = useState(false);

  const [newUsername, setNewUsername] = useState(username);
  const [newName, setNewName] = useState(name);
  const [newGender, setNewGender] = useState(gender);
  const [newLocation, setNewLocation] = useState(location);

  const handleUsernameChange = (e) => {
    setNewUsername(e.target.value);
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleGenderChange = (e) => {
    setNewGender(e.target.value);
  };

  const handleLocationChange = (e) => {
    setNewLocation(e.target.value);
  };

  const handleEditUsernameClick = () => {
    setIsEditingUsername(true);
  };

  const handleSaveUsernameClick = () => {
    setUsername(newUsername);
    setIsEditingUsername(false);
  };

  const handleEditNameClick = () => {
    setIsEditingName(true);
  };

  const handleSaveNameClick = () => {
    setName(newName);
    setIsEditingName(false);
  };

  const handleEditGenderClick = () => {
    setIsEditingGender(true);
  };

  const handleSaveGenderClick = () => {
    setGender(newGender);
    setIsEditingGender(false);
  };

  const handleEditLocationClick = () => {
    setIsEditingLocation(true);
  };

  const handleSaveLocationClick = () => {
    setLocation(newLocation);
    setIsEditingLocation(false);
  };

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <div className="field">
        <label htmlFor="username">Username:</label>
        <div className="field-content">
          {isEditingUsername ? (
            <div className="edit-mode">
              <input
                type="text"
                id="username"
                value={newUsername}
                onChange={handleUsernameChange}
              />
              <button onClick={handleSaveUsernameClick}>Save</button>
            </div>
          ) : (
            <div className="display-mode">
              <span>{username}</span>
              <button onClick={handleEditUsernameClick}>Edit</button>
            </div>
          )}
        </div>
      </div>
      <div className="field">
        <label htmlFor="name">Name:</label>
        <div className="field-content">
          {isEditingName ? (
            <div className="edit-mode">
              <input
                type="text"
                id="name"
                value={newName}
                onChange={handleNameChange}
              />
              <button onClick={handleSaveNameClick}>Save</button>
            </div>
          ) : (
            <div className="display-mode">
              <span>{name}</span>
              <button onClick={handleEditNameClick}>Edit</button>
            </div>
          )}
        </div>
      </div>
      <div className="field">
        <label htmlFor="gender">Gender:</label>
        <div className="field-content">
          {isEditingGender ? (
            <div className="edit-mode">
              <input
                type="text"
                id="gender"
                value={newGender}
                onChange={handleGenderChange}
              />
              <button onClick={handleSaveGenderClick}>Save</button>
            </div>
          ) : (
            <div className="display-mode">
              <span>{gender}</span>
              <button onClick={handleEditGenderClick}>Edit</button>
            </div>
          )}
        </div>
      </div>
      <div className="field">
        <label htmlFor="location">Location:</label>
        <div className="field-content">
          {isEditingLocation ? (
            <div className="edit-mode">
              <input
                type="text"
                id="location"
                value={newLocation}
                onChange={handleLocationChange}
              />
              <button onClick={handleSaveLocationClick}>Save</button>
            </div>
          ) : (
            <div className="display-mode">
              <span>{location}</span>
              <button onClick={handleEditLocationClick}>Edit</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
