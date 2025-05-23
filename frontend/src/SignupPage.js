// src/SignupPage.js
import React from 'react';

export default function SignupPage({ onBack }) {
  return (
    <div>
      <h2>Signup Page</h2>
      <button onClick={onBack}>Back</button>
      {/* Add your signup form here */}
    </div>
  );
}
