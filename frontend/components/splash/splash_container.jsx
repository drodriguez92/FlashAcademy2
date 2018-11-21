import React from 'react';
import Header from './header';
import Footer from './footer';
import Search from './search';

const Splash = () => {
    return (
      <>
      <section className="background">
        <Header />
        <div className="body">
          <h1>
            The World's Smartest Flashcards
          </h1>
          <h2>
            Learn twice as fast, and remember longer.<br></br>Proven by decades of cognitive science.
          </h2>
        </div>

        <Search />
        <Footer />
      </section>
      </>
    );
  };

export default Splash;
