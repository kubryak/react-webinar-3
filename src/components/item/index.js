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
        <div className="Item-info-price">{props.item.price} ₽</div>
        {props.item.count ? (
          <div className="Item-info-count">{props.item.count} шт</div>
        ) : ''}
      </div>
      <div className='Item-actions'>
        <button onClick={() => { props.isOpened ? props.onDelete(props.item.code) : props.onAdd(props.item) }}>
          {props.isOpened ? 'Удалить' : 'Добавить'}
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
  onDelete: PropTypes.func,
  isOpened: PropTypes.bool,
};

Item.defaultProps = {
  onAdd: () => {
  },
  onDelete: () => {
  },
}

export default React.memo(Item);
