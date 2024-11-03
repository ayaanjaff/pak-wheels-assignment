// Footer.tsx
"use client";

import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.section}>
          <h4 style={styles.heading}>Cars By Make</h4>
          <ul style={styles.list}>
            {['Toyota', 'Suzuki', 'Honda', 'Daihatsu', 'Mitsubishi', 'Nissan', 'Mercedes', 'Hyundai', 'BMW'].map(make => (
              <li key={make} style={styles.listItem}>{make} Cars for Sale</li>
            ))}
          </ul>
        </div>
        <div style={styles.section}>
          <h4 style={styles.heading}>Cars By City</h4>
          <ul style={styles.list}>
            {['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Peshawar', 'Faisalabad', 'Multan', 'Gujranwala', 'Sialkot', 'Sargodha'].map(city => (
              <li key={city} style={styles.listItem}>Cars in {city}</li>
            ))}
          </ul>
        </div>
        <div style={styles.section}>
          <h4 style={styles.heading}>Explore PakWheels</h4>
          <ul style={styles.list}>
            {['Used Cars', 'Used Bikes', 'New Cars', 'Auto Parts & Accessories', 'Cool Rides', 'Forums', 'Autoshow', 'Sitemap'].map(item => (
              <li key={item} style={styles.listItem}>{item}</li>
            ))}
          </ul>
        </div>
        <div style={styles.section}>
          <h4 style={styles.heading}>PakWheels.com</h4>
          <ul style={styles.list}>
            {['About PakWheels.com', 'Our Products', 'Advertise With Us', 'How To Pay', 'FAQs', 'Refunds & Returns', 'Careers', 'Contact Us'].map(item => (
              <li key={item} style={styles.listItem}>{item}</li>
            ))}
          </ul>
        </div>
        <div style={styles.section}>
          <h4 style={styles.heading}>Sell On PakWheels</h4>
          <ul style={styles.list}>
            {['Sell Your Car', 'Sell Your Bike', 'Sell Accessory'].map(item => (
              <li key={item} style={styles.listItem}>{item}</li>
            ))}
          </ul>
          <h4 style={styles.heading}>Subscribe to our Newsletter</h4>
          <div style={styles.newsletter}>
            <input type="email" placeholder="name@email.com" style={styles.input} />
            <button style={styles.subscribeButton}>Subscribe</button>
          </div>
        </div>
      </div>
      <div style={styles.socialContainer}>
        <p style={styles.socialText}>Follow Us</p>
        <div style={styles.icons}>
          {['facebook', 'twitter', 'pinterest', 'instagram', 'youtube'].map(platform => (
            <span key={platform} style={styles.icon}>{platform}</span>
          ))}
        </div>
        <div style={styles.downloadContainer}>
          <img src="/path-to-google-play-badge.png" alt="Google Play" style={styles.appBadge} />
          <img src="/path-to-app-store-badge.png" alt="App Store" style={styles.appBadge} />
          <img src="/path-to-app-gallery-badge.png" alt="App Gallery" style={styles.appBadge} />
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#2a2a2a',
    color: '#ffffff',
    padding: '40px 20px',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    justifyContent: 'space-between',
    marginBottom: '30px',
  },
  section: {
    flex: '1 1 200px',
    margin: '10px',
  },
  heading: {
    fontSize: '18px',
    fontWeight: 'bold' as const,
    marginBottom: '15px',
  },
  list: {
    listStyleType: 'none' as const,
    padding: 0,
    color: '#ddd',
  },
  listItem: {
    marginBottom: '10px',
  },
  newsletter: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
  },
  input: {
    padding: '8px',
    marginRight: '5px',
    flexGrow: 1,
  },
  subscribeButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    cursor: 'pointer',
  },
  socialContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column' as const,
    marginTop: '30px',
  },
  socialText: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  icons: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  icon: {
    width: '24px',
    height: '24px',
    backgroundColor: '#666',
    borderRadius: '50%',
    display: 'inline-block',
    textAlign: 'center' as const,
    lineHeight: '24px',
    color: '#ffffff',
  },
  downloadContainer: {
    display: 'flex',
    gap: '10px',
  },
  appBadge: {
    width: '120px',
    height: '40px',
  },
};

export default Footer;
