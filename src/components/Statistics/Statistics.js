import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  // console.log(statistic);
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>Upload stats</h2>}

      <ul className={s.statList}>
        {stats.map(el => {
          const { id, label, percentage } = el;
          return (
            <li className={s.item} key={id}>
              <span className={s.label}> {label}</span>
              <span className={s.percentage}>{percentage}%</span>
            </li>
          );
        })}
        {/* <li className={s.item}>
          <span className={s.label}>.mp3</span>
          <span className={s.percentage}>14%</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>.pdf</span>
          <span className={s.percentage}>41%</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>.mp4</span>
          <span className={s.percentage}>12%</span>
        </li> */}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.defaultProps = {
  title: 'string',
};

Statistics.propTipes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
