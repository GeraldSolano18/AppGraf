/* eslint-disable import/prefer-default-export */
export const ADD_STUDENT = 'ADD_STUDENT';
export const UPDATE_STUDENT = 'UPDATE_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';

//Funciones creadoras de acciones
export const addStudent = (estudiante) => ({
  type: ADD_STUDENT,
  payload: estudiante,
});

export const updateStudent = (estudiante) => ({
  type: UPDATE_STUDENT,
  payload: estudiante,
});
export const deleteStudent = (estudiante) => ({
  type: DELETE_STUDENT,
  payload: estudiante,
});
