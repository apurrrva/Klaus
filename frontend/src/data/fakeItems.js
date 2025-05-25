const fakeItems = [
  {
    id: 1,
    name: "Mario Kart 8 Deluxe",
    image: "/assets/mario.jpg",
    description: "Nintendo Switch Game for All Ages",
    price: 59.99,
    reviews: [
      { user: "Lily", comment: "Lowkey addicted. This game SLAPS.", rating: 5 },
      { user: "Jayden", comment: "Peak couch gaming vibes. No notes.", rating: 5 },
      { user: "Soph", comment: "Literally chaos but in the best way.", rating: 4 }
    ]
  },
  {
    id: 2,
    name: "Polaroid Camera",
    image: "/assets/polaroidcamera.jpg",
    description: "Vintage-style instant camera",
    price: 79.99,
    reviews: [
      { user: "Ava", comment: "Gives ✨aesthetic✨ every time.", rating: 5 },
      { user: "Noah", comment: "Takes bomb pics. Retro is in.", rating: 4 },
      { user: "Maya", comment: "Cute AND functional? Say less.", rating: 5 }
    ]
  },
  {
    id: 3,
    name: "Coffee Maker",
    image: "/assets/coffeemaker.jpg",
    description: "Brews the perfect cup every time",
    price: 45.00,
    reviews: [
      { user: "Luca", comment: "Saves me from being a zombie at 8am.", rating: 5 },
      { user: "Isla", comment: "Barista WHO? I got this thing.", rating: 4 },
      { user: "Ezra", comment: "My love language is caffeine and this delivers.", rating: 5 }
    ]
  },
  {
    id: 4,
    name: "Leather Journal",
    image: "/assets/leatherjournal.jpg",
    description: "Handcrafted with premium leather",
    price: 35.50,
    reviews: [
      { user: "Nina", comment: "Feeling like a mysterious author tbh.", rating: 5 },
      { user: "Leo", comment: "Super bougie vibes, obsessed.", rating: 4 },
      { user: "Jules", comment: "I journal once and suddenly I'm enlightened.", rating: 5 }
    ]
  },
  {
    id: 5,
    name: "Custom Puzzle",
    image: "/assets/puzzle.jpg",
    description: "Photo-personalized 1000-piece puzzle",
    price: 25.00,
    reviews: [
      { user: "Kai", comment: "Me and the squad spent HOURS on this.", rating: 5 },
      { user: "Sienna", comment: "Wholesome AF. 10/10 would recommend.", rating: 5 },
      { user: "Finn", comment: "Made a puzzle of my cat. No regrets.", rating: 4 }
    ]
  },
  {
    id: 6,
    name: "Organic Baby Lotion",
    image: "/assets/organic-baby-lotion.jpg",
    description: "Gentle moisturizing lotion for baby's sensitive skin.",
    price: 15.75,
    reviews: [
      { user: "Zara", comment: "Smells like heaven. Baby soft vibes ✨", rating: 5 },
      { user: "Max", comment: "Lowkey use this for myself ngl.", rating: 4 },
      { user: "Ruby", comment: "My baby's skin = glowing. Period.", rating: 5 }
    ]
  },
  {
    id: 7,
    name: "Silicone Baby Bib",
    image: "/assets/silicone-baby-bib.jpg",
    description: "Easy-to-clean bib with adjustable neck strap.",
    price: 12.50,
    reviews: [
      { user: "Ollie", comment: "Messy eaters? This thing’s the GOAT.", rating: 5 },
      { user: "Mila", comment: "Wipes clean in 2 secs. Mom win 💅", rating: 4 },
      { user: "Theo", comment: "Actually slays at catching crumbs.", rating: 5 }
    ]
  },
  {
    id: 8,
    name: "Gaming Mouse",
    image: "/assets/gaming-mouse.jpg",
    description: "High-precision RGB mouse for pro-level gaming.",
    price: 49.99,
    reviews: [
      { user: "Aria", comment: "Clicks smoother than my life decisions.", rating: 5 },
      { user: "Ethan", comment: "My KD went up. Coincidence? I think not.", rating: 5 },
      { user: "Nova", comment: "RGB = extra speed. Science. Probably.", rating: 4 }
    ]
  },
  {
    id: 9,
    name: "Vintage Vinyl Record",
    image: "/assets/vintage-vinyl-record.jpg",
    description: "Classic album for music lovers and collectors.",
    price: 29.00,
    reviews: [
      { user: "Miles", comment: "Sounds like nostalgia. Crying fr.", rating: 5 },
      { user: "Chloe", comment: "Vintage hits different.", rating: 5 },
      { user: "Asher", comment: "Spins like a dream. Major vibe check.", rating: 4 }
    ]
  },
  {
    id: 10,
    name: "Yoga Mat",
    image: "/assets/yoga-mat.jpg",
    description: "Non-slip, eco-friendly yoga mat for all levels.",
    price: 39.99,
    reviews: [
      { user: "Ivy", comment: "Downward dog never felt this comfy.🧘‍♀️", rating: 5 },
      { user: "Jace", comment: "No slip = no stress. Namaste, bestie.", rating: 4 },
      { user: "Willow", comment: "Vibes immaculate. Mat stays in place.", rating: 5 }
    ]
  },
  {
    id: 11,
    name: "Matte Liquid Lipstick",
    image: "/assets/matte-liquid-lipstick.jpg",
    description: "Long-lasting, non-drying formula for bold lips.",
    price: 18.00,
    reviews: [
      { user: "Piper", comment: "Stays on through pizza + drama. Iconic.", rating: 5 },
      { user: "Riley", comment: "Non‑drying? Facts. My lips are thriving.", rating: 4 },
      { user: "Gia", comment: "Color payoff = chef's kiss.", rating: 5 }
    ]
  },
  {
    id: 12,
    name: "Wooden Teething Ring",
    image: "/assets/wooden-teething-ring.jpg",
    description: "Natural wood teether to soothe sore gums.",
    price: 14.00,
    reviews: [
      { user: "Harper", comment: "Baby's chewing like a champ 🦷", rating: 5 },
      { user: "Caleb", comment: "All natural, zero cringe plastics.", rating: 4 },
      { user: "Skye", comment: "Tiny human approved. Mom chill achieved.", rating: 5 }
    ]
  },
  {
    id: 13,
    name: "Camping Hammock",
    image: "/assets/camping-hammock.jpg",
    description: "Lightweight, portable hammock for outdoor adventures.",
    price: 55.00,
    reviews: [
      { user: "River", comment: "Cloud 9 vibes in the wild. So comfy.", rating: 5 },
      { user: "Lena", comment: "Packs small, hangs big. Love it.", rating: 5 },
      { user: "Dash", comment: "Took a nap mid‑hike lol. Worth.", rating: 4 }
    ]
  },
  {
    id: 14,
    name: "Artisan Coffee Beans",
    image: "/assets/artisan-coffee-beans.jpg",
    description: "Locally roasted beans for the perfect cup.",
    price: 22.00,
    reviews: [
      { user: "Bea", comment: "Tastes like I have my life together.", rating: 5 },
      { user: "Cole", comment: "Smells elite, brews elite.", rating: 4 },
      { user: "Mimi", comment: "Morning ritual level‑up.", rating: 5 }
    ]
  },
  {
    id: 15,
    name: "Smart Fitness Tracker",
    image: "/assets/smart-fitness-tracker.jpg",
    description: "Track your steps, sleep, and more.",
    price: 69.99,
    reviews: [
      { user: "Zane", comment: "Guilt‑trip wristband but make it cute.", rating: 4 },
      { user: "Kira", comment: "Steps? Logged. Sleep? Exposed.", rating: 5 },
      { user: "Lana", comment: "My wrist be snitching but it’s for my own good.", rating: 5 }
    ]
  },
  {
    id: 16,
    name: "Reusable Water Bottle",
    image: "/assets/reusable-water-bottle.jpg",
    description: "Eco-friendly stainless steel bottle.",
    price: 20.00,
  },
  {
    id: 17,
    name: "Scented Soy Candle",
    image: "/assets/scented-soy-candle.jpg",
    description: "Hand-poured candle with calming lavender scent.",
    price: 16.50,
  },
  {
    id: 18,
    name: "Men’s Beard Grooming Kit",
    image: "/assets/beard-grooming-kit.jpg",
    description: "Complete kit for a soft and styled beard.",
    price: 30.00,
  },
  {
    id: 19,
    name: "PS4: Elden Ring",
    image: "/assets/elden-ring.jpg",
    description: "Rise, Tarnished. Dark Fantasy RPG.",
    price: 59.99,
  },
  {
    id: 20,
    name: "Personalized Journal",
    image: "/assets/personalized-journal.jpg",
    description: "Custom cover with premium paper, great for writers.",
    price: 28.00,
  },
  {
    id: 21,
    name: "Makeup Remover Wipes",
    image: "/assets/makeup-remover-wipes.jpg",
    description: "Gentle wipes for easy makeup removal.",
    price: 9.99,
  },
  {
    id: 22,
    name: "Sakura Miku Figure",
    image: "/assets/miku.jpg",
    description: "Ring in the Spring with Sakura Miku: Hanami Outfit Ver.!",
    price: 75.00,
  },
  {
    id: 23,
    name: "Wireless Headphones",
    image: "/assets/headphone.jpg",
    description: "Noise-cancelling over-ear headphones",
    price: 120.00,
  },
  {
    id: 24,
    name: "Chocolate Snack Box",
    image: "/assets/chocolate.jpg",
    description: "A selection of delicious chocolate snacks.",
    price: 18.50,
  },
  {
    id: 25,
    name: "Bluetooth Speaker",
    image: "/assets/bluetooth-speaker.jpg",
    description: "Waterproof portable speaker for indoor and outdoor use.",
    price: 45.99,
  }
];

export default fakeItems;
