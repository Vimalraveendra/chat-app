import React from "react";
import "./MessageList.scss";
const MessageList = ({ messages }) => {
  console.log("1", messages);
  return (
    <React.Fragment>
      <ul className="message-list">
        {messages.map((message, index) => {
          return (
            <li key={index} className="message">
              <div className="sender">{message.senderId}</div>
              <div className="text">{message.text}</div>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default MessageList;
