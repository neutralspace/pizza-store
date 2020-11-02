import { connect } from 'react-redux';
import { updateCart } from '@actions/cart/thunks';
import Order from '@components/Order/Order';

const mapStateToProps = (state) => {
  return {
    cart: state.session.cart,
    chosenCurrency: state.session.currency,
  }
};

export default connect(mapStateToProps,
  {
    updateCart,
  }
  )(Order);
