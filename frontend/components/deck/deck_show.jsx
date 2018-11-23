import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchDeck } from '../../actions/deck_actions';

class DeckShow extends React.Component {
  componentDidMount() {
    this.props.fetchDeck(this.props.match.params.deckId);
  }

  componentDidUpdate(oldProps) {
    if (oldProps.match.params.deckId !== this.props.match.params.deckId) {
      this.props.fetchDeck(this.props.match.params.deckId);
    }
  }

  render() {
    return (
      <>
        <p>{this.props.deck.objective}</p>
        <Link to="/decks">Go Back</Link>
      </>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  const deckId = ownProps.match.params.deckId;
  const deck = state.entities.decks[deckId] || {};
  return { deck };
};
const mapDispatchToProps = (dispatch) => {
  return { fetchDeck: id => dispatch(fetchDeck(id)) };
};
export default connect(mapStateToProps, mapDispatchToProps)(DeckShow);
