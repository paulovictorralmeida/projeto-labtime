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
      <table className="table__style">
        <thead>
          <tr>
          <th>Código</th>
          <th>Nome Completo</th>
          <th>Nome Social</th>
          <th>Data de Nascimento</th>
          <th>Sexo</th>
          <th>Email</th>
          <th>Estado</th>
          <th>Município</th>
          <th>Situação</th>
          <th>Número de acessos </th>
          </tr>
        </thead>
        <tbody>
          {Object.values(listaUsers).map(users => (
            <tr key={users.codigo}>
              <td>{users.codigo}</td>
              <td>{users.nomeCompleto}</td>
              <td>{users.nomeSocial}</td>
              <td>{users.dataDeNascimento}</td>
              <td>{users.sexo}</td>
              <td>{users.email}</td>
              <td>{users.estado}</td>
              <td>{users.municipio}</td>
              <td>{users.situacao}</td>
              <td>{users.numeroDeAcessos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserLista;
