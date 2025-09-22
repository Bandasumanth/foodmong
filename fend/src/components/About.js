const React = require('react');

function About() {
  return React.createElement(
    'section',
    { className: 'about-section', style: { padding: 32, background: '#F8F9FA', color: '#2C3E50', fontFamily: 'Inter, Poppins, sans-serif' } },
    React.createElement('h2', { style: { color: '#FF6B35' } }, 'About Our Food Delivery App'),
    React.createElement('p', null, 'Welcome! Our platform connects food lovers with a diverse range of local restaurants, bakeries, and cafes. Discover delicious meals, order in seconds, and track your food’s journey — all with just a few clicks.'),
    React.createElement('ul', { style: { paddingLeft: 24, margin: '24px 0' } }, [
      React.createElement('li', { key: 1 }, 'Browse and filter food delivery services by category, location, cuisine, and more.'),
      React.createElement('li', { key: 2 }, 'View rich menus, real images, and detailed service information.'),
      React.createElement('li', { key: 3 }, 'Instant search and user-friendly ordering for fast, reliable delivery.'),
      React.createElement('li', { key: 4 }, 'All transactions are secure, and support is always a message away.')
    ]),
    React.createElement('p', { style: { fontWeight: 500, color: '#27AE60' } },
      'Enjoy great food. Support local. Experience delivery made simple!'
    )
  );
}

module.exports = About;
