import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';
import cerrar from '../assets/static/cerrar.svg';
import '../assets/styles/components/Sidebar.scss';
import grafico from '../assets/static/graph.svg';
import teacher from '../assets/static/teacher.svg';
import std from '../assets/static/student.svg';

const Sidebar = ({ isOPen }) => {

  console.log(isOPen);
  return (
    <div className={isOPen ?
      'SideBar' :
      'SideBar_Close'}
    >
      <button type='button' className='OpenButton'>
        <img className='OpenImg' src={cerrar} alt='' />
      </button>
      <div className='SideBar_box'>
        <Zoom>
          <Link to='/dashboard' className='Link'>
            <img className='SideBar_Icon' src={teacher} alt='' />
            <p className='SideBar_P'>Maestros</p>
          </Link>
        </Zoom>
      </div>
      <div className='SideBar_box'>
        <Zoom>
          <img className='SideBar_Icon' src={std} alt='' />
          <p className='SideBar_P'>Alumnos</p>
        </Zoom>

      </div>

      <div className='SideBar_box'>
        <Zoom>
          <Link to='/graficos' className='Link'>
            <img className='SideBar_Icon' src={grafico} alt='' />
            <p className='SideBar_P'>Graficos</p>
          </Link>

        </Zoom>
      </div>

    </div>
  );
};
export default Sidebar;
