import { combineReducers } from 'redux';
import pizzasReducer from './pizzas-reducer';

export default combineReducers(
  {
    pizzas: pizzasReducer,
  }
);