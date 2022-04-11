import React from "react";
import Tr from "./Tr";
const Table = ({ users }) => {
  return (
    <table id="exelDocuments" className="table">
      <thead>
        <tr>
          <th>
            <span className="table__thead-sortable">DNI</span>
          </th>
          <th>
            <span className="table__thead-sortable">Nombre</span>
          </th>
          <th>
            <span className="table__thead-sortable">E-mail</span>
          </th>
          <th>
            <span className="table__thead-sortable">Estado</span>
          </th>
          <th />
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <Tr key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
