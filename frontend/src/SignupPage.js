import React, { useState } from 'react';

export default function SignupPage({ onBack, onSignupSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  // Basic form submission handler (customize as needed for your backend)
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
      if (response.ok && data.success) {
        if (onSignupSuccess) onSignupSuccess();
      } else {
        alert(data.error || 'Signup failed');
      }
    } catch (err) {
      alert('Network error');
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