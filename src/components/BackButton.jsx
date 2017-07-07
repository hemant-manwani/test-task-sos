import * as React from 'react';
import PropTypes from 'prop-types';

const style = require('./backButton.css');

const BackButton = props => (
  <div className={'pull-left'}>
    <button
      className={style.backButton}
      type={'button'}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  </div>
);

BackButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BackButton;
