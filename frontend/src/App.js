import React, { useState } from 'react';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import ProfilesPage from './ProfilesPage';
import SwipePage from './SwipePage';

function App() {
  const [stage, setStage] = useState('landing');
  const [user, setUser] = useState(null);
  const [activeProfile, setActiveProfile] = useState(null); // whose profile is being swiped

  const handleOptionSelect = (option) => {
    if (option === 'guest') {
      setUser({ name: 'Guest', friends: ['Alice', 'Bob'] });
      setStage('profiles');
    } else {
      setStage(option);
    }
  };

  const handleLogin = (username) => {
    setUser({ name: username, friends: ['Alice', 'Bob'] });
    setStage('profiles');
  };

  const handleStartSwiping = (profileName) => {
    setActiveProfile(profileName);
    setStage('swipe');
  };

  if (stage === 'landing') return <LandingPage onSelectOption={handleOptionSelect} />;
  if (stage === 'login') return <LoginPage onLogin={handleLogin} />;
  if (stage === 'signup') return <SignupPage onSignup={handleLogin} />;
  if (stage === 'profiles') return (
    <ProfilesPage 
      user={user} 
      onStartSwiping={handleStartSwiping}
    />
  );
  if (stage === 'swipe') return (
    <SwipePage 
      profileName={activeProfile}
      user={user}
      onBack={() => setStage('profiles')}
    />
  );

  return <div>Unknown stage</div>;
}

export default App;
