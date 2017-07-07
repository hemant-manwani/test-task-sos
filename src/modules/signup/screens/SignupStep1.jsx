import * as React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../../components/TextInput';
import NextButton from '../../../components/NextButton';
import { isValidEmail } from '../../../utils/validations';

const progressBar = require('../assets/images/bar.png');
const style = require('./signupStep1.css');

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'EMAIL IS REQUIRED';
  } else if (!isValidEmail(values.email)) {
    errors.email = 'INVALID EMAIL';
  }
  if (!values.password) {
    errors.password = 'PASSWORD IS REQUIRED';
  } else if (values.password.length < 6) {
    errors.password = 'MUST BE 6 CHARACTERS OR MORE';
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = 'CONFIRM PASSWORD REQUIRED';
  }
  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'PASSWORD & CONFIRM PASSWORD DOES NOT MATCH';
  }
  return errors;
};

const SignupStep1 = props => (
  <div className={style.customContainer}>
    <div className={`${style.wrapper} ${style.wrapperScreen}`}>
      <div className="heading">
        <h5 className={style.signUp}>Sign Up</h5>
      </div>
      <div className="bar">
        <img className={style.barImage} alt={'Progess Bar'} src={progressBar} />
      </div>
      <form className={style.formStyle} onSubmit={props.handleSubmit(props.onSubmitForm)}>
        <Field name="email" component={TextInput} label={'EMAIL'} type={'email'} />
        <Field name="password" component={TextInput} label={'PASSWORD'} type={'password'} />
        <Field name="confirmPassword" component={TextInput} label={'CONFIRM PASSWORD'} type={'password'} />
        <hr className={style.borderBottom} />
        <NextButton disabled={!props.valid} title={'Next'} />
      </form>
    </div>
  </div>
);

SignupStep1.propTypes = {
  valid: PropTypes.bool.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'Signup Step 1',
  validate,
})(SignupStep1);
