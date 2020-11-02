import { connect } from 'react-redux';
import OrdersHistory from '@components/OrdersHistory/OrdersHistory';

const mapStateToProps = (state) => {
  return {
    orders: state.user.orders,
    chosenCurrency: state.session.currency,
  }
};

export default connect(mapStateToProps)(OrdersHistory);
