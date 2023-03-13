import Add from './Components/Add';
import Tasks from './Components/Tasks';
import './App.css';

import React, { Component } from 'react'
import arr from 'jshint/data/non-ascii-identifier-start';

export default class App extends Component {
  state = 
  {
    toAdd: '', 
    arr: [],
    i:0
  }

  async componentDidMount()
  {
    if(localStorage.getItem("tasks"))
    {
      console.log(JSON.parse(localStorage.getItem('tasks')));
      await this.setState({arr: JSON.parse(localStorage.getItem("tasks"))});
      await this.setState({i: arr.length});
    }
  }
  
  change = (event) =>
  {
    this.setState({toAdd: event.currentTarget.value});
    console.log(this.state.arr);
  }

  crossout = async(element) =>
  {
    const arr = [...this.state.arr];
    let index = arr.indexOf(element);
    arr[index].checked = !arr[index].checked;
    await this.setState({arr});
    localStorage.setItem('tasks', JSON.stringify(this.state.arr));
  }

  add = async(priority) =>
  {
    console.log(priority);
    if (this.state.toAdd.length > 0)
    {
      let arr = [...this.state.arr];
      arr.push({id: this.state.i, task:this.state.toAdd, checked: false, priority});
      await this.setState({arr});
      await this.setState({i: this.state.i + 1});
      console.log(this.state.arr);
      localStorage.setItem('tasks', JSON.stringify(this.state.arr));
      await this.setState({toAdd: ''});
    }
  }
  
  delete = async(element) =>
  {
    const arr = [...this.state.arr];
    let index = arr.indexOf(element);
    arr.splice(index, 1);
    await this.setState({arr});
    localStorage.setItem('tasks', JSON.stringify(this.state.arr));
  }

  render() {
    return (
      <div>
        <div>
          <h1 className = "text-3xl font-thin text-center py-10">To Do List</h1>
          <Add add = {this.add} toAdd = {this.state.toAdd} setAdd = {this.change}/>
          <Tasks delete = {this.delete} crossOut = {this.crossout} arr = {this.state.arr}/>
        </div>
      </div>
    )
  }
}