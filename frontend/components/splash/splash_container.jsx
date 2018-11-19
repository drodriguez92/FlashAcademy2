import React from 'react';
import Header from './header';
import Footer from './footer';
import Search from './search';

const Splash = () => {
    return (
      <>
      <section className="background">
        <Header />
        <span className="body">
          <h1>
            The World's Smartest Flashcards
          </h1>
          <h2>
            Learn twice as fast, and remember longer.
            <br />
            Proven by decades of cognitive science.
          </h2>
          <h3>
            Search for Brainscape Flashcards on thousands of classes:
          </h3>
        </span>
        <Search />
        <Footer />
      </section>
      </>
    );
  };

export default Splash;
