import PropTypes from 'prop-types';
// import style from './BtnList.module.css';

const BtnList = ({ keysArr, clickOnBtn }) => {
  return (
    <div>
      {keysArr.map(key => (
        <button key={key} type="button" onClick={clickOnBtn}>
          {key}
        </button>
      ))}
    </div>
  );
};

BtnList.propTypes = {
  keysArr: PropTypes.array.isRequired,
  clickOnBtn: PropTypes.func.isRequired,
};

export default BtnList;
