import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

const Header = () => {
  return (
    <header>
      <img src="https://www.brainscape.com/assets/bsc-icon.png" className="icon" alt=""></img>
      <Link to="/" className="header-link">
        <h1 >FLASHACADEMY</h1>
      </Link>
      <GreetingContainer className="greeting" />
    </header>
  );
};

export default Header;
