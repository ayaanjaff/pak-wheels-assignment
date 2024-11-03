import React from 'react';
import Link from 'next/link';

const CheckoutForm: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#e6f0fa',
    }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>Enter your Details</h1>
      <form style={{
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: '#f8f9fa',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}>
        <input
          type="text"
          placeholder="Enter Your Name"
          style={{
            marginBottom: '15px',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ced4da',
          }}
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          style={{
            marginBottom: '15px',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ced4da',
          }}
        />
        <input
          type="text"
          placeholder="Card Number"
          style={{
            marginBottom: '15px',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ced4da',
          }}
        />
        <input
          type="text"
          placeholder="Address"
          style={{
            marginBottom: '15px',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ced4da',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#1a73e8',
            color: '#fff',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        > <Link href={"./thankyou"}>
          Place your order
          </Link>
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
