import PropTypes from 'prop-types';
import StatListItem from '../StatListItem';
// import {
//     item,
//     title,
//     goodStat,
//     badStat,
// } from './StatisticsList.module.css';

const StatisticsList = ({
    good,
    bad,
    neutral,
    totalReviews,
    positive,
}) => {
    return (
        <div>
            <ul>
                <StatListItem label={'Good'} value={good} />
                <StatListItem label={'Bad'} value={bad} />
                <StatListItem
                    label={'Neutral'}
                    value={neutral}
                />

                <StatListItem
                    label={'Total'}
                    value={totalReviews}
                />

                <StatListItem
                    label={' Positive percentage'}
                    value={`${positive}%`}
                />
                {/* 
                <li className={item}>
                    <span className={title}>
                        Positive percentage:
                    </span>
                    {positive > 50 ? (
                        <span className={goodStat}>
                            {positive}%
                        </span>
                    ) : (
                        <span className={badStat}>
                            {positive}%
                        </span>
                    )}
                </li> */}
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
