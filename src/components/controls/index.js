import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import { plural } from "../../utils";


function Controls({ setIsOpened, amount, count }) {
  return (
    <div className='Controls'>
      <div className="Controls-info">В корзине:
        <span className="Controls-span">
          {count === 0 ? 'пусто' : ` ${count} ${plural(count, { one: 'товар', few: 'товара', many: 'товаров' })} / ${amount.toLocaleString('ru-RU')} ₽`}
        </span>
      </div>
      <button className="Controls-button" onClick={() => setIsOpened(true)}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  setIsOpened: PropTypes.func,
  amount: PropTypes.number,
  count: PropTypes.number,
};

Controls.defaultProps = {
  setIsOpened: () => { }
}

export default React.memo(Controls);
