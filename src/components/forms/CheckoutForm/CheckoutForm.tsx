import React from 'react';
import Button from '@components/common/Button/Button';
import Input from '@components/common/Input/Input';
import AbstractForm, { AbstractFormProps } from '@components/abstract/AbstractForm/AbstractForm';
import Validator from '@utils/validator/validator';
import Title, { TITLE_SIZES } from '@components/common/Title/Title';

/**
 * Class checkout form.
 *
 * @returns {JSX} - form component.
 */
class CheckoutForm extends AbstractForm<AbstractFormProps> {
  private isUserDataApplied: boolean = false;

  constructor(props: AbstractFormProps) {
    super(props);

    this.state = {
      fields: {
        name: {
          label: 'Name:',
          errorText: '',
        },
        surname: {
          label: 'Surname:',
          errorText: '',
        },
        address: {
          label: 'Address:',
          type: 'text',
          errorText: '',
        },
        email: {
          label: 'E-mail:',
          errorText: '',
        },
      }
    };
    this.fieldsValidationRules = {
      name: Validator.getNameError,
      surname: Validator.getSurnameError,
      email: Validator.getEmailError,
      address: Validator.getAddressError,
    }
  }

  sendForm(): void {
    const { user, cart, addToOrderHistory } = this.props;
    const userId = user?.id;

    if (userId) {
      addToOrderHistory(userId, cart);
    }
  }

  applyUserData(): void {
    const { user } = this.props;
    const userId = user?.id;

    if (userId) {
      const { name, surname, email } = this.state.fields;

      this.isUserDataApplied = true;
      this.setState({
        fields: {
          ...this.state.fields,
          name: {
            ...name,
            value: name.value || user.name,
          },
          surname: {
            ...surname,
            value: surname.value || user.surname,
          },
          email: {
            ...email,
            value: email.value || user.email,
          }
        }
      });
    }
  }

  componentDidUpdate(): void {
    if (!this.isUserDataApplied) {
      this.applyUserData();
    }
  }

  componentDidMount(): void {
    if (!this.isUserDataApplied) {
      this.applyUserData();
    }
  }

  render(): JSX.Element {
    const { user, cart } = this.props;
    const { fields } = this.state;
    const fieldsKeys = Object.keys(fields);
    const isUserAuthorized = user?.id;
    const hasItemsInCart = Boolean(cart.items?.length);

    if (!hasItemsInCart) return (
      <Title size={TITLE_SIZES.MD}>
        No items in cart
      </Title>
    );

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        {
          fieldsKeys.map((key) => {
            const fieldProps = fields[key];
            const defaultValue = isUserAuthorized ? user[key] : '';

            return (
              <Input name={key}
                     key={key}
                     { ...fieldProps}
                     defaultValue={defaultValue}
                     onChange={this.handleValueChange} />
            )
          })
        }

        <Button type="submit">Checkout</Button>
      </form>
    );
  }
}

export default CheckoutForm;
