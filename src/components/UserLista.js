import  React, { useEffect, useState} from 'react';
import api from '../api';

function  UserLista() {

  const [listaUsers, setListaUsers] = useState([]);

  useEffect( () => {
    api.get('usuarios').then(({data}) => {
      setListaUsers(data)
    });
    console.log(listaUsers);
    // eslint-disable-next-line
  }, ['']);

  return (
    <div className="UserLista">
    <div>
        <table>
          <tr className=''>
            {listaUsers.map(
              user => <th key="{user.codigo}">{user.nomeCompleto}</th>
            )};
            <th>Nome social</th>
            <th>Data de nascimento</th>
            <th>Código</th>
            <th>Sexo</th>
            <th>E-mail</th>
            <th>Estado</th>
            <th>Município</th>
            <th>Acessos</th>
            <th>Situação</th>
            <th>Data de vínculo</th>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default UserLista;