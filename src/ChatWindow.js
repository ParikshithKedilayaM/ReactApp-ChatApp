import React, {Component} from 'react'
import Message from './Message.js'
import MessageList from './MessageList.js'
import PropTypes from 'prop-types'

class ChatWindow extends Component {
   
  send = (message) => {
    this.props.addMessage({username: this.props.user.username, text: message});
  }
    
  render() {
    return (
    <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{this.props.user.username}</div>

            <MessageList messages = {this.props.messages} username = {this.props.user.username} />

            <Message addMessage = {this.send} />
          </div>
  )}
}
ChatWindow.propTypes = {
  addMessage : PropTypes.func.isRequired,
  messages : PropTypes.array.isRequired,
  user : PropTypes.object.isRequired,
}
export default ChatWindow;