import React from "react";
import Title from "./components/Title/Title";
import MessageList from "./components/MessageList/MessageList";
import MessageFrom from "./components/MessageFrom/MessageFrom";
import "./App.css";
import DUMMY_DATA from "./Data/Dummy-Data";

class App extends React.Component {
  state = {
    message: DUMMY_DATA
  };
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
