import { connect } from 'react-redux';
import OrdersHistory from '@components/OrdersHistory/OrdersHistory';

const mapStateToProps = (state) => {
  return {
    orders: state.user.orders,
  }
};

export default connect(mapStateToProps)(OrdersHistory);
