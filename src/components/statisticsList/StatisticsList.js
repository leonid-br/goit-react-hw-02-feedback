import PropTypes from 'prop-types';
import {
    item,
    title,
    good,
    bad,
} from './StatisticsList.module.css';

const StatisticsList = ({
    statTarget,
    keysArr,
    totalReviews,
    positive,
}) => {
    return (
        <div>
            <ul>
                {keysArr.map(key => (
                    <li key={key} className={item}>
                        <span className={title}>{key}:</span>
                        <span>{statTarget[key]}</span>
                    </li>
                ))}
                <li className={item}>
                    <span className={title}>Total:</span>
                    <span>{totalReviews}</span>
                </li>
                <li className={item}>
                    <span className={title}>
                        Positive percentage:
                    </span>
                    {positive > 50 ? (
                        <span className={good}>{positive}%</span>
                    ) : (
                        <span className={bad}>{positive}%</span>
                    )}
                </li>
            </ul>
        </div>
    );
};

StatisticsList.propTypes = {
    statTarget: PropTypes.object.isRequired,
    keysArr: PropTypes.array.isRequired,
    totalReviews: PropTypes.number.isRequired,
    positive: PropTypes.number.isRequired,
};

export default StatisticsList;
