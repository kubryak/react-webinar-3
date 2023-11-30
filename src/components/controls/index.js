import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import { plural } from "../../utils";


function Controls({ setIsOpened, totalAmount, cartList }) {
  return (
    <div className='Controls'>
      <div className="Controls-info">В корзине:
        <span className="Controls-span">
          {cartList.length === 0 ? 'пусто' : ` ${cartList.length} ${plural(cartList.length, { one: 'товар', few: 'товара', many: 'товаров' })} / ${totalAmount} ₽`}
        </span>
      </div>
      <button className="Controls-button" onClick={() => setIsOpened(true)}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  setIsOpened: PropTypes.func,
  totalAmount: PropTypes.number,
  cartList: PropTypes.array,
};

Controls.defaultProps = {
  setIsOpened: () => { }
}

export default React.memo(Controls);
