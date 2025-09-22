// src/components/Home.js

import { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

const Home = ({ onAddToCart }) => {
  const [foodItems, setFoodItems] = useState([]);

  // src/components/Home.js
// ... (imports and state)

useEffect(() => {
    axios.get('https://mocki.io/v1/6453d3b2-853d-4580-8878-3f4bf8861e4c')
      .then(response => {
        // Correctly access the 'foods' property from the response object
        if (response.data && Array.isArray(response.data.foods)) {
          setFoodItems(response.data.foods);
        } else {
          console.error("API response is not in the expected format:", response.data);
          setFoodItems([]); // Fallback to an empty array
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setFoodItems([]);
      });
  }, []);

// ... (rest of the component)

  return (
    <div className="home-container">
      <div className="food-items-container">
        {foodItems.map(item => (
          <div key={item.id} className="food-card">
            <img src={item.image} alt={item.name} />
            <div className="card-content">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <button onClick={() => onAddToCart(item)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;