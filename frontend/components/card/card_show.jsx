import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCard } from '../../actions/card_actions';

class CardShow extends React.Component {
  componentDidMount() {
    this.props.fetchCard(this.props.match.params.cardId);
  }

  componentDidUpdate(oldProps) {
    if (oldProps.match.params.cardId !== this.props.match.params.cardId) {
      this.props.fetchCard(this.props.match.params.cardId);
    }
  }

  render() {
    return (
      <>
        <p>{this.props.card.body}</p>
        <Link to= './deck_show' >Go Back</Link>
      </>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  const cardId = ownProps.match.params.cardId;
  const card = state.entities.cards[cardId] || {};
  return { card };
};
const mapDispatchToProps = (dispatch) => {
  return { fetchCard: id => dispatch(fetchCard(id)) };
};
export default connect(mapStateToProps, mapDispatchToProps)(CardShow);
