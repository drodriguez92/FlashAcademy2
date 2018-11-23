import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createDeck } from '../../actions/deck_actions';

class DeckForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
    this.state = { objective: '' };
    this.submit = this.submit.bind(this);
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  submit(e) {
    e.preventDefault();
    this.props.createDeck(Object.assign({}, this.state));
  }

  render() {
    return (
      <form className="deck-form" onSubmit={this.submit}>
        <label className="deck-input-label">Name:</label>
        <input className="deck-input"onChange={this.handleChange('name')} value={this.state.name} />
        <label className="deck-input-label">Objective:</label>
        <textarea className="deck-input"onChange={this.handleChange('objective')} value={this.state.objective} />
         <button className="deck-submit-button">Create Deck!</button>
      </form>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createDeck: deck => {
      dispatch(createDeck(deck));
    },
  };
};

const connecter = connect(null, mapDispatchToProps);
export default connecter(DeckForm);
