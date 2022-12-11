import PropTypes from 'prop-types';


export const FeedbackOptions = ({ options, onLeaveFeedback}) => {
    
    return options.map(feedback => (
        
    <button
        key={feedback}
       
        
        type="button"
        onClick={ () => onLeaveFeedback(feedback)}>
            {feedback}
    </button>

    )); 
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}