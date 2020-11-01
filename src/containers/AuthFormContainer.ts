import { connect } from 'react-redux';
import { authorizeUser } from '@actions/user/thunks';
import { FORM_TYPES } from '@reducers/form-reducer';
import AuthForm from '@components/forms/AuthForm/AuthForm';

const mapStateToProps = (state) => {
  return {
    formState: state.forms[FORM_TYPES.AUTH],
  }
};

export default connect(mapStateToProps,
  {
    authorizeUser,
  }
  )(AuthForm);
