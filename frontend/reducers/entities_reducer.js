import { combineReducers } from 'redux';
import cards from './cards_reducer'
import decks from './decks_reducer'
import users from './users_reducer';

const entitiesReducer = combineReducers({ users, decks, cards });

export default entitiesReducer;
