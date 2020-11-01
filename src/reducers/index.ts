import { combineReducers } from 'redux';
import pizzasReducer from './pizzas-reducer';
import sessionReducer from './session-reducer';
import userReducer from './user-reducer';
import formReducer from './form-reducer';

export default combineReducers(
  {
    pizzas: pizzasReducer,
    session: sessionReducer,
    user: userReducer,
    forms: formReducer,
  }
);