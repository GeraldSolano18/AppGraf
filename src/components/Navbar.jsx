import React from 'react';
import '../assets/styles/components/Header.scss';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (

    <div className='Header'>
      <div>

      </div>
      <div className='Header__menu'>
        <ul>
          <li>
            <Link to='/sobreRedStore' className='Link'>
              Inicio de sesion
            </Link>
          </li>
          <li>
            <Link to='/comercios' className='Link'>
              Registrarse
            </Link>

          </li>
        </ul>
      </div>

    </div>

  );
};

export default Navbar;
