import { connect } from 'react-redux';
import { addToOrderHistory } from '@actions/user/thunks';
import CheckoutForm from '@components/forms/CheckoutForm/CheckoutForm';

const mapStateToProps = (state) => {
  return {
    user: state.user,
    cart: state.session.cart,
    chosenCurrency: state.session.currency,
  }
};

export default connect(mapStateToProps,
  {
    addToOrderHistory,
  }
  )(CheckoutForm);
