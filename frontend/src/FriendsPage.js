"use client"

import React, { useState } from "react"
import "./FriendsPage.css"

function FriendsPage({ user, onBack, onCartClick, onAddToGiftList, onIdeaBoard, onProfilesClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("friends")
  const [selectedFriend, setSelectedFriend] = useState(null)
  const [viewingRegistry, setViewingRegistry] = useState(null)

  // Mock registry items
  const mockRegistryItems = [
    {
      id: 3,
      name: "Coffee Maker",
      image: "/assets/coffeemaker.jpg",
      description: "Brews the perfect cup every time",
      price: 45.0,
      reviews: [
        { user: "Luca", comment: "Saves me from being a zombie at 8am.", rating: 5 },
        { user: "Isla", comment: "Barista WHO? I got this thing.", rating: 4 },
        { user: "Ezra", comment: "My love language is caffeine and this delivers.", rating: 5 },
      ],
    },
    {
      id: 4,
      name: "Leather Journal",
      image: "/assets/leatherjournal.jpg",
      description: "Handcrafted with premium leather",
      price: 35.5,
      reviews: [
        { user: "Nina", comment: "Feeling like a mysterious author tbh.", rating: 5 },
        { user: "Leo", comment: "Super bougie vibes, obsessed.", rating: 4 },
        { user: "Jules", comment: "I journal once and suddenly I'm enlightened.", rating: 5 },
      ],
    },
  ]

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

  const handleAddToCart = (item) => {
    console.log(`Adding ${item.name} to cart`)
    // You can implement actual cart functionality here
    alert(`${item.name} added to cart!`)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} style={{ color: i < rating ? "#FFD700" : "#DDD" }}>
        ★
      </span>
    ))
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

        <div className="registry-items-list">
          {mockRegistryItems.map((item) => (
            <div key={item.id} className="registry-item-card">
              <div className="registry-item-image">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  onError={(e) => {
                    e.target.src = "/placeholder.svg?height=120&width=120"
                  }}
                />
              </div>
              <div className="registry-item-details">
                <h3 className="registry-item-name">{item.name}</h3>
                <p className="registry-item-description">{item.description}</p>
                <p className="registry-item-price">${item.price.toFixed(2)}</p>

                <div className="registry-item-reviews">
                  <h4>Reviews:</h4>
                  {item.reviews.map((review, index) => (
                    <div key={index} className="review-item">
                      <div className="review-header">
                        <span className="review-user">{review.user}</span>
                        <span className="review-rating">{renderStars(review.rating)}</span>
                      </div>
                      <p className="review-comment">"{review.comment}"</p>
                    </div>
                  ))}
                </div>
              </div>
              <button className="add-to-cart-button" onClick={() => handleAddToCart(item)}>
                Add to Cart
              </button>
            </div>
          ))}
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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M12,2.162c3.204,0,3.584,0.012,4.849,0.07c1.308,0.06,2.655,0.358,3.608,1.311c0.962,0.962,1.251,2.296,1.311,3.608c0.058,1.265,0.07,1.645,0.07,4.849c0,3.204-0.012,3.584-0.07,4.849c-0.059,1.301-0.364,2.661-1.311,3.608c-0.962,0.962-2.295,1.251-3.608,1.311c-1.265,0.058-1.645,0.07-4.849,0.07s-3.584-0.012-4.849-0.07c-1.291-0.059-2.669-0.371-3.608-1.311c-0.957-0.957-1.251-2.304-1.311-3.608c-0.058-1.265-0.07-1.645-0.07-4.849c0-3.204,0.012-3.584,0.07-4.849c0.059-1.296,0.367-2.664,1.311-3.608c0.96-0.96,2.299-1.251,3.608-1.311C8.416,2.174,8.796,2.162,12,2.162 M12,0C8.741,0,8.332,0.014,7.052,0.072C5.197,0.157,3.355,0.673,2.014,2.014C0.668,3.36,0.157,5.198,0.072,7.052C0.014,8.332,0,8.741,0,12c0,3.259,0.014,3.668,0.072,4.948c0.085,1.853,0.603,3.7,1.942,5.038c1.345,1.345,3.186,1.857,5.038,1.942C8.332,23.986,8.741,24,12,24c3.259,0,3.668-0.014,4.948-0.072c1.854-0.085,3.698-0.602,5.038-1.942c1.347-1.347,1.857-3.184,1.942-5.038C23.986,15.668,24,15.259,24,12c0-3.259-0.014-3.668-0.072-4.948c-0.085-1.855-0.602-3.698-1.942-5.038c-1.343-1.343-3.189-1.858-5.038-1.942C15.668,0.014,15.259,0,12,0z" />
                <path d="M12,5.838c-3.403,0-6.162,2.759-6.162,6.162c0,3.403,2.759,6.162,6.162,6.162s6.162-2.759,6.162-6.162C18.162,8.597,15.403,5.838,12,5.838z M12,16c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S14.209,16,12,16z" />
              </svg>
            </button>

            <button onClick={() => handleConnectSocial("Facebook")} className="connect-button facebook">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M24,12.073c0,5.989-4.394,10.954-10.13,11.855v-8.363h2.789l0.531-3.46H13.87V9.86c0-0.947,0.464-1.869,1.95-1.869h1.509V5.045c0,0-1.37-0.234-2.679-0.234c-2.734,0-4.52,1.657-4.52,4.656v2.637H7.091v3.46h3.039v8.363C4.395,23.025,0,18.061,0,12.073c0-6.627,5.373-12,12-12S24,5.445,24,12.073z" />
              </svg>
            </button>

            <button onClick={() => handleConnectSocial("Contacts")} className="connect-button contacts">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M20.841,2.846c-.104-.322-.362-.57-.688-.66-.177-.048-4.369-1.186-7.614-1.186-3.334,0-7.445,1.139-7.619,1.188-.338,.094-.601,.358-.695,.696-.016,.058-.151,.552-.325,1.36h-.37c-.552,0-1,.448-1,1s.445,.997,.995,1c-.121,.75-.236,1.596-.324,2.505h-.24c-.552,0-1,.448-1,1s.448,1,1,1h.103c-.016,.411-.025,.829-.025,1.252s.009,.841,.026,1.252h-.103c-.552,0-1,.448-1,1s.448,1,1,1h.241c.088,.908,.203,1.754,.324,2.505-.55,.002-.996,.449-.996,1s.448,1,1,1h.371c.173,.807,.308,1.301,.324,1.359,.092,.333,.349,.596,.681,.693,.165,.049,4.077,1.191,7.633,1.191s7.468-1.143,7.633-1.191c.318-.094,.569-.339,.67-.656,.049-.154,1.197-3.825,1.197-9.153s-1.149-9.001-1.198-9.154Zm-1.763,17.188c-1.152,.3-3.994,.966-6.539,.966-2.527,0-5.357-.659-6.522-.961-.297-1.256-.978-4.514-.978-8.039s.678-6.772,.977-8.032c1.206-.301,4.141-.968,6.523-.968,2.328,0,5.33,.677,6.542,.976,.3,1.153,.958,4.13,.958,8.024s-.663,6.884-.961,8.034Z" />
                <path d="M12.539,12.892c-2.455,0-4.452,1.997-4.452,4.452,0,.552,.448,1,1,1s1-.448,1-1c0-1.352,1.1-2.452,2.452-2.452s2.452,1.1,2.452,2.452c0,.552,.448,1,1,1s1-.448,1-1c0-2.455-1.997-4.452-4.452-4.452Z" />
                <path d="M9.842,9.928c.212,.632,.716,1.135,1.346,1.346,.448,.15,.899,.225,1.35,.225s.902-.075,1.349-.225c.631-.211,1.135-.714,1.347-1.347,.301-.896,.301-1.804,0-2.7-.212-.631-.715-1.134-1.347-1.347-.896-.3-1.804-.3-2.7,0-.63,.212-1.134,.715-1.346,1.347-.301,.896-.301,1.804,0,2.7h0Z" />
              </svg>
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
