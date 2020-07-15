/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import data from '../assets/static/data.svg';
import { AcademicData } from './AcademicData';
import estudiante from '../assets/static/estudiante.svg';
import profesor from '../assets/static/profesor.svg';

export const FormRegister = () => {
  const [isActive, setActive] = useState(false);
  return (
    <>
      <div className='contacto'>
        <p className='contactoP'>Selecciona el tipo de cuenta: </p>
      </div>
      <section className='buttons_container'>
        <button type='button' onClick={() => setActive(false)}>
          <img src={profesor} alt='maes' className='imgxx' />
          Maestro
        </button>
        <button type='button' onClick={() => setActive(true)}>Estudiante </button>
      </section>
      <form onSubmit=''>
        <div className='ContainerBoss'>
          <div>
            <div className='Datos'>
              <img src={data} className='imgxx' alt='' />
              Datos Generales
            </div>
            <input className='boxxx' type='text' placeholder='Nombres' />
            <input className='boxxx' type='text' placeholder='Apellidos' />
          </div>
          <div>
            {isActive ? (
              <AcademicData
                title='Estudiante'
                place='Carnet'
                none=''
                icon={estudiante}
              />
            ) : (
              <AcademicData
                title='Maestro'
                place='Codigo de docente'
                none='none'
                icon={profesor}
              />
            )}
          </div>

        </div>
        <button type='submit' className='sub'>
          Enviar datos
        </button>
      </form>

    </>
  );
};
