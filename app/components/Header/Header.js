import React from 'react';
import { Link } from 'react-router-dom';
import './Header';

const Header = () => {
  return (
    <div className='header'>
      <h1>Movie Tracker</h1>
      <h2><Link to='/signin'>Sign-In</Link></h2>
      <h2><Link to='/signup'>Sign-Up</Link></h2>
      <h2><Link to='/favorites'>Favorites</Link></h2>
    </div>
  );
};

export default Header;
