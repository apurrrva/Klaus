import React, { useState } from 'react';

export default function SignupPage({ onBack, onSignupSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  // Basic form submission handler (customize as needed for your backend)
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace this with actual signup logic (API call)
    


    // Simulate successful signup and redirect to login page


    if (onSignupSuccess) {
      onSignupSuccess();
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