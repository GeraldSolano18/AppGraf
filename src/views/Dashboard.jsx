/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import SideBar from '../components/SideBar';
import Car from "./Car";
import Teacher from '../components/Teacher';
import '../assets/styles/views/Dashboard.scss';
import log from '../assets/static/gorron.svg';

const Dashboard = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/initalState')
      .then((response) => response.json())
      .then((data) => setTeachers(data));
  }, []);
  console.log(teachers);
  return (

    <div>
      <div className='pruebaGrid'>

        <div className='sidebar'>
          <SideBar />
        </div>

        {/* <div className='contenedormenu'>
          <DashMenu />
        </div> */}

        <div className='contenedorhm'>
          <div className='contacto'>
            <img src={log} alt='' className='logo1' />
            <p className='letras'>Maestros</p>
          </div>
          <div className='contacto'>
            <p className='evalua'>¡Deja comentarios sobre tus maestros y evalua su desempeño! </p>
          </div>

          <Fade>
            <Car>
              {teachers.map((item) => <Teacher key={item.id} {...item} />) }
            </Car>

          </Fade>

        </div>
      </div>
    </div>
  );
};
export default Dashboard;
