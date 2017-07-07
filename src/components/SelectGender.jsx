import * as React from 'react';
import PropTypes from 'prop-types';

const style = require('./selectGender.css');

const genderArray = ['male', 'female', 'unspecified'];

const SelectGender = ({ input: { value, onChange }, meta: { touched, error } }) => (
  <div className={'listColumn'}>
    <ul className={`nav nav-tabs ${style.blocks}`}>
      {
        genderArray.map(gender => (
          <li key={gender} className={style.innerBlock}>
            <button
              type={'button'}
              className={`${value === gender ? style.activeButton : ''} ${style.fields}`}
              onClick={() => onChange(gender)}
            >
              {gender.toUpperCase()}
            </button>
          </li>
        ))
      }
      {touched && (error && <span>{error}</span>)}
    </ul>
  </div>
);

SelectGender.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

export default SelectGender;
