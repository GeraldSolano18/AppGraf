/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import './SideBar.scss';

export const SideBar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    console.log('se ha dado click en lo axul', active);
  };
  return (
    <>
      <div className='pruebaSlide'>
        <div className={active ?
          'openbox' :
          'closebox'}
        >
          <div className='replica_blue' onClick={handleClick}>
            <p>
              leer
            </p>
          </div>
          <div className='replica_contenido'>
            <div className='replica_wrapper'>
              <img className='replica_img' src='https://images.pexels.com/photos/356043/pexels-photo-356043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='' />
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat corrupti non et eum vitae minus odio id suscipit numquam, iusto accusantium adipisci ad tenetur praesentium vero eligendi quidem doloremque aspernatur.
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};
