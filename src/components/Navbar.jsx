import React from 'react';
import '../assets/styles/components/Header.scss';
import { Link } from 'react-router-dom';
import log from '../assets/static/gorroB.svg';

const Navbar = (location) => {
  return (

    <header className={
      location.pathname === "/dashboard" ?
        "login-dash" :
        "header"
    }
    >

      <div className='header'>
        <div>
          <Link to='/' className='Link'>
            <div className='nnn'>
              <img src={log} alt='' className='gorrob' />
              <p className='let'>AppGraf</p>
            </div>

          </Link>
        </div>

        <div className='Header__menu'>
          <ul>
            <li>
              <Link to='/login' className='Link'>
                Inicio de sesion
              </Link>
            </li>
            <li>
              <Link to='/register' className='Link'>
                Registrarse
              </Link>

            </li>
          </ul>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
