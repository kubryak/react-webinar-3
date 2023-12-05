import React from "react";
import PropTypes from "prop-types";
import './style.css';

function CartItem(props) {
  return (
    <div className='Item'>
      <div className='Item-code'>{props.item.code}</div>
      <div className='Item-title'>
        {props.item.title}
      </div>
      <div className="Item-info">
        <div className="Item-info-price">{props.item.price.toLocaleString('ru-RU')} ₽</div>
        <div className="Item-info-count">{props.item.count} шт</div>
      </div>
      <div className='Item-actions'>
        <button onClick={() => props.onDelete(props.item.code)}>
          Удалить
        </button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    count: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
  onDelete: PropTypes.func,
};

CartItem.defaultProps = {
  onDelete: () => {
  },
}

export default React.memo(CartItem);