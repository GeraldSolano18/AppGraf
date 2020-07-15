import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../redux/actions/LoginOutAction';
import '../assets/styles/components/Header.scss';
import log from '../assets/static/gorroB.svg';
import usericon from '../assets/static/user-icon.png';

const Navbar = (props) => {
  const { user, location } = props;
  //esto guarda true si hay algun valor en el object del store
  const hasUser = Object.keys(user).length > 0;
  const handleLogout = () => {
    props.logoutRequest({});
  };
  return (
    <header className={
      location.pathname === '/dashboard' ?
        'header' :
        'header'
    }
    >

      <div>
        <Link to='/' className='Link'>
          <div className='nnn'>
            <img src={log} alt='' className='gorrob' />
            <p className='let'>AppGraf</p>
          </div>

        </Link>
      </div>

      <div className='Header__menu'>
        <div className='gridxx'>
          <div className='header__menu--profile'>
            {
              hasUser ?
                <img src={gravatar(user.email)} alt={user.email} className=' icon gravatar_icon' /> :
                <img src={usericon} alt='Hola' className='icon' />
            }
          </div>
        </div>
        <div>
          <ul>
            {
              hasUser ? (
                <li className='imp'>
                  <a href='/' onClick={handleLogout}>Cerrar sesion</a>
                </li>
              ) :
                (
                  <div>
                    <li className='imp'>
                      <Link to='/login' className='Link'>
                        Inicio de sesion
                      </Link>
                    </li>
                    <li className='imp'>
                      <Link to='/register' className='Link'>
                        Registrarse
                      </Link>
                    </li>
                  </div>
                )
            }

          </ul>
        </div>

      </div>
    </header>
  );
};
//trae del estado el elemento user que viene de state.user
const mapStateToProps = (state) => {
  return {
    user: state.LoginOut.user,
  };
};
//las acciones que se disparan
const mapDispatchToProps = {
  logoutRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
