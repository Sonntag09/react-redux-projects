import React, { Component } from 'react';
import './SearchPanel.css';

class SearchPanel extends Component {  

  render() {

    const { searchFilter } = this.props;

    return (
      <input type='text'
        className='form-control search-input'
        placeholder='type to search'
        onChange={(e) => searchFilter(e.target.value)} />
    );
  };

};

export default SearchPanel;