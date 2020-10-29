import { connect } from 'react-redux';
import { getSessionData } from '@actions/session';
import App from '../App';

const mapStateToProps = (state) => {
  return {
    session: state.session,
  }
};

export default connect(
  mapStateToProps,
  { getSessionData }
  )(App);
