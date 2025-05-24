import React from 'react';
import './SwipePage.css'; // Reuse the same styles for consistency

function IdeaBoardPage({ onBack }) {
  // Placeholder for ideas. You can expand this as needed.
  const ideas = [
    { id: 1, text: "Gift exchange party ideas" },
    { id: 2, text: "Secret Santa themes" },
    { id: 3, text: "Wishlist collaboration" }
  ];

  return (
    <div className="swipe-container">
      {/* Top Bar */}
      <h2> Idea Board</h2>
      {/* Navigation Bar */}
      <div style={{
        position: 'absolute',
        top: 10,
        right: 20,
        zIndex: 20,
        display: 'flex',
        gap: '12px'
      }}>
        <button className="yes-button" onClick={onBack}>Back to Home</button>
      </div>
      {/* Main Content */}
      <div className="swipe-card-container" style={{ justifyContent: "flex-start", paddingTop: 80 }}>
        <div className="swipe-card" style={{ minHeight: 200, width: "100%" }}>
          <h3>Community Ideas</h3>
          <ul>
            {ideas.map((idea) => (
              <li key={idea.id} style={{ margin: '10px 0', fontSize: '18px' }}>{idea.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default IdeaBoardPage;