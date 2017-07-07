import * as React from 'react';
import PropTypes from 'prop-types';

const progresBarImage = require('../assets/images/thankyou-bar.png');
const checkMarkImage = require('../assets/images/thankyou-image.png');
const style = require('./signupStep3.css');

const SignupStep3 = ({ dashboardButtonTapped }) => (
  <div className="container">
    <div className={style.wrapper}>
      <div className="heading">
        <h5 className={style.signUp}>Sign Up</h5>
      </div>
      <div className="bar">
        <img className={style.barImage} alt={'Progress bar'} src={progresBarImage} />
      </div>
      <div className={style.thankYou}>
        <img alt={'Check Mark'} className={style.thankyouImg} src={checkMarkImage} />
      </div>
      <div className={style.goBtn}>
        <button className={style.dashboardBtn} onClick={dashboardButtonTapped}>
          Go to Dashboard
          <i className={`fa fa-arrow-right ${style.arrowRight}`} aria-hidden="true" />
        </button>
      </div>
    </div>
  </div>
);

SignupStep3.propTypes = {
  dashboardButtonTapped: PropTypes.func.isRequired,
};

export default SignupStep3;
