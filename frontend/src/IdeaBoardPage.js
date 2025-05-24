import React from 'react';
import './SwipePage.css'; // Reuse the same styles

function IdeaBoardPage({ onBack, onIdeaBoard, onCartClick, handleNavigation }) {
  // Dummy ideas for demonstration
  const ideas = [
    { id: 1, text: "Gift exchange party ideas" },
    { id: 2, text: "Secret Santa themes" },
    { id: 3, text: "Wishlist collaboration" }
  ];

  return (
    <div className="swipe-container">
      {/* Header Bar with Logo and Back */}
      <div className="header-bar">
        <div className="header-logo">
          <img
            src="https://cdn.discordapp.com/attachments/1373870449506652182/1375484922353160252/klaus_logo1.png?ex=68328468&is=683132e8&hm=b9cf880160fa98172d64b28a6991cd9c598fbf9881683d248411104fdb183a29&"
            alt="Logo"
            height="45"
          />
        </div>
        <div className="header-cart" onClick={onBack}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="28" fill="white">
            <path d="M19 11H7.414l4.293-4.293a1 1 0 0 0-1.414-1.414l-6 6a1 1 0 0 0 0 1.414l6 6a1 1 0 0 0 1.414-1.414L7.414 13H19a1 1 0 0 0 0-2z" />
          </svg>
        </div>
      </div>

      {/* Main card container */}
      <div className="swipe-card-container">
        <div className="swipe-card" style={{ minHeight: 200 }}>
          <h3>Idea Board</h3>
          <ul style={{ padding: 0 }}>
            {ideas.map((idea) => (
              <li key={idea.id} style={{ margin: '10px 0', fontSize: '18px', listStyle: 'none' }}>
                {idea.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Navigation Bar - copy this exactly from SwipePage for consistency */}
      <div className="fixed-nav-container">
        <div className="card-nav">
          <div className="card-nav-item" onClick={() => handleNavigation("home")}>
            {/* Home icon */}
            <div className="card-nav-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
                <path d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z" />
              </svg>
            </div>
          </div>

          <div className="card-nav-item" onClick={onIdeaBoard}>
            {/* Idea icon */}
            <div className="card-nav-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
                <path d="m17.994 2.286a9 9 0 0 0 -14.919 5.536 8.938 8.938 0 0 0 2.793 7.761 6.263 6.263 0 0 1 2.132 4.566v.161a3.694 3.694 0 0 0 3.69 3.69h.62a3.694 3.694 0 0 0 3.69-3.69v-.549a5.323 5.323 0 0 1 1.932-4 8.994 8.994 0 0 0 .062-13.477zm-5.684 19.714h-.62a1.692 1.692 0 0 1 -1.69-1.69s-.007-.26-.008-.31h4.008v.31a1.692 1.692 0 0 1 -1.69 1.69zm4.3-7.741a7.667 7.667 0 0 0 -2.364 3.741h-1.246v-7.184a3 3 0 0 0 2-2.816 1 1 0 0 0 -2 0 1 1 0 0 1 -2 0 1 1 0 0 0 -2 0 3 3 0 0 0 2 2.816v7.184h-1.322a8.634 8.634 0 0 0 -2.448-3.881 7 7 0 0 1 3.951-12.073 7.452 7.452 0 0 1 .828-.046 6.921 6.921 0 0 1 4.652 1.778 6.993 6.993 0 0 1 -.048 10.481z" />
              </svg>
            </div>
          </div>

          <div className="card-nav-item card-center-item" onClick={() => handleNavigation("swipe")}>
            {/* Center icon */}
            <div className="card-nav-icon card-center-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="white"
              >
                <path d="M21,7H17.866A6.547,6.547,0,0,0,20,2H18c0,2.881-1.971,4.307-4.152,4.8A9.239,9.239,0,0,0,15,3,3,3,0,0,0,9,3a9.239,9.239,0,0,0,1.152,3.8C7.971,6.307,6,4.881,6,2H4A6.547,6.547,0,0,0,6.134,7H3a3,3,0,0,0-3,3v4H2V24H22V14h2V10A3,3,0,0,0,21,7ZM12,2a1,1,0,0,1,1,1,7.71,7.71,0,0,1-1,3.013A7.71,7.71,0,0,1,11,3,1,1,0,0,1,12,2ZM2,10A1,1,0,0,1,3,9h8v3H2Zm2,4h7v8H4Zm16,8H13V14h7Zm2-10H13V9h8a1,1,0,0,1,1,1Z" />
              </svg>
            </div>
          </div>

          <div className="card-nav-item" onClick={() => handleNavigation("gifts")}>
            {/* Gifts icon */}
            <div className="card-nav-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
                <path d="M12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,12,10Zm6,13A6,6,0,0,0,6,23a1,1,0,0,0,2,0,4,4,0,0,1,8,0,1,1,0,0,0,2,0ZM18,8a4,4,0,1,1,4-4A4,4,0,0,1,18,8Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,18,2Zm6,13a6.006,6.006,0,0,0-6-6,1,1,0,0,0,0,2,4,4,0,0,1,4,4,1,1,0,0,0,2,0ZM6,8a4,4,0,1,1,4-4A4,4,0,0,1,6,8ZM6,2A2,2,0,1,0,8,4,2,2,0,0,0,6,2ZM2,15a4,4,0,0,1,4-4A1,1,0,0,0,6,9a6.006,6.006,0,0,0-6,6,1,1,0,0,0,2,0Z" />
              </svg>
            </div>
          </div>

          <div className="card-nav-item" onClick={() => handleNavigation("profile")}>
            {/* Profile icon */}
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

export default IdeaBoardPage;