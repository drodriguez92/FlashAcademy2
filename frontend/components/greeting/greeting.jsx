import React from 'react';


const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = (
    <nav className="login-signup">
      <button className="header-button" onClick={() => openModal('login')}>Login</button>
      <button className="header-button" onClick={() => openModal('signup')}>Signup</button>
      <button className="header-button" onClick={() => logout()}>Logout</button>
    </nav>
  );

  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="x-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return (
    currentUser ? personalGreeting() : sessionLinks
  );
};

export default Greeting;
