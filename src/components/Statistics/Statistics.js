import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.statistic}>
      <p className={css.stat_text}>Good: {good}</p>
      <p className={css.stat_text}>Neutral: {neutral}</p>
      <p className={css.stat_text}>Bad: {bad}</p>
      <p className={css.stat_text}>Total: {total}</p>
      <p className={css.stat_text}>Positive feedbacks: {positivePercentage}%</p>
    </div>
  );
};

Statistics.protoType = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};