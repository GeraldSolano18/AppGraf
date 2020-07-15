import React from 'react';
import Particles from "react-particles-js";
import log from '../assets/static/gorron.svg';
import { FormRegister } from '../components/FormRegister';
import contacto from '../assets/static/contacto.jpg';
import '../assets/styles/views/Register.scss';

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
      value: "#000000",
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
      color: "#000000",
      opacity: 0.9,
    },
  },
};
const Register = () => {

  return (
    <div>
      <div>
        <Particles className='particles' params={particleOPT} />
      </div>

      <img src={contacto} className='fotoxx' alt='' />
      <div className='containerwhite'>
        <div className='up'>
          <img src={log} className='logo1' alt='' />
          <p className='appg'>AppGraf</p>
        </div>
        <p className='textlog'>Registro</p>
        <FormRegister />
      </div>

    </div>
  );
};
export default Register;
