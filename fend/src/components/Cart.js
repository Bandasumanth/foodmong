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
      // Call backend to create Razorpay order
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/payment/create-order`,
        { amount: totalPrice }
      );

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID, // 👈 Razorpay key from .env
        amount: data.amount,                        // backend returns amount in paise
        currency: 'INR',
        name: 'Food Moong',
        description: 'Food Order Payment',
        order_id: data.orderId,
        handler: function (response) {
          console.log('✅ Payment successful:', response);
          setShowModal(true);
          setTimeout(() => {
            setShowModal(false);
            onCheckout();
          }, 3000);
        },
        modal: {
          ondismiss: function () {
            console.log('⚠️ Payment modal was closed.');
          },
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error('❌ Payment failed:', error.response?.data || error.message);
    }
  };

  return (
    <div className="cart-container">
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <span>{item.name}</span>
          <span>₹{item.price}</span>
          <button onClick={() => onRemoveFromCart(item)}>Remove</button>
        </div>
      ))}

      <h3 className="total-price">Total: ₹{totalPrice.toFixed(2)}</h3>

      <div className="payment-options">
        <button onClick={handlePayment}>Pay with Razorpay</button>
      </div>

      {showModal && <PaymentModal />}
    </div>
  );
};

export default Cart;
