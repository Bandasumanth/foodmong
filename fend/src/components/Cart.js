// src/components/Cart.js

import { useState } from 'react';
import axios from 'axios';
import './Cart.css';
import PaymentModal from './PaymentModal';

const Cart = ({ cartItems, onRemoveFromCart, onCheckout }) => {
  const [showModal, setShowModal] = useState(false);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handlePayment = async () => {
    try {
      const { data } = await axios.post('http://localhost:5000/api/payment/create-order', {
        amount: totalPrice,
      });

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID, // <-- Correctly using the environment variable
        amount: totalPrice * 100,
        currency: 'INR',
        name: 'Food Moong',
        description: 'Food Order Payment',
        order_id: data.orderId,
        handler: function (response) {
          console.log('Payment successful:', response);
          setShowModal(true);
          setTimeout(() => {
            setShowModal(false);
            onCheckout();
          }, 3000);
        },
        modal: {
          ondismiss: function() {
            console.log('Payment modal was closed.');
          }
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();

    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  return (
    <div className="cart-container">
      {/* ... cart items display ... */}
      <h3 className="total-price">Total: ${totalPrice.toFixed(2)}</h3>
      
      <div className="payment-options">
        <button onClick={handlePayment}>Pay with Razorpay</button>
      </div>

      {showModal && <PaymentModal />}
    </div>
  );
};

export default Cart;