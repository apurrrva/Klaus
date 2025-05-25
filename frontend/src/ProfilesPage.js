import React from 'react';
import './Profiles.css'; 
// import './SwipePage.css';

import bowIcon from './assets/BOW.svg'
import logo from './assets/klaus_logo1.png'
import defaultPfp from './assets/pfp.png'



function ProfilesPage({ user, onStartSwiping, onBack, onIdeaBoard, onProfilesClick }) {
  const handleNavigation = (page) => {
    console.log(`Navigating to ${page}`);
  };
  

  const handleIdeaBoard = () => {
    if (onIdeaBoard) {
      onIdeaBoard()
    } else {
      console.log("Navigate to idea board")
      // Default behavior if no onCartClick prop is provided
    }
  };

  const handleProfilesPage = () => {
    if (onProfilesClick) {
      onProfilesClick()
    } else {
      console.log("Navigate to idea board")
      // Default behavior if no onCartClick prop is provided
    }
  };

  return (
    <div className = "main-container">
      <div className = "header">
        <img className = "header-logo" src = {logo} alt = "logo"/>

        <svg className = "back-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="28" fill="white" onClick = {onBack}>
          <path d="M19 11H7.414l4.293-4.293a1 1 0 0 0-1.414-1.414l-6 6a1 1 0 0 0 0 1.414l6 6a1 1 0 0 0 1.414-1.414L7.414 13H19a1 1 0 0 0 0-2z" />
        </svg>
      </div>

      <div className = "profile-div">
        <div className = "pfp">
          <img className = "pfp-icon" alt = "pfp-icon" src = {defaultPfp} />
        </div>
        <div className = "name">
          {user.name}
        </div>
        <div className = "details">
          Lists made: X

          <button className='btn' style = {{right : "0px"}}>
            Edit details
          </button>

        </div>

        {/* <div className = "edit">

        </div> */}
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
              <button className = "btn" onClick = {() => onStartSwiping(friend)}> Start Swiping!</button>
            </div>
            <div className = "button2">
              <button className = "btn"> View Giftlist </button>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed-nav-container" style = {{bottom : "0px"}}>
        <div className="card-nav" style = {{bottom : "0px"}}>
            <div className="card-nav-item" onClick={() => handleNavigation("home")}>
              <div className="card-nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
                  <path d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z" />
                </svg>
              </div>
            </div>

            <div className="card-nav-item" onClick={handleIdeaBoard}>
              <div className="card-nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
                  <path d="m17.994 2.286a9 9 0 0 0 -14.919 5.536 8.938 8.938 0 0 0 2.793 7.761 6.263 6.263 0 0 1 2.132 4.566v.161a3.694 3.694 0 0 0 3.69 3.69h.62a3.694 3.694 0 0 0 3.69-3.69v-.549a5.323 5.323 0 0 1 1.932-4 8.994 8.994 0 0 0 .062-13.477zm-5.684 19.714h-.62a1.692 1.692 0 0 1 -1.69-1.69s-.007-.26-.008-.31h4.008v.3a1.692 1.692 0 0 1 -1.69 1.69zm4.3-7.741a7.667 7.667 0 0 0 -2.364 3.741h-1.246v-7.184a3 3 0 0 0 2-2.816 1 1 0 0 0 -2 0 1 1 0 0 1 -2 0 1 1 0 0 0 -2 0 3 3 0 0 0 2 2.816v7.184h-1.322a8.634 8.634 0 0 0 -2.448-3.881 7 7 0 0 1 3.951-12.073 7.452 7.452 0 0 1 .828-.046 6.921 6.921 0 0 1 4.652 1.778 6.993 6.993 0 0 1 -.048 10.481z" />
                </svg>
              </div>
            </div>
            
            <div className="card-nav-item card-center-item">
              <div className="card-nav-icon card-center-icon" title = "Create new giftlist!">
                <svg className="menu-icon" viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                </svg>
              </div>
            </div>

            <div className="card-nav-item" onClick={() => handleNavigation("gifts")}>
              <div className="card-nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
                  <path d="M12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,12,10Zm6,13A6,6,0,0,0,6,23a1,1,0,0,0,2,0,4,4,0,0,1,8,0,1,1,0,0,0,2,0ZM18,8a4,4,0,1,1,4-4A4,4,0,0,1,18,8Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,18,2Zm6,13a6.006,6.006,0,0,0-6-6,1,1,0,0,0,0,2,4,4,0,0,1,4,4,1,1,0,0,0,2,0ZM6,8a4,4,0,1,1,4-4A4,4,0,0,1,6,8ZM6,2A2,2,0,1,0,8,4,2,2,0,0,0,6,2ZM2,15a4,4,0,0,1,4-4A1,1,0,0,0,6,9a6.006,6.006,0,0,0-6,6,1,1,0,0,0,2,0Z" />
                </svg>
              </div>
            </div>

            <div className="card-nav-item" onClick={handleProfilesPage}>
              <div className="card-nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
                  <path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" />
                  <path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" />
                </svg>
              </div>
            </div>


        </div>
      </div>

    </div>
  );
}


export default ProfilesPage;
