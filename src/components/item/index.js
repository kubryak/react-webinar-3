import React, { useState } from "react";
import PropTypes from "prop-types";
import './style.css';

function Item(props) {
  return (
    <div className='Item'>
      <div className='Item-code'>{props.item.code}</div>
      <div className='Item-title'>
        {props.item.title}
      </div>
      <div className="Item-info">
        <div className="Item-info-price">{props.item.price.toLocaleString('ru-RU')} ₽</div>
      </div>
      <div className='Item-actions'>
        <button onClick={() => props.onAdd(props.item)}>
          Добавить
        </button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    count: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
  onAdd: PropTypes.func,
};

Item.defaultProps = {
  onAdd: () => {
  },
}

export default React.memo(Item);
