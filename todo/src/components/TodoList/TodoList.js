import React, { Component } from 'react';
import TodoListItem from '../TodoListItem';
import './TodoList.css';

class TodoList extends Component {

  render() {

    const { todos, onDeleted, onToggleImportant, onToggleDone, searchText, statusFilter } = this.props;    

    const filteredItems = todos.filter(item => {
      const label = item.label.toLowerCase();
      const text = searchText.toLowerCase();
      const hasText = label.includes(text);

      switch (statusFilter) {
        case 'active':
          return !item.done && hasText;            
        case 'done':
          return item.done && hasText;
        default:
          return hasText;
      }      
    });

    const elements = filteredItems.map(item => {

      const { id, ...itemProps } = item;

      return (
        <li key={id} className='list-group-item'>
          <TodoListItem
            {...itemProps}
            onDeleted={() => onDeleted(id)}
            onToggleImportant={() => onToggleImportant(id)}
            onToggleDone={() => onToggleDone(id)} />
        </li>
      );
    });    

    return (
      <ul className='list-group todo-list'>
        {elements}
      </ul>
    );
  }

};

export default TodoList;