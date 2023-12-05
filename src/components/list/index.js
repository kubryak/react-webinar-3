import React from "react";
import PropTypes from 'prop-types';
import Item from "../item";
import CartItem from "../cartItem";
import './style.css';

function List({ list, onAddItem, onDeleteItem }) {
  return (
    <div className='List'>{
      list.map(item =>
        <div key={item.code} className='List-item'>
          {item.count ? <CartItem item={item} onDelete={onDeleteItem} /> : <Item item={item} onAdd={onAddItem} />}
        </div>
      )}
    </div>
  )
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  onAddItem: PropTypes.func,
  onDeleteItem: PropTypes.func,
};

List.defaultProps = {
  onAddItem: () => {
  },
  onDeleteItem: () => {
  },
}

export default React.memo(List);
