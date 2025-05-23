import React, { useState, useRef, useEffect, useCallback } from 'react';
import fakeItems from './data/fakeItems';
import './SwipePage.css'; // Import the CSS file

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

  // Touch and mouse event handlers - memoized with useCallback
  const handleStart = useCallback((clientX) => {
    setIsDragging(true);
    startXRef.current = clientX;
    currentXRef.current = clientX;
    
    // Cancel any ongoing animations
    if (cardRef.current) {
      cardRef.current.style.transition = '';
    }
  }, []);

  const handleMove = useCallback((clientX) => {
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
  }, [isDragging]);

  const handleEnd = useCallback(() => {
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
  }, [isDragging, swipeThreshold, handleLike, handleDislike]);

  // Touch event handlers
  const handleTouchStart = useCallback((e) => {
    handleStart(e.touches[0].clientX);
  }, [handleStart]);

  const handleTouchMove = useCallback((e) => {
    handleMove(e.touches[0].clientX);
  }, [handleMove]);

  const handleTouchEnd = useCallback(() => {
    handleEnd();
  }, [handleEnd]);

  // Mouse event handlers
  const handleMouseDown = useCallback((e) => {
    handleStart(e.clientX);
  }, [handleStart]);

  const handleMouseMove = useCallback((e) => {
    handleMove(e.clientX);
  }, [handleMove]);

  const handleMouseUp = useCallback(() => {
    handleEnd();
  }, [handleEnd]);

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
  }, [isDragging, handleMouseMove, handleMouseUp]);

  if (!currentItem) return <div>No more items to swipe!</div>;

  // Calculate rotation based on swipe offset
  const rotation = swipeOffset / 20; // Adjust divisor to control rotation amount
  const cardStyle = {
    transform: `translateX(${swipeOffset}px) rotate(${rotation}deg)`,
    transition: isDragging ? '' : 'transform 0.3s ease-out'
  };

  // Calculate progress percentage
  const progressPercentage = `${(index / fakeItems.length) * 100}%`;

  return (
    <div className="swipe-container">
      <h2>Swiping as {user.name}</h2>
      
      <div className="swipe-card-container">
        {!showPrompt ? (
          <div 
            ref={cardRef}
            className="swipe-card"
            style={cardStyle}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
          >
            <img className="swipe-image" src={currentItem.image || "/placeholder.svg"} alt={currentItem.name} />
            <h3>{currentItem.name}</h3>
            <p>{currentItem.description}</p>
            
            {/* Swipe indicators */}
            {swipeDirection === 'right' && (
              <div className="like-indicator">LIKE</div>
            )}
            {swipeDirection === 'left' && (
              <div className="dislike-indicator">NOPE</div>
            )}
          </div>
        ) : (
          <div className="prompt-container">
            <p>Add to gift list?</p>
            <div className="button-container">
              <button className="yes-button" onClick={() => addToGiftList(true)}>Yes</button>
              <button className="no-button" onClick={() => addToGiftList(false)}>No</button>
            </div>
          </div>
        )}
      </div>
      
      <div className="progress-container">
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: progressPercentage }}
          />
        </div>
      </div>
      
      {!showPrompt && (
        <div className="button-container">
          <button className="dislike-button" onClick={handleDislike}>Dislike</button>
          <button className="like-button" onClick={handleLike}>Like</button>
        </div>
      )}
    </div>
  );
}

export default SwipePage;