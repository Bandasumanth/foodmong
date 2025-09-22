const React = require('react');

function Help() {
  return React.createElement(
    'section',
    { className: 'help-section', style: { padding: 32, background: '#F8F9FA', color: '#2C3E50', fontFamily: 'Inter, Poppins, sans-serif' } },
    React.createElement('h2', { style: { color: '#27AE60' } }, 'Help & FAQs'),
    React.createElement('div', { className: 'faq-list', style: { marginTop: 16, maxWidth: 600 } },
      React.createElement('h3', null, 'How can I track my order?'),
      React.createElement('p', null, 'You can track your orders in the Order Tracking section in your account.'),
      React.createElement('h3', null, 'What payment methods are accepted?'),
      React.createElement('p', null, 'We accept credit cards, debit cards, UPI, and PayPal.'),
      React.createElement('h3', null, 'Can I cancel or change my order?'),
      React.createElement('p', null, 'You can cancel or modify an order before it is confirmed by the restaurant from your Orders page.'),
      React.createElement('h3', null, 'How do I contact customer support?'),
      React.createElement('p', null, 'Use the Contact form on this site or email hello@yourfoodapp.com for assistance.')
    )
  );
}

module.exports = Help;
