import PropTypes from 'prop-types';

const StatisticsList = ({ statTarget, keysArr, totalReviews, positive }) => {
  return (
    <div>
      <ul>
        {keysArr.map(key => (
          <li key={key}>
            <span>{key}</span>
            <span>{statTarget[key]}</span>
          </li>
        ))}
        <li>Total:{totalReviews} </li>
        <li>Positive percentage:{positive}% </li>
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
