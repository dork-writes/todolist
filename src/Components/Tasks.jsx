import React, { Component } from 'react'

export default class Tasks extends Component {
   componentDidMount()
   {
        let crossOuts = document.getElementsByClassName("strike-out");
        let crossOutCheckBox = document.getElementsByTagName("input");
        for (let i = 0; i < this.props.arr.length; i++)
        {
            if (this.props.arr[i].checked)
            {
                crossOuts[i].className = "strike-out text-left line-through"
                crossOutCheckBox[i].checked = true;
            }
            
            else
            {
                crossOuts[i].className = "strike-out text-left";
                crossOutCheckBox[i].checked = false;
            }
        }
    }
    
    componentDidUpdate()
    {
        let crossOutCheckBox = document.getElementsByTagName("input");
        let crossOuts = document.getElementsByClassName("strike-out");
        for (let i = 0; i < this.props.arr.length; i++)
        {
            if (this.props.arr[i].checked)
            {
                crossOuts[i].className = "strike-out text-left line-through";
                crossOutCheckBox[i].checked = true;
            }
            
            else
            {
                crossOuts[i].className = "strike-out text-left";
                crossOutCheckBox[i].checked = false;
            }
        }
   }

  render() {
    return (
       this.props.arr[0] &&
      <div className = "py-5">
        <table className = "w-fit ml-auto mr-auto"> 
            <thead>
                <tr className = "border-b-[2px] text-left">
                    <th>
                        Task
                    </th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    this.props.arr.map(element =>
                    {
                        return (
                            <tr key = {element.id} className = {`${element.priority === 'High' ? 'text-red-400':''} ${element.priority === 'Medium' ? 'text-yellow-400' : ''} ${element.priority === 'Low' ? 'text-green-400' : ''}`}>
                                <td className = {`strike-out text-left`}>{element.task}</td>
                                <td><input onChange = {() => {this.props.crossOut(element)}} type = "checkbox" className = "bg-blue-200"/></td>
                                <td><button onClick = {()=> {this.props.delete(element)}} className = "rounded-sm px-2 py-1 bg-blue-400 hover:bg-red-400 transition-all text-white">Delete</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        
      </div>
    )
  }
}
