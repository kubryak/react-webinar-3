import React from "react";
import Head from "../head";
import PropTypes from 'prop-types';
import './style.css';
import List from "../list";

function Popup({ isOpened, setIsOpened, onDeleteItem, cartList, totalAmount }) {

  const handleClosePopup = () => {
    setIsOpened(false);
  }

  return (
    <div className={`Popup ${isOpened ? 'Popup_active' : ''} `}>
      <div className="Popup-content">
        <Head title='Корзина'>
          <button className="Popup-content-button" onClick={() => handleClosePopup()}>Закрыть</button>
        </Head>
        <div className="Popup-content-list">
          {cartList.length === 0 ? (
            <p className="Popup-content-text-empty">В корзине сейчас пусто</p>
          ) : (
            <>
              <List onDeleteItem={onDeleteItem} list={cartList} isOpened={isOpened} />
              <div className="Popup-content-info">
                <div className="Popup-content-info-text">Итого</div>
                <div className="Popup-content-info-amount">{totalAmount} ₽</div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

Popup.propTypes = {
  isOpened: PropTypes.bool,
  setIsOpened: PropTypes.func,
  onDeleteItem: PropTypes.func,
  cartList: PropTypes.array,
  totalAmount: PropTypes.number,
};

Popup.defaultProps = {
  setIsOpened: () => {
  },
  onDeleteItem: () => {
  },
}

export default React.memo(Popup);
