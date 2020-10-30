import { connect } from 'react-redux';
import PizzasList from '@components/PizzasList/PizzasList';
import { getPizzasList } from '@actions/pizzas';
import { updateCart } from '@actions/cart/thunks';

const mapStateToProps = (state) => {
  return {
    pizzas: state.pizzas,
    cart: state.session.cart,
  }
};

export default connect(mapStateToProps,
  {
    getPizzasList,
    updateCart,
  }
  )(PizzasList);
