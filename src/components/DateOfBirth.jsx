import * as React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';
import { isValidDate } from '../utils/validations';

const style = require('./dateOfBirth.css');

const dateArray = Array.from({ length: 31 }, (v, k) => k + 1);
const monthArray = Array.from({ length: 12 }, (v, k) => k + 1);
const yearArray = Array.from({ length: 80 }, (v, k) => 2017 - k);

class DateOfBirth extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      date: undefined,
      month: undefined,
      year: undefined,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { input: { value } } = nextProps;

    if (isValidDate(value)) {
      this.setState({
        date: value.getDate(),
        month: value.getMonth() + 1,
        year: value.getFullYear(),
      });
    } else {
      this.setState({ error: 'Invalid Date' });
    }
  }

  onChange = (event, value) => {
    let date = this.state.date;
    let month = this.state.month;
    let year = this.state.year;

    if (event === 'date') {
      date = value;
    } else if (event === 'month') {
      month = value;
    } else if (event === 'year') {
      year = value;
    }

    const newDate = new Date(year, month - 1, date);

    if (isValidDate(newDate)) {
      this.props.input.onChange(newDate);
    }

    this.setState({
      date,
      month,
      year,
    });
  }

  render() {
    const { meta: { error } } = this.props;
    return (
      <div className={'date wow bounceInLeft animated animated'}>
        <h5 className={`${style.customLabel} ${style.center}`}>DATE OF BIRTH</h5>
        <div className={'listColumn'}>
          <ul className={`nav nav-tabs ${style.blocks}`}>
            <li className={`${style.innerBlock} ${style.dateBlock}`}>
              <Select
                options={dateArray}
                title={'DD'}
                input={{
                  value: this.state.date,
                  onChange: e => this.onChange('date', e.target.value),
                }}
                selectClass={`${style.customSelect} ${style.customDate}`}
                containerClass={style.dateSelect}
              />
            </li>
            <li className={`${style.innerBlock} ${style.dateBlock}`}>
              <Select
                options={monthArray}
                title={'MM'}
                input={{
                  value: this.state.month,
                  onChange: e => this.onChange('month', e.target.value),
                }}
                selectClass={`${style.customSelect} ${style.customDate}`}
                containerClass={style.dateSelect}
              />
            </li>
            <li className={`${style.innerBlock} ${style.dateBlock}`}>
              <Select
                options={yearArray}
                title={'YYYY'}
                input={{
                  value: this.state.year,
                  onChange: e => this.onChange('year', e.target.value),
                }}
                selectClass={`${style.customSelect} ${style.customDate}`}
                containerClass={style.dateSelect}
              />
            </li>
          </ul>
          {
            (this.state.date && this.state.month && this.state.year) &&
            (error && <label htmlFor={'label'} className={style.error}>{error}</label>)
          }
        </div>
      </div>
    );
  }
}

DateOfBirth.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

export default DateOfBirth;
