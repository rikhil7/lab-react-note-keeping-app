import React, { Component } from 'react'
import "./Editor.css"
export default class Editor extends Component {
    constructor(){
        super()
        this.state = {
            value : ""
        }
    }
    handleChange = (e)=>{
        this.setState({
            value: e.target.value
        })
        // console.log(e.target.value)
    }
  render() {
    return (
      <div className='container'>
        <h1>Pro-Note</h1>
        <div className='boxes'>
            <div className='input'>
                <h4>Input</h4>
                <textarea placeholder='Enter your text here!' onChange={this.handleChange} name="input" id="input" cols="30" rows="10"></textarea>
            </div>
            <div className='display'>
                <h4>Display</h4>
                <div id='displayBox'>{this.state.value}</div>
            </div>
        </div>
      </div>
    )
  }
}
