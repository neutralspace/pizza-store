import React from 'react';
import Button from '@components/common/Button/Button';
import Input from '@components/common/Input/Input';
import AbstractForm, { AbstractFormProps } from '@components/abstract/AbstractForm/AbstractForm';
import Validator from '@utils/validator/validator';

/**
 * Class registration form.
 *
 * @returns {JSX} - form component.
 */
class RegForm extends AbstractForm<AbstractFormProps> {
  constructor(props: AbstractFormProps) {
    super(props);

    this.state = {
      fields: {
        name: {
          label: 'Name:',
          value: '',
          errorText: '',
        },
        surname: {
          label: 'Surname:',
          value: '',
          errorText: '',
        },
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
      name: Validator.getNameError,
      surname: Validator.getSurnameError,
      email: Validator.getEmailError,
      password: Validator.getRegistrationPasswordError,
    }
  }

  sendForm(): void {
    const { registerUser } = this.props;
    const { fields: { email, password, name, surname } } = this.state;

    registerUser(
      email.value,
      password.value,
      name.value,
      surname.value,
    );
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

export default RegForm;
