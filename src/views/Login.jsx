import React, { useState } from 'react';
import Particles from "react-particles-js";
import { connect } from 'react-redux';
import { app, googleAuthProvider } from '../../firebaseConfig';
import { loginRequest } from '../redux/actions/LoginOutAction';
//import Fade from 'react-reveal/Fade';
import contacto from '../assets/static/contacto.jpg';
import log from '../assets/static/gorron.svg';
import '../assets/styles/views/Login.scss';

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
const Login = (props) => {
  //Estado del valor del email en el input
  const [form, setValues] = useState({
    email: '',
    password: '',
  });

  //Funcion que envia el valor del input al estado local
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,

    });
  };
  //submit del form y envia al action creator el valor del input actual y history al dash
  const handeSubmit = async (event) => {
    event.preventDefault();
    props.loginRequest(form);
    const { email, password } = event.target.elements;

    await app
      .auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .then((result) => {
        console.log(result);
        props.history.push('/dashboard');
      })
      .catch((error) => {
        alert(error.message);
      });

  };

  //INICIO DE SESION CON GOOGLE
  const socialLogin = async (provider) => {
    await app
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Particles className='particles' params={particleOPT} />
      <img src={contacto} className='fotoxx' alt='' />
      <div className='login'>
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
              name='password'
              className='prueba'
              type='password'
              placeholder='password'
              onChange={handleInput}
            />
            <button type='submit' className='sub'> Login </button>
          </div>
        </form>
        <button type='button' onClick={() => socialLogin(googleAuthProvider)} className='sub'>
          <i className='fab fa-github' />
          GOOGLE
        </button>
      </div>

    </div>
  );
};
const mapDispatchToProps = {
  loginRequest,
};
export default connect(null, mapDispatchToProps)(Login);
