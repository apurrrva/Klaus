import React, { useState } from 'react';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';       // you’ll create this later
import SignupPage from './SignupPage';     // you’ll create this later
// import MainApp from './MainApp';            // your existing app or guest view

function App() {
  const [page, setPage] = useState('landing');

  function handleSelectOption(option) {
    setPage(option);
  }

  if (page === 'landing') {
    return <LandingPage onSelectOption={handleSelectOption} />;
  }
  if (page === 'login') {
    return <LoginPage onBack={() => setPage('landing')} />;
  }
  if (page === 'signup') {
    return <SignupPage onBack={() => setPage('landing')} />;
  }
  // if (page === 'guest') {
  //   return <MainApp />;
  // }

  return null;
}

export default App;
