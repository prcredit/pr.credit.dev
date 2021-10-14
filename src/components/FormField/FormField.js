import React from 'react';
import { Field } from 'react-final-form';

import './FormField.scss';


// Input or Textarea
const FormField = (props) => {
  const {
    serverErrors,
    setServerErrors,
    name,
    placeholderText = '',
    type = 'text',
    isReadOnly = false,
    labelClassName,
    inputClassName,
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
    <Field name={name}>
      {({ input, meta }) => (
        <label className={labelClassName}>
          {type === 'textarea'
            ? (
              <textarea
                {...input}
                readOnly={isReadOnly}
                placeholder={placeholderText}
                className={inputClassName}
                autoComplete='off'
                onChange={(e) => hideServerErrorOnChange(e, input)}
              />
            )
            : (
              <input
                {...input}
                readOnly={isReadOnly}
                placeholder={placeholderText}
                className={inputClassName}
                autoComplete='off'
                onChange={(e) => hideServerErrorOnChange(e, input)}
                type={type}
              />
            )
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

export default FormField;