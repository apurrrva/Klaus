"use client"

import React,{ useState } from "react"

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim() && password.trim()) {
      onLogin(email.trim())
    }
  }

  const handleForgotPassword = () => {
    alert("Forgot password functionality would be implemented here")
  }

  const handleRegister = () => {
    alert("Register functionality would be implemented here")
  }

  const handleContinueAsGuest = () => {
    onLogin("Guest")
  }

  return (
    <div style={styles.container}>
      <div style={styles.phoneContainer}>
        <img
    src="https://cdn.discordapp.com/attachments/1184079102039306271/1375836423533625465/klausmi.png?ex=68332305&is=6831d185&hm=517344fe1360dfa7ddd5c6abaee7f0eef0803818ebedcb2c6935fed5a925be9d&"
    alt="LemonPie Logo"
    style={styles.topLeftLogo}
  />
        <div style={styles.logoContainer}>
          <div style={styles.logo}>
            <div style={styles.logoCenter}></div>
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                style={{
                  ...styles.logoDot,
                  transform: `rotate(${i * 45}deg) translateY(-20px)`,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Welcome text */}
        <div style={styles.welcomeSection}>
          <img
  src="https://cdn.discordapp.com/attachments/1184079102039306271/1375836423827230812/claussa.png?ex=68332305&is=6831d185&hm=34b6ecbb331bbc71871e3388f937e5ba80d33193126adf1532d34ad70c17e895&"
  alt="Claussa Logo"
  style={styles.claussaImage}
/>

          <h1 style={styles.welcomeTitle}>Welcome to Klaus!</h1>
          <p style={styles.welcomeSubtitle}>Your one stop for gifts.</p>
        </div>

        {/* Login form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputContainer}>
            <label style={styles.inputLabel}>Email</label>
            <input
              type="email"
              placeholder="janadoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.inputField}
              required
            />
          </div>

          <div style={styles.inputContainer}>
            <label style={styles.inputLabel}>Password</label>
            <div style={styles.passwordContainer}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.passwordField}
                required
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} style={styles.eyeButton}>
  <img
    src="https://cdn.discordapp.com/attachments/1184079102039306271/1375845264086007839/image.png?ex=68332b40&is=6831d9c0&hm=1ac430762454433737b493d501208c8aca853fd0b1c32b26bb6615b99ab2fb7b&"
    alt="Show Password"
    style={styles.eyeIcon}
  />
</button>

            </div>
          </div>

          <button type="submit" style={styles.loginButton}>
            ･✧ LOGIN ✧･
          </button>
        </form>

        {/* Forgot password */}
        <button type="button" onClick={handleForgotPassword} style={styles.forgotPassword}>
          Forgot password?
        </button>

        {/* Register link */}
        <div style={styles.registerSection}>
          <span style={styles.registerText}>Don't have an account? </span>
          <button type="button" onClick={handleRegister} style={styles.registerLink}>
            Sign Up!
          </button>
        </div>

        {/* Continue as guest */}
        <button type="button" onClick={handleContinueAsGuest} style={styles.guestButton}>
          Continue as Guest
        </button>
      </div>
    </div>
  )
}

const styles = {
  container: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    backgroundColor: "#80000",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0px",
  },
  phoneContainer: {
    backgroundColor: "#ffffff",
    width: "100%",
    maxWidth: "425px",
    minHeight: "667px",
    borderRadius: "30px",
    padding: "60px 30px 30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    position: "relative",
  },
  logoContainer: {
    marginBottom: "40px",
    position: "relative",
  },
  claussaImage: {
  width: "170px",
  height: "auto",
  marginBottom: "20px",
  borderRadius: "5px",
},
eyeIcon: {
  width: "22px",
  height: "22px",
  objectFit: "contain",
},


  welcomeSection: {
    textAlign: "center",
    marginBottom: "40px",
  },
  welcomeTitle: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#800000",
    margin: "0 0 4px 0",
  },
  topLeftLogo: {
  position: "absolute",
  top: "10px",
  left: "20px",
  width: "92px",
  height: "72px",
  objectFit: "contain",
  borderRadius: "8px",
},

  welcomeSubtitle: {
    fontSize: "16px",
    color: "#666666",
    margin: "0",
  },
  form: {
    width: "100%",
    marginBottom: "20px",
  },
  inputContainer: {
    marginBottom: "20px",
  },
  inputLabel: {
    display: "block",
    fontSize: "14px",
    color: "#666666",
    marginBottom: "8px",
    marginLeft: "10px",
  },
  inputField: {
    width: "100%",
    padding: "16px 20px",
    backgroundColor: "#f8f8f8",
    border: "none",
    borderRadius: "25px",
    fontSize: "16px",
    color: "#000000",
    outline: "none",
    boxSizing: "border-box",
  },
  passwordContainer: {
    position: "relative",
    width: "100%",
  },
  passwordField: {
    width: "100%",
    padding: "16px 50px 16px 20px",
    backgroundColor: "#f8f8f8",
    border: "none",
    borderRadius: "25px",
    fontSize: "16px",
    color: "#000000",
    outline: "none",
    boxSizing: "border-box",
  },
  eyeButton: {
    position: "absolute",
    right: "20px",
    top: "50%",
    transform: "translateY(-50%)",
    background: "none",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
    padding: "0",
  },
  loginButton: {
    width: "100%",
    padding: "16px",
    backgroundColor: "#800000",
    color: "#ffffff",
    border: "none",
    borderRadius: "25px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "20px",
    transition: "background-color 0.2s ease",
  },
  forgotPassword: {
    background: "none",
    border: "none",
    color: "#800000",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "-7px",
    marginBottom: "40px",
    textDecoration: "none",
  },
  registerSection: {
    marginTop:"-30px",
    marginBottom: "20px",
  },
  registerText: {
    color: "#000000",
    fontSize: "16px",
  },
  registerLink: {
    background: "none",
    border: "none",
    color: "#800000",
    fontSize: "16px",
    cursor: "pointer",
    textDecoration: "none",
    fontWeight: "500",
  },
  guestButton: {
    background: "none",
    border: "none",
    color: "#666666",
    fontSize: "14px",
    cursor: "pointer",
    textDecoration: "underline",
  },
}

export default LoginPage
