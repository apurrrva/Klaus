"use client"

import React, { useState } from "react"
import "./FriendsPage.css"

function FriendsPage({ user, onBack, onCartClick, onAddToGiftList, onIdeaBoard, onProfilesClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("friends")
  const [selectedFriend, setSelectedFriend] = useState(null)
  const [viewingRegistry, setViewingRegistry] = useState(null)

  const svgDataUrl =
 "https://cdn.discordapp.com/attachments/1373870449506652182/1376054659856339024/pfp.png?ex=6833ee44&is=68329cc4&hm=da068b91e1997639a45b6cf8ee5b599aa968d3ccd8fc238ec6c45eb126c85e84&"
  const [friends] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: svgDataUrl,
      mutualFriends: 12,
      lastActive: "2 hours ago",
      status: "online",
      bio: "Love traveling and trying new restaurants! Always looking for the perfect gift ideas.",
      location: "San Francisco, CA",
      joinDate: "March 2023",
      wishlists: [
        { id: 1, name: "Baby Shower", occasion: "👶", itemCount: 8, dueDate: "March 15, 2024" },
        { id: 2, name: "Birthday", occasion: "🎂", itemCount: 12, dueDate: "June 22, 2024" },
        { id: 3, name: "Wedding Anniversary", occasion: "💍", itemCount: 5, dueDate: "August 10, 2024" },
      ],
    },
    {
      id: 2,
      name: "Mike Chen",
      avatar: svgDataUrl,
      mutualFriends: 8,
      lastActive: "1 day ago",
      status: "offline",
      bio: "Tech enthusiast and coffee lover. Always up for a good book recommendation!",
      location: "Seattle, WA",
      joinDate: "January 2023",
      wishlists: [
        { id: 1, name: "Birthday", occasion: "🎂", itemCount: 15, dueDate: "April 8, 2024" },
        { id: 2, name: "Graduation", occasion: "🎓", itemCount: 6, dueDate: "May 20, 2024" },
      ],
    },
    {
      id: 3,
      name: "Emma Wilson",
      avatar: svgDataUrl,
      mutualFriends: 15,
      lastActive: "30 minutes ago",
      status: "online",
      bio: "Artist and nature lover. Creating beautiful memories one gift at a time.",
      location: "Portland, OR",
      joinDate: "February 2023",
      wishlists: [
        { id: 1, name: "Christmas", occasion: "🎄", itemCount: 20, dueDate: "December 25, 2024" },
        { id: 2, name: "Birthday", occasion: "🎂", itemCount: 10, dueDate: "September 14, 2024" },
        { id: 3, name: "Housewarming", occasion: "🏠", itemCount: 7, dueDate: "July 5, 2024" },
      ],
    },
  ])

  const [suggestions] = useState([
    {
      id: 4,
      name: "Alex Rodriguez",
      avatar: svgDataUrl,
      mutualFriends: 5,
      source: "Instagram",
      reason: "From your contacts",
    },
    {
      id: 5,
      name: "Jessica Lee",
      avatar: svgDataUrl,
      mutualFriends: 3,
      source: "Facebook",
      reason: "Friend of Sarah Johnson",
    },
    {
      id: 6,
      name: "David Park",
      avatar: svgDataUrl,
      mutualFriends: 7,
      source: "Contacts",
      reason: "In your phone contacts",
    },
  ])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleOccasionSelect = (occasion) => {
    console.log(`Selected occasion: ${occasion}`)
    setIsMenuOpen(false)
  }

  const handleFriendClick = (friend) => {
    setSelectedFriend(friend)
  }

  const handleBackToFriends = () => {
    setSelectedFriend(null)
  }

  const handleViewWishlist = (wishlist, friend) => {
    setViewingRegistry({ wishlist, friend })
  }

  const handleBackFromRegistry = () => {
    setViewingRegistry(null)
  }

  const FloatingMenu = () => (
    <div className="floating-menu-container">
      <div className={`occasions-menu ${isMenuOpen ? "open" : "closed"}`}>
        <div className="occasion-item" onClick={() => handleOccasionSelect("birthday")}>
          <span className="occasion-emoji">🎂</span>
          <span className="occasion-text">Birthday</span>
        </div>
        <div className="occasion-item" onClick={() => handleOccasionSelect("christmas")}>
          <span className="occasion-emoji">🎄</span>
          <span className="occasion-text">Christmas</span>
        </div>
        <div className="occasion-item" onClick={() => handleOccasionSelect("baby-shower")}>
          <span className="occasion-emoji">👶</span>
          <span className="occasion-text">Baby Shower</span>
        </div>
        <div className="occasion-item" onClick={() => handleOccasionSelect("wedding")}>
          <span className="occasion-emoji">💍</span>
          <span className="occasion-text">Wedding</span>
        </div>
        <div className="occasion-item" onClick={() => handleOccasionSelect("anniversary")}>
          <span className="occasion-emoji">💞</span>
          <span className="occasion-text">Anniversary</span>
        </div>
        <div className="occasion-item" onClick={() => handleOccasionSelect("graduation")}>
          <span className="occasion-emoji">🎓</span>
          <span className="occasion-text">Graduation</span>
        </div>
      </div>
      <button className={`floating-menu-button ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <svg className="menu-icon" viewBox="0 0 24 24">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      </button>
    </div>
  )

  const ProfilePage = ({ friend, onBack }) => (
    <div className="profile-container">
      <div className="profile-header">
        <button className="back-button" onClick={onBack}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#524D4F">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
          Back to Friends
        </button>
      </div>

      <div className="profile-content">
        <div className="profile-info-card">
          <div className="profile-avatar-container">
            <img
              src={friend.avatar || svgDataUrl}
              alt={friend.name}
              className="profile-avatar"
              onError={(e) => (e.target.src = svgDataUrl)}
            />
            <div className={`profile-status-indicator ${friend.status === "online" ? "online" : "offline"}`}></div>
          </div>

          <div className="profile-details">
            <h2 className="profile-name">{friend.name}</h2>
            <p className="profile-bio">{friend.bio}</p>
            <div className="profile-meta">
              <div className="profile-meta-item">
                <span className="profile-meta-label">Location:</span>
                <span className="profile-meta-value">{friend.location}</span>
              </div>
              <div className="profile-meta-item">
                <span className="profile-meta-label">Joined:</span>
                <span className="profile-meta-value">{friend.joinDate}</span>
              </div>
              <div className="profile-meta-item">
                <span className="profile-meta-label">Mutual Friends:</span>
                <span className="profile-meta-value">{friend.mutualFriends}</span>
              </div>
              <div className="profile-meta-item">
                <span className="profile-meta-label">Last Active:</span>
                <span className="profile-meta-value">{friend.lastActive}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="wishlists-section">
          <h3 className="wishlists-title">Wishlists ({friend.wishlists.length})</h3>
          <div className="wishlists-grid">
            {friend.wishlists.map((wishlist) => (
              <div key={wishlist.id} className="wishlist-card">
                <div className="wishlist-header">
                  <span className="wishlist-occasion">{wishlist.occasion}</span>
                  <h4 className="wishlist-name">{wishlist.name}</h4>
                </div>
                <div className="wishlist-details">
                  <p className="wishlist-items">{wishlist.itemCount} items</p>
                  <p className="wishlist-date">Due: {wishlist.dueDate}</p>
                </div>
                <button className="wishlist-view-button" onClick={() => handleViewWishlist(wishlist, friend)}>
                  View Wishlist
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const RegistryPage = ({ wishlist, friend, onBack }) => (
    <div className="registry-container">
      <div className="registry-header">
        <button className="back-button" onClick={onBack}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#524D4F">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
          Back to Profile
        </button>
      </div>

      <div className="registry-content">
        <div className="registry-info-card">
          <div className="registry-title-section">
            <span className="registry-occasion">{wishlist.occasion}</span>
            <h2 className="registry-title">
              {friend.name}'s {wishlist.name}
            </h2>
            <p className="registry-info">
              {wishlist.itemCount} items • Due: {wishlist.dueDate}
            </p>
          </div>
        </div>

        <div className="registry-placeholder">
          <div className="registry-placeholder-card">
            <div className="registry-placeholder-image"></div>
            <h3>Registry Page</h3>
            <p>This is where the registry items would be displayed</p>
            <p className="registry-note">Registry functionality coming soon!</p>
          </div>
        </div>
      </div>
    </div>
  )

  const handleNavigation = (page) => {
    console.log(`Navigating to ${page}`)
    if (page === "back" && onBack) {
      onBack()
    }
  }

  const handleCartClick = () => {
    if (onCartClick) {
      onCartClick()
    } else {
      console.log("Navigate to cart page")
    }
  }

  const handleIdeaBoard = () => {
    if (onIdeaBoard) {
      onIdeaBoard()
    } else {
      console.log("Navigate to idea board")
    }
  }

  const handleProfilesPage = () => {
    if (onProfilesClick) {
      onProfilesClick()
    } else {
      console.log("Navigate to profiles page")
    }
  }

  const handleAddFriend = (friendId) => {
    console.log(`Adding friend with ID: ${friendId}`)
  }

  const handleConnectSocial = (platform) => {
    console.log(`Connecting to ${platform}`)
  }

  const filteredFriends = friends.filter((friend) => friend.name.toLowerCase().includes(searchQuery.toLowerCase()))
  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // If viewing a registry, show the registry page
  if (viewingRegistry) {
    return (
      <>
        <div className="header-bar">
          <div className="header-logo">
            <img
              src="https://cdn.discordapp.com/attachments/1373870449506652182/1375484922353160252/klaus_logo1.png?ex=68328468&is=683132e8&hm=b9cf880160fa98172d64b28a6991cd9c598fbf9881683d248411104fdb183a29&"
              alt="Logo"
              height="50"
            />
          </div>

          <div className="header-cart" onClick={handleCartClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="22"
              height="28"
              fill="white"
              style={{ cursor: "pointer" }}
            >
              <path d="M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077ZM21.4,6.178l-.786,4.354A3,3,0,0,1,17.657,13H5.419L4.478,5H20.41A1,1,0,0,1,21.4,6.178Z" />
              <circle cx="7" cy="22" r="2" />
              <circle cx="17" cy="22" r="2" />
            </svg>
          </div>
        </div>

        <RegistryPage
          wishlist={viewingRegistry.wishlist}
          friend={viewingRegistry.friend}
          onBack={handleBackFromRegistry}
        />

        <div className="fixed-nav-container">
          <div className="card-nav">
            <div className="card-nav-item" onClick={() => handleNavigation("back")}>
              <div className="card-nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
                  <path d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z" />
                </svg>
              </div>
            </div>
            <div className="card-nav-item" onClick={handleIdeaBoard}>
              <div className="card-nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
                  <path d="m17.994 2.286a9 9 0 0 0 -14.919 5.536 8.938 8.938 0 0 0 2.793 7.761 6.263 6.263 0 0 1 2.132 4.566v.161a3.694 3.694 0 0 0 3.69 3.69h.62a3.694 3.694 0 0 0 3.69-3.69v-.549a5.323 5.323 0 0 1 1.932-4 8.994 8.994 0 0 0 .062-13.477zm-5.684 19.714h-.62a1.692 1.692 0 0 1 -1.69-1.69s-.007-.26-.008-.31h4.008v.3a1.692 1.692 0 0 1 -1.69 1.69zm4.3-7.741a7.667 7.667 0 0 0 -2.364 3.741h-1.246v-7.184a3 3 0 0 0 2-2.816 1 1 0 0 0 -2 0 1 1 0 0 1 -2 0 1 1 0 0 0 -2 0 3 3 0 0 0 2 2.816v7.184h-1.322a8.634 8.634 0 0 0 -2.448-3.881 7 7 0 0 1 3.951-12.073 7.452 7.452 0 0 1 .828-.046 6.921 6.921 0 0 1 4.652 1.778 6.993 6.993 0 0 1 -.048 10.481z" />
                </svg>
              </div>
            </div>
            <div className="card-nav-item card-center-item" onClick={() => handleNavigation("gifts")}>
              <div className="card-nav-icon card-center-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
                  <path d="M21,7H17.866A6.547,6.547,0,0,0,20,2H18c0,2.881-1.971,4.307-4.152,4.8A9.239,9.239,0,0,0,15,3,3,3,0,0,0,9,3a9.239,9.239,0,0,0,1.152,3.8C7.971,6.307,6,4.881,6,2H4A6.547,6.547,0,0,0,6.134,7H3a3,3,0,0,0-3,3v4H2V24H22V14h2V10A3,3,0,0,0,21,7ZM12,2a1,1,0,0,1,1,1,7.71,7.71,0,0,1-1,3.013A7.71,7.71,0,0,1,11,3,1,1,0,0,1,12,2ZM2,10A1,1,0,0,1,3,9h8v3H2Zm2,4h7v8H4Zm16,8H13V14h7Zm2-10H13V9h8a1,1,0,0,1,1,1Z" />
                </svg>
              </div>
            </div>
            <div className="card-nav-item" onClick={() => handleNavigation("gifts")}>
              <div className="card-nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
                  <path d="M12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,12,10Zm6,13A6,6,0,0,0,6,23a1,1,0,0,0,2,0,4,4,0,0,1,8,0,1,1,0,0,0,2,0ZM18,8a4,4,0,1,1,4-4A4,4,0,0,1,18,8Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,18,2Zm6,13a6.006,6.006,0,0,0-6-6,1,1,0,0,0,0,2,4,4,0,0,1,4,4,1,1,0,0,0,2,0ZM6,8a4,4,0,1,1,4-4A4,4,0,0,1,6,8ZM6,2A2,2,0,1,0,8,4,2,2,0,0,0,6,2ZM2,15a4,4,0,0,1,4-4A1,1,0,0,0,6,9a6.006,6.006,0,0,0-6,6,1,1,0,0,0,2,0Z" />
                </svg>
              </div>
            </div>
            <div className="card-nav-item active" onClick={handleProfilesPage}>
              <div className="card-nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
                  <path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" />
                  <path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  // If a friend is selected, show their profile
  if (selectedFriend) {
    return (
      <>
        <div className="header-bar">
          <div className="header-logo">
            <img
              src="https://cdn.discordapp.com/attachments/1373870449506652182/1375484922353160252/klaus_logo1.png?ex=68328468&is=683132e8&hm=b9cf880160fa98172d64b28a6991cd9c598fbf9881683d248411104fdb183a29&"
              alt="Logo"
              height="50"
            />
          </div>

          <div className="header-cart" onClick={handleCartClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="22"
              height="28"
              fill="white"
              style={{ cursor: "pointer" }}
            >
              <path d="M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077ZM21.4,6.178l-.786,4.354A3,3,0,0,1,17.657,13H5.419L4.478,5H20.41A1,1,0,0,1,21.4,6.178Z" />
              <circle cx="7" cy="22" r="2" />
              <circle cx="17" cy="22" r="2" />
            </svg>
          </div>
        </div>

        <ProfilePage friend={selectedFriend} onBack={handleBackToFriends} />

        <div className="fixed-nav-container">
          <div className="card-nav">
            <div className="card-nav-item" onClick={() => handleNavigation("back")}>
              <div className="card-nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
                  <path d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z" />
                </svg>
              </div>
            </div>
            <div className="card-nav-item" onClick={handleIdeaBoard}>
              <div className="card-nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
                  <path d="m17.994 2.286a9 9 0 0 0 -14.919 5.536 8.938 8.938 0 0 0 2.793 7.761 6.263 6.263 0 0 1 2.132 4.566v.161a3.694 3.694 0 0 0 3.69 3.69h.62a3.694 3.694 0 0 0 3.69-3.69v-.549a5.323 5.323 0 0 1 1.932-4 8.994 8.994 0 0 0 .062-13.477zm-5.684 19.714h-.62a1.692 1.692 0 0 1 -1.69-1.69s-.007-.26-.008-.31h4.008v.3a1.692 1.692 0 0 1 -1.69 1.69zm4.3-7.741a7.667 7.667 0 0 0 -2.364 3.741h-1.246v-7.184a3 3 0 0 0 2-2.816 1 1 0 0 0 -2 0 1 1 0 0 1 -2 0 1 1 0 0 0 -2 0 3 3 0 0 0 2 2.816v7.184h-1.322a8.634 8.634 0 0 0 -2.448-3.881 7 7 0 0 1 3.951-12.073 7.452 7.452 0 0 1 .828-.046 6.921 6.921 0 0 1 4.652 1.778 6.993 6.993 0 0 1 -.048 10.481z" />
                </svg>
              </div>
            </div>
            <div className="card-nav-item card-center-item" onClick={() => handleNavigation("gifts")}>
              <div className="card-nav-icon card-center-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
                  <path d="M21,7H17.866A6.547,6.547,0,0,0,20,2H18c0,2.881-1.971,4.307-4.152,4.8A9.239,9.239,0,0,0,15,3,3,3,0,0,0,9,3a9.239,9.239,0,0,0,1.152,3.8C7.971,6.307,6,4.881,6,2H4A6.547,6.547,0,0,0,6.134,7H3a3,3,0,0,0-3,3v4H2V24H22V14h2V10A3,3,0,0,0,21,7ZM12,2a1,1,0,0,1,1,1,7.71,7.71,0,0,1-1,3.013A7.71,7.71,0,0,1,11,3,1,1,0,0,1,12,2ZM2,10A1,1,0,0,1,3,9h8v3H2Zm2,4h7v8H4Zm16,8H13V14h7Zm2-10H13V9h8a1,1,0,0,1,1,1Z" />
                </svg>
              </div>
            </div>
            <div className="card-nav-item" onClick={() => handleNavigation("gifts")}>
              <div className="card-nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
                  <path d="M12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,12,10Zm6,13A6,6,0,0,0,6,23a1,1,0,0,0,2,0,4,4,0,0,1,8,0,1,1,0,0,0,2,0ZM18,8a4,4,0,1,1,4-4A4,4,0,0,1,18,8Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,18,2Zm6,13a6.006,6.006,0,0,0-6-6,1,1,0,0,0,0,2,4,4,0,0,1,4,4,1,1,0,0,0,2,0ZM6,8a4,4,0,1,1,4-4A4,4,0,0,1,6,8ZM6,2A2,2,0,1,0,8,4,2,2,0,0,0,6,2ZM2,15a4,4,0,0,1,4-4A1,1,0,0,0,6,9a6.006,6.006,0,0,0-6,6,1,1,0,0,0,2,0Z" />
                </svg>
              </div>
            </div>
            <div className="card-nav-item active" onClick={handleProfilesPage}>
              <div className="card-nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
                  <path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" />
                  <path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="header-bar">
        <div className="header-logo">
          <img
            src="https://cdn.discordapp.com/attachments/1373870449506652182/1375484922353160252/klaus_logo1.png?ex=68328468&is=683132e8&hm=b9cf880160fa98172d64b28a6991cd9c598fbf9881683d248411104fdb183a29&"
            alt="Logo"
            height="50"
          />
        </div>

        <div className="header-cart" onClick={handleCartClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="22"
            height="28"
            fill="white"
            style={{ cursor: "pointer" }}
          >
            <path d="M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077ZM21.4,6.178l-.786,4.354A3,3,0,0,1,17.657,13H5.419L4.478,5H20.41A1,1,0,0,1,21.4,6.178Z" />
            <circle cx="7" cy="22" r="2" />
            <circle cx="17" cy="22" r="2" />
          </svg>
        </div>
      </div>

      <div className="friends-container">
        <div className="search-bar-container">
          <svg
            className="search-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="#785257"
          >
            <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" />
          </svg>
          <input
            type="text"
            placeholder="Search friends..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="connect-section">
          <h3 className="connect-title">Connect with friends</h3>
          <div className="connect-buttons">
            <button onClick={() => handleConnectSocial("Instagram")} className="connect-button instagram">
              <span className="connect-emoji">📷</span> Instagram
            </button>
            <button onClick={() => handleConnectSocial("Facebook")} className="connect-button facebook">
              <span className="connect-emoji">📘</span> Facebook
            </button>
            <button onClick={() => handleConnectSocial("Contacts")} className="connect-button contacts">
              <span className="connect-emoji">📱</span> Contacts
            </button>
          </div>
        </div>

        <div className="tab-navigation">
          <button
            onClick={() => setActiveTab("friends")}
            className={`tab-button ${activeTab === "friends" ? "active" : ""}`}
          >
            My Friends ({friends.length})
          </button>
          <button
            onClick={() => setActiveTab("suggestions")}
            className={`tab-button ${activeTab === "suggestions" ? "active" : ""}`}
          >
            Suggestions ({suggestions.length})
          </button>
        </div>

        <div className="friends-list">
          {activeTab === "friends"
            ? filteredFriends.map((friend) => (
                <div key={friend.id} className="friend-card" onClick={() => handleFriendClick(friend)}>
                  <div className="friend-avatar-container">
                    <img
                      src={friend.avatar || svgDataUrl}
                      alt={friend.name}
                      className="friend-avatar"
                      onError={(e) => (e.target.src = svgDataUrl)}
                    />
                    <div className={`status-indicator ${friend.status === "online" ? "online" : "offline"}`}></div>
                  </div>
                  <div className="friend-info">
                    <h4 className="friend-name">{friend.name}</h4>
                    <p className="friend-details">
                      {friend.mutualFriends} mutual friends • {friend.lastActive}
                    </p>
                  </div>
                  <button
                    className="action-button message"
                    onClick={(e) => {
                      e.stopPropagation()
                      console.log(`Message ${friend.name}`)
                    }}
                  >
                    Message
                  </button>
                </div>
              ))
            : filteredSuggestions.map((suggestion) => (
                <div key={suggestion.id} className="friend-card">
                  <img
                    src={suggestion.avatar || svgDataUrl}
                    alt={suggestion.name}
                    className="friend-avatar"
                    onError={(e) => (e.target.src = svgDataUrl)}
                  />
                  <div className="friend-info">
                    <h4 className="friend-name">{suggestion.name}</h4>
                    <p className="friend-details">
                      {suggestion.mutualFriends} mutual friends • {suggestion.reason}
                    </p>
                    <p className="friend-source">From {suggestion.source}</p>
                  </div>
                  <button onClick={() => handleAddFriend(suggestion.id)} className="action-button add-friend">
                    Add Friend
                  </button>
                </div>
              ))}
        </div>

        <div className="fixed-nav-container">
          <div className="card-nav">
            <div className="card-nav-item" onClick={() => handleNavigation("back")}>
              <div className="card-nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
                  <path d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z" />
                </svg>
              </div>
            </div>
            <div className="card-nav-item" onClick={handleIdeaBoard}>
              <div className="card-nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
                  <path d="m17.994 2.286a9 9 0 0 0 -14.919 5.536 8.938 8.938 0 0 0 2.793 7.761 6.263 6.263 0 0 1 2.132 4.566v.161a3.694 3.694 0 0 0 3.69 3.69h.62a3.694 3.694 0 0 0 3.69-3.69v-.549a5.323 5.323 0 0 1 1.932-4 8.994 8.994 0 0 0 .062-13.477zm-5.684 19.714h-.62a1.692 1.692 0 0 1 -1.69-1.69s-.007-.26-.008-.31h4.008v.3a1.692 1.692 0 0 1 -1.69 1.69zm4.3-7.741a7.667 7.667 0 0 0 -2.364 3.741h-1.246v-7.184a3 3 0 0 0 2-2.816 1 1 0 0 0 -2 0 1 1 0 0 1 -2 0 1 1 0 0 0 -2 0 3 3 0 0 0 2 2.816v7.184h-1.322a8.634 8.634 0 0 0 -2.448-3.881 7 7 0 0 1 3.951-12.073 7.452 7.452 0 0 1 .828-.046 6.921 6.921 0 0 1 4.652 1.778 6.993 6.993 0 0 1 -.048 10.481z" />
                </svg>
              </div>
            </div>
            <div className="card-nav-item card-center-item" onClick={() => handleNavigation("gifts")}>
              <div className="card-nav-icon card-center-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
                  <path d="M21,7H17.866A6.547,6.547,0,0,0,20,2H18c0,2.881-1.971,4.307-4.152,4.8A9.239,9.239,0,0,0,15,3,3,3,0,0,0,9,3a9.239,9.239,0,0,0,1.152,3.8C7.971,6.307,6,4.881,6,2H4A6.547,6.547,0,0,0,6.134,7H3a3,3,0,0,0-3,3v4H2V24H22V14h2V10A3,3,0,0,0,21,7ZM12,2a1,1,0,0,1,1,1,7.71,7.71,0,0,1-1,3.013A7.71,7.71,0,0,1,11,3,1,1,0,0,1,12,2ZM2,10A1,1,0,0,1,3,9h8v3H2Zm2,4h7v8H4Zm16,8H13V14h7Zm2-10H13V9h8a1,1,0,0,1,1,1Z" />
                </svg>
              </div>
            </div>
            <div className="card-nav-item" onClick={() => handleNavigation("gifts")}>
              <div className="card-nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
                  <path d="M12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,12,10Zm6,13A6,6,0,0,0,6,23a1,1,0,0,0,2,0,4,4,0,0,1,8,0,1,1,0,0,0,2,0ZM18,8a4,4,0,1,1,4-4A4,4,0,0,1,18,8Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,18,2Zm6,13a6.006,6.006,0,0,0-6-6,1,1,0,0,0,0,2,4,4,0,0,1,4,4,1,1,0,0,0,2,0ZM6,8a4,4,0,1,1,4-4A4,4,0,0,1,6,8ZM6,2A2,2,0,1,0,8,4,2,2,0,0,0,6,2ZM2,15a4,4,0,0,1,4-4A1,1,0,0,0,6,9a6.006,6.006,0,0,0-6,6,1,1,0,0,0,2,0Z" />
                </svg>
              </div>
            </div>
            <div className="card-nav-item active" onClick={handleProfilesPage}>
              <div className="card-nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
                  <path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" />
                  <path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FloatingMenu />
    </>
  )
}

export default FriendsPage
