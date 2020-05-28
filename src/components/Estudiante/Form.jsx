import React from 'react';

const Form = ({ onSubmit }) => (
  <form onSubmit={onSubmit} className='foorm'>
    <input type='text' className='boxu' />
    <button type='submit' className='subu'> agregar estudiante</button>
  </form>
);
export default Form;

