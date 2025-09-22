const React = require('react');

function Contact() {
  return React.createElement(
    'section',
    { className: 'contact-section', style: { padding: 32, background: '#F8F9FA', color: '#2C3E50', fontFamily: 'Inter, Poppins, sans-serif' } },
    React.createElement('h2', { style: { color: '#FF6B35' } }, 'Contact Us'),
    React.createElement('p', null, 'Need help or have feedback? Reach out and our support team will respond promptly.'),
    React.createElement(
      'form',
      { className: 'contact-form', style: { display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 } },
      React.createElement('label', null, 'Your Email'),
      React.createElement('input', {
        type: 'email',
        placeholder: 'you@example.com',
        style: { padding: 12, borderRadius: 8, border: '1px solid #27AE60', marginBottom: 8 }
      }),
      React.createElement('label', null, 'Your Message'),
      React.createElement('textarea', {
        rows: 4,
        placeholder: 'How can we help you?',
        style: { padding: 12, borderRadius: 8, border: '1px solid #27AE60', marginBottom: 8 }
      }),
      React.createElement('button', {
        type: 'submit',
        style: {
          background: '#3498DB',
          color: '#fff',
          border: 'none',
          padding: 12,
          borderRadius: 8,
          fontWeight: 600,
          cursor: 'pointer'
        }
      }, 'Send')
    )
  );
}

module.exports = Contact;
