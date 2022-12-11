import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage}) => {
   console.log ('positivePercentage', positivePercentage)
return (
    <ul className={css.statisticsList} >
       <li>Good: <span>{good}</span></li>
       <li>Neutral: <span>{neutral}</span></li>
       <li>Bad: <span>{bad}</span></li>
       <li>Total: <span>{total}</span>:</li>
       <li>Positive Feedback: <span>{positivePercentage}%</span></li>    
    </ul>
 );
};

Statistics.propTypes = {
   
   good: PropTypes.number.isRequired,
   neutral: PropTypes.number.isRequired,
   bad: PropTypes.number.isRequired,
   total: PropTypes.number.isRequired,
   positivePercentage: PropTypes.number.isRequired,

 };
