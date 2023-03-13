import React, { Component } from 'react'

export default class Add extends Component {
  state = {
    priority: 'Priority',
    visibility: 'invisible',
    round: ''
  }

  toggleDisplay = () =>
  {
    this.state.visibility.length ? this.setState({visibility: ''}) : this.setState({visibility: 'invisible'});
    this.state.round.length ? this.setState({round: ''}) : this.setState({round: '-t'});
  }

  setPriority = priority =>
  {
    this.toggleDisplay();
    this.setState({priority});
  }

  render() {
    return (
        <div className = "w-fit ml-auto mr-auto">
            <div className = "gridded justify-items-center">
              <div>
                <textarea onChange = {this.props.setAdd} name = "task" className = "bg-blue-200 px-2 py-1 block ml-auto mr-auto rounded-md focus:bg-blue-300 text-blue-800" type = "text"  rows = {1} cols ={25} value = {this.props.toAdd}/>
                <button onClick = {()=>{this.props.add(this.state.priority); this.setState({priority: 'Priority'});}} className = "block bg-blue-400 hover:bg-blue-500 active:bg-blue-400 px-2 py-1 w-fit ml-auto mr-auto rounded-sm my-2 text-sm sm:text-md">Add</button>
              </div>
              <div className='drop-down'>
                <button onClick = {this.toggleDisplay} className = {`w-20 px-2 py-1 bg-cyan-500 text-sm sm:text-md h-8 transition-all hover:bg-cyan-400 rounded${this.state.round}-sm`}>{this.state.priority} <span className = "relative bottom-[0.3rem]">⌄</span></button><br />
                <button onClick = {()=>{this.setPriority('High')}} className = {`${this.state.visibility} text-sm sm:text-md h-8 w-20 px-2 py-1 bg-cyan-700 transition-all hover:bg-cyan-600 border-b border-blue-200`}>High</button><br />
                <button onClick = {()=>{this.setPriority('Medium')}} className = {`${this.state.visibility} text-sm sm:text-md h-8 w-20 px-2 py-1 transition-all hover:bg-cyan-400 bg-cyan-500 border-b border-blue-200`}>Medium</button><br />
                <button onClick = {()=>{this.setPriority('Low')}} className = {`${this.state.visibility} text-sm sm:text-md h-8 w-20 px-2 py-1 bg-cyan-400 transition-all hover:bg-cyan-300 rounded-b-sm`}>Low</button><br />
              </div>
            </div>
        </div>
    )
  }
}
