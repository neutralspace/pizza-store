import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { EMPTY_CART } from '@helpers';
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
  private modalTimeoutId: number;

  constructor(props: AbstractFormProps) {
    super(props);

    this.state = {
      showSuccessModal: false,
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
    
    this.handleSuccesfulCheckout();
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

  handleSuccesfulCheckout(): void {
    const { updateCart } = this.props;

    updateCart(EMPTY_CART);
    this.showSuccessModal();
  }

  showSuccessModal(): void {
    this.setState({
      showSuccessModal: true,
    }, () => {
      this.modalTimeoutId = window.setTimeout(() => {
        this.setState({
          showSuccessModal: false,
        })
      }, 2000)
    });
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

  componentWillInmount():void {
    if (this.modalTimeoutId) {
      window.clearTimeout(this.modalTimeoutId);
    }
  }

  render(): JSX.Element {
    const { user, cart } = this.props;
    const { showSuccessModal, fields } = this.state;
    const fieldsKeys = Object.keys(fields);
    const isUserAuthorized = user?.id;
    const hasItemsInCart = Boolean(Object.keys(cart?.items || {})?.length);

    if (!hasItemsInCart) return (
      <>
        <Title size={TITLE_SIZES.MD}>
          No items in cart
        </Title>

        <Modal className="form-info-modal"
               show={showSuccessModal}
               centered>
          <Title size={TITLE_SIZES.SM}>
            Thank you for your order!
          </Title>
        </Modal>
      </>
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
