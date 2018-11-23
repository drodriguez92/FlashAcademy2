import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DeckForm from './deck_form';
import Header from '../splash/header';
import { fetchDecks } from '../../actions/deck_actions';

class DeckIndex extends Component {

  componentDidMount() {
    this.props.fetchDecks();
  }

  componentDidUpdate(oldProps) {
    if (oldProps.match.params.deckId !== this.props.match.params.deckId) {
      this.props.fetchDeck(this.props.match.params.deckId);
    }
  }

  render() {
    const decks = this.props.decks.map(deck => {
      return (
        <section className="deck-item">
          <a className="mastery">0%</a>
          <ul key={deck.id} className="deck-index-item">
            <li><Link to={`/decks/${deck.id}`} className="deck-link">{deck.name}</Link></li>
            <li className="card-count">Cards: 0</li>
          </ul>
          <button className="add-cards">Add Cards</button>
        </section>
      );
    });
    // let form = "FORM";
    // if (this.props.loggedIn) {
    //   form = <DeckForm />;
    // }

    return (
      <main className="deck-index">
        <section className="deck-heading"><Header /></section>
        <img src="https://pbs.twimg.com/profile_images/378800000699275845/28983bbc0ac0a12cde1c0dc3fc818b4b_400x400.png" className="class-icon"/><h1 className="class"> App Academy </h1>
        <div className="index-heading">
          <ul className="deck-list">
            <h2 className="index-labels"><a className="deck-label"> Decks: </a> <button className="create-deck">Create Deck</button></h2>
            {decks}
          </ul>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  const decks = Object.values(state.entities.decks);
  return {
    decks,
    loggedIn: Boolean(state.session.id),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDecks: () => dispatch(fetchDecks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckIndex);
