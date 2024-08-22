import React from 'react';
import './styles/Chatslist.css';
import { Avatar } from '@mui/material';

function Chatslist() {
  return (
    <div className="chatlist">
      <div className="chatlist__right">
        <Avatar />
        <div className="chatlist__data">
          <p className="name">username</p>
          <p className="last__message">Last Message</p>
        </div>
      </div>
      <div className="chatlist__left">
        <p className="chatlist__leftTime">11:37 AM</p>
      </div>
    </div>
  );
}

export default Chatslist;
