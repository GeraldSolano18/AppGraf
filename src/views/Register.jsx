import React from 'react';
import Particles from "react-particles-js";
import contacto from '../assets/static/contacto.jpg';
import '../assets/styles/views/Register.scss';
import data from '../assets/static/data.svg';
import uni from '../assets/static/uni.svg';

const Register = () => {
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
  return (
    <div>
      <div className='particles'>
        <Particles params={particleOPT} />
      </div>

      <img src={contacto} className='fotoxx' alt='' />
      <div className='containerwhite'>
        <div className='contacto'>
          <p className='contactoTitle'>Formulario de registro</p>
        </div>
        <div className='contacto'>
          <p className='contactoP'>Ingresa los datos correspodientes </p>
        </div>
        <form onSubmit=''>
          <div className='ContainerBoss'>
            <div>
              <div className='Datos'>
                <img src={data} className='imgxx' alt='' />
                Datos Generales
              </div>
              <input className='boxxx' type='text' placeholder='Nombres' />
              <input className='boxxx' type='text' placeholder='Apellidos' />
              <input className='boxxx' type='text' placeholder='cedula' />
              <input className='boxxx' type='text' placeholder='Telefono' />
            </div>
            <div>
              <div className='Datos'>
                <img src={uni} className='imgxx' alt='' />
                Datos académicos
              </div>
              <input className='boxxx' type='text' placeholder='Carnet' />
              <input className='boxxx' type='text' placeholder='grupo' />
              <input className='boxxx' type='text' placeholder='cedula' />
              <input className='boxxx' type='text' placeholder='Telefono' />

            </div>

          </div>
          <button type='submit' className='sub'>
            Enviar datos
          </button>
        </form>

      </div>

    </div>
  );
};
export default Register;
