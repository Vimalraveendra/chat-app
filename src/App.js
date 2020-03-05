import React from "react";
import Title from "./components/Title/Title";
import MessageList from "./components/MessageList/MessageList";
import MessageFrom from "./components/MessageFrom/MessageFrom";
import "./App.css";
import DUMMY_DATA from "./Data/Dummy-Data";
import Chatkit from "@pusher/chatkit-client-react";
import { instanceLocator, testToken, roomId, username } from "./config";

class App extends React.Component {
  state = {
    message: DUMMY_DATA
  };

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: instanceLocator,
      userId: username,
      tokenProvider: new Chatkit.TokenProvider({
        url: testToken
      })
    });
    chatManager.connect().then(currentUser => {
      currentUser.subscribeRoom({
        roomId: roomId,
        hooks: {
          onNewMessage: message => {
            this.setState({
              message: [...this.state.message, message]
            });
          }
        }
      });
    });
  }
  render() {
    console.log("message", this.state.message);
    return (
      <div className="App">
        <h1>Chat App</h1>
        <Title />
        <MessageList messages={this.state.message} />
        <MessageFrom />
      </div>
    );
  }
}

export default App;
