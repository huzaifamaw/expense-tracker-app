import React from 'react';
import './App.css';
import Header from './header.js';
import Balance from './Balance.js';
import History from './history.js';
import Input from './input.js';
import Status from './status.js';
import { ExpProvider } from './globalstate.js';
function App() {
  return (
    <ExpProvider>
      
      <Header />
      <Balance />
      <Status/>
      <History />
      <Input />
    
    </ExpProvider>
  );
}

export default App;
