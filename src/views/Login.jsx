import React, { useState } from 'react';
import Particles from "react-particles-js";
import { connect } from 'react-redux';
import { loginRequest } from '../redux/actions/LoginOutAction';
//import Fade from 'react-reveal/Fade';

//import { Link } from 'react-router-dom';
import contacto from '../assets/static/contacto.jpg';
import log from '../assets/static/gorron.svg';
import '../assets/styles/views/Login.scss';

const Login = (props) => {

  const [form, setValues] = useState({
    email: '',
  });
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
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,

    });
  };
  const handeSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/dashboard');
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
        <p className='textlog'>Login</p>
        <form onSubmit={handeSubmit}>
          <div className='down'>
            <input
              name='email'
              type='text'
              className='prueba'
              placeholder='User'
              onChange={handleInput}
            />
            <input
              name='pass'
              className='prueba'
              type='password'
              placeholder='pass'
              onChange={handleInput}
            />
            <button type='submit' className='sub'>

              Enviar datos
            </button>

          </div>
        </form>

      </div>

    </div>
  );
};
const mapDispatchToProps = {
  loginRequest,
};
export default connect(null, mapDispatchToProps)(Login);
