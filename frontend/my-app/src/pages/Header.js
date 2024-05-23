import React from 'react';

function Header({ onSelect }) {
  const headerStyle = {
    backgroundColor: '#f0f0f0', 
    padding: '10px 20px',
    fontSize: '24px', 
    color: '#333',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const buttonStyle = {
    padding: '8px 16px',
    fontSize: '16px',
    color: '#333',
    backgroundColor: '#ddd',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px'
  };

  return (
    <header style={headerStyle}>
      <span>My Application Test</span>
      <div>
        <button style={buttonStyle} onClick={() => onSelect('orders')}>Orders</button>
        <button style={buttonStyle} onClick={() => onSelect('customers')}>Customers</button>
      </div>
    </header>
  );
}

export default Header;
