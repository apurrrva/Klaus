import React, { useState } from 'react';

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); // Add password field
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!username.trim() || !password) {
      setError('Please enter both username and password.');
      return;
    }

    try {
      const response = await fetch('/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // If using Django's CSRF protection, add X-CSRFToken header here
        },
        body: JSON.stringify({
          username: username.trim(),
          password: password,
        }),
        credentials: 'include', // Important: so cookies/session are sent
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          onLogin(username.trim());
        } else {
          setError('Invalid username or password.');
        }
      } else {
        setError('Login failed. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
        {error && <div style={styles.error}>{error}</div>}
      </form>
    </div>
  );
}

const styles = {
  container: { height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
  form: { display: 'flex', flexDirection: 'column', gap: '10px' },
  input: { padding: '10px', fontSize: '16px', width: '200px' },
  button: { padding: '8px 12px', fontSize: '16px', cursor: 'pointer' },
  error: { color: 'red', marginTop: '10px' },
};

export default LoginPage;