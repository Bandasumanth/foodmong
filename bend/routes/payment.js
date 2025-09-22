// routes/payment.js

const express = require('express');
const Razorpay = require('razorpay');
const router = express.Router();

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

router.post('/create-order', async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: amount * 100, // Amount in paise
    currency: 'INR', // <--- This must be 'INR'
    receipt: 'receipt_order_123',
  };

  try {
    const order = await razorpayInstance.orders.create(options);
    res.status(200).json({ orderId: order.id });
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

module.exports = router;