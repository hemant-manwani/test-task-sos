import * as React from 'react';
import PropTypes from 'prop-types';

const Select = ({ input, options, title, containerClass, selectClass }) => (
  <div className={containerClass}>
    <select {...input} className={selectClass}>
      <option>{title}</option>
      {(options || []).map(option => <option value={option} key={option}>{option}</option>)}
    </select>
  </div>
);

Select.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  containerClass: PropTypes.string.isRequired,
  selectClass: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
};

export default Select;
