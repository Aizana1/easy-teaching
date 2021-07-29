import React from "react";
import TypingAnimation from "../TypingAnimation/TypingAnimation";

import "./TypingMessage.css";

const TypingMessage = ({ user }) => {
  return (
    <div className="message-item">
      <TypingAnimation></TypingAnimation>
    </div>
  );
};

export default TypingMessage;
