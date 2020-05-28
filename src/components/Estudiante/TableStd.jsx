/* eslint-disable react/button-has-type */
import React from 'react';

const TableStd = ({ estudiante, updateStudent, deleteStudent }) => (
  <table className='table table-bordered table-dark'>
    <thead>
      <tr>
        <th scope='col'>Activo</th>
        <th scope='col' className='scl'>Nombre completo</th>
        <th scope='col'>Codigo del estudiante</th>
      </tr>
    </thead>
    <tbody>

      {estudiante.map((item) => (

        <tr
          key={item.id}
          onClick={() => {
            updateStudent(item);
          }}
        >
          <input
            type='checkbox'
            checked={item.active}
            className='check'
          />
          <td className='scl'>
            {item.name}
          </td>
          <td>
            {item.id}
          </td>
          <button onClick={() => {
            deleteStudent(item);
          }}
          >
            X
          </button>
        </tr>

      ))}

    </tbody>
  </table>
);

export default TableStd;

