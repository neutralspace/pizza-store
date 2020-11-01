import React, { memo, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import AuthFormContainer from '@containers/AuthFormContainer';
import RegFormContainer from '@containers/RegFormContainer';
import './AuthRegModal.scss';

export enum FORM_TYPES {
  AUTH,
  REG,
}

/**
 * Authorization and registration modal.
 *
 * @returns {JSX} - modal component.
 */
const AuthRegModal = (props): JSX.Element => {
  const { isModalOpen, onHideHandler } = props;
  const [ activeForm, setActiveForm ] = useState(FORM_TYPES.AUTH);

  const toggleActiveForm = (): void => {
    if (activeForm === FORM_TYPES.AUTH) {
      setActiveForm(FORM_TYPES.REG);
    } else {
      setActiveForm(FORM_TYPES.AUTH);
    }
  }

  return (
    <Modal className="auth-modal"
           show={isModalOpen}
           onHide={onHideHandler}
           centered>
      {
        activeForm === FORM_TYPES.AUTH ?
          <AuthFormContainer />
          :
          <RegFormContainer />
      }

      <p className="form-type-toggle">
        {
          activeForm === FORM_TYPES.AUTH ?
            <>
              Not registered yet? <a href="#" className="link" onClick={toggleActiveForm}>Sign up</a>
            </>
            :
            <>
              Already have an account? <a href="#" className="link" onClick={toggleActiveForm}>Sign in</a>
            </>
        }
      </p>
    </Modal>
  );
}

export default memo(AuthRegModal);
