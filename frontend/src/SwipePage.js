// src/SwipePage.js

import React, { useState } from 'react';
import fakeItems from './data/fakeItems';

function SwipePage({ user, onBack, onAddToGiftList }) {
  const [index, setIndex] = useState(0);
  const [showPrompt, setShowPrompt] = useState(false);

  const currentItem = fakeItems[index];

  const handleLike = () => {
    setShowPrompt(true);
  };

  const handleDislike = () => {
    nextItem();
  };

  const addToGiftList = (add) => {
    if (add && onAddToGiftList) {
      onAddToGiftList(currentItem);
    }
    setShowPrompt(false);
    nextItem();
  };

  const nextItem = () => {
    if (index < fakeItems.length - 1) {
      setIndex(index + 1);
    } else {
      alert("You've finished swiping!");
      if (onBack) onBack();
    }
  };

  if (!currentItem) return <div>No more items to swipe!</div>;

  return (
    <div style={styles.container}>
      <h2>Swiping as {user.name}</h2>
      <img src={currentItem.image} alt={currentItem.name} style={styles.image} />
      <h3>{currentItem.name}</h3>
      <p>{currentItem.description}</p>
      {!showPrompt ? (
        <div style={styles.buttons}>
          <button onClick={handleDislike}>Dislike</button>
          <button onClick={handleLike}>Like</button>
        </div>
      ) : (
        <div>
          <p>Add to gift list?</p>
          <button onClick={() => addToGiftList(true)}>Yes</button>
          <button onClick={() => addToGiftList(false)}>No</button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30px' },
  image: { width: '150px', height: '150px', objectFit: 'cover' },
  buttons: { display: 'flex', gap: '20px', marginTop: '20px' },
};

export default SwipePage;
