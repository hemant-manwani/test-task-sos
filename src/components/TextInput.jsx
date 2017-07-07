import * as React from 'react';
import PropTypes from 'prop-types';

const style = require('./textInput.css');

const TextInput = ({ input, meta: { touched, error }, label, type }) => (
  <div className={`form-group ${style.inputField}`}>
    <label htmlFor={'form-group'} className={touched && error ? style.error : style.customLabel}>
      { touched && error ? error : label}
    </label>
    <input
      type={type}
      {...input}
      className={`form-control ${style.formControl}`}
    />
  </div>
);

TextInput.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default TextInput;
