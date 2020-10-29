import { combineReducers } from 'redux';
import pizzasReducer from './pizzas-reducer';
import sessionReducer from './session-reducer';

export default combineReducers(
  {
    pizzas: pizzasReducer,
    session: sessionReducer,
  }
);