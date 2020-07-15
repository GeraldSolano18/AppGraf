import { LOGIN_REQUEST, LOGOUT_REQUEST } from '../actions/LoginOutAction';

const initialState = {
  "user": {
  },
  "Profesores": [
    {
      "Id": 1,
      "Nombre": "Jose Santos",
      "Apellido": "Ruiz",
      "Profesion": "Ing. Sistemas",
      "Puntaje": "86-329-8486",
      "Popularidad": "05-587-4130",
      "Icon": "https://pbs.twimg.com/profile_images/1157046181698011136/xZ4wg2Xj.jpg",
      "Comentarios": "Engineering",
    }, {
      "Id": 2,
      "Nombre": "Juan ALejandro",
      "Apellido": "Mendez",
      "Profesion": "Ing. Industrial",
      "Puntaje": "41-049-0410",
      "Popularidad": "09-217-6442",
      "Icon": "https://tinyfac.es/data/avatars/7D3FA6C0-83C8-4834-B432-6C65ED4FD4C3-500w.jpeg",
      "Comentarios": "Sales",
    }, {
      "Id": 3,
      "Nombre": "Franco Jean",
      "Apellido": "Molina Ruiz",
      "Profesion": "Ing. Industrial",
      "Puntaje": "77-588-4423",
      "Popularidad": "32-011-8446",
      "Icon": "https://randomuser.me/api/portraits/men/29.jpg",
      "Comentarios": "Research and Development",
    }, {
      "Id": 4,
      "Nombre": "Julio Antonio",
      "Apellido": "Medrano",
      "Profesion": "Contador",
      "Puntaje": "62-572-7997",
      "Popularidad": "42-973-9835",
      "Icon": "https://randomuser.me/api/portraits/men/61.jpg",
      "Comentarios": "Accounting",
    },

  ],
  "alumno": {

  },
};

const LoginOut = (state = initialState, action) => {

  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }

};
export default LoginOut;
