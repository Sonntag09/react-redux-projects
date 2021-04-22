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
    ]
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
      // const newArr = todoData.filter(item => item.id !== id);
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

  toggleImportant = (id) => {
    console.log('Toggle Important', id);
  };

  toggleDone = (id) => {
    this.setState(({ todoData }) => {

    });
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={this.state.todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.toggleImportant}
          onToggleDone={this.toggleDone} 
        />
        <ItemAddForm onItemAdded={this.addItem}/>
      </div>
    );
  };
};

export default App;