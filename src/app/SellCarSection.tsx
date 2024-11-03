// SellCarSection.tsx
"use client";

import React from 'react';

const SellCarSection = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Sell Your Car on PakWheels and Get the Best Price</h2>
      <div style={styles.flexContainer}>
        <div style={styles.card}>
          <h3 style={styles.cardHeading}>Post your Ad on PakWheels</h3>
          <ul style={styles.list}>
            <li>✓ Post your Ad for Free in 3 Easy Steps</li>
            <li>✓ Get Genuine offers from Verified Buyers</li>
            <li>✓ Sell your car Fast at the Best Price</li>
          </ul>
          <button style={styles.buttonRed}>Post Your Ad</button>
        </div>
        <div style={styles.divider}>
          <span style={styles.orText}>OR</span>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardHeading}>Try PakWheels Sell It For Me</h3>
          <ul style={styles.list}>
            <li>✓ Dedicated Sales Expert to Sell your Car</li>
            <li>✓ We Bargain for you and share the Best Offer</li>
            <li>✓ We ensure Safe & Secure Transaction</li>
          </ul>
          <button style={styles.buttonBlue}>Register Your Car</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#ffffff',
    color: '#333333',
    padding: '40px',
    borderRadius: '10px',
    textAlign: 'center' as const,
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold' as const,
    marginBottom: '20px',
  },
  flexContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
  },
  card: {
    width: '300px',
    padding: '20px',
    borderRadius: '10px',
    border: '1px solid #ddd',
    textAlign: 'left' as const,
  },
  cardHeading: {
    fontSize: '18px',
    color: '#333333',
    fontWeight: 'bold' as const,
    marginBottom: '10px',
  },
  list: {
    listStyleType: 'none' as const,
    padding: 0,
    marginBottom: '20px',
    color: '#333333',
  },
  buttonRed: {
    backgroundColor: '#d9534f',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },
  buttonBlue: {
    backgroundColor: '#5bc0de',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
  },
  orText: {
    fontSize: '18px',
    color: '#666',
    margin: '0 10px',
  },
};

export default SellCarSection;
