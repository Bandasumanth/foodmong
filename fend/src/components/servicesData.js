// src/components/Services/servicesData.js

const servicesData = [
    {
      id: 1,
      name: "Green Eats",
      category: "Vegetarian",
      location: "Downtown",
      description: "Fresh, healthy vegetarian meals delivered fast.",
      available: true,
      image: "/images/green-eats.jpg"
    },
    {
      id: 2,
      name: "Burger Express",
      category: "Fast Food",
      location: "Uptown",
      description: "Delicious burgers, fries, and more.",
      available: false,
      image: "/images/burger-express.jpg"
    },
    {
        id: 3,
        name: "Pizza Universe",
        category: "Pizza",
        location: "Central City",
        cuisineType: "Italian",
        rating: 4.7,
        description: "Handcrafted pizzas baked fresh in stone ovens.",
        available: true,
        priceRange: "$$",
        deliveryEstimate: "40-55 min",
        hours: "10:00 AM - 11:00 PM",
        menu: [
          { itemId: 301, name: "Margherita Pizza", description: "Classic tomato, mozzarella, basil", price: 260 },
          { itemId: 302, name: "Pepperoni Pizza", description: "Spicy pepperoni, mozzarella, tomato sauce", price: 290 }
        ],
        image: "/images/pizza-universe.jpg"
      },
      {
        id: 4,
        name: "Sushi Zen",
        category: "Sushi",
        location: "Waterfront",
        cuisineType: "Japanese",
        rating: 4.5,
        description: "Premium sushi rolls, nigiri, and sashimi delivered fresh.",
        available: true,
        priceRange: "$$$",
        deliveryEstimate: "35-50 min",
        hours: "12:00 PM - 10:00 PM",
        menu: [
          { itemId: 401, name: "Salmon Nigiri", description: "Fresh salmon, seasoned rice", price: 160 },
          { itemId: 402, name: "Dragon Roll", description: "Eel, avocado, cucumber, sweet sauce", price: 240 }
        ],
        image: "/images/sushi-zen.jpg"
      },
      {
        id: 5,
        name: "Spice Route",
        category: "Indian",
        location: "East End",
        cuisineType: "Indian",
        rating: 4.2,
        description: "Classic and contemporary Indian cuisine.",
        available: true,
        priceRange: "$$",
        deliveryEstimate: "45-60 min",
        hours: "11:30 AM - 11:00 PM",
        menu: [
          { itemId: 501, name: "Butter Chicken", description: "Creamy tomato-based curry, tender chicken", price: 250 },
          { itemId: 502, name: "Paneer Tikka", description: "Grilled paneer, spicy marinade", price: 200 }
        ],
        image: "/images/spice-route.jpg"
      },
      {
        id: 6,
        name: "Noodle House",
        category: "Asian",
        location: "Westside",
        cuisineType: "Chinese",
        rating: 4.4,
        description: "Noodles, dumplings, stir-fry and more.",
        available: true,
        priceRange: "$",
        deliveryEstimate: "25-40 min",
        hours: "10:30 AM - 11:00 PM",
        menu: [
          { itemId: 601, name: "Chicken Chow Mein", description: "Stir-fried chicken noodles", price: 180 },
          { itemId: 602, name: "Pork Dumplings", description: "Steamed pork dumplings", price: 130 }
        ],
        image: "/images/noodle-house.jpg"
      },
      {
        id: 7,
        name: "Wrap King",
        category: "Wraps",
        location: "Downtown",
        cuisineType: "Mediterranean",
        rating: 4.1,
        description: "Mediterranean-inspired wraps and salads.",
        available: true,
        priceRange: "$",
        deliveryEstimate: "20-35 min",
        hours: "09:00 AM - 10:00 PM",
        menu: [
          { itemId: 701, name: "Falafel Wrap", description: "Falafel, hummus, veggies", price: 120 },
          { itemId: 702, name: "Chicken Shawarma", description: "Grilled chicken, garlic sauce", price: 160 }
        ],
        image: "/images/wrap-king.jpg"
      },
      {
        id: 8,
        name: "Taco Fiesta",
        category: "Mexican",
        location: "Northside",
        cuisineType: "Mexican",
        rating: 4.3,
        description: "Tacos, burritos and quesadillas.",
        available: false,
        priceRange: "$",
        deliveryEstimate: "20-30 min",
        hours: "11:00 AM - 09:00 PM",
        menu: [
          { itemId: 801, name: "Beef Tacos", description: "Spicy beef, salsa, cheese", price: 140 },
          { itemId: 802, name: "Chicken Burrito", description: "Chicken, beans, rice", price: 180 }
        ],
        image: "/images/taco-fiesta.jpg"
      },
      {
        id: 9,
        name: "Salad Bar",
        category: "Healthy",
        location: "Central City",
        cuisineType: "International",
        rating: 4.6,
        description: "Create-your-own salads from over 40 ingredients.",
        available: true,
        priceRange: "$$",
        deliveryEstimate: "15-25 min",
        hours: "08:00 AM - 08:00 PM",
        menu: [
          { itemId: 901, name: "Caesar Salad", description: "Romaine, parmesan, croutons", price: 130 },
          { itemId: 902, name: "Super Greens Bowl", description: "Kale, spinach, avocado", price: 180 }
        ],
        image: "/images/salad-bar.jpg"
      },
      {
        id: 10,
        name: "Biryani Bay",
        category: "Indian",
        location: "East End",
        cuisineType: "Indian",
        rating: 4.7,
        description: "Flavored biryanis and classic curries.",
        available: true,
        priceRange: "$$",
        deliveryEstimate: "40-55 min",
        hours: "11:00 AM - 11:00 PM",
        menu: [
          { itemId: 1001, name: "Hyderabadi Biryani", description: "Spicy mutton biryani", price: 260 },
          { itemId: 1002, name: "Veg Biryani", description: "Mixed veggies, aromatic rice", price: 210 }
        ],
        image: "/images/biryani-bay.jpg"
      },
      {
        id: 11,
        name: "Cafe Delight",
        category: "Cafe",
        location: "Uptown",
        cuisineType: "International",
        rating: 4.2,
        description: "Sandwiches, coffee and light bites.",
        available: true,
        priceRange: "$",
        deliveryEstimate: "15-25 min",
        hours: "07:00 AM - 08:00 PM",
        menu: [
          { itemId: 1101, name: "Veg Sandwich", description: "Fresh veggies and cheese", price: 90 },
          { itemId: 1102, name: "Espresso", description: "Rich coffee", price: 60 }
        ],
        image: "/images/cafe-delight.jpg"
      },
      {
        id: 12,
        name: "The Griddle",
        category: "Breakfast",
        location: "Downtown",
        cuisineType: "International",
        rating: 4.4,
        description: "Breakfast classics and all-day brunch.",
        available: true,
        priceRange: "$",
        deliveryEstimate: "20-35 min",
        hours: "07:00 AM - 03:00 PM",
        menu: [
          { itemId: 1201, name: "Pancake Stack", description: "Fluffy pancakes, maple syrup", price: 110 },
          { itemId: 1202, name: "Omelette", description: "Eggs, cheese, veggies", price: 100 }
        ],
        image: "/images/the-griddle.jpg"
      },
      {
        id: 13,
        name: "BBQ Pit",
        category: "BBQ",
        location: "Westside",
        cuisineType: "American",
        rating: 4.6,
        description: "Barbecue meats, ribs and sides.",
        available: false,
        priceRange: "$$",
        deliveryEstimate: "45-60 min",
        hours: "12:00 PM - 11:00 PM",
        menu: [
          { itemId: 1301, name: "BBQ Ribs", description: "Smoked ribs, BBQ sauce", price: 310 },
          { itemId: 1302, name: "Pulled Pork Sandwich", description: "Pulled pork, coleslaw", price: 230 }
        ],
        image: "/images/bbq-pit.jpg"
      },
      {
        id: 14,
        name: "Pho Palace",
        category: "Asian",
        location: "Central City",
        cuisineType: "Vietnamese",
        rating: 4.3,
        description: "Pho noodle soups, rolls and more.",
        available: true,
        priceRange: "$",
        deliveryEstimate: "25-40 min",
        hours: "10:00 AM - 09:00 PM",
        menu: [
          { itemId: 1401, name: "Beef Pho", description: "Beef broth, rice noodles, herbs", price: 180 },
          { itemId: 1402, name: "Veggie Spring Rolls", description: "Fresh veggies, rice paper", price: 90 }
        ],
        image: "/images/pho-palace.jpg"
      },
      {
        id: 15,
        name: "Donut World",
        category: "Bakery",
        location: "Uptown",
        cuisineType: "Bakery",
        rating: 4.7,
        description: "Donuts, pastries and desserts.",
        available: true,
        priceRange: "$",
        deliveryEstimate: "10-20 min",
        hours: "08:00 AM - 09:00 PM",
        menu: [
          { itemId: 1501, name: "Classic Glazed Donut", description: "Soft, glazed donut", price: 50 },
          { itemId: 1502, name: "Chocolate Eclair", description: "Chocolate, pastry cream", price: 80 }
        ],
        image: "/images/donut-world.jpg"
      }
  ];
  
  export default servicesData;
  