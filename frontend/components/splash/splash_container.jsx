import React from 'react';
import Header from './header';
import Footer from './footer';
import Search from './search';
// import { Link } from 'react-router-dom';


const Splash = () => {
    return (
      <>
      <div className="background">
        <Header />
        <body className="body">
          <h1>
            The World's Smartest Flashcards
          </h1>
          <h2>
            Learn twice as fast, and remember longer.
            <br></br>
            Proven by decades of cognitive science.
          </h2>
          <h3>
            Search for Brainscape Flashcards on thousands of classes:
          </h3>
        </body>
        <Search />
        <Footer />
      </div>
      </>
    );
  };

export default Splash;
