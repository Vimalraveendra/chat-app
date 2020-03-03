import React from "react";
import Title from "./components/Title/Title";
import MessageList from "./components/MessageList/MessageList";
import MessageFrom from "./components/MessageFrom/MessageFrom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Chat App</h1>
      <Title />
      <MessageList />
      <MessageFrom />
    </div>
  );
}

export default App;
