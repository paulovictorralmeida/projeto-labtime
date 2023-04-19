import  React, { useState } from 'react';
import './App.css';
import SearchList from './components/SearchList';
import UserLista from './components/UserLista';

function App() {
  const [valor, setValor] = useState('');

  const handleChange = (event) => {
    setValor(event.target.value);
  };

  return (
    <div className="App">
      <SearchList valor={valor} hc={handleChange} />
      <UserLista valor={valor} />
    </div>
  );
}

export default App;
