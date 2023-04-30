import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';


const FeedbackOptions = ({options, onLeaveFeedback}) => {
   return (<ul className={css["option-list"]}>
       {options.map(option => {
                return (<li key={option}><button type="button" className={css.button} onClick={() => onLeaveFeedback(option)}>{option}</button></li>)
            })}
        </ul> )
};


export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };