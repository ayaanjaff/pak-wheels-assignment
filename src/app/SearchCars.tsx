"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SearchCars = () => {
  const [makeModel, setMakeModel] = useState('');
  const [city, setCity] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleSearch = () => {
    console.log(`Searching for: ${makeModel}, ${city}, ${priceRange}`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Find Used Cars in Pakistan</h2>
      <p style={styles.subheading}>
        With thousands of cars, we have just the right one for you
      </p>
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Car Make or Model"
          value={makeModel}
          onChange={(e) => setMakeModel(e.target.value)}
          style={styles.input}
        />
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={styles.select}
        >
          <option value="">All Cities</option>
          <option value="Karachi">Karachi</option>
          <option value="Lahore">Lahore</option>
          <option value="Islamabad">Islamabad</option>
        </select>
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          style={styles.select}
        >
          <option value="">Price Range</option>
          <option value="0-500000">0 - 500,000 PKR</option>
          <option value="500000-1000000">500,000 - 1,000,000 PKR</option>
          <option value="1000000-2000000">1,000,000 - 2,000,000 PKR</option>
        </select>
        <button onClick={handleSearch} style={styles.searchButton}>
          🔍
        </button>
      </div>
      <button style={styles.advancedFilter}>Advanced Filter</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    backgroundColor: '#002a4d',
    color: '#ffffff',
    padding: '50px',
    borderRadius: '10px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold' as const,
    marginBottom: '8px',
  },
  subheading: {
    fontSize: '16px',
    marginBottom: '24px',
  },
  searchContainer: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    width: '200px',
  },
  select: {
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    width: '150px',
  },
  searchButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
  },
  advancedFilter: {
    marginTop: '20px',
    color: '#ffffff',
    backgroundColor: '#005580',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
  },
};

export default SearchCars;
