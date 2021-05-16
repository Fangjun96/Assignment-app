import './App.css';
import React from 'react';
import './index.css';
import { Provider } from 'react-redux'
import store from './components/store'
import Search from './components/search.js'
import Table from './components/table.js'
import CashRegister from './components/cashRegister'

function App() {
  return (
    <Provider store = {store}>
    <React.StrictMode>
    <Search />
    <div className = "parent">
      <div className = 'child'>
      <Table />
      </div>
      <div className = 'child'>
      <CashRegister />
      </div>
    </div>
    </React.StrictMode>
    </Provider>
  );
}

export default App;
