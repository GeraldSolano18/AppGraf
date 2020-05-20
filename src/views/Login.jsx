import React from 'react';
import Particles from "react-particles-js";
//import Fade from 'react-reveal/Fade';

import { Link } from 'react-router-dom';
import contacto from '../assets/static/contacto.jpg';
import log from '../assets/static/gorron.svg';
import '../assets/styles/views/Login.scss';

const Login = () => {
  const particleOPT = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      size: {
        value: 1.5,
        random: false,
        anim: {
          speed: 30,
          size_min: 0.1,
          sync: false,
        },
        opacity: {
          value: 1000,
          random: false,
        },
      },
      line_linked: {
        enable: true,
        random: false,
        distance: 100,
        color: "#ffffff",
        opacity: 0.9,
      },
    },
  };
  return (
    <div>
      <div className='particles'>
        <Particles params={particleOPT} />
      </div>

      <div className='login'>
        <img src={contacto} className='fotoxx' alt='' />
        <div className='up'>
          <img src={log} className='logo1' alt='' />
          <p className='appg'>AppGraf</p>

        </div>
        <div className='down'>
          <p className='textlog'>Login</p>
          <p className='text-co '>User</p>
          <input type='text' className='prueba' />
          <p className='text-co '>Password</p>
          <input className='prueba' type='password' />
          <button type='submit' className='sub'>
            <Link to='/dashboard'>
              Enviar datos
            </Link>

          </button>

        </div>
      </div>

    </div>
  );
};
export default Login;
