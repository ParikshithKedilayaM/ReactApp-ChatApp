import React from 'react'
import PropTypes from 'prop-types'

class Message extends React.Component {
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
  };

  isDisabled = () => {
    if (this.state.newMessage === '')
    return true;
    else return false;
  };
  
  send = (event) => {
    event.preventDefault();
    this.props.addMessage(this.state.newMessage);
    this.clearMessage('');
  }
  
  render () {
    return (
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
  )
}
}
Message.propTypes = {
  addMessage : PropTypes.func.isRequired,
}
export default Message;