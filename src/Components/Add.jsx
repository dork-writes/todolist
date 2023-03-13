import React, { Component } from 'react'

export default class Add extends Component {
  state = {
    priority: 'Priority',
    visibility: 'opacity-0',
    round: ''
  }

  toggleDisplay = () =>
  {
    this.state.visibility === 'opacity-0' ? this.setState({visibility: 'opacity-[100%]'}) : this.setState({visibility: 'opacity-0'});
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
                <textarea onChange = {this.props.setAdd} name = "task" className = "bg-blue-200 px-2 py-1 block ml-auto mr-auto rounded-md focus:bg-blue-300 text-cyan-900" type = "text"  rows = {1} cols ={25} value = {this.props.toAdd}/>
                <button onClick = {()=>{this.props.add(this.state.priority); this.setState({priority: 'Priority'});}} className = "block bg-cyan-900 hover:bg-cyan-800 active:bg-blue-400 px-2 py-1 w-fit ml-auto mr-auto rounded-sm my-2 text-sm sm:text-md">Add</button>
              </div>
              <div className='drop-down'>
                <button onClick = {this.toggleDisplay} className = {`w-20 px-2 py-1 bg-cyan-900 text-sm sm:text-md h-8 transition-all hover:bg-cyan-800 rounded${this.state.round}-sm`}>{this.state.priority} <span className = "relative bottom-[0.3rem]">⌄</span></button><br />
                <button onClick = {()=>{this.setPriority('High')}} className = {`${this.state.visibility} text-sm sm:text-md h-8 w-20 px-2 py-1 bg-cyan-800 transition-all hover:bg-cyan-700 border-b border-blue-200`}>High</button><br />
                <button onClick = {()=>{this.setPriority('Medium')}} className = {`${this.state.visibility} text-sm sm:text-md h-8 w-20 px-2 py-1 transition-all hover:bg-cyan-600 bg-cyan-700 border-b border-blue-200`}>Medium</button><br />
                <button onClick = {()=>{this.setPriority('Low')}} className = {`${this.state.visibility} text-sm sm:text-md h-8 w-20 px-2 py-1 bg-cyan-600 transition-all hover:bg-cyan-500 rounded-b-sm`}>Low</button><br />
              </div>
            </div>
        </div>
    )
  }
}
