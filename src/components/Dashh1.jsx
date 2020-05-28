import React from 'react';
import log from '../assets/static/gorron.svg';
import '../assets/styles/views/Dashboard.scss';

const Dashh1 = () => {
  return (
    <div>
      <div className='contacto'>
        <img src={log} alt='' className='logo1' />
        <p className='letras'>Maestros</p>
      </div>
      <div className='contacto'>
        <p className='evalua'>¡Deja comentarios sobre tus maestros y evalua su desempeño! </p>
      </div>
    </div>

  );
};

export default Dashh1;
