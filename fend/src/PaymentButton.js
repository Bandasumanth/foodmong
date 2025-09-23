// PaymentButton.js
import React, { useState } from 'react';
import axios from 'axios';

const PaymentButton = ({ amount, onPaymentSuccess }) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      // Create order on backend
      const { data: { order } } = await axios.post(
        'https://foodmong-bkend.onrender.com/api/payment/create-order',
        { amount }
      );

      // Razorpay options
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Razorpay key from env
        amount: order.amount, // in paise
        currency: 'INR',
        name: 'Food Moong',
        description: 'Food Order Payment',
        order_id: order.id, // razorpay order id
        handler: async (response) => {
          try {
            // Verify payment with backend
            await axios.post(
              'https://foodmong-bkend.onrender.com/api/payment/verify',
              response
            );
            alert('Payment Successful!');
            onPaymentSuccess(); // callback to update cart/order status
          } catch (err) {
            console.error('Payment verification failed:', err);
            alert('Payment verification failed. Please contact support.');
          }
        },
        prefill: {
          name: 'Sumanth',
          email: 'sumanth@example.com',
          contact: '9999999999',
        },
        notes: {
          address: 'Food Moong Customer',
        },
        theme: {
          color: '#3399cc',
        },
        modal: {
          ondismiss: function () {
            console.log('Payment modal closed.');
          },
        },
      };

      // Open Razorpay modal
      const rzp1 = new window.Razorpay(options);
      rzp1.open();

    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handlePayment} disabled={loading}>
      {loading ? 'Processing...' : `Pay ₹${amount}`}
    </button>
  );
};

export default PaymentButton;
