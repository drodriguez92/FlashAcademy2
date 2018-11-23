import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import deck from './deck_errors_reducer';

export default combineReducers({session, deck});
