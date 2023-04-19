import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Chat from './components/Chat.js';
import Nav from './components/layout';
import React from 'react';
import Calendar from './images/Calendar.png';
import Messenger from './messenger';
import App1 from './App1';
import Month from './components/Month'

class App extends React.Component {

  state = {
    todos: [
      {
        id: 1 + Math.random() * (100-1),
        title: 'Task 1',
        subtask1: 'File Sharing',
        subtask2: 'Backend management',
        subtask3: 'Whats this then',
        completed: false
      },
      {
        id: 1 + Math.random() * (100-1),
        title: 'Task 2',
        subtask1: 'Color picking',
        subtask2: 'Css management',
        subtask3: 'HTML Implementation',
        completed: false
      },
      {
        id: 1 + Math.random() * (100-1),
        title: 'Task 3',
        subtask1: 'Front end framework',
        subtask2: 'Javascript',
        subtask3: 'Optimizing',
        completed: false
      }
    ],
    usermessage: [
      {
        msg: 'You : '
      }
    ]
  }
  // Toggle Complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  // Delete todo
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  // Add Todo items
  addTodo = (title, sub1, sub2, sub3) => {
    const newTodo = {
      id: 1 + Math.random() * (100-1),
      title: title,
      subtask1: sub1,
      subtask2: sub2,
      subtask3: sub3,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  render() {
    return (
        <div>
          <Router>
            <nav>
              <ul>
                <li className="leftItems"><a href="/TaskManagementDemo">Home</a></li>
                <li className="leftItems"><a href="/components/Month">Scheduler</a></li>
                <li className="leftItems"><a href="#">Group</a></li>
                <li className="leftItems"><Link to={"./messenger"}>Messenger</Link></li>

              </ul>
            </nav>
            <Route exact path="/TaskManagementDemo" render={props => (
                <div className="App">
                  <aside className="aside1">
                    <a href="/components/Month"><img src={Calendar} alt="Calendar"></img></a>
                  </aside>
                  <aside className="aside2">
                    <Chat usermessage={this.state.usermessage}  />
                  </aside>
                  <section className="section1">
                  <nav>
                    <ul>
                      <li className="leftItems"><a href="#">P1</a></li>
                      <li className="leftItems"><a href="#">P2</a></li>
                      <li className="leftItems"><a href="#">P3</a></li>
                      <li className="leftItems"><a href="#">P4</a></li>
                    </ul>
                  </nav>
                  </section>
                  <section className="section2">
                    <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo = {this.delTodo}/>
                    <AddTodo addTodo={this.addTodo} />
                  </section>
                  </div>
              )}/>
              <Route path="/messenger" component={Messenger}/>
              <Route path="/App1" component={App1} />
              <Route path="/components/Month" component={Month} />
            </Router>
          </div>
      );
    }
}

export default App;
