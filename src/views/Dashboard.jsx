/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Fade from 'react-reveal/Fade';
// import Posts from '../components/Posts';
import '../assets/styles/views/Dashboard.scss';
import SideBar from '../components/SideBar';
import Teacher from '../components/Teacher';
import Dashh1 from '../components/Dashh1';
//import Estudiante from '../components/Estudiante/Estudiante';

const Dashboard = () => {
  const teachersU = useSelector((store) => store.LoginOut.Profesores);

  const [open, setOpen] = useState(true);
  const clock = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className='pruebaGrid'>
        <div className='sidebar'>
          <SideBar isOPen={open} />
        </div>

        <div className='contenedorhm'>
          <Dashh1 clock={clock} />
        </div>

        {/* <div className='teachers'>
          <Estudiante />
        </div> */}

        <div className='teachers'>
          <Fade>
            <div className='contenedor_cards'>
              {teachersU.map((item) => <Teacher key={item.Id} {...item} />) }
            </div>
          </Fade>
        </div>

        {/* <Posts /> */}
      </div>

    </>
  );
};

export default Dashboard;
