import React from 'react';
import './styles/Message.css';

function Message({ secondP = true }) {
  return (
    <div className="message_box">
      <div className={secondP ? 'message__secondP' : 'message__firstP'}>
        Message
      </div>
    </div>
  );
}

export default Message;
