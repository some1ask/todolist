import React from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid';
import {Component} from 'react';


class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: '',
    editItem: false
  }
  handleChange = e => {
    this.setState({
      item: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    }
    const updatedItems = [...this.state.items, newItem]
    this.setState({
      items: updatedItems,
      item: '',
      id: uuid(),
      editItem: false
    })
  }
  
  handleEdit = (id) => {
    const findedItems = this.state.items.filter(item =>
      item.id !== id)
    const selectedItem = this.state.items.find(item=>item.id === id)
    this.setState({
      items: findedItems,
      item:selectedItem.title,
      editItem:true,
      id:id
    })
  }
  clearList = e => {
    this.setState({
      items: []
    })
  }
  handleDelete = (id) => {
    const findedItems = this.state.items.filter(item =>
      item.id !== id)
    this.setState({
      items: findedItems
    })
  }
  
  render() {
    return ( 
      <div className = "container" >
        <div className = "row" >
          <div className = "col-10 mx-auto col-md-8 mt-4" >
          <h3 className = "text-capitalize text-center" > THE MOST AWESOME TODOLIST </h3>  
            <TodoInput item={this.state.item} 
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit}
            editItem={this.state.editItem}/>
            <TodoList items ={this.state.items}
            clearList={this.clearList} 
            handleDelete={this.handleDelete}
            handleEdit = {this.handleEdit}/>
          </div> 
        </div > 
      </div>
    )
  }
}

export default App;