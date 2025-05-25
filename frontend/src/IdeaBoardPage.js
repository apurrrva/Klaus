import React, { useState } from 'react';
import './SwipePage.css';

function IdeaBoardPage({ onBack }) {
  const allIdeas = [
    { id: 1, name: "Mario Kart 8 Deluxe", image: "mario.jpg", assignedTo: "Alice", price: 59.99 },
    { id: 2, name: "Polaroid Camera", image: "polaroidcamera.jpg", assignedTo: "Bob", price: 79.99 },
    { id: 3, name: "Coffee Maker", image: "coffeemaker.jpg", assignedTo: "Alice", price: 45.00 },
    { id: 4, name: "Leather Journal", image: "leatherjournal.jpg", assignedTo: "Bob", price: 35.50 },
    { id: 11, name: "Matte Liquid Lipstick", image: "matte-liquid-lipstick.jpg", assignedTo: "Alice", price: 18.00 },
    { id: 12, name: "Wooden Teething Ring", image: "wooden-teething-ring.jpg", assignedTo: "Bob", price: 14.00 },
    { id: 13, name: "Camping Hammock", image: "camping-hammock.jpg", assignedTo: "Alice", price: 55.00 },
    { id: 19, name: "PS4: Elden Ring", image: "elden-ring.jpg", assignedTo: "Alice", price: 59.99 },
  ];

  const [selectedPerson, setSelectedPerson] = useState("Alice");
  const [ideas, setIdeas] = useState(allIdeas);

  // maybe a bannerrr when u decide to add it to cart
  const [showBanner, setShowBanner] = useState(false);
  const [bannerMsg, setBannerMsg] = useState("");
  

  const visibleIdeas = ideas.filter(idea => idea.assignedTo === selectedPerson);

  const handleAddToCart = (id) => {
    setIdeas((prevIdeas) => prevIdeas.filter(idea => idea.id !== id));
    setBannerMsg("Gift Added to Cart!");
    setShowBanner(true);
    setTimeout(() => setShowBanner(false), 1800); // Hide after 1.8s
  };

  const handleRemoveIdea = (id) => {
    setIdeas((prevIdeas) => prevIdeas.filter(idea => idea.id !== id));
  };

  return (
    <div className="swipe-container">
      {/* Header Bar */}
      <div className="header-bar">
        <div className="header-logo">
          <img
            src="https://cdn.discordapp.com/attachments/1373870449506652182/1375484922353160252/klaus_logo1.png?ex=68328468&is=683132e8&hm=b9cf880160fa98172d64b28a6991cd9c598fbf9881683d248411104fdb183a29&"
            alt="Logo"
            height="50"
          />
        </div>
        <div className="header-cart" onClick={onBack}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="28" fill="white">
            <path d="M19 11H7.414l4.293-4.293a1 1 0 0 0-1.414-1.414l-6 6a1 1 0 0 0 0 1.414l6 6a1 1 0 0 0 1.414-1.414L7.414 13H19a1 1 0 0 0 0-2z" />
          </svg>
        </div>
      </div>

      {/* --- Add animated banner here --- */}
      {showBanner && (
        <div className="cart-banner">
          <span>{bannerMsg}</span>
        </div>
      )}

      {/* Main card container */}
      <div className="swipe-card-container">
        <div className="swipe-card" style={{ minHeight: 200 }}>

            <h3 className="idea-board-title">
            Ideas Board!
            </h3>
  
          <div className="idea-board-grid">
            {visibleIdeas.length === 0 ? (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#888', padding: '40px 0' }}>
                All ideas added to cart!
              </div>
            ) : (
              visibleIdeas.map((idea) => (
                <div className="idea-card" key={idea.id}>



                <button
                  className="idea-remove-btn"
                  onClick={() => handleRemoveIdea(idea.id)}
                  title="Remove from board"
                >
                  {/* Trash can icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50">
                    <path d="M 21 0 C 19.355469 0 18 1.355469 18 3 L 18 5 L 10.1875 5 C 10.0625 4.976563 9.9375 4.976563 9.8125 5 L 8 5 C 7.96875 5 7.9375 5 7.90625 5 C 7.355469 5.027344 6.925781 5.496094 6.953125 6.046875 C 6.980469 6.597656 7.449219 7.027344 8 7 L 9.09375 7 L 12.6875 47.5 C 12.8125 48.898438 14.003906 50 15.40625 50 L 34.59375 50 C 35.996094 50 37.1875 48.898438 37.3125 47.5 L 40.90625 7 L 42 7 C 42.359375 7.003906 42.695313 6.816406 42.878906 6.503906 C 43.058594 6.191406 43.058594 5.808594 42.878906 5.496094 C 42.695313 5.183594 42.359375 4.996094 42 5 L 32 5 L 32 3 C 32 1.355469 30.644531 0 29 0 Z M 21 2 L 29 2 C 29.5625 2 30 2.4375 30 3 L 30 5 L 20 5 L 20 3 C 20 2.4375 20.4375 2 21 2 Z M 11.09375 7 L 38.90625 7 L 35.3125 47.34375 C 35.28125 47.691406 34.910156 48 34.59375 48 L 15.40625 48 C 15.089844 48 14.71875 47.691406 14.6875 47.34375 Z M 18.90625 9.96875 C 18.863281 9.976563 18.820313 9.988281 18.78125 10 C 18.316406 10.105469 17.988281 10.523438 18 11 L 18 44 C 17.996094 44.359375 18.183594 44.695313 18.496094 44.878906 C 18.808594 45.058594 19.191406 45.058594 19.503906 44.878906 C 19.816406 44.695313 20.003906 44.359375 20 44 L 20 11 C 20.011719 10.710938 19.894531 10.433594 19.6875 10.238281 C 19.476563 10.039063 19.191406 9.941406 18.90625 9.96875 Z M 24.90625 9.96875 C 24.863281 9.976563 24.820313 9.988281 24.78125 10 C 24.316406 10.105469 23.988281 10.523438 24 11 L 24 44 C 23.996094 44.359375 24.183594 44.695313 24.496094 44.878906 C 24.808594 45.058594 25.191406 45.058594 25.503906 44.878906 C 25.816406 44.695313 26.003906 44.359375 26 44 L 26 11 C 26.011719 10.710938 25.894531 10.433594 25.6875 10.238281 C 25.476563 10.039063 25.191406 9.941406 24.90625 9.96875 Z M 30.90625 9.96875 C 30.863281 9.976563 30.820313 9.988281 30.78125 10 C 30.316406 10.105469 29.988281 10.523438 30 11 L 30 44 C 29.996094 44.359375 30.183594 44.695313 30.496094 44.878906 C 30.808594 45.058594 31.191406 45.058594 31.503906 44.878906 C 31.816406 44.695313 32.003906 44.359375 32 44 L 32 11 C 32.011719 10.710938 31.894531 10.433594 31.6875 10.238281 C 31.476563 10.039063 31.191406 9.941406 30.90625 9.96875 Z"></path>
                  </svg>
                </button>




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
                  <div className="idea-card-price">${idea.price.toFixed(2)}</div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar with Person Selector */}
      <div className="fixed-nav-container">
  <div className="card-nav person-selector-nav">
    <span className="person-nav-label">Viewing ideas for:</span>
    <div className="person-nav-select-container">
      <select
        value={selectedPerson}
        onChange={e => setSelectedPerson(e.target.value)}
        className="person-nav-select"
      >
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
      </select>
    </div>
  </div>
</div>
    </div>
  );
}

export default IdeaBoardPage;