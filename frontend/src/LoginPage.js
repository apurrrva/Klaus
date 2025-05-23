// src/LoginPage.js
import React from 'react';

export default function LoginPage({ onBack }) {
  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={onBack}>Back</button>
      {/* Add your login form here */}
    </div>
  );
}
