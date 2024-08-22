import React from 'react';
import './styles/Sidebar.css';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import AddReactionRoundedIcon from '@mui/icons-material/AddReactionRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ArchiveRoundedIcon from '@mui/icons-material/ArchiveRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { Avatar } from '@mui/material';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <Avatar className="avatar" />
        <MessageRoundedIcon />
        <AddReactionRoundedIcon />
        <PhoneRoundedIcon />
        <ArchiveRoundedIcon />
      </div>
      <div className="sidebar_bottom">
        <SettingsRoundedIcon />
      </div>
    </div>
  );
}

export default Sidebar;
