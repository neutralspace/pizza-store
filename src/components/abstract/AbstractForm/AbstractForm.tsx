import React from 'react';
import { PriceType } from '@reducers/session-reducer';
import './AbstractForm.scss';

export interface AbstractFormProps {
  id: number;
  name: string;
  img: string,
  price: PriceType;
  updateCartHandler: Function;
}

/**
 * Abstract class for single pizza item.
 *
 * @returns {JSX} - pizza component.
 */
abstract class AbstractForm<P extends AbstractFormProps> extends React.PureComponent<P, undefined> {
  protected fieldsValidationRules: { [key: string]: Function };

  constructor(props: AbstractFormProps) {
    super(props);

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.sendForm = this.sendForm.bind(this);
  }

  abstract sendForm(): void;

  handleValueChange(e: React.SyntheticEvent<HTMLInputElement>): void {
    const valueKey = e.currentTarget?.name;
    const { [valueKey]: field } = this.state.fields;
    const newValue = e.currentTarget?.value;
    const prevValue = field.value;

    if (newValue !== prevValue) {
      this.setState({
        fields: {
          ...this.state.fields,
          [valueKey]: {
            ...field,
            value: newValue,
            errorText: '',
          }
        }
      });
    }
  }

  handleSubmit(e: React.SyntheticEvent): void {
    e.preventDefault();
    this.validateForm(this.sendForm);
  }

  validateForm(onSuccessCallback?: Function): void {
    const { fields } = this.state;
    const validatedFields = {};
    let hasErrors = false;

    for (const key in fields) {
      const validationRule = this.fieldsValidationRules[key];

      if (validationRule) {
        const errorText = validationRule(fields[key].value);
        console.log(key, fields[key].value, fields[key].defaultValue);

        validatedFields[key] = {
          ...fields[key],
          errorText,
        };

        if (!hasErrors) {
          hasErrors = Boolean(errorText);
        }
      }
    }

    const updatedFields = {
      fields: {
        ...fields,
        ...validatedFields,
      }
    };

    this.setState({
      fields: {
        ...fields,
        ...validatedFields,
      }
    });

    if (!hasErrors && onSuccessCallback) {
      onSuccessCallback();
    }
  }
}

export default AbstractForm;
