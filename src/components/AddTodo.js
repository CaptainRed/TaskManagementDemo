import React, { Component } from 'react'

export class AddTodo extends Component {

  state = {
    title: '',
    sub1: '',
    sub2: '',
    sub3: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title, this.state.sub1, this.state.sub2, this.state.sub3)
  }

  onChange = (e) => this.setState({[e.target.name]: e.target.value})

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
          <input type="text" name="title" style={{flex: '10', padding: '3px'}} placeholder="Add Task..." value={this.state.task} onChange={this.onChange} />
          <input type="text" name="sub1" style={{flex: '3', padding: '3px'}} placeholder="Add Subtask..." value={this.state.sub1} onChange={this.onChange}/>
          <input type="text" name="sub2" style={{flex: '3', padding: '3px'}} placeholder="Add Subtask..." value={this.state.sub2}  onChange={this.onChange}/>
          <input type="text" name="sub3" style={{flex: '3', padding: '3px'}} placeholder="Add Subtask..." value={this.state.sub3}  onChange={this.onChange}/>
          <input type="submit" value="Submit" className="btn" style={{flex:'2'}}/>
        </form>
      </div>
    )
  }
}

export default AddTodo
