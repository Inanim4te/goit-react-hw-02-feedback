import css from './Statistics.module.css';

import React from 'react';
import PropTypes from 'prop-types';

const Statistics = props => {
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <div>
      <ul className={css.list}>
        <li className={css.item}>
          <p>Good: {good}</p>
        </li>
        <li className={css.item}>
          <p>Neutral: {neutral}</p>
        </li>
        <li className={css.item}>
          <p>Bad: {bad}</p>
        </li>
        <li className={css.item}>
          <p>Total: {total}</p>
        </li>
        <li className={css.item}>
          <p>Positive feedback: {positivePercentage}%</p>
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
