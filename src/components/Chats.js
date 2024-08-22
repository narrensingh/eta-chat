import React from 'react';
import './styles/Chats.css';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Chatslist from './Chatslist';

function Chats() {
  const search = (e) => {
    e.preventDefault();
  };
  return (
    <div className="chats">
      <div className="chats__header">
        <div className="chats__top">
          <h2 className="chats__header">Chats And Communities</h2>
          <AddCircleOutlineRoundedIcon />
        </div>
        <form className="chats__form">
          <div className="chats__input">
            <SearchRoundedIcon />
            <input className="chats__inputbox" placeholder="Search" />
          </div>
          <button className="chats__button" onClick={search}>
            Search
          </button>
        </form>
      </div>
      <div className="chats__lists">
        <Chatslist />
        <Chatslist />
        <Chatslist />
        <Chatslist />
        <Chatslist />
        <Chatslist />
        <Chatslist />
        <Chatslist />
        <Chatslist />
        <Chatslist />
        <Chatslist />
        <Chatslist />
        <Chatslist />
        <Chatslist />
        <Chatslist />
        <Chatslist />
        <Chatslist />
        <Chatslist />
        <Chatslist />
        <Chatslist />
        <Chatslist />
        <Chatslist />
        <Chatslist />
        <Chatslist />
        <Chatslist />
      </div>
    </div>
  );
}

export default Chats;
