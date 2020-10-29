import { connect } from 'react-redux';
import PizzasList from '@components/PizzasList/PizzasList';
import { getPizzasList } from '../actions/pizzas';

const mapStateToProps = (state) => {
  return {
    pizzas: state.pizzas,
    pizzasInCart: state.session.cart.items,
  }
};

export default connect(mapStateToProps,
  { getPizzasList }
  )(PizzasList);
