/* eslint-disable arrow-spacing */
/* eslint-disable arrow-parens */
/* eslint-disable react/button-has-type */

import React from 'react';
//import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import Form from './Form';
import { addStudent, updateStudent, deleteStudent } from '../../redux/actions/CstdAction';
import { getId } from '../../utils/getId';
import TableStd from './TableStd';
import '../../assets/styles/components/Estudiantes.scss';

const Estudiante = ({ estudiante, addStudent, updateStudent, deleteStudent }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    console.log(name);
    addStudent({
      name,
      id: getId(),
    });
    console.log(estudiante);
    e.target[0].value = '';
  };

  return (
    <>
      <Form onSubmit={handleSubmit} />
      <TableStd
        estudiante={estudiante.Estudiantes}
        updateStudent={updateStudent}
        deleteStudent={deleteStudent}
      />

    </>
  );
};
const mapStateToProps = (state) => {
  return {
    estudiante: state.CstdReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addStudent: (estudiante) => dispatch(addStudent(estudiante)),
    updateStudent: (estudiante) => dispatch(updateStudent(estudiante)),
    deleteStudent: (estudiante) => dispatch(deleteStudent(estudiante)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Estudiante);
