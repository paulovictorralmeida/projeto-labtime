import  React, { useEffect, useState} from 'react';
import api from '../api';

function  UserLista() {

  const [listaUsers, setListaUsers] = useState([]);

  useEffect( () => {
    api.get('/usuarios').then(({data}) => {
      setListaUsers(data)
    });
    console.log(listaUsers);
    // eslint-disable-next-line
  });

  return (
    <div className="UserLista">
      <div className="table__container">
        {listaUsers.map(user => (
          <li key={user.codigo}>
            <b>Nome:</b>{user.nomeCompleto}<br/>
            <b>Nome Social:</b>{user.nomeSocial}<br/>
            <b>Email:</b>{user.email}<br/>
          </li>
        ))};
      </div>
    </div>
  );
}

export default UserLista;
