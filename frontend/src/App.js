"use client"

import { useState } from "react"
import LandingPage from "./LandingPage"
import LoginPage from "./LoginPage"
import SignupPage from "./SignupPage"
import ProfilesPage from "./ProfilesPage"
import SwipePage from "./SwipePage"
import CartPage from "./cart-page.js"
import React from 'react';

function App() {

  const [stage, setStage] = useState('login');
  const [user, setUser] = useState(null);
  const [activeProfile, setActiveProfile] = useState(null); // whose profile is being swiped


  const handleOptionSelect = (option) => {
    if (option === "guest") {
      setUser({ name: "Guest", friends: ["Alice", "Bob"] })
      setStage("profiles")
    } else {
      setStage(option)
    }
  }

  const handleLogin = (username) => {

    setUser({ name: username, friends: ['Alice', 'Bob'] });
    setActiveProfile('Alice'); // or any default profile name
    setStage('swipe');
  };


  const handleStartSwiping = (profileName) => {
    setActiveProfile(profileName)
    setStage("swipe")
  }

  const handleCartClick = () => {
    setStage("cart")
  }

  const handleAddToGiftList = (item) => {
    console.log("Added to gift list:", item)
    // You can add logic here to add items to a gift list or cart
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
        )
      } else {
        return [...prevItems, { ...item, quantity: 1, price: item.price || 99.99 }]
      }
    })
  }

  const handleCheckout = (items) => {
    console.log("Proceeding to checkout with items:", items)
    // Add checkout logic here
    alert("Checkout functionality coming soon!")
  }

  if (stage === "landing") return <LandingPage onSelectOption={handleOptionSelect} />
  if (stage === "login") return <LoginPage onLogin={handleLogin} />
  if (stage === "signup") return <SignupPage onSignup={handleLogin} />
  if (stage === "profiles") return <ProfilesPage user={user} onStartSwiping={handleStartSwiping} />
  if (stage === "swipe")
    return (
      <SwipePage
        profileName={activeProfile}
        user={user}
        onBack={() => setStage("profiles")}
        onCartClick={handleCartClick}
        onAddToGiftList={handleAddToGiftList}
      />
    )
  if (stage === "cart")
    return (
      <CartPage
        user={user}
        onBack={() => setStage("swipe")}
        onCheckout={handleCheckout}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    )

  return <div>Unknown stage</div>
}

export default App
