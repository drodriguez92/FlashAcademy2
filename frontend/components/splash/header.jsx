import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

const Header = () => {
  return (
    <header>
      <div className="nav-bar">
        <div className="header-left">
          <section className="icon" />
          <Link to="/" className="header-link">
            <h1><span className="flash">FLASH</span><span className="academy">ACADEMY</span></h1>
          </Link>
        </div>
        <GreetingContainer className="greeting" />
      </div>
    </header>
  );
};

export default Header;
