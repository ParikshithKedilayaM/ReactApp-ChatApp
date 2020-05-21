import React, {Component} from 'react'

class ChatWindow extends Component {
  
  state = {
    newMessage : '',
  };


  setMessage = (event) => {
    this.setState({
      newMessage : event.target.value,
    })
  };

  clearMessage = (message) => {
    this.setState({
      newMessage : ''
    })
  }

  isDisabled = () => {
    if (this.state.newMessage === '')
    return true;
    else return false;
  };
   
  send = (event) => {
    event.preventDefault();
    this.props.addMessage({username: this.props.user.username, text: this.state.newMessage});
    this.clearMessage('');
  }
    
  render() {
    return (
    <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{this.props.user.username}</div>

            <ul className="message-list">
              {this.props.messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === this.props.user.username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username === this.props.user.username ? 'Me' : message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

            <div>
              <form className="input-group">
                <input type="text" className="form-control" placeholder="Enter your message..." 
                       value = {this.state.newMessage} onChange = {this.setMessage} />
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()} onClick={this.send}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
  )}
}

export default ChatWindow;