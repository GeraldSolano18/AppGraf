/* eslint-disable import/prefer-default-export */
import React from 'react';

export const AcademicData = ({ title, place, none, icon }) => {
  return (
    <>
      <div className='Datos'>
        <img src={icon} className='imgxx' alt='' />
        <p style={{ marginRight: '10px' }}>
          Datos
        </p>
        { title}
      </div>
      <input className='boxxx' type='text' placeholder={place} />

      <input style={{ display: `${none}` }} className='boxxx' type='text' placeholder='grupo (opcional)' />
    </>

  );
};
