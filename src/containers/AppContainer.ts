import { connect } from 'react-redux';
import { getSessionData } from '@actions/session';
import { getUserData } from '@actions/user';
import { changeCurrency } from '@actions/session';
import App from '../App';

const mapStateToProps = (state) => {
  return {
    session: state.session,
    user: state.user,
  }
};

export default connect(
  mapStateToProps,
  {
    getSessionData,
    getUserData,
    changeCurrency,
  }
  )(App);
