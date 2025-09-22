// PaymentButton.js
import React from 'react';
import axios from 'axios';

const PaymentButton = ({ amount, onPaymentSuccess }) => {
  const handlePayment = async () => {
    try {
      const { data: { order } } = await axios.post('http://localhost:5000/api/payment/create-order', { amount });

      const options = {
        key: 'rzp_test_yourkeyid', // Your Razorpay Key ID
        amount: order.amount,
        currency: "INR",
        name: "Food Moong",
        description: "Test Transaction",
        order_id: order.id,
        handler: async (response) => {
          // This function is called on successful payment
          // Call your backend for signature verification
          await axios.post('http://localhost:5000/api/payment/verify', response);
          onPaymentSuccess();
        },
        prefill: {
          name: "Sumanth",
          email: "sumanth@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Payment failed:", error);
    }
  };

  return (
    <button onClick={handlePayment}>Pay Now</button>
  );
};

export default PaymentButton;