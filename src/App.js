import  React from 'react';
import './App.css';
import api from './api';
import UserLista from './components/UserLista';
import Header from './components/Header';
import SearchList from './components/SearchList'

function App() {

    return (
    <div className="App">
      <Header />
      <SearchList prop={api} />
      <UserLista />
    </div>
  );
}

export default App;
