import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      {options.map(el => {
        return (
          <button
            className={css.feedback_btn}
            key={el}
            type="button"
            onClick={() => onLeaveFeedback(`${el}`)}
          >
            {el}
          </button>
        );
      })}
    </>
  );
};

FeedbackOptions.protoType = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};
