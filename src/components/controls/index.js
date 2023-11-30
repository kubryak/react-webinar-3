import React from "react";
import PropTypes from 'prop-types';
import './style.css';

function Controls({ setIsOpened }) {


  return (
    <div className='Controls'>
      <div className="Controls-info">В корзине: <span className="Controls-span">пусто</span> </div>
      <button className="Controls-button" onClick={() => setIsOpened(true)}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  onAdd: PropTypes.func
};

Controls.defaultProps = {
  onAdd: () => { }
}

export default React.memo(Controls);
