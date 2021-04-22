import React, { Component } from 'react';
import './ItemAddForm.css';

class ItemAddForm extends Component {

  render() {
    const { onItemAdded } = this.props;
    
    return (
      <div className='item-add-form'>
        <button className='btn btn-outline-secondary'
          onClick={() => onItemAdded('item added')}>
          Add Item</button>
      </div>
    );
  }
}

export default ItemAddForm;