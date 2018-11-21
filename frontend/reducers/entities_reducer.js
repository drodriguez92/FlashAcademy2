import { combineReducers } from 'redux';
import cardsReducer from './cards_reducer'
import decksReducer from './decks_reducer'
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({ users, decks, cards });

export default entitiesReducer;
