import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import CardIndex from './card/card_index';
import CardShow from './card/card_show';
import DeckIndex from './deck/deck_index';
import DeckShow from './deck/deck_show';
import Modal from './modal/modal';
import SplashContainer from './splash/splash_container';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (

  <div>
  <Modal />
    <AuthRoute exact path="/" component={SplashContainer}/>
    <Route exact path="/decks" component={DeckIndex}/>
    <Route exact path="/decks/:deckId" component={DeckShow}/>
  </div>
);

export default App;
