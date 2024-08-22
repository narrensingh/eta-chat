import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Chats from './components/Chats';
import Content from './components/Content';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Chats />
      <Content />
    </div>
  );
};

export default App;
