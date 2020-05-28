/* eslint-disable array-callback-return */
import { ADD_STUDENT, UPDATE_STUDENT, DELETE_STUDENT } from '../actions/CstdAction';

const initialState = {
  Estudiantes: [
    {
      id: 'b04277djf',
      name: 'Gerald SOlano',
      edad: '19',
      active: true,

    },
    {
      id: 'b03427jsd',
      name: 'Fidesco Ruiz  ',
      edad: '19',
      active: true,
    },
    {
      id: 'bderr277c7',
      name: 'Jorge Fernando Torres Martinez  ',
      edad: '19',
      active: true,
    },
    {
      id: 'b0342xhc7',
      name: 'Julio Cesar Castillo  ',
      edad: '19',
      active: true,
    },
    {
      id: 'b034fvrfe67',
      name: 'Fidesco Ruiz  ',
      edad: '19',
      active: true,
    },
  ],
};
function CstdReducer(state = initialState, action) {

  switch (action.type) {
    case ADD_STUDENT:
      return {
        ...state,
        Estudiantes: [
          ...state.Estudiantes,
          action.payload,
        ],
      };
    case UPDATE_STUDENT:
      return {
        ...state,
        Estudiantes: state.Estudiantes.map((std) => {
          if (action.payload.id === std.id) {
            return {
              ...std,
              active: !std.active,

            };
          }
          return std;
        }),

      };
    case DELETE_STUDENT:
      return {
        ...state,
        Estudiantes: state.Estudiantes.filter((std) => {
          return (std.id !== action.payload.id);
        }),
      };
    default:
      return state;
  }

};

export default CstdReducer;
