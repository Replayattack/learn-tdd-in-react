import React, { Component } from 'react';

export default class NewMessageForm extends Component {
  render() {
    return (
      <div>
        <input type="text" data-testId="messageText"/>
      </div>
    )
  }
}
