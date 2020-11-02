import React from 'react';
import Button from '@components/common/Button/Button';
import Input from '@components/common/Input/Input';
import AbstractForm, { AbstractFormProps } from '@components/abstract/AbstractForm/AbstractForm';
import Validator from '@utils/validator/validator';

/**
 * Class authorization form.
 *
 * @returns {JSX} - form component.
 */
class AuthForm extends AbstractForm<AbstractFormProps> {
  constructor(props: AbstractFormProps) {
    super(props);

    this.state = {
      fields: {
        email: {
          label: 'E-mail:',
          value: '',
          errorText: '',
        },
        password: {
          label: 'Password:',
          value: '',
          type: 'password',
          errorText: '',
        }
      }
    };
    this.fieldsValidationRules = {
      email: Validator.getEmailError,
      password: Validator.getAuthPasswordError,
    }

    this.sendForm = this.sendForm.bind(this);
  }

  sendForm(): void {
    const { authorizeUser } = this.props;
    const { fields: { email, password } } = this.state;
    const emailValue = email.value?.toLowerCase();

    authorizeUser(emailValue, password.value);
  }

  render(): JSX.Element {
    const { formState } = this.props;
    const { fields } = this.state;
    const fieldsKeys = Object.keys(fields);

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        {
          fieldsKeys.map((key) => {
            const fieldProps = fields[key];

            return (
              <Input name={key}
                     key={key}
                     { ...fieldProps}
                     onChange={this.handleValueChange} />
            )
          })
        }

        {
          Boolean(formState?.error)
          &&
          <p className="form-error">
            {formState.error}
          </p>
        }

        <Button type="submit">Submit</Button>
      </form>
    );
  }
}

export default AuthForm;
