import React from 'react';
import Zoom from 'react-reveal/Zoom';
import '../assets/styles/components/Sidebar.scss';
import grafico from '../assets/static/graph.svg';
import teacher from '../assets/static/teacher.svg';
import std from '../assets/static/student.svg';

const Sidebar = () => {
  return (
    <div className='SideBar'>

      <div className='SideBar_box'>
        <Zoom>
          <img className='SideBar_Icon' src={teacher} alt='' />
          <p className='SideBar_P'>Maestros</p>
        </Zoom>
      </div>

      <div className='SideBar_box'>
        <Zoom>
          <img className='SideBar_Icon' src={std} alt='' />
          <p className='SideBar_P'>Perfil</p>
        </Zoom>

      </div>

      <div className='SideBar_box'>
        <Zoom>
          <img className='SideBar_Icon' src={grafico} alt='' />
          <p className='SideBar_P'>Graficos</p>
        </Zoom>
      </div>

    </div>
  );
};
export default Sidebar;
