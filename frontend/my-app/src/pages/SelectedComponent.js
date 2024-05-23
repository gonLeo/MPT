import React from 'react';

function SelectedComponent({ onSelect }) {
  const modalStyle = {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    zIndex: 1000,
    maxWidth: '90%',
    textAlign: 'center'
  };

  const backgroundStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#0077cc',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px'
  };

  return (
    <div style={backgroundStyle}>
      <div style={modalStyle}>
        <h2>Select a option</h2>
        <button style={buttonStyle} onClick={() => onSelect('orders')}>View Orders</button>
        <button style={buttonStyle} onClick={() => onSelect('customers')}>View Customers</button>
      </div>
    </div>
  );
}

export default SelectedComponent;
