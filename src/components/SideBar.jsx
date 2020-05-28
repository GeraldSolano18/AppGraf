import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Sidebar.scss';
import grafico from '../assets/static/graph.svg';
import teacher from '../assets/static/teacher.svg';
import std from '../assets/static/student.svg';

const Sidebar = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  return (
    <div className='SideBar'>
      {hasUser && user.email === 'profe' ?
        null : (
          <div className='SideBar_box'>
            <Zoom>
              <Link to='/dashboard' className='Link'>
                <img className='SideBar_Icon' src={teacher} alt='' />
                <p className='SideBar_P'>Maestros</p>
              </Link>
            </Zoom>
          </div>
        )}
      {hasUser && user.email === 'profe' ? (
        <div className='SideBar_box'>
          <Zoom>
            <img className='SideBar_Icon' src={std} alt='' />
            <p className='SideBar_P'>Alumnos</p>
          </Zoom>

        </div>
      ) : null}

      {hasUser && user.email === 'profe' ?
        null : (
          <div className='SideBar_box'>
            <Zoom>
              <Link to='/graficos' className='Link'>
                <img className='SideBar_Icon' src={grafico} alt='' />
                <p className='SideBar_P'>Graficos</p>
              </Link>

            </Zoom>
          </div>
        )}

    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.LoginOut.user,
  };
};
export default connect(mapStateToProps, null)(Sidebar);
