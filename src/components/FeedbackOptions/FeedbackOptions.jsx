import css from './FeedbackOptions.module.css';

import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = props => {
  const { options, onLeaveFeedback } = props;
  return (
    <div className={css.buttonsWrap}>
      {options.map((el, index) => {
        return (
          <button
            key={index}
            type="button"
            className={css.button}
            name={el}
            onClick={onLeaveFeedback}
          >
            {el}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
