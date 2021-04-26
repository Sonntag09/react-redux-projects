import React, { Component } from 'react';

import './ItemStatusFilter.css';

class ItemStatusFilter extends Component {

  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' }
  ];  

  render() {

    const { status, statusFilter } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = (status === name);
      const btnClass = isActive ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button type="button"
          className={`btn ${btnClass}`}
          onClick={() => statusFilter(name)}
          key={name}>{label}</button>
      );
    });

    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  };
}

export default ItemStatusFilter;