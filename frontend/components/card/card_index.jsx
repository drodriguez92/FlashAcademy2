import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CardForm from './card_form';
import { fetchCards } from '../../actions/card_actions';

class CardIndex extends Component {

  componentDidMount() {
    this.props.fetchCards();
  }

  componentDidUpdate(oldProps) {
    if (oldProps.match.params.cardId !== this.props.match.params.cardId) {
      this.props.fetchCard(this.props.match.params.cardId);
    }
  }


  render() {
    const cards = this.props.cards.map(card => {
      return (
        <li key={card.id} className="card-index-item">
          <Link to={`/cards/${card.id}`}>{card.question}</Link>
        </li>
      );
    });
    let form = "";
    if (this.props.loggedIn) {
      form = <CardForm />;
    }

    return (
      <main className="card-index">
        {form}
        <ul className="card-list">
          {cards}
        </ul>
      </main>
    );
  }
}

const mapStateToProps = state => {
  const cards = Object.values(state.entities.cards);
  return {
    cards,
    loggedIn: Boolean(state.session.currentUserId),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCards: () => dispatch(fetchCards()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardIndex);
