import React from 'react';
import './styles/Content.css';
import { Avatar } from '@mui/material';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Message from './Message';

function Content() {
  return (
    <div className="content">
      <div className="content__top">
        <div className="content__topLeft">
          <Avatar />
          <div className="content__data">
            <p className="content__dataName">username</p>
            <p className="content__dataSeen">Last seen</p>
          </div>
        </div>
        <div className="content__topRight">
          <PhoneRoundedIcon />
          <MoreVertRoundedIcon />
        </div>
      </div>
      <div className="content__sender">
        <div className="content__senderInput">
          <SendRoundedIcon />
          <input placeholder="Send A Message" />
        </div>
        <button className="content__senderButton">Send</button>
      </div>
      <div className="content__messages">
        <Message secondP={true} />
        <Message secondP={false} />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message secondP={false} />
        <Message secondP={false} />
        <Message secondP={false} />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
    </div>
  );
}

export default Content;
