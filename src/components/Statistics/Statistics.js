import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({options, total, positivePercentage}) => {
    
      return (<ul>
        <div className={css["feedback-list"]}>
        {Object.keys(options).map(name => {
        return (<li key={name}>{name}: {options[name]}</li>)
      })} 
        </div>
      <li className={css.option}>Total: {total}</li>
      <li className={css.option}>Positive feedback: {positivePercentage}</li>
       </ul>)
}

export default Statistics;

Statistics.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,

}