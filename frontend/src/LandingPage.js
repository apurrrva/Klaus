// src/LandingPage.js
import React from 'react';

function LandingPage({ onSelectOption }) {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Klaus</h1>
      <div style={styles.buttons}>
        <button onClick={() => onSelectOption('login')}>Login</button>
        <button onClick={() => onSelectOption('signup')}>Create Account</button>
        <button onClick={() => onSelectOption('guest')}>Continue as Guest</button>
      </div>
    </div>
  );
}

const styles = {
  container: { 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',            // Full viewport height
    width: '100vw',             // Full viewport width (optional)
    textAlign: 'center',
  },
  title: {
    marginBottom: '30px',
  },
  buttons: { 
    display: 'flex',
    flexDirection: 'column',    // Stack buttons vertically
    gap: '15px',
  },
};

export default LandingPage;
