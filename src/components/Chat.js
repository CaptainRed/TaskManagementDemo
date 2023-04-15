import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      msg: '',
      temp: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  changeMsg = (e) => {
    e.preventDefault();
    this.setState({msg: "You : " + this.state.temp});
  }
  handleChange(e) {
    this.setState({temp: e.target.value})
  }

  render(){
    return(
      <div>
        <h3 style={chatTitle}>Chatbox - User</h3>
        <section className="chatArea">
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>Tim : Have we finished the first task yet?</p>
          <p>{this.state.msg}</p>
        </section>
        <section className="textArea">
        <form onSubmit={this.changeMsg}>
          <input type="text" id="chats" className="chatTextArea" value={this.state.value} name="chatbox" placeholder="type here..." onChange={this.handleChange}/>
          <input className="buttons" type="submit" value="Submit" />
        </form>
        </section>
      </div>
    )
  }
}

const chatTitle = {
  border: "#7CB1FF solid 0.25rem",
  padding: "10px",
  margin: "0px",
  width: "88%"
}
const buttonStyle = {
  paddingTop: "10px",
  paddingBottom: "10px"
}
Chat.propTypes = {
  usermessage: PropTypes.object.isRequired
}

export default Chat
