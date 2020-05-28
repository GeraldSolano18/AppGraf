export const ADD_CATEGORIE = 'ADD_CATEGORIE';
export const ADD_DATA = 'ADD_DATA';

export const addCategorie = (categorie) => ({
  type: ADD_CATEGORIE,
  payload: categorie,
});

export const addData = (dato) => ({
  type: ADD_DATA,
  payload: dato,
});
