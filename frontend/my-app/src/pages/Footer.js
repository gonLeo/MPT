import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#f0f0f0',
    padding: '10px 20px',
    fontSize: '16px',
    color: '#333',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const linkStyle = {
    color: '#0077cc',
    textDecoration: 'none'
  };

  return (
    <footer style={footerStyle}>
      developed by: <a href="https://github.com/gonLeo" style={linkStyle} target="_blank" rel="noopener noreferrer">gonLeo</a>
    </footer>
  );
}

export default Footer;
