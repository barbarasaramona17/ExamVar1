import React, { Component } from 'react'

class MessageForm extends Component {
  constructor(props){
  	super(props)
  	this.state = {
  		content : ''
  	}
  }
  render() {
    return (
      <div>
      <form>
      	<label htmlFor="content">Content</label>
        <input type="text" value={this.state.content} id="content" />
        <input type="button" value="+" onClick={this.props.onAdd} /> 
        </form>
      </div>
    )
  }
}

export default MessageForm
