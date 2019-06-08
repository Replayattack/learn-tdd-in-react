import React, { Component } from 'react';

export default class NewMessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { inputText: '' }

    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleSend = this.handleSend.bind(this)
  }

  handleTextChange({ target: { value: inputText } }) {
    this.setState({
      inputText
    })
  }

  handleSend = () => {
    const { inputText } = this.state;
    const { onSend } = this.props;

    onSend(inputText);

    this.setState({ inputText: '' })
  }

  render() {
    const { inputText } = this.state
    return (
      <div>
        <input
          type="text"
          data-testId="messageText"
          value={inputText}
          onChange={this.handleTextChange}
        />
        <button
          data-testId="sendButton"
          onClick={this.handleSend}
        >
          Send
        </button>
      </div>
    )
  }
}
