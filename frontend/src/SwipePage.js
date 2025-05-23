import React, { useState, useRef, useEffect } from 'react';
import fakeItems from './data/fakeItems';

function SwipePage({ user, onBack, onAddToGiftList }) {
  const [index, setIndex] = useState(0);
  const [showPrompt, setShowPrompt] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState(null);
  
  // Swipe state
  const cardRef = useRef(null);
  const startXRef = useRef(0);
  const currentXRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const [swipeOffset, setSwipeOffset] = useState(0);
  const swipeThreshold = 100; // minimum distance to trigger a swipe action

  const currentItem = fakeItems[index];

  const handleLike = () => {
    animateSwipe('right', () => {
      setShowPrompt(true);
    });
  };

  const handleDislike = () => {
    animateSwipe('left', nextItem);
  };

  const addToGiftList = (add) => {
    if (add && onAddToGiftList) {
      onAddToGiftList(currentItem);
    }
    setShowPrompt(false);
    nextItem();
  };

  const nextItem = () => {
    // Reset swipe state
    setSwipeOffset(0);
    setSwipeDirection(null);
    
    if (index < fakeItems.length - 1) {
      setIndex(index + 1);
    } else {
      alert("You've finished swiping!");
      if (onBack) onBack();
    }
  };

  // Touch and mouse event handlers
  const handleStart = (clientX) => {
    setIsDragging(true);
    startXRef.current = clientX;
    currentXRef.current = clientX;
    
    // Cancel any ongoing animations
    if (cardRef.current) {
      cardRef.current.style.transition = '';
    }
  };

  const handleMove = (clientX) => {
    if (!isDragging) return;
    
    currentXRef.current = clientX;
    const deltaX = currentXRef.current - startXRef.current;
    setSwipeOffset(deltaX);
    
    // Determine swipe direction for visual feedback
    if (deltaX > 20) {
      setSwipeDirection('right');
    } else if (deltaX < -20) {
      setSwipeDirection('left');
    } else {
      setSwipeDirection(null);
    }
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const deltaX = currentXRef.current - startXRef.current;
    
    if (deltaX > swipeThreshold) {
      // Swiped right - like
      handleLike();
    } else if (deltaX < -swipeThreshold) {
      // Swiped left - dislike
      handleDislike();
    } else {
      // Not enough movement, reset position
      animateReset();
    }
  };

  // Animation functions
  const animateSwipe = (direction, onComplete) => {
    if (!cardRef.current) return;
    
    const targetX = direction === 'left' ? -window.innerWidth : window.innerWidth;
    cardRef.current.style.transition = 'transform 0.5s ease-out';
    cardRef.current.style.transform = `translateX(${targetX}px) rotate(${direction === 'left' ? -5 : 5}deg)`;
    
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 500);
  };

  const animateReset = () => {
    if (!cardRef.current) return;
    
    cardRef.current.style.transition = 'transform 0.3s ease-out';
    cardRef.current.style.transform = 'translateX(0) rotate(0)';
    setSwipeOffset(0);
    setSwipeDirection(null);
  };

  // Touch event handlers
  const handleTouchStart = (e) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  // Mouse event handlers
  const handleMouseDown = (e) => {
    handleStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  // Add and remove mouse move/up listeners
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  if (!currentItem) return <div>No more items to swipe!</div>;

  // Calculate rotation based on swipe offset
  const rotation = swipeOffset / 20; // Adjust divisor to control rotation amount
  const cardStyle = {
    ...styles.card,
    transform: `translateX(${swipeOffset}px) rotate(${rotation}deg)`,
    transition: isDragging ? '' : 'transform 0.3s ease-out'
  };

  return (
    <div style={styles.container}>
      <h2>Swiping as {user.name}</h2>
      
      {!showPrompt ? (
        <div 
          ref={cardRef}
          style={cardStyle}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
        >
          <img src={currentItem.image || "/placeholder.svg"} alt={currentItem.name} style={styles.image} />
          <h3>{currentItem.name}</h3>
          <p>{currentItem.description}</p>
          
          {/* Swipe indicators */}
          {swipeDirection === 'right' && (
            <div style={styles.likeIndicator}>LIKE</div>
          )}
          {swipeDirection === 'left' && (
            <div style={styles.dislikeIndicator}>NOPE</div>
          )}
        </div>
      ) : (
        <div style={styles.promptContainer}>
          <p>Add to gift list?</p>
          <div style={styles.buttons}>
            <button style={styles.yesButton} onClick={() => addToGiftList(true)}>Yes</button>
            <button style={styles.noButton} onClick={() => addToGiftList(false)}>No</button>
          </div>
        </div>
      )}
      
      {!showPrompt && (
        <div style={styles.buttons}>
          <button style={styles.dislikeButton} onClick={handleDislike}>Dislike</button>
          <button style={styles.likeButton} onClick={handleLike}>Like</button>
        </div>
      )}
      
      <div style={styles.progressBar}>
        <div 
          style={{
            ...styles.progressFill,
            width: `${(index / fakeItems.length) * 100}%`
          }}
        />
      </div>
    </div>
  );
}

const styles = {
  container: { 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    marginTop: '30px',
    width: '100%',
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    position: 'relative',
    height: '100vh'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    position: 'relative',
    cursor: 'grab',
    userSelect: 'none',
    touchAction: 'pan-y',
    width: '100%',
    maxWidth: '400px'
  },
  image: { 
    width: '200px', 
    height: '200px', 
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '15px'
  },
  buttons: { 
    display: 'flex', 
    gap: '20px', 
    marginTop: '30px',
    justifyContent: 'center',
    width: '100%'
  },
  likeButton: {
    padding: '12px 30px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    fontSize: '16px'
  },
  dislikeButton: {
    padding: '12px 30px',
    backgroundColor: '#F44336',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    fontSize: '16px'
  },
  yesButton: {
    padding: '12px 30px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    fontSize: '16px'
  },
  noButton: {
    padding: '12px 30px',
    backgroundColor: '#F44336',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    fontSize: '16px'
  },
  likeIndicator: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '5px 15px',
    borderRadius: '20px',
    fontWeight: 'bold',
    transform: 'rotate(15deg)',
    border: '2px solid white'
  },
  dislikeIndicator: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    backgroundColor: '#F44336',
    color: 'white',
    padding: '5px 15px',
    borderRadius: '20px',
    fontWeight: 'bold',
    transform: 'rotate(-15deg)',
    border: '2px solid white'
  },
  promptContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    width: '100%',
    maxWidth: '400px'
  },
  progressBar: {
    width: '100%',
    height: '6px',
    backgroundColor: '#e0e0e0',
    borderRadius: '3px',
    marginTop: '30px',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    transition: 'width 0.3s ease'
  }
};

export default SwipePage;