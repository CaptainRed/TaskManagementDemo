import React, { Component } from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component {

  getStyle = () => {
    return {
      background: '#E3EFFF',
      padding: '40px',
      border: '1px black solid',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      margin:'1%'
    }
  }

  render(){
    return(
      <div style={this.getStyle()}>
      <p style={titleStyle}>{ this.props.todo.title }</p>
      <p style={checkBoxStyle}><input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)}/> Done</p> {' '}
      <ul>
        <li>{this.props.todo.subtask1}</li>
        <li>{this.props.todo.subtask2}</li>
        <li>{this.props.todo.subtask3}</li>
      </ul>
      <p style={removeButtonStyle}><button onClick={this.props.delTodo.bind(this, this.props.todo.id)} style={buttonStyle}>x</button> Remove Task</p>
      </div>
    )
  }
}

const titleStyle = {
  textAlign: 'left',
  marginTop: '-3%',
  //marginTop: '0',
  //paddingTop: '0px'

}

const checkBoxStyle = {
  float: 'right'
}

const removeButtonStyle = {
  marginBottom: '-3%',
  fontSize: '12px'
}
const buttonStyle = {
  background: '#7CB1FF',
  color:'#fff',
  border: 'none',
  borderRadius: '50%',
  padding: '5px 9px'
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem
