import { connect } from 'react-redux';
import PizzasOrderList from '@components/PizzasOrderList/PizzasOrderList';
import { updateCart } from '@actions/cart/thunks';

const mapStateToProps = (state) => {
  return {
    pizzas: state.session.cart.items,
    cart: state.session.cart,
  }
};

export default connect(mapStateToProps,
  {
    updateCart,
  }
  )(PizzasOrderList);
