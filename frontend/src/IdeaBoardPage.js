import React, { useState } from 'react';
import './SwipePage.css';

function IdeaBoardPage({ onBack }) {
  const allIdeas = [
    { id: 1, name: "Coffee Mug", image: "artisan-coffee-beans.jpg", assignedTo: "Alice" },
    { id: 2, name: "Bluetooth Speaker", image: "bluetooth-speaker.jpg", assignedTo: "Bob" },
    { id: 4, name: "Leather Journal", image: "leatherjournal.jpg", assignedTo: "Alice" },
    { id: 6, name: "Elden Ring", image: "elden-ring.jpg", assignedTo: "Bob" }
  ];

  const [selectedPerson, setSelectedPerson] = useState("Alice");
  const [ideas, setIdeas] = useState(allIdeas);

  const visibleIdeas = ideas.filter(idea => idea.assignedTo === selectedPerson);

  const handleAddToCart = (id) => {
    setIdeas((prevIdeas) => prevIdeas.filter(idea => idea.id !== id));
  };

  return (
    <div className="main-container">
      {/* Header Bar */}
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
            {visibleIdeas.length === 0 ? (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#888', padding: '40px 0' }}>
                All ideas added to cart!
              </div>
            ) : (
              visibleIdeas.map((idea) => (
                <div className="idea-card" key={idea.id}>
                  <button
                    className="idea-add-cart-btn"
                    onClick={() => handleAddToCart(idea.id)}
                    title="Add to Cart"
                  >
                    {/* PRESENT ICON */}
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
                  </button>
                  <img
                    src={`/assets/${idea.image}`}
                    alt={idea.name}
                    className="idea-card-img"
                  />
                  <div className="idea-card-title">{idea.name}</div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar with Person Selector */}
      <div className="fixed-nav-container">
        <div className="card-nav" style={{
          justifyContent: "center", alignItems: "center"
        }}>
          <span style={{ color: "white", marginRight: 10, fontWeight: 500 }}>Viewing ideas for:</span>
          <select
            value={selectedPerson}
            onChange={e => setSelectedPerson(e.target.value)}
            style={{
              fontSize: "1em",
              padding: "5px 12px",
              borderRadius: 6,
              border: "1px solid #ccc"
            }}
          >
            <option value="Alice">Alice</option>
            <option value="Bob">Bob</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default IdeaBoardPage;