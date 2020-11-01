import { connect } from 'react-redux';
import { registerUser } from '@actions/user/thunks';
import { FORM_TYPES } from '@reducers/form-reducer';
import RegForm from '@components/forms/RegForm/RegForm';

const mapStateToProps = (state) => {
  return {
    formState: state.forms[FORM_TYPES.REG],
  }
};

export default connect(mapStateToProps,
  {
    registerUser,
  }
  )(RegForm);
