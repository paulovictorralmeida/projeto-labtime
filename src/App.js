import  React from 'react';
import './App.css';
import api from './api';
import SearchList from './components/SearchList'

function App() {

    return (
    <div className="App">
      <SearchList prop={api} />
    </div>
  );
}

export default App;
