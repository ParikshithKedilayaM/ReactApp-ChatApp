import React, { Component } from 'react';
import './App.css';
import ChatWindow from './ChatWindow.js'
import Header from './Header.js'

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

class App extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  state = {
     users : [{ username: 'Chan' }, { username: 'Raghav' }, { username: 'Harsh' }, { username: 'Pari' }],
     messages : [],
  }
  
  addMessage = (message) => {
    this.setState(prevMessages=>({
      messages : [...prevMessages.messages, message],
    }))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <ChatWindow user = {this.state.users[0]} messages = {this.state.messages} addMessage = {this.addMessage} />
          <ChatWindow user = {this.state.users[1]} messages = {this.state.messages} addMessage = {this.addMessage} />
          
        </div>
      </div>
    );
  }
}

export default App;
