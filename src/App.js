import  React, { useEffect, useState} from 'react';
import './App.css';
import api from './api';

function App() {

  const [listaUsers, setListaUsers] = useState([]);

  useEffect( () => {
    api.get('usuarios').then(({data}) => {
      setListaUsers(data)
    });
    console.log(listaUsers);
    // eslint-disable-next-line
  }, ['']);

  return (
    <div className="App">
      <h1>Lista de Usuários</h1>
    </div>
  );
}

export default App;
