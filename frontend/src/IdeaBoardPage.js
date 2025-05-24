import React from 'react';
import './SwipePage.css'; // Reuse the same styles


function IdeaBoardPage({ onBack, onIdeaBoard,handleNavigation }) {
  // Dummy ideas for demonstration
  const ideas = [
    {
      id: 2,
      name: "Polaroid Camera",
      image: "/assets/polaroidcamera.jpg",
      description: "Vintage-style instant camera",
    },
    {
        id: 19,
        name: "Elden Ring",
        image: "/assets/elden-ring.jpg",
        description: "Rise Tarnished",
      },
      {
        id: 22,
        name: "Sakura Miku Figure",
        image: "/assets/miku.jpg",
        description: "Ring in the Spring with Sakura Miku: Hanami Outfit Ver.!"
      },
  ]

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
          <h3 className="idea-board-title">Idea Board</h3>
          <div className="idea-board-grid">
            {ideas.map((idea) => (
              <div className="idea-card" key={idea.id}>
                <img src={idea.image} alt={idea.name} className="idea-card-img" />
                <div className="idea-card-title">{idea.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdeaBoardPage;