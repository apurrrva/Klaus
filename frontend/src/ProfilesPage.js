import React from 'react';
import './Profiles.css'; 

import bowIcon from './assets/BOW.svg'
import logo from './assets/klaus_logo1.png'

function ProfilesPage({ user, onStartSwiping }) {
  return (
    <div className = "main-container">
      <div className = "header">
        <img className = "header-logo" src = {logo} alt = "logo"/>
      </div>

      
      <div className = "profile-div">
        <div className = "pfp">
          pfp here
        </div>
        <div className = "name">
          <h1> {user.name} </h1>
        </div>
        <div className = "details">
          <h2> Lists made: X </h2>
        </div>
      </div>

      <div className = "giftlists">
        {user.friends.map (friend => (
          <div key = {friend} className = "friends">
            <div className = "icon">
              <img className = "bow-icon" src = {bowIcon} alt = "bow-icon" />
            </div>
            <div className = "friendname">
              {friend}
            </div>
            <div className = "button1">
              <button onClick = {() => onStartSwiping(friend)}> Start Swiping!</button>
            </div>
            <div className = "button2">
              <button> View Giftlist </button>
            </div>
          </div>
        ))}
      </div>

      <div className = "new-list">
        <button> Create new list </button>
      </div>

    </div>
  );
}


export default ProfilesPage;
