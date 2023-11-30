import React, { useState } from "react";
import PropTypes from "prop-types";
import './style.css';

function Item(props) {

  const callbacks = {
    // onClick: () => {
    //   props.onSelect(props.item.code);
    //   if (!props.item.selected) {
    //     setCount(count + 1);
    //   }
    // },
    // onAdd: (e) => {
    //   e.stopPropagation();
    //   props.onAdd(props.item.code);

    // }
  }
  console.log(props.item.count)
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
  }).isRequired,
  onAdd: PropTypes.func,
};

Item.defaultProps = {
  onAdd: () => {
  },
}

export default React.memo(Item);
