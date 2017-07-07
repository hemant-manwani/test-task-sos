import * as React from 'react';
import PropTypes from 'prop-types';

const style = require('./nextButton.css');

const NextButton = props => (
  <div>
    <button
      className={`${style.nextBtn} pull-right`}
      disabled={props.disabled}
      type={'submit'}
    >
      {props.title}
      <i className={`fa fa-arrow-right ${style.arrowRight}`} aria-hidden={'true'} />
    </button>
  </div>
);

NextButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default NextButton;
