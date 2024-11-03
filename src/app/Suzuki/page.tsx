
import React from 'react';
import Link from 'next/link';

// Car details component
const CarDetails: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#e0ecf5', padding: '20px', textAlign: 'center' }}>
      {"Suzuki"}
      <h1 style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
        Suzuki Alto 2024 Price in Pakistan, Images, Reviews & Specs
      </h1>

      { <div className='flex justify-center'><img src="Suzuki_Alto_-_PNG.png" alt="suzuki" /> </div> }
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img
          src="/path/to/toyota-corolla-image.jpg" // replace with actual image path
          alt="Toyota Corolla 2024"
          style={{ width: '400px', height: 'auto', borderRadius: '10px' }}
        />
      </div>

      {/* Description */}
      <p style={{ maxWidth: '600px', margin: '0 auto', lineHeight: '1.5' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda nihil quae unde
        optio, non amet, quos atque quis commodi excepturi blanditiis neque ullam quaerat laborum.
        Deleniti quaerat aperiam optio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      {/* Price */}
      <h2 style={{ color: 'green', margin: '20px 0' }}>PKR 50,00,000</h2>

      {/* Payment Button */}
      <button 
        style={{
          backgroundColor: '#3b82f6',
          color: '#fff',
          padding: '10px 20px',
          fontSize: '16px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      > <Link href={"./payment"}>
        Make Payment
        </Link>
      </button>
    </div>
  );
};

export default CarDetails;
