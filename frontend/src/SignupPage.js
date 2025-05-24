import React, { useState } from 'react';

export default function SignupPage({ onBack, onSignupSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:8000/signup_api/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: username,  // use "name" to match your Django view
          password: password,
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        alert(`Signup failed: ${errorData.error || 'Unknown error'}`);
        return;
      }
  
      // Success!
      if (onSignupSuccess) {
        onSignupSuccess();
      }
    } catch (error) {
      alert('Network error: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Signup Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              required
              onChange={e => setUsername(e.target.value)}
              autoComplete="username"
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              required
              onChange={e => setPassword(e.target.value)}
              autoComplete="new-password"
            />
          </label>
        </div>
        <button type="submit">Sign up</button>
      </form>
      <button onClick={onBack}>Back</button>
    </div>
  );
}