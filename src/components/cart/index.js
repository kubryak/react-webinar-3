import React from 'react'
import './style.css'
import Popup from '../popup/index';
import List from '../list/index';
import PropTypes from 'prop-types';

function Cart({ isOpened, setIsOpened, onDeleteItem, cartList, title, count, amount }) {
  return (
    <Popup isOpened={isOpened} setIsOpened={setIsOpened} title={title}>
      <div className="Cart-content-list">
        {count === 0 ? (
          <p className="Cart-content-text-empty">В корзине сейчас пусто</p>
        ) : (
          <>
            <List onDeleteItem={onDeleteItem} list={cartList} isOpened={isOpened} />
            <div className="Cart-content-info">
              <div className="Cart-content-info-text">Итого</div>
              <div className="Cart-content-info-amount">{amount.toLocaleString('ru-RU')} ₽</div>
            </div>
          </>
        )}
      </div>
    </Popup>
  )
}

Cart.propTypes = {
  isOpened: PropTypes.bool,
  setIsOpened: PropTypes.func,
  onDeleteItem: PropTypes.func,
  cartList: PropTypes.array,
  title: PropTypes.string,
  count: PropTypes.number,
  amount: PropTypes.number,
};
Cart.defaultProps = {
  setIsOpened: () => { },
  onDeleteItem: () => { }
}
export default React.memo(Cart);