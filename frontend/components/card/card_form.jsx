import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCard } from '../../actions/card_actions';

class CardForm extends Component {
  constructor(props) {
    super(props);
    this.state = { question: '' };
    this.state = { answer: '' };
    this.submit = this.submit.bind(this);
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  submit(e) {
    e.preventDefault();
    this.props.createCard(Object.assign({}, this.state));
  }

  render() {
    return (
      <form className="card-form" onSubmit={this.submit}>
        <label className="card-input-label">Enter knowledge!</label>
        <input className="card-input"onChange={this.handleChange('question')} value={this.state.question} />
        <input className="card-input"onChange={this.handleChange('answer')} value={this.state.answer} />
         <button className="card-submit-button">Create Card!</button>
      </form>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createCard: card => {
      dispatch(createCard(card));
    },
  };
};

const connecter = connect(null, mapDispatchToProps);
export default connecter(CardForm);
