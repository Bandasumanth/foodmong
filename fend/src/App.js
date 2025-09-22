import { useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Cart from './components/Cart';
import AuthContext from './context/AuthContext';
import './App.css';
import Services from './components/services';
import Help from './components/Help';
import Contact from './components/Contact';
import About from './components/About';

const App = () => {
  const { isAuth } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems(prevItems => [...prevItems, item]);
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <Header cartItemCount={cartItems.length} />
      <Routes>
        <Route path="/login" element={isAuth ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={isAuth ? <Navigate to="/" /> : <Register />} />
        <Route path="/" element={isAuth ? <Home onAddToCart={handleAddToCart} /> : <Navigate to="/login" />} />
        <Route path='/services' element={<Services/>}/>
        <Route path="/cart" element={isAuth ? <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} onCheckout={handleCheckout} /> : <Navigate to="/login" />} />
        <Route path='/help' element={<Help/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path='/About' element={<About/>}/>
      </Routes>
    </Router>
  );
};

export default App;