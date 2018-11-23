import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createDeck } from '../../actions/deck_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.deck,
    formType: 'deck'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createDeck: deck => {
      dispatch(createDeck(deck));
    },
  };
};

class DeckForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      objective: ''
     };
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

  renderErrors() {
    return(
      <>
      {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}1</li>
      ))}
      </>
    );
  }

  render() {
    return (
      <form className="deck-form" onSubmit={this.submit}>
        {this.renderErrors()}
        <label className="deck-input-label">Name:</label>
        <input className="deck-input"onChange={this.handleChange('name')} value={this.state.name} />
        <label className="deck-input-label">Objective:</label>
        <textarea className="deck-input"onChange={this.handleChange('objective')} value={this.state.objective} />
        <button className="deck-submit-button">Create Deck!</button>
      </form>
    );
  }
}


const connecter = connect(mapStateToProps, mapDispatchToProps);
export default connecter(DeckForm);
