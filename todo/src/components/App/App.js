import React, { Component } from 'react';

import './App.css';

import TodoList from '../TodoList';
import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter';
import ItemAddForm from '../ItemAddForm';

class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch')
    ],

    searchText: '',
    status: 'all'
    
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    };
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(item => item.id === id);
      const newArr = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ];
      // OR const newArr = todoData.filter(item => item.id !== id);
      return {
        todoData: newArr
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    // add item
    this.setState(({ todoData }) => {
      const newArr = [
        ...todoData,
        newItem
      ];
      return {
        todoData: newArr
      };
    });
  };

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex(item => item.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];    
  };

  toggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  };

  toggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  };

  setSearchFilter = (text) => {
    this.setState({
      searchText: text      
    });    
  };

  setStatusFilter = (status) => {
    this.setState({
      status: status    
    });
  };

  render() {
    const { todoData, searchText, status } = this.state;
    const doneCount = todoData.filter((item) => item.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel searchFilter={this.setSearchFilter} />
          <ItemStatusFilter statusFilter={this.setStatusFilter} status={status} />
        </div>

        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.toggleImportant}
          onToggleDone={this.toggleDone}

          searchText={searchText}
          statusFilter={status}
        />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  };
};

export default App;