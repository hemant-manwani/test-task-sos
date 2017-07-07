import * as React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import NextButton from '../../../components/NextButton';
import BackButton from '../../../components/BackButton';
import Select from '../../../components/Select';
import SelectGender from '../../../components/SelectGender';
import DateOfBirth from '../../../components/DateOfBirth';
import { isValidAge } from '../../../utils/validations';

const style = require('./signupStep2.css');
const progressbarImage = require('../assets/images/progress-bar.png');

const hearAboutUsArray = [
  'Web',
  'News',
  'Friends',
];

const validate = (values) => {
  const errors = {};

  if (!values.date_of_birth) {
    errors.date_of_birth = 'DATE OF BIRTH REQUIRED';
  }

  if (values.date_of_birth && !isValidAge(values.date_of_birth)) {
    errors.date_of_birth = 'AGE SHOULD BE GREATER THAN 18';
  }

  if (!values.gender) {
    errors.gender = 'REQUIRED';
  }

  return errors;
};

const SignupStep2 = props => (
  <div className={style.customContainer}>
    <div className={style.wrapper}>
      <div className="heading">
        <h5 className={style.signUp}>Sign Up</h5>
      </div>
      <div className="bar">
        <img className={style.barImage} alt={'Progress bar'} src={progressbarImage} />
      </div>
      <form className={style.formStyle} onSubmit={props.handleSubmit(props.onSubmitForm)}>
        <Field
          name="date_of_birth"
          component={DateOfBirth}
        />
        <div className="gender wow bounceInRight animated animated">
          <h5 className={`${style.customLabel} ${style.center}`}>GENDER</h5>
          <Field
            name="gender"
            component={SelectGender}
          />
        </div>
        <div className="selectBox wow bounceInLeft animated animated">
          <h5 className={`${style.customLabel} ${style.center}`}>WHERE DO YOU HEAR ABOUT US?</h5>
          <Field
            name="how_hear_about_us"
            component={Select}
            options={hearAboutUsArray}
            title={''}
            selectClass={style.selectStyle}
            containerClass={style.customSelect}
          />
        </div>
        <hr className={style.borderBottom} />
        <BackButton onClick={props.goToPreviousStep} title={'Back'} />
        <NextButton disabled={!props.valid} title={'Next'} />
      </form>
    </div>
  </div>
);

SignupStep2.propTypes = {
  valid: PropTypes.bool.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  goToPreviousStep: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'Signup Step 2',
  validate,
})(SignupStep2);
