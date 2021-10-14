import React from 'react';
import { Field } from 'react-final-form';

import './FormFieldRadio.scss';


// Radio Input
const FormFieldRadio = (props) => {
  const {
    serverErrors,
    setServerErrors,
    name,
    value,
    text = '',
    isReadOnly = false,
    labelClassName,
    inputClassName,
    indicatorClassName,
    textClassName,
  } = props;

  const hideServerErrorOnChange = (e, input) => {
    input.onChange(e);

    serverErrors[name] && setServerErrors(name, undefined);
  };

  const isErrorExist = (meta) => {
    if (meta.error && meta.touched && !meta.active) { // Validation Error
      return true;
    }
    else if (!meta.error && serverErrors[name]) { // Server Error
      return true;
    }

    return false;
  }

  const getErrorText = (meta) => {
    if (meta.error && meta.touched && !meta.active) { // Validation Error
      return meta.error;
    }
    else if (serverErrors[name]) { // Server Error
      const serverError = serverErrors[name];

      return serverError[0];
    }

    return '';
  }

  return (
    <Field
      name={name}
      type='radio'
      value={value}
    >
      {({ input, meta }) => (
        <label className={labelClassName}>
          <input
            {...input}
            readOnly={isReadOnly}
            className={inputClassName}
            autoComplete='off'
            onChange={(e) => hideServerErrorOnChange(e, input)}
            hidden
          />

          <div className={indicatorClassName} />

          {!!text &&
            <span className={textClassName}>{text}</span>
          }

          {isErrorExist(meta) && (
            <div className={'form__error-wrap'}>
              <span className={'form__error-text'}>{getErrorText(meta)}</span>
            </div>
          )}
        </label>
      )}
    </Field>
  )
}

export default FormFieldRadio;