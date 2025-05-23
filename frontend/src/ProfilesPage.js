import React from 'react';

function ProfilesPage({ user, onStartSwiping }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome, {user.name}</h1>
      <h2>Your Profile</h2>
      <button onClick={() => onStartSwiping(user.name)}>Start Swiping</button>

      <h2>Your Friends</h2>
      {user.friends.map(friend => (
        <div key={friend} style={{ margin: '10px' }}>
          <strong>{friend}</strong>
          <div>
            <button onClick={() => onStartSwiping(friend)}>Start Swiping</button>
            {/* In the future, add Edit Preferences or View Giftlist buttons */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProfilesPage;
